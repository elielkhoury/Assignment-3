import { getAllToDos } from "@/api";
import AddTasks from "./components/AddTasks";
import ToDoList from "./components/ToDoList";

// I define the Home component. It's an asynchronous function because I'll be fetching tasks when it's rendered.
export default async function Home() {
  // Here, I call getAllToDos to fetch the tasks. Since it's an async call, I await its result before proceeding.
  const tasks = await getAllToDos();
  // For debugging purposes, I log the fetched tasks to the console. This is helpful during development to ensure data is being fetched correctly.
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Task Manager</h1>

        <AddTasks />
      </div>

      <ToDoList tasks={tasks} />
    </main>
  );
}
