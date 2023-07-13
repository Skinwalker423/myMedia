import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import { useGetAlbumsByUserQuery } from "../store/apis/albumsApi";

const AlbumsList = ({ user, albumsList }) => {
  const { data, error, isLoading } =
    useGetAlbumsByUserQuery(user.id);

  console.log("data from new rtk query", data);

  const renderedList = data?.map((album) => {
    return (
      <div key={album.id} className='flex py-3'>
        {album.title}
      </div>
    );
  });

  return (
    <div className='flex flex-col p-3'>
      <div className='flex justify-between items-center'>
        <div>{user.name}</div>
        <Button>Add Album</Button>
      </div>
      {isLoading ? "loading..." : renderedList}
      {error && "Problem fetching albums"}
    </div>
  );
};

export default AlbumsList;
