import Panel from "./Panel";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import useThunk from "../hooks/useThunk";
import { deleteUser, fetchAlbums } from "../store";
import { GoSync } from "react-icons/go";
import Button from "./Button";
import { useSelector } from "react-redux";
import Skeleton from "./skeleton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ExpandablePanel from "./ExpandablePanel";
import axios from "axios";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
  const { id, name } = user;
  const dipatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [userAlbums, setUserAlbums] = useState([]);

  const handleFetchAlbums = async (userId) => {
    const response = await axios.get(
      `http://localhost:3004/albums?userId=${userId}`
    );
    setUserAlbums(response.data);
  };

  const [startDeleteUser, isDeleting, isDeletingError] =
    useThunk(deleteUser);

  const [
    startFetchingAlbums,
    isFetchingAlbums,
    isFetchingAlbumsError,
  ] = useThunk(fetchAlbums);

  const handleDelete = (userId) => {
    console.log("deleting user id", userId);
    startDeleteUser(userId);
  };
  const handleShowAlbums = (userId) => {
    console.log("showing album for user id", userId);
    if (isOpen) return;
    startFetchingAlbums(userId);
  };

  if (isFetchingAlbumsError) {
    return <div>Error...</div>;
  }

  const header = (
    <>
      <div className='flex items-center justify-center gap-5'>
        <Button
          isLoading={isDeleting}
          onClick={() => handleDelete(id)}
        >
          <TiDelete className='text-2xl text-red-600' />
        </Button>
        {isDeletingError && <div>Error deleting user</div>}
        {name}
      </div>
    </>
  );

  return (
    <ExpandablePanel
      userId={id}
      handleFetchAlbums={handleFetchAlbums}
      header={header}
    >
      <AlbumsList user={user} albumsList={userAlbums} />
    </ExpandablePanel>
  );
};

export default UserListItem;
