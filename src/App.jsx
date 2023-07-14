import UsersList from "./components/UsersList";
import "./App.css";
import { fetchUsers, addUser } from "./store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Panel from "./components/Panel";
import { store } from "./store";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.albums
  );

  console.log(store.getState());

  if (error) return <Panel>Error: </Panel>;

  return (
    <div className='container mx-auto'>
      <UsersList />
    </div>
  );
}

export default App;
