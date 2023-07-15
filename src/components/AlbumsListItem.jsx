import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumByIdMutation } from "../store";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] =
    useRemoveAlbumByIdMutation();

  const handleRemoveAlbum = (album) => {
    console.log("removing album id", album.id);
    removeAlbum(album);
  };
  const header = (
    <div className='flex justify-between items-center gap-3'>
      <Button
        isLoading={results.isLoading}
        onClick={() => handleRemoveAlbum(album)}
      >
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
