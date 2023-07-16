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
    <div className='relative flex flex-col justify-between items-center border shadow-sm w-72 h-72 overflow-hidden'>
      <Button
        className='absolute flex justify-center items-center inset-0 bg-gray-200 opacity-0 hover:opacity-50 z-10 cursor-pointer'
        isLoading={results.isLoading}
        onClick={handleDeletePhoto}
      >
        <GoTrash className='z-10 text-8xl' />
      </Button>

      <img
        className='w-full h-full object-cover bg-red-200 hover:scale-110 hover:transition-transform'
        src={photo.url}
        alt={`photo ${photo.id}`}
      />
    </div>
  );
};

export default PhotosListItem;
