import React from "react";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsListItem = ({ album }) => {
  console.log(album);
  const header = (
    <div className='flex justify-between items-center'>
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
