import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const AlbumsList = ({ user, albumsList }) => {
  const renderedList = albumsList.map((album) => {
    return (
      <div key={album.id} className='flex py-3'>
        {album.title}
      </div>
    );
  });

  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between items-center'>
        <div>{user.name}</div>
        <Button>Add Album</Button>
      </div>
      {renderedList}
    </div>
  );
};

export default AlbumsList;
