import { GetServerSideProps, NextPage } from "next";
import React from "react";

interface Task {
  id: string;
  title: string;
  image: string;
}

interface TaskDetailsProps {
  task: Task | null;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ task }) => {
  // If there's no task, I display a message indicating it's not found.
  if (!task) {
    return <div>Task not found!</div>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      {/* <img
        src={task.image}
        alt={task.title}
        style={{ maxWidth: "100%" }}
      />{" "} */}
    </div>
  );
};

// I define getServerSideProps to fetch task details server-side for each request.
export const getServerSideProps: GetServerSideProps = async (context) => {
  // I extract the taskId from the URL parameters.
  const taskId = context.params?.taskId;

  try {
    // I attempt to fetch the task details from the API.
    const res = await fetch(
      `https://dev-api.almashhad.tv/api/videos/detailsElastic/${taskId}`
    );
    if (!res.ok) {
      // If the response isn't okay, I throw an error.
      throw new Error(`Failed to fetch task details for ID ${taskId}`);
    }

    // I parse the JSON response into data.
    const data = await res.json();

    // I map the API response to the Task interface.
    const task: Task = {
      id: data.id,
      title: data.title,
      image: data.image,
    };

    // I return the fetched task as props to the component.
    return {
      props: {
        task,
      },
    };
  } catch (error) {
    console.error(error);

    // If an error occurs, I return null for the task.
    return {
      props: {
        task: null,
      },
    };
  }
};

export default TaskDetails;
