import React from 'react';
import { useParams } from 'react-router-dom';
import FollowersLists from '../Components/Followers/Followerslist';
import Header from '../Components/Headers/Header';

const FollowersList = () => {
  const { username } = useParams();
  return (
    <div>
      <Header />
      {username ? (
        <FollowersLists username={username} />
      ) : (
        <div>No username provided</div>
      )}
    </div>
  );
};

export default FollowersList;
