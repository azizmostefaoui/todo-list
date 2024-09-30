import React from 'react';

const Header = () => {
  return (
    <div style={{ 
      
      display: "flex",  
      alignItems: "center", 
      background: "#1A1A40", 
      width: "100%", 
      padding: "5px", 
      position: "fixed", 
      top: 0, 
      right: 1,
      zIndex: 1000 ,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
    ,
    }}>
      <h2 style={{ color: "white", marginLeft: "700px", }}>
          freelancer_2025 : abdelaaziz mostefaoui
      </h2>
    </div>
  );
};

export default Header;
