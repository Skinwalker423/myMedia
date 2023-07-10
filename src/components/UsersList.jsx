import React from "react";
import Panel from "./Panel";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className='flex flex-col gap-3 w-full'>
      <Panel className='w-96 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-2'>
          <TiDelete />
          Username
        </div>
        <BsCaretDown />
      </Panel>
      <Panel className='w-96 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-2'>
          <TiDelete />
          Username
        </div>
        <BsCaretDown />
      </Panel>
      <Panel className='w-96 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-2'>
          <TiDelete />
          Username
        </div>
        <BsCaretDown />
      </Panel>
      <Panel className='w-96 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-2'>
          <TiDelete />
          Username
        </div>
        <BsCaretDown />
      </Panel>
      <Panel className='w-96 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-2'>
          <TiDelete />
          Username
        </div>
        <BsCaretDown />
      </Panel>
    </div>
  );
};

export default UsersList;
