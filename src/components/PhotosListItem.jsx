import React from "react";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

const PhotosListItem = ({ photo }) => {
  const handleDeletePhoto = () => {
    console.log("deleting photo");
  };

  return (
    <div className='flex flex-col justify-between items-center border py-2 px-3 shadow-sm'>
      <div className='w-full flex justify-end items-center'>
        <Button onClick={handleDeletePhoto}>
          <GoTrash />
        </Button>
      </div>
      <img
        className='min-w-2xl'
        width={300}
        height={300}
        src={photo.url}
        alt={`photo ${photo.id}`}
      />
    </div>
  );
};

export default PhotosListItem;
