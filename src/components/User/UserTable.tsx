import { useSelector } from 'react-redux';
import { Rootstate } from '../../redux/store';
import { User } from '../../types/types'; 
import style from './usertab.module.css';

export const UserTable = (): JSX.Element => {
  const users = useSelector((state: Rootstate) => state.users.users);
  const filters = useSelector((state: Rootstate) => state.filters);

  const filteredUsers = users.filter((user: User) => {
    const searchItem = filters.searchTerm.toLowerCase();
    const field = filters.sortBy;

    return user[field].toLowerCase().includes(searchItem);
  });

  const sortedUsers = filteredUsers.sort((a, b) => {
    const field = filters.sortBy;
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  });

  return (
    <div>
      <table className={style.maintable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
