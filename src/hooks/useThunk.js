import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

const useThunk = (action) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (payload) => {
      setIsLoading(true);
      setError(null);
      dispatch(action(payload))
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError("problem loading users", err);
        });
    },
    [dispatch, action]
  );

  return [runThunk, isLoading, error];
};
export default useThunk;
