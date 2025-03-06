import { useState, useEffect } from "react";

export const useScrollProgress = () => {
  const [completion, setCompletion] = useState();

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};
