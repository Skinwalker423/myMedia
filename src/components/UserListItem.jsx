import Panel from "./Panel";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import useThunk from "../hooks/useThunk";
import { deleteUser, fetchAlbums } from "../store";
import { GoSync } from "react-icons/go";
import Button from "./Button";
import { useSelector } from "react-redux";
import Skeleton from "./skeleton";

const UserListItem = ({ user }) => {
  const { id, name } = user;

  const albums = useSelector((state) => state.albums);
  console.log(albums);

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
    startFetchingAlbums(userId);
  };

  let content;

  if (isFetchingAlbumsError) {
    content = <div>Error...</div>;
  } else {
    content = albums.data
      .filter((album) => album.userId === id)
      .map((album) => {
        return (
          <div key={album.id} className='flex'>
            {album.title}
          </div>
        );
      });
  }

  return (
    <Panel className='w-1/2 flex flex-col justify-between items-center gap-3'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center justify-center gap-5'>
          <Button
            isLoading={isDeleting}
            onClick={() => handleDelete(id)}
          >
            <TiDelete className='text-2xl text-red-600' />
          </Button>
          {isDeletingError && (
            <div>Error deleting user</div>
          )}
          {name}
        </div>
        <Button
          isLoading={isFetchingAlbums}
          onClick={() => handleShowAlbums(id)}
        >
          <BsCaretDown />
        </Button>
      </div>
      {content?.length > 0 && <Panel>{content}</Panel>}
    </Panel>
  );
};

export default UserListItem;
