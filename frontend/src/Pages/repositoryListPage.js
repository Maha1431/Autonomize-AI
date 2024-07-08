import React from 'react';
import Header from '../Components/Headers/Header';
import RepoList from '../Components/Repository/Repolist';
import UserInfo from '../Components/UserInfo/UserInfo';
import { useParams } from 'react-router-dom';
import { useSearchUser } from '../Hooks/useSearchUser';

const RepositoryListPage = () => {
  const { username } = useParams();
  const { user, isLoading, isError } = useSearchUser(username);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching user data.</div>;

  return (
    <div>
      <Header />

      <h1>Repository List</h1>

      {user && (
        <>
          <UserInfo user={user} />
          <RepoList username={user.login} />
        </>
      )}

    </div>
  );
};

export default RepositoryListPage;
