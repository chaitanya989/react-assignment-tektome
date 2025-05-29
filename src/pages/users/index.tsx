import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../lib/axios';
import { setUsers, User } from '../../features/user/userSlice';
import { RootState } from '../../store/store';
import Link from 'next/link';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.list);

  useEffect(() => {
    api.get('/users').then(res => dispatch(setUsers(res.data)));
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

            <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className='border border-gray-300 p-2 text-start'>Name</th>
            <th className='border border-gray-300 p-2 text-start'>Username</th>
            <th className='border border-gray-300 p-2 text-start'>Email</th>
            <th className='border border-gray-300 p-2 text-start'>Company</th>
            <th className='border border-gray-300 p-2 text-start'>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user: User) => (
              <tr key={user.id}>
                <td className='border border-gray-300 p-2'>{user.name}</td>
                <td className='border border-gray-300 p-2'>{user.username}</td>
                <td className='border border-gray-300 p-2'>{user.email}</td>
                <td className='border border-gray-300 p-2'>{user.company.name}</td>
                <td className='border border-gray-300 p-2'>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
