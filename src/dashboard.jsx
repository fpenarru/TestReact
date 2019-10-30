import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: props.tasks
    };
  }
  getColor = item => {
    switch (item.status) {
      case "done":
        return "green";
      case "on going":
        return "red";
      case "not started":
        return "blue";

      default:
        return "black";
    }
  };

  handleClick = (item, index, e) => {
    e.preventDefault();
    if (item.status === "on going") {
      let auxTasks = [...this.state.tasks]; // create the copy of state array
      auxTasks[index].status = "done"; //new value
      this.setState({
        tasks: auxTasks
      });
    } // if
  };

  render = () => {
    const tasks = this.state.tasks;
    return (
      <div>
        {tasks.map((item, index) => (
          // <a href="blank" onClick={e => handleClick(item, e)}>
          <div
            key={index}
            style={{ color: this.getColor(item), cursor: "pointer" }}
            onClick={e => this.handleClick(item, index, e)}
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
