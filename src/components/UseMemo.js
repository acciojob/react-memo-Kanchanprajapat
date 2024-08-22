import React, { useMemo } from "react";

function UseMemoComponent({ tasks }) {
  const longTasks = useMemo(() => {
    return tasks.filter((task) => task.length > 5);
  }, [tasks]);

  return (
    <div>
      <h2>Long Tasks (using useMemo):</h2>
      <ul>
        {longTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoComponent;
