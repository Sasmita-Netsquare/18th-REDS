import { useEffect, useState } from "react";

const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(true); 

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkWidth(); 
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
