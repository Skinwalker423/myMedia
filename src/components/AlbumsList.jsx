import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import {
  useGetAlbumsByUserQuery,
  useAddAlbumToUserMutation,
} from "../store";
import { faker } from "@faker-js/faker";
import Skeleton from "./skeleton";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } =
    useGetAlbumsByUserQuery(user.id);

  const [addAlbum, results] = useAddAlbumToUserMutation();

  const handleAddAlbum = () => {
    const randomTitle = faker.company.catchPhrase();
    const album = {
      title: randomTitle,
      userId: user.id,
    };
    addAlbum(album);
  };

  console.log("data from new rtk query", data);

  const renderedList = data?.map((album) => {
    return <AlbumsListItem key={album.id} album={album} />;
  });

  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between items-center mb-5'>
        <div>Albums for {user.name}</div>
        <Button
          className='min-w-2xl'
          isLoading={results.isLoading}
          onClick={handleAddAlbum}
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

export default AlbumsList;
