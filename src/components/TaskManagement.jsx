import React, { useState, useEffect } from 'react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/all_tasks_user/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const tasksByState = {
    'pending': [],
    'in progress': [],
    'done': []
  };

  tasks.forEach(task => {
    //Handle potential missing state
    const state = task.state || 'pending'; // Default to 'pending' if state is missing
    tasksByState[state].push(task);
  });

  const DropDown = () => (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
          Options
        </button>
      </div>

      {/* Dropdown menu */}
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
        </div>
      </div>
    </div>
  );


  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Error loading tasks: {error.message}</p>;
  }

  const TaskCard = ({ task }) => {
    const deadline = new Date(task.task_id.task_deadline);
    const formattedDeadline = deadline.toLocaleDateString() + ' ' + deadline.toLocaleTimeString();

    return (
      <div className='bg-white rounded-md border-gray-200 gap-5 py-2 px-2'>
        <div className='flex flex-col gap-2'>
          <div className='p-4'>
            <p className='text-lg text-gray-700 font-urbanist font-semibold'>{task.task_id.task_name}</p>
            <p className='text-lg text-gray-700 font-urbanist font-semibold'>Type: <span className='border-2 p-1 text-gray-300'>{task.task_id.task_type}</span></p>
            <p className='text-lg text-gray-700 font-urbanist font-semibold'>Description: <span className='font-normal'>{task.task_id.task_description}</span></p>
            <p className='font-urbanist font-semibold'>Deadline: {formattedDeadline}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='w-[75vw]'>
        <div className='bg-[#f4f5f6] flex-col gap-3 flex'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <div className='flex p-5'>
                <img src="./src/assets/task.png" className="size-12" alt="Task Icon" />
                <p className="font-urbanist font-bold text-[#535358] text-xl p-3">Task Management</p>
              </div>
            </div>
            <div className="flex gap-1 p-3">
              <img src="./src/assets/Ellipse 4.png" className='size-12' alt="User Icon" />
              <DropDown />
            </div>
          </div>
          <div className='bg-white'>
            <div className='flex p-5 border-b-2 justify-between gap-2 bg-white'>
              <div className='flex gap-2 p-5'>
                <img src='./src/assets/board.png' className='size-8' alt="Board Icon" />
                <p className='font-urbanist text-gray-700 font-bold text-2xl'>Board</p>
              </div>
              <div className='flex gap-2 p-3'>
                <button><img src="./src/assets/Filter.png" className='size-4' alt="Filter Icon" /></button>
                <button><img src="./src/assets/lightning.png" className='size-4' alt="Lightning Icon" /></button>
                <button><img src="./src/assets/Search.png" className='size-4' alt="Search Icon" /></button>
                <button><img src="./src/assets/....png" className='size-4' alt="More Icon" /></button>
                <button className='px-10 bg-[#B6C7FF]'>New</button>
              </div>
            </div>
            <div className='flex gap-5 p-5'>
              <div className='bg-[#F4F7FF] rounded-md p-5'>
                <div className='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                  <img src="./src/assets/bluedot.png" className='size-5' alt="Not Started Icon" />
                  <p className='text-xl font-urbanist font-semibold'>Not Started</p>
                </div>
                <div className='flex py-5 flex-col gap-3'>
                  {tasksByState['pending'].map(task => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </div>
              <div className='flex'>
                <div className='bg-[#FFF8F3] rounded-md p-5'>
                  <div className='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                    <img src="./src/assets/orangedot.png" className='size-5' alt="In Progress Icon" />
                    <p className='text-xl font-urbanist font-semibold'>In Progress</p>
                  </div>
                  <div className='flex py-5 flex-col gap-3'>
                    {tasksByState['in progress'].map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='bg-[#f4fff5] rounded-md p-5'>
                  <div className='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                    <img src="./src/assets/greendot.png" className='size-5' alt="Done Icon" />
                    <p className='text-xl font-urbanist font-semibold'>Done</p>
                  </div>
                  <div className='flex py-5 flex-col gap-3'>
                    {tasksByState['done'].map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagement;