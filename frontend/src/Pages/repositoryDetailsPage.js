import React from 'react';
import Header from '../Components/Headers/Header';
import RepoDetails from '../Components/Repository/Repository';
import { useParams } from 'react-router-dom';

import { useGetUserReposQuery } from '../Features/reposApi';

const RepositoryDetailsPage = () => {
  const { username, repoName } = useParams();
  const { data: repos, isLoading, isError } = useGetUserReposQuery(username || '', {
    skip: !username,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching repositories.</div>;

  const repo = repos?.find((repo) => repo.name === repoName);

  return (
    <div>
      <Header />
      <h1>Repository Details</h1>
      {repo && <RepoDetails repo={repo} />}
    </div>
  );
};

export default RepositoryDetailsPage;
