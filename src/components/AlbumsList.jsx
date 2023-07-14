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

const AlbumsList = ({ user }) => {
  const { data, error, isLoading, refetch } =
    useGetAlbumsByUserQuery(user.id);

  const [addAlbum, results] = useAddAlbumToUserMutation();

  const handleAddAlbum = () => {
    addAlbum(user.id);
    refetch();
  };

  console.log("data from new rtk query", data);

  const renderedList = data?.map((album) => {
    const header = (
      <div className='flex justify-between items-center'>
        <div>{album.title}</div>
      </div>
    );
    return (
      <ExpandablePanel header={header} key={album.id}>
        List of photos
      </ExpandablePanel>
    );
  });

  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between items-center mb-5'>
        <div>Albums for {user.name}</div>
        <Button onClick={handleAddAlbum}>Add Album</Button>
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
