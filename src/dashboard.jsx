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
    if (item.status === "not started") {
      let auxTasks = [...this.state.tasks]; // create the copy of state array
      auxTasks[index].status = "on going"; //new value
      this.setState({
        tasks: auxTasks
      });
    } // if
  };

  handleOnSubmit = e => {
    e.preventDefault();
    alert("On submit");
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
            onClick={
              item.status !== "done"
                ? e => this.handleClick(item, index, e)
                : null
            }
          >
            {item.description} {item.estimation}
          </div>
          // </a>
        ))}
        <div align="left">
          <form name="myForm" onSubmit={this.handleOnSubmit}>
            New task: <input name="description" />
            <select name="status">
              <option value="not started">Not Started</option>
              <option value="on going">On Going</option>
              <option value="done">Done</option>
            </select>
            <input type="submit" value="Add new task" />
          </form>
        </div>
      </div>
    );
  };
}

export default Dashboard;
