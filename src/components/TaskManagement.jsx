import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import DropDown from './DropDown';
import TaskCard from './TaskCard';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        // Make a GET request using axios
        const response = await axios.get('http://9212-105-101-199-138.ngrok-free.app/api/all_tasks_user/');


        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setTasks(response.data); 
        } else {
          throw new Error('Invalid data format: expected an array');
        }
      } catch (err) {
        // Log the error with more information
        console.error('Error fetching tasks:', err);
        setError('Failed to load tasks.'); // Set error state
      } finally {
        setLoading(false); // Ensure loading is false after the request
      }
    };

    fetchTasks(); // Call the fetch function
  }, []);

  // If loading, show a loading message
  if (loading) return <p>Loading tasks...</p>;

  // If there's an error, display it
  if (error) return <p>{error}</p>;

  // Log tasks after loading
  console.log('Loaded Tasks:', tasks);

  // Group tasks by state
  const taskGroups = {
    pending: tasks.filter(task => task.state === 'pending'),
    inProgress: tasks.filter(task => task.state === 'in progress'),
    done: tasks.filter(task => task.state === 'done'), // Ensure this state exists in your data
  };

  return (
    <div className='w-[75vw]'>
      <div className='bg-[#f4f5f6] flex-col gap-3 flex'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <div className='flex p-5'>
              <img src='./src/assets/task.png' className='size-12' alt='Task Icon' />
              <p className='font-urbanist font-bold text-[#535358] text-xl p-3'>Task Management</p>
            </div>
          </div>
          <div className='flex gap-1 p-3'>
            <img src='./src/assets/Ellipse 4.png' className='size-12' alt='User' />
            <DropDown />
          </div>
        </div>

        <div className='bg-white'>
          <div className='flex p-5 border-b-2 justify-between gap-2 bg-white'>
            <div className='flex gap-2 p-5'>
              <img src='./src/assets/board.png' className='size-8' alt='Board' />
              <p className='font-urbanist text-gray-700 font-bold text-2xl'>Board</p>
            </div>
            <div className='flex gap-2 p-3'>
              <button>
                <img src='./src/assets/Filter.png' className='size-4' alt='Filter' />
              </button>
              <button>
                <img src='./src/assets/lightning.png' className='size-4' alt='Lightning' />
              </button>
              <button>
                <img src='./src/assets/Search.png' className='size-4' alt='Search' />
              </button>
              <button>
                <img src='./src/assets/....png' className='size-4' alt='More' />
              </button>
              <button className='px-10 bg-[#B6C7FF]'>New</button>
            </div>
          </div>

          <div className='flex gap-5 p-5'>
            {/* Task Status: Not Started */}
            <div className='bg-[#F4F7FF] rounded-md p-5'>
              <div className='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                <img src='./src/assets/bluedot.png' className='size-5' alt='Not Started' />
                <p className='text-xl font-urbanist font-semibold'>Not Started</p>
              </div>
              <div className='flex py-5 flex-col gap-3'>
                {taskGroups.pending.map(task => (
                  <TaskCard key={task.id} task={task.task_id} /> 
                ))}
              </div>
            </div>

            {/* Task Status: In Progress */}
            <div className='bg-[#FFF8F3] rounded-md p-5'>
              <div className='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                <img src='./src/assets/orangedot.png' className='size-5' alt='In Progress' />
                <p className='text-xl font-urbanist font-semibold'>In Progress</p>
              </div>
              <div className='flex py-5 flex-col gap-3'>
                {taskGroups.inProgress.map(task => (
                  <TaskCard key={task.id} task={task.task_id} />  
                ))}
              </div>
            </div>

            {/* Task Status: Done */}
            <div className='bg-[#f4fff5] rounded-md p-5'>
              <div className='flex bg-white rounded-sm p-2 gap-2 w-4/6'>
                <img src='./src/assets/greendot.png' className='size-5' alt='Done' />
                <p className='text-xl font-urbanist font-semibold'>Done</p>
              </div>
              <div className='flex py-5 flex-col gap-3'>
                {taskGroups.done.map(task => (
                  <TaskCard key={task.id} task={task.task_id} /> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
