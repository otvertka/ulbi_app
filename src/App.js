import React, { useRef, useState } from "react";
import classes from "./styles/App.css";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    console.log(newPost);
  };

  return (
    <div className="App">
      <form>
        {/* управляемый компонент */}
        <MyInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="название"
        />
        {/* Неуправляемый\ неконтролируемый */}
        <MyInput
          value={body}
          onChange={(event) => setBody(event.target.value)}
          type="text"
          placeholder="описание поста"
        />
        {/* <input ref={bodyInputRef} type="text" /> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
