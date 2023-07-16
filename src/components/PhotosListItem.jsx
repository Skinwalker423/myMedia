import React from "react";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
  const [removeAlbum, results] = useRemovePhotoMutation();

  const handleDeletePhoto = () => {
    console.log("deleting photo");
    removeAlbum(photo);
  };

  return (
    <div className='relative flex flex-col justify-between items-center border shadow-sm w-72 h-72'>
      <div className='absolute top-0 right-0'>
        <Button
          isLoading={results.isLoading}
          onClick={handleDeletePhoto}
        >
          <GoTrash />
        </Button>
      </div>
      <img
        className='w-full h-full object-fill bg-red-200'
        src={photo.url}
        alt={`photo ${photo.id}`}
      />
    </div>
  );
};

export default PhotosListItem;
