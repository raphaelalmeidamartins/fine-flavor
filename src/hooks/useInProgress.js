import { useLocation } from 'react-router-dom';

function useInProgress() {
  const { pathname } = useLocation();
  return pathname.includes('in-progress');
}

export default useInProgress;
