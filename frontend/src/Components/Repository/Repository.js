import React from 'react';
import './Repository.css';

const RepoDetails = ({ repo }) => {
  return (
    <div className="repo-details">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Language: {repo.language}</p>
    </div>
  );
};

export default RepoDetails;
