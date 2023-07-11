import UsersList from "./components/UsersList";
import "./App.css";
import { fetchUsers, addUser } from "./store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Panel from "./components/Panel";
import Button from "./components/Button";
import Skeleton from "./components/skeleton";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.users
  );

  const handleAddUser = async () => {
    dispatch(addUser());
  };

  if (error) return <Panel>Error: </Panel>;

  console.log(data);

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center my-5 '>
        <span>List of Users</span>{" "}
        <Button
          onClick={handleAddUser}
          primary
          className='hover:bg-blue-600'
        >
          +Add User
        </Button>
      </div>
      <UsersList />
    </div>
  );
}

export default App;
