import { Button, Space } from "antd";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { useState,state } from "react";


const AppHeader = () => {

  const[isMobile,setIsMobile] = useState(false);

  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    localStorage.removeItem("user")
    setUser(undefined);
    navigate("/signin", { replace: true });
  };

  return (
    <div>
    <Space className="header_space">
      <div className="home_button">
          <Button className="header_space_image" href="/home" type="link">
            <img className="header_space_image" src="https://upload.wikimedia.org/wikipedia/en/e/eb/National_Hydrographic_Office_%28India%29.jpg" alt="" />
          </Button>        
      </div>
      <div className="title">Institute of Hydrography  </div> 
      
      
      <Space>
        {user ? (
          <div className="header_user">
             <div className={isMobile ? "directions active":"directions" }>
                <Button className="header_space_brand" href="/socialcards" type="link">
                  Profiles
                </Button>
                <Button className="header_space_brand" href="/directory" type="link">
                  Directory
                </Button>
                <Button className="header_space_brand" href="/app" type="link">
                  Contact us
                </Button>
                <Button className="header_space_brand" href="/profile" type="link">
                  {user.username}
                </Button>
                <Button
                  className="auth_button_logout"
                  type="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>                
            </div>
            <div className="fa-bar" onClick={() => setIsMobile(!isMobile)}>{
                  isMobile ? (<div className="fas fa-times"></div>) : (<i className="fas fa-bars"></i>)
                } </div>
            
          </div>
        ) : (
          <>
          <div className="auth_button_signUp">
            <Button className="auth_button_login" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_login"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
            </div>
          </>
        )}
      </Space>
    </Space>
    </div>
  );
};

export default AppHeader;