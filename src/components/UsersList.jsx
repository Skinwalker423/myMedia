import React, { useEffect } from "react";
import Panel from "./Panel";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import Skeleton from "./skeleton";
import { fetchUsers, addUser } from "../store";
import useThunk from "../hooks/useThunk";

const UsersList = () => {
  const { data } = useSelector((state) => state.users);

  const [
    startFetchingUsers,
    isLoadingUsers,
    isLoadingUsersError,
  ] = useThunk(fetchUsers);
  const [
    startCreateUser,
    isCreatingUser,
    isCreatingUserError,
  ] = useThunk(addUser);

  useEffect(() => {
    startFetchingUsers();
  }, []);

  const handleAddUser = async () => {
    startCreateUser();
  };

  if (isLoadingUsers)
    return <Skeleton className={"h-10 w-full"} times={3} />;

  if (isLoadingUsersError) {
    return <div>Error...</div>;
  }

  const renderedList = data.map((user) => {
    return (
      <Panel
        key={user.id}
        className='w-1/2 flex justify-between items-center'
      >
        <div className='flex items-center justify-center gap-2'>
          <TiDelete />
          {user.name}
        </div>
        <BsCaretDown />
      </Panel>
    );
  });

  return (
    <div className='flex flex-col gap-3 w-full justify-center items-center'>
      <div className='w-full flex justify-between items-center my-5'>
        <span className='font-bold'>List of Users</span>{" "}
        <Button
          className='min-w-2xl'
          onClick={handleAddUser}
          primary
          isLoading={isCreatingUser}
        >
          {isCreatingUser ? "Loading..." : "+Add User"}
        </Button>
      </div>
      {renderedList}
      {isCreatingUserError && "Error creating user"}
    </div>
  );
};

export default UsersList;
