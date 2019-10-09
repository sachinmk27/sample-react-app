import React from "react";

export default function Story({ title, url, score, item_id, onSelect }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <p onClick={() => onSelect(item_id)}>{title}</p>
        <button type="button" className="btn btn-primary">
          Score <span className="badge badge-light">{score}</span>
          <span className="sr-only">Score</span>
        </button>
      </div>
    </div>
  );
}
