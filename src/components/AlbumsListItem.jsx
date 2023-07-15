import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

const AlbumsListItem = ({ album }) => {
  const handleRemoveAlbum = (albumId) => {
    console.log("removing album id", albumId);
  };
  const header = (
    <div className='flex justify-between items-center gap-3'>
      <Button onClick={handleRemoveAlbum}>
        <GoTrash />
      </Button>
      <div>{album.title}</div>
    </div>
  );
  return (
    <ExpandablePanel header={header}>
      List of photos
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
