import Panel from "./Panel";
import { TiDelete } from "react-icons/ti";
import { BsCaretDown } from "react-icons/bs";
import useThunk from "../hooks/useThunk";
import { deleteUser } from "../store";
import { GoSync } from "react-icons/go";
import Button from "./Button";

const UserListItem = ({ user }) => {
  const { id, name } = user;

  const [startDeleteUser, isDeleting, isDeletingError] =
    useThunk(deleteUser);
  const handleDelete = (id) => {
    console.log("deleting user id", id);
    startDeleteUser(id);
  };
  return (
    <Panel className='w-1/2 flex justify-between items-center'>
      <div className='flex items-center justify-center gap-5'>
        <Button
          isLoading={isDeleting}
          onClick={() => handleDelete(id)}
        >
          <TiDelete className='text-2xl text-red-600' />
        </Button>
        {isDeletingError && <div>Error deleting user</div>}
        {name}
      </div>
      <BsCaretDown />
    </Panel>
  );
};

export default UserListItem;
