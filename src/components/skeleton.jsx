import classNames from "classnames";
import React from "react";

const Skeleton = ({ times = 1, className }) => {
  const boxes = Array(times)
    .fill(0)
    .map((ele, index) => {
      const outerClassname = classNames(
        "relative overflow-hidden bg-gray-200 rounded mb-2.5",
        className,
        {}
      );
      const innerClassname = classNames(
        "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200",
        {}
      );

      return (
        <div key={index} className={outerClassname}>
          <div className={innerClassname}></div>
        </div>
      );
    });
  return boxes;
};

export default Skeleton;