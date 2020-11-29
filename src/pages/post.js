import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { getFirebase } from "../firebase";

const Post = ({ match }) => {
  const [count,setCount]=useState(0);
  
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
const [currentPost, setCurrentPost] = useState();
if (loading && !currentPost) {
  getFirebase()
    .database()
    .ref()
    .child(`/posts/${slug}`)
    .once("value")
    .then(snapshot => {
      if (snapshot.val()) {
        setCurrentPost(snapshot.val());
      }
      setLoading(false);
    });
}
if (loading) 
{
  return <h1>Loading...</h1>;
}
  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <>
    <img src={currentPost.coverImage} alt={currentPost.coverImageAlt} height="400" width="800"></img>
    <h1>{currentPost.title}</h1>
    <em>{currentPost.datePretty}</em>
    <p> By: <em>{currentPost.author}</em></p>
    <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
    <button onClick={()=> setCount(count+1)}>❤Likes: {count}</button>
    </>
);
};

export default Post;
