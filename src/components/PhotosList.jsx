import React from "react";
import {
  useGetPhotosByAlbumIdQuery,
  useAddPhotoMutation,
} from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";
import { GoTrash } from "react-icons/go";
import { faker } from "@faker-js/faker";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
  const { data, isLoading, error, isFetching } =
    useGetPhotosByAlbumIdQuery(album);

  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    console.log("adding photo");
    const randomImage = faker.image.url();
    const photo = {
      albumId: album.id,
      url: randomImage,
    };
    addPhoto(photo);
  };

  const renderedList = data?.map((photo) => {
    return <PhotosListItem key={photo.id} photo={photo} />;
  });

  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between items-center mb-5'>
        <div>Photos for {album.title}</div>
        <Button
          isLoading={results.isLoading}
          className='min-w-2xl'
          onClick={handleAddPhoto}
        >
          Add Photo
        </Button>
      </div>
      {isFetching ? (
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
