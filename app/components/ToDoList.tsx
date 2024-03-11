import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ToDoListProps {
  tasks: ITask[]; // This specifies that I expect an array of tasks following the ITask structure.
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
