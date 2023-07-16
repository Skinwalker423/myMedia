import React from "react";
import { useGetPhotosByAlbumIdQuery } from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";
import { GoTrash } from "react-icons/go";

const PhotosList = ({ album }) => {
  const { data, isLoading, error } =
    useGetPhotosByAlbumIdQuery(album);

  const handleAddPhoto = () => {
    console.log("adding photo");
  };
  const handleDeletePhoto = () => {
    console.log("deleting photo");
  };

  const renderedList = data?.map((photo) => {
    return (
      <div
        key={photo.id}
        className='flex flex-col justify-between items-center border py-2 px-3 shadow-sm'
      >
        <div className='w-full flex justify-end items-center'>
          <Button onClick={handleDeletePhoto}>
            <GoTrash />
          </Button>
        </div>
        <img
          className='min-w-2xl'
          width={500}
          height={500}
          src={photo.url}
          alt={`photo ${photo.id} in ${album.title}`}
        />
      </div>
    );
  });

  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between items-center mb-5'>
        <div>Photos for {album.title}</div>
        <Button
          className='min-w-2xl'
          onClick={handleAddPhoto}
        >
          Add Photo
        </Button>
      </div>
      {isLoading ? (
        <Skeleton className={"h-10 w-full"} times={2} />
      ) : (
        <div className='flex flex-wrap w-full gap-5'>
          {renderedList}
        </div>
      )}

      {error && "Problem fetching albums"}
    </div>
  );
};

export default PhotosList;
