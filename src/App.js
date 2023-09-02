import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsTable from './components/views/PostsTable';
import PostForm from './components/views/PostForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostsTable />} />
        <Route exact path="/create" element={<PostForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
