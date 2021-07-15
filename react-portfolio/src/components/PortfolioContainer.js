import React, { useState } from 'react';
import NavTabs from './NavTabs/NavTabs';
import About from './About';
import friends from '../components/PortfolioProjects/friends.json';

function PortfolioContainer() {
    // Using useState, set the default value for currentPage to 'About'
    const [currentPage, handlePageChange] = useState('About Me');
    const [friendsList] = useState(friends);
  
     // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            default:
                return <About />;
        }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PortfolioContainer;