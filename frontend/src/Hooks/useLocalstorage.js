import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item !== JSON.stringify(storedValue)) {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  const setValue = useCallback((value) => {
    setStoredValue(value);
  }, []);

  return [storedValue, setValue];
};
