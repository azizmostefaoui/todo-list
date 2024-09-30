import React from 'react';

const Header = () => {
  return (
    <div style={{ 
      display: "flex",  
      alignItems: "center", 
      background: "#1A1A40", 
      width: "100%", 
      padding: "10px", 
      position: "fixed", 
      top: 0, 
      right: 1,
      zIndex: 1000 ,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
    ,
    }}>
      <h3 style={{ color: "white", marginLeft: "900px", }}>
        freelancer_2025
      </h3>
    </div>
  );
};

export default Header;
