import React from "react";

const ReactMemoComponent = React.memo(({ tasks }) => {
  console.log("ReactMemoComponent re-rendered");

  return (
    <div>
      <h2>All Tasks (using React.memo):</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;
