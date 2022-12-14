    
import React from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin, Upload } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { useState } from "react";
import { getToken } from "../../helpers";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Data saved successfully!");
      navigate("/SocialCards", { replace: true });
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/upload/${user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Data saved successfully!");
      navigate("/SocialCards", { replace: true });
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="profile_page_card">
    <Card>
      <Form
        layout="vertical"
        initialValues={{
          username: user?.username,
          email: user?.email,
          twitter_username: user?.twitter_username,
          linkedin_username: user?.linkedin_username,
          github_username: user?.github_username,
          avatar_url: user?.avatar_url,
          website_url: user?.website_url,
          about: user?.about,
          image: user?.image,
        }}
        onFinish={handleProfileUpdate}
      >
        <Row gutter={[16, 16]}>
          <Col md={8} lg={8} sm={24} xs={24}>
            
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={24}
          className="address">
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: false,
                  type: "string",
                  max: 120,
                },
              ]}
            >
              <Input.TextArea placeholder="Address" rows={6} />
            </Form.Item>
          </Col>

          <Col md={8} lg={8} sm={24} xs={24}> 
            <Form.Item
              label="Contact"
              name="contact"
              rules={[
                {
                  required: false,
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Phone Number" type="number" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}> 
            <Form.Item
              label="Rank"
              name="rank"
              rules={[
                {
                  required: false,
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Rank" type="string" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}> 
            <Form.Item
              label="Lane Number"
              name="laneline"
              rules={[
                {
                  required: false,
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Lane Number" type="string" />
            </Form.Item>
          </Col>

          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Twitter Username"
              name="twitter_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Twitter Username"/>
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Facebook Username"
              name="facebook_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Facebook Username"/>
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Instagram Username"
              name="instagram_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Instagram Username" />
            </Form.Item>
          </Col>

          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Website Url"
              name="website_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Website Url" />
            </Form.Item>
          </Col>

          <Form.Item
              label="image"
              name="image"
              rules={[
                {
                  type: "file",
                },
              ]}
          >
           <Input type="file"
           />
          
        </Form.Item>

        </Row>
        <Button
          className="profile_save_btn"
          htmlType="submit"
          type="primary"
          size="large"
        >
          {loading ? (
            <>
              <Spin size="small" /> Saving
            </>
          ) : (
            "Save"
          )}
        </Button>
      </Form>
    </Card>
    </div>
  );
};

export default Profile;