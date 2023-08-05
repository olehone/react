import React, { useState } from "react";
import Comment from "./Components/Comment";
import Likes from "./Components/Likes";
import "./Styles/App.css";
import PostList from "./Components/PostList";
function App() {
  const [likes, setLikes] = useState(0);
  const [posts, setPosts] = useState([
    { id: 1, title: "HTML", description: "Yee, i`m a html-programmer" },
    {
      id: 2,
      title: ".Net",
      description:
        "Yee, it`s something about internet like .com .gov .org and more, i know it",
    },
    {
      id: 3,
      title: "React",
      description: "I love rockets, SpaseX, Nasa, cool",
    },
    {
      id: 4,
      title: "Some text",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa nemo nostrum ullam optio, libero exercitationem odio eveniet sunt unde vitae corporis similique quae temporibus laboriosam recusandae accusantium sint inventore! Aliquam, quibusdam quos explicabo, quo veritatis maxime laborum ab ipsa reiciendis commodi expedita. Quod et animi asperiores eius laboriosam laborum officia, aspernatur non illo quam? Incidunt neque aliquid iste dicta illo natus ducimus voluptate provident cupiditate impedit fugit nihil, dolorum, ex nobis esse consequuntur, nemo animi alias maxime laudantium voluptatum temporibus ratione voluptatem! Consequuntur, perferendis inventore voluptatum, numquam voluptate ut deleniti impedit quasi, velit illum nam alias! Aut, rem impedit! Suscipit provident aliquam dicta harum quo enim, accusamus officia alias ea, minus dolorum aspernatur aut reiciendis, commodi numquam distinctio molestias blanditiis cumque quaerat esse totam. Magni tenetur hic omnis ab provident assumenda laboriosam eius expedita nemo, quae accusamus dolore labore necessitatibus iste eveniet reprehenderit possimus quis maiores aspernatur illum impedit nisi? At blanditiis, animi tempora aliquid enim facilis saepe pariatur consectetur accusantium aut fuga maiores veritatis maxime culpa! Ab accusamus unde tempora quibusdam recusandae nihil voluptatem libero fugiat saepe dolor culpa quo, provident nostrum similique aperiam neque possimus voluptates eveniet amet vero fugit adipisci nam omnis sapiente. Porro voluptates accusamus, minima molestiae voluptatibus dolore aperiam culpa temporibus, minus animi quisquam earum nostrum accusantium id tempora vero sapiente possimus iusto placeat nulla quidem est totam! Unde eum eligendi dicta praesentium nemo, excepturi voluptate cupiditate dolores. Enim dolorum officiis suscipit, consequatur aspernatur autem. Ratione dicta ut illum odit necessitatibus provident, optio, architecto reprehenderit vel qui veritatis eligendi. Eaque, reiciendis totam nostrum facere porro, voluptate harum aliquid quod illo deleniti voluptatum nisi doloremque esse ullam eveniet labore recusandae et eos! Quod nam minus minima praesentium laboriosam, architecto ab enim explicabo nisi aperiam in facilis voluptate natus, dolor eveniet magnam assumenda vero harum deleniti recusandae rem quo veritatis. Nemo quod, totam ex illo, voluptates voluptate sequi asperiores ipsam voluptas itaque placeat eum earum, nulla quis! Natus asperiores aliquam mollitia molestias vero, beatae quos. Sed nam, ea nemo quas modi adipisci, quia explicabo pariatur laudantium delectus atque nobis, unde eligendi? Atque, dolore delectus aut blanditiis placeat expedita quas cupiditate praesentium possimus similique rem laudantium dolores, architecto assumenda dolorum et incidunt sequi deserunt ab beatae tenetur. Repellendus blanditiis, sint saepe at repellat similique aspernatur soluta. Libero dicta ipsam, qui dolorem quis vero, nihil excepturi aperiam sequi aliquam explicabo temporibus eaque quam cumque saepe debitis eum quasi?",
    },
    {
      id: 5,
      title: "React",
      description: "I love rockets, SpaseX, Nasa, cool",
    },
  ]);
  return (
    <div className="App">
      <h1>Wellcome to forum!</h1>
      <PostList posts={posts} />
      {/* <Likes />
      <Comment />
      <div className="post">
        <div className="post__content">
          <strong> Привітики</strong>
          <div>Починаємо навчання</div>
        </div>
      </div>
      <div className="post__btns"> <button>Видалити</button></div> */}
    </div>
  );
}

export default App;
