import { useState, useRef, useEffect } from 'react';

const useInfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const infiniteScrollRef = useRef(null);

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

    if (infiniteScrollRef.current) {
      observer.observe(infiniteScrollRef.current);
    }
  }, []);

  return { currentPage, infiniteScrollRef };
};

export default useInfiniteScroll;
