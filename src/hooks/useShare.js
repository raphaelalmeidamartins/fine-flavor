import { useState } from 'react';

function useShare(replaceValue = '') {
  const [alertStatus, setAlertStatus] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(
      window.location.href.replace('/done-recipes', replaceValue),
    );
    setAlertStatus(true);
    const fourSeconds = 4000;
    setTimeout(() => setAlertStatus(false), fourSeconds);
  };

  return [alertStatus, handleShare];
}

export default useShare;
