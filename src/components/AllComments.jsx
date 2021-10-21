import React, { useState } from "react";
import Comment from "./Comment";
import commentData from "./CommentData";

const AllComments = () => {
  let [data, setData] = useState(commentData);
  return (
    <div>
      <Comment {...data} />
    </div>
  );
};

export default AllComments;
