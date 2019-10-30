import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.tasks = props.tasks;
  }
  getColor = item => {
    switch (item.status) {
      case "done":
        return "green";
      case "on going":
        return "red";

      default:
        return "black";
    }
  };

  handleClick = (item, e) => {
    e.preventDefault();
    alert(item.description);
  };

  render = () => {
    return (
      <div>
        {this.tasks.map(item => (
          // <a href="blank" onClick={e => handleClick(item, e)}>
          <div
            style={{ color: this.getColor(item) }}
            onClick={e => this.handleClick(item, e)}
          >
            {item.description} {item.estimation}
          </div>
          // </a>
        ))}
      </div>
    );
  };
}

export default Dashboard;
