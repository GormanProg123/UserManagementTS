import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { Rootstate } from "../redux/store";
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from "../redux/Users/userSlice";
import { UserTable } from "../components/User/UserTable";
import { SearchFilters } from "../components/Search/SearchFilters";

export const UserPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: Rootstate) => state.users)
  
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(fetchUsersStart());
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(fetchUsersSuccess(response.data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(fetchUsersFailure(err.message));
        } else {
          dispatch(fetchUsersFailure('An unknown error occurred'));
        }
      }
    };

    fetchUsers();
  }, [dispatch]);


  return(
    <div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <SearchFilters />
        <UserTable />
      </div>
    </div>
  )
}