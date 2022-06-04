import {useState} from "react";
import AllPosts from "../../Components/posts/all-posts";

const AllPostPage = () => {
  const [posts, setPosts] = useState([
    {
      slug: "coding-event",
      title: "Coding Event",
      image: "coding-event.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, non.",
      date: "2022-02-20",
    },
    {
      slug: "getting-started-bale",
      title: "this is test 2",
      image: "Mypic.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur gffdgfgj kiuhgdsxas sds adipisicing elit. Itaque, non.",
      date: "2021-08-16",
    },
    {
      slug: "getting-started-omran",
      title: "this is test 3",
      image: "Mypic.jpg",
      excerpt:
        "Lorem ipsum dolor pourb ofgdie kk sit amet consectetur adipisicing elit. Itaque, non.",
      date: "2022-09-10",
    },
  ]);
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
};

export default AllPostPage;
