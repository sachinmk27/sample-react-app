import React from "react";

export default function StoryDetail({ title, score, onIncrement, onDecrement }) {
    console.log('rendering');
  return (
    <>
      <p>{title}</p>
      <p>{score}</p>
      <button onClick={onIncrement} className="btn btn-warning">Upvote</button>
      <button onClick={onDecrement} className="btn btn-danger">Downvote</button>
    </>
  );
}
