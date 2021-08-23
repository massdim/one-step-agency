import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <div className="w-full h-100 flex justify-center items-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
