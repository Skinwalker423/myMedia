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

  if (error) return <Panel>Error: </Panel>;

  console.log(data);

  return (
    <div className='container mx-auto'>
      <UsersList />
    </div>
  );
}

export default App;
