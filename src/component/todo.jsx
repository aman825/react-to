import React, { Component } from 'react';
import TaskList from './TaskList';
import InputContainer from './InputContainer';

export default class Todo extends Component {
  state = {
    taskList: []
  };
  deleteTask = (id) => {
    // current - rest of the task 
    let filteredtasks = this.state.taskList.filter(function (task) { return task.id !== id; })
    this.setState({
        taskList: filteredtasks
    });
}
  addTask = (currTask) => {
    let tempArr = [... this.state.taskList, {task : currTask, id: this.state.taskList.length}]
    this.setState({
      taskList: tempArr
    })
  }

  render(){
    return(
      <div>
        <InputContainer addTask={this.addTask}></InputContainer>
        <TaskList list={this.state.taskList} deleteTask={this.deleteTask}></TaskList>
      </div>
    )
  }
}
