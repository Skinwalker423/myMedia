import { useDispatch } from "react-redux";
import { useState } from "react";

const useThunk = (action) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const dispatch = useDispatch();
  const doFetch = () => {
    setIsLoading(true);
    setIsError(null);
    dispatch(action())
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsLoading("problem loading users", err);
      });
  };

  return [doFetch, isLoading, isError];
};
export default useThunk;
