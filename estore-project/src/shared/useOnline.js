import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handelOnline = () => {
      setIsOnline(true);
    };
    const handelOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handelOnline);
    window.addEventListener("offline", handelOffline);

    // need to clear event (Unmount) thats why return (event removed in a ummounting phase).
    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("offline", handelOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
