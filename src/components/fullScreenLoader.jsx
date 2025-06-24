import React from 'react';

const FullScreenLoader = () => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white"
      style={{ zIndex: 9999 }}
    >
      <img
        src="http://localhost:3000/static/media/LOGO.2ff4ff91.png"
        alt="Loading..."
        className="img-fluid mb-4"
        style={{ maxWidth: '200px' }}
      />
      <div className="spinner-border " role="status" style={{color:"#ea4c2d"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default FullScreenLoader;
