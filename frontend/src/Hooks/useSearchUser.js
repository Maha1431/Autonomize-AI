import { useEffect } from 'react';
import { useLocalStorage } from './useLocalstorage';
import { useGetUserQuery } from '../Features/userApi';

export const useSearchUser = (username) => {
  const [storedUsername, setStoredUsername] = useLocalStorage('username', 'mralexgray');

  const { data: user, isLoading, isError } = useGetUserQuery(
    username || storedUsername,
    { skip: !username && !storedUsername }
  );

  useEffect(() => {
    if (user) {
      setStoredUsername(user.login);
    }
  }, [user, setStoredUsername]);

  const handleSearch = (newUsername) => {
    setStoredUsername(newUsername);
  };

  return { user, isLoading, isError, handleSearch };
};
