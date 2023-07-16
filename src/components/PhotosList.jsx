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

  const renderedList = data?.map((photo) => {
    return (
      <div
        key={photo.id}
        className='flex flex-col justify-center items-center'
      >
        <img
          src={photo.url}
          alt={`photo ${photo.id} in ${album.title}`}
        />
        <Button>Delete</Button>
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
          Add Album
        </Button>
      </div>
      {isLoading ? (
        <Skeleton className={"h-10 w-full"} times={2} />
      ) : (
        renderedList
      )}

      {error && "Problem fetching albums"}
    </div>
  );
};

export default PhotosList;
