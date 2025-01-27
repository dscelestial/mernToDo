/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [tab, setTab] = useState(1);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(null);

  const handleClick = (tabNumber) => {
    setTab(tabNumber);
  };

  const handleTask = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/addTask", { task });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/read-tasks").then(res => {
      setTodos(res.data);
    })
  }, []);

  return (
    <div className="bg-gray-50 w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center font-bold text-3xl mb-6">
          <h2>ToDo List</h2>
        </div>

        <div className="flex justify-between mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="bg-gray-100 p-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter task"
          />
          <button
            onClick={handleTask}
            className="ml-4 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            ADD
          </button>
        </div>

        <div className="flex justify-evenly mb-6">
          <p
            className={`${
              tab === 1 ? "text-blue-600 underline" : "text-gray-600"
            } cursor-pointer hover:text-blue-600`}
            onClick={() => handleClick(1)}
          >
            All
          </p>
          <p
            className={`${
              tab === 2 ? "text-blue-600 underline" : "text-gray-600"
            } cursor-pointer hover:text-blue-600`}
            onClick={() => handleClick(2)}
          >
            Active
          </p>
          <p
            className={`${
              tab === 3 ? "text-blue-600 underline" : "text-gray-600"
            } cursor-pointer hover:text-blue-600`}
            onClick={() => handleClick(3)}
          >
            Completed
          </p>
        </div>

        {
          todos.map(todo => (
              <div className="space-y-4">
                <div className="flex justify-between bg-gray-50 p-4 rounded-md shadow-sm mb-2">
                  <div>
                    <p className="text-lg font-semibold">{todo.task}</p>
                  <p className="text-sm text-gray-500">{todo.createdAt}</p>
                    <p className="text-sm text-green-500">Status: Active</p>
                  </div>
                  <div className="flex flex-col items-start space-y-2">
                    <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 cursor-pointer">
                      Delete
                    </button>
                    <button className="text-green-600 hover:text-green-800 cursor-pointer">
                      Completed
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        }

        
        
       
        
      </div>
    </div>
  );
};

export default Home;
