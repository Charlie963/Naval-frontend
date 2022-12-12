  import {
    Button,
    Card,
    Col,
    Image,
    message,
    Row,
    Space,
    Spin,
    Typography,
  } from "antd";
  import React, { useEffect, useState } from "react";
  import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillFacebook,
    AiFillInstagram,
  } from "react-icons/ai";
  
  import { CgWebsite } from "react-icons/cg";
  import { SiGmail } from "react-icons/si";
  import { API, AVATAR_API } from "../../constant";
  
  const SocialCards = () => {
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query,setQuery] = useState('');
  
    const fetchProfiles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API}/users?populate=*`);
        const data = await response.json();
        setProfiles(data ?? []);
        console.log(data);
      } catch (error) {
        console.error(error);
        message.error("Error while fetching profiles!");
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProfiles();
    }, []);
  
    if (isLoading) {
      return <Spin size="large" />;
    }
  
    return (
      <div className="big_container">
      <div className='searchh'>
      <input   
         placeholder='Search by name,place...'
         type='text'
         onChange={(e) => setQuery(e.target.value)}
         />
      </div>
      
      <div className='container'>
        {profiles.filter(profile=>
        profile.username.toLowerCase().includes(query) ||
        profile.rank.toLowerCase().includes(query) ||
        profile.address.toLowerCase().includes(query)
         )
        .map((profile, index) => (
          <div className="card"  key={`${profile.id}_${index}`}>
              <div className="upper-container" >
              <div className='image-container'>
                <Image 
                preview={true} 
                className='carding'
                src={profile.image ? `https://seashell-app-43x2f.ondigitalocean.app${profile.image.url}` : 
                profile.avatar_url ??
                `${AVATAR_API}?name=${profile.username}&background=1890ff&color=fff`}
                alt='' height='100px' width='100px'/>
            </div>
            </div>
            <div className="lower-container">  
                <h3>{profile.username}</h3> 
                <h5>{profile.rank}</h5> 
                <h5>{profile.address}</h5>
              <div className="contact">
                <h1>{profile.contact}</h1>
                <h2>{profile.laneline}</h2>
              </div>
              <div className="logos"> 
                <Space size={16} wrap>
                  {profile.twitter_username && (
                    <Button
                      className="social_button twitter"
                      href={`https://twitter.com/${profile.twitter_username}`}
                      type="link"
                      target="_blank"
                    >
                      <AiFillTwitterCircle size={24} />
                    </Button>
                  )}
                  {profile.facebook_username && (
                    <Button
                      className="social_button linkedin"
                      href={`https://www.facebook.com/in/${profile.facebook_username}`}
                      type="link"
                      target="_blank"
                    >
                      <AiFillFacebook size={24} />
                    </Button>
                  )}
                  {profile.instagram_username && (
                    <Button
                      className="social_button github"
                      href={`https://instagram.com/${profile.instagram_username}`}
                      type="link"
                      target="_blank"
                    >
                      <AiFillInstagram size={24} />
                    </Button>
                  )}
                  {profile.website_url && (
                    <Button
                      className="social_button website"
                      href={profile.website_url}
                      type="link"
                      target="_blank"
                    >
                      <CgWebsite size={24} />
                    </Button>
                  )}
                  {profile.email && (
                    <Button
                      className="social_button gmail"
                      href={`mailto:${profile.email}`}
                      type="link"
                      target="_blank"
                    >
                      <SiGmail size={24} />
                    </Button>
                  )}
                </Space>
              </div> 
              </div>
              </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default SocialCards;