import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import Theme from './style/Theme';
import GlobalStyle from './style';

import useInfiniteScroll from './hooks/useInfiniteScroll';

const App = () => {
  const [data, setData] = useState([]);
  const { currentPage, ref } = useInfiniteScroll();

  const getData = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos/');

    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredTodos = data.filter((_, idx) => idx <= currentPage * 10);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <ul>
          {filteredTodos.map((value) => (
            <li key={value.id}>{value.title}</li>
          ))}
        </ul>
        <div ref={ref} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
