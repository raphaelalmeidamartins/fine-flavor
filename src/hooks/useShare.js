import { useState } from 'react';

function useShare(replaceValue, newValue = '') {
  const [alertStatus, setAlertStatus] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(
      window.location.href.replace(replaceValue, newValue),
    );
    setAlertStatus(true);
    const fourSeconds = 4000;
    setTimeout(() => setAlertStatus(false), fourSeconds);
  };

  return [alertStatus, handleShare];
}

export default useShare;
