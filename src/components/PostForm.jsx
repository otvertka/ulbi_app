import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="название"
      />
      {/* Неуправляемый\ неконтролируемый */}
      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="описание поста"
      />
      {/* <input ref={bodyInputRef} type="text" /> */}
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
