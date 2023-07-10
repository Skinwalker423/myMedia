import React from "react";
import Panel from "./Panel";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import { useSelector } from "react-redux";

const UsersList = () => {
  const { data } = useSelector((state) => state.users);
  console.log(data);

  if (!data) return;

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
      {renderedList}
    </div>
  );
};

export default UsersList;
