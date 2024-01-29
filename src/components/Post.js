import React, { forwardRef } from "react";
import { Avatar } from '@mui/material'
import InputOption from "./InputOption";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import "../style/Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ShareIcon} title="Comment" color="gray" />
        <InputOption Icon={ChatIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;