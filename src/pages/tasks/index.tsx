import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../lib/axios';
import { setTasks, Task } from '../../features/task/taskSlice';
import { RootState } from '../../store/store';
import {  CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';



export default function Tasks() {
  const dispatch = useDispatch();
  const tasks: Task[] = useSelector((state: RootState) => state.task.list);

  useEffect(() => {
    api.get('/todos?_limit=10').then(res => dispatch(setTasks(res.data)));
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className='border border-gray-300 p-2 text-start'>Title</th>
            <th className='border border-gray-300 p-2 text-start'>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task: Task) => (
              <tr key={task.id}>
                <td className='border border-gray-300 p-2'>{task.title}</td>
                <td className='border border-gray-300 p-2'>{
                task.completed ?  <CheckIcon className="h-6 w-6 text-blue-500" /> : <XMarkIcon className='h-6 w-6 text-red-500'/>}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
