import React, { useState } from "react";
import Panel from "./Panel";

import {
  GoChevronDown,
  GoChevronLeft,
} from "react-icons/go";

function ExpandablePanel({
  header,
  children,
  handleFetchAlbums,
  userId,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = async () => {
    setExpanded((expanded) => !expanded);
    if (expanded) return;
    if (!handleFetchAlbums) return;
    await handleFetchAlbums(userId);
  };

  return (
    <div className='mb-2 border rounded w-full'>
      <div className='flex p-2 justify-between items-center'>
        <div className='flex flex-row items-center justify-between w-full'>
          {header}
        </div>
        <div
          className='cursor-pointer'
          onClick={handleExpand}
        >
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && (
        <div className='p-2 border-t'>{children}</div>
      )}
    </div>
  );
}

export default ExpandablePanel;
