import UsersList from "./components/UsersList";
import "./App.css";
import { fetchUsers } from "./store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Panel from "./components/Panel";
import Button from "./components/Button";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) return <Panel>Loading...</Panel>;
  if (error) return <Panel>Error: </Panel>;

  return (
    <div className='container mx-auto'>
      <Panel className='flex justify-between items-center my-5 '>
        <span>Users</span>{" "}
        <Button primary className='hover:bg-blue-600'>
          +Add User
        </Button>
      </Panel>
      {data.length > 0 && <UsersList />}
    </div>
  );
}

export default App;
