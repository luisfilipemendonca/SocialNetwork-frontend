import { useState, useRef, useEffect } from 'react';

const useInfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const ref = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setCurrentPage((page) => page + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return { currentPage, ref };
};

export default useInfiniteScroll;
