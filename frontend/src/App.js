import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFoundPage from './Pages/notfoundPage';
import HomePage from './Pages/homePage';
import RepositoryListPage from './Pages/repositoryListPage';
import RepositoryDetailsPage from './Pages/repositoryDetailsPage';
import FollowersPage from './Pages/followersPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/repo/:username" element={<RepositoryListPage />} />
      <Route path="/repo/:username/:repoName" element={<RepositoryDetailsPage />} />
      <Route path="/followers/:username" element={<FollowersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
