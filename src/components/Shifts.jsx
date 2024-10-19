import React, { useEffect, useState } from 'react';

const Shifts = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/current_tasks/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); //More informative error
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        // Consider adding user-friendly error handling here (e.g., display an error message)
      }
    };

    fetchTasks();
  }, []);


  return (
    <>
      <div className='w-4/6 rounded-md bg-white'> {/* Use className instead of class */}
        <div>
          <div className='flex justify-between p-3 gap-1'> 
            <div className='flex'> 
              <img src='./src/assets/Rocket.png' className='size-9' alt="Rocket" /> {/* Added alt text */}
              <p className='font-urbanist font-bold text-gray-500 text-2xl'>Active shifts</p>
            </div>
            <button className='h-12 bg-[#0E43FB] text-white rounded-sm'>+ New shift</button>
          </div>
          <div>
            <div className='p-3 text-sm'>
              {tasks.map((task) => (
                <div key={task.id} className='rounded-md p-2 border-2 mb-4'> 
                  <div className='flex justify-between'> 
                    <p className='font-urbanist font-semibold text-gray-600 text-sm-md'>{task.task_id.task_name}</p> {/* Access nested properties */}
                    <button> <img src='./src/assets/....png' className='size-5' alt="Edit" /> </button> {/* Added alt text */}
                  </div>
                  <div>
                    <div className='flex gap-10 text-md'> 
                      <TaskDetail label="Task Description" value={task.task_id.task_description} />
                      <TaskDetail label="Shift Type" value={task.task_id.task_type} />
                      <TaskDetail label="Worker" value={task.User_id ? task.User_id : 'None'} /> {/* Handle potential null User_id */}
                      <TaskDetail label="Shift Deadline" value={new Date(task.task_id.task_deadline).toLocaleString()} /> {/* Format date */}
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TaskDetail = ({label, value}) => (
  <div className='border-l-2 px-3'>
    <p className='font-urbanist font-semibold text-[#0E43FB]'>{label}</p>
    <p className='font-urbanist text-gray-400 font-semibold'>{value}</p>
  </div>
);

export default Shifts;