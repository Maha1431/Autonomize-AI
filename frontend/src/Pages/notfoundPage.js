import React from 'react';
import Header from '../Components/Headers/Header';


const NotFoundPage = () => {
  return (
    <div>
     <Header />
      <div className="not-found-container">
        <h1 className="not-found-message">
          404 - Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
