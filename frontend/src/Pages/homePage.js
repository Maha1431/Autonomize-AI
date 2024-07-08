import React from 'react';
import SearchBar from '../Components/Search/Searchbar';
import { useSearchUser } from '../Hooks/useSearchUser';
import NotFoundPage from './notfoundPage';
import UserInfo from '../Components/UserInfo/UserInfo';
import Header from '../Components/Headers/Header';
import RepoList from '../Components/Repository/Repolist';

const HomePage = () => {
  const { user, isError, handleSearch } = useSearchUser();
  const username = user?.login || '';
  console.log(user);

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Header />
      <SearchBar
        username={username}
        handleSearch={handleSearch}
      />

      {user && (
        <>
          <UserInfo user={user} />
          <RepoList username={user.login} />
        </>
      )}
    </div>
  );
};

export default HomePage;
