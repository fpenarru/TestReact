import React from "react";

const Dashboard = props => {
  const tasks = props.tasks;
  const getColor = item => {
    switch (item.status) {
      case "done":
        return "green";
      case "on going":
        return "red";

      default:
        return "black";
    }
  };

  const handleClick = (item, e) => {
    e.preventDefault();
    alert(item.description);
  };

  return (
    <div>
      {tasks.map(item => (
        <div style={{ color: getColor(item) }} onClick={handleClick}>
          item.description item.estimation
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
