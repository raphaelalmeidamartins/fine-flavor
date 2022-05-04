import { useRef, useEffect } from 'react';

function usePreviousState(value) {
  const state = useRef();

  useEffect(() => {
    state.current = value;
  }, [value]);

  return state.current;
}

export default usePreviousState;
