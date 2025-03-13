import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageComponent from './Page';

console.log("App is rendering..."); // Debugging line

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageComponent />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;