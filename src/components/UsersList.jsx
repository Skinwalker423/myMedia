import React, { useEffect } from "react";
import Panel from "./Panel";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./skeleton";
import { fetchUsers, addUser } from "../store";

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleAddUser = async () => {
    dispatch(addUser());
  };

  if (isLoading && !data.length)
    return <Skeleton className={"h-10 w-full"} times={3} />;

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
      <div className='w-full flex justify-between items-center my-5 '>
        <span className='font-bold'>List of Users</span>{" "}
        <Button
          onClick={handleAddUser}
          primary
          className='hover:bg-blue-600'
        >
          +Add User
        </Button>
      </div>
      {renderedList}
      {isLoading && (
        <Skeleton className={"h-10 w-full"} times={1} />
      )}
    </div>
  );
};

export default UsersList;
