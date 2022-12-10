import React from 'react'
import {
    Alert,
    Button,
    Card,
    Col,
    Form,
    Input,
    message,
    Row,
    Spin,
    Typography,
  } from "antd";
  import { Fragment, useState } from "react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import { useAuthContext } from "../../context/AuthContext";
  import useScreenSize from "../../hooks/useScreenSize";
  import { API } from "../../constant";
  import { setToken } from "../../helpers";

const ForgetPassword = () => {
    const { isDesktopView } = useScreenSize();
    const navigate = useNavigate();
  
    const { setUser } = useAuthContext();
  
    const [isLoading, setIsLoading] = useState(false);
  
    const [error, setError] = useState("");

    const forgetPassword = async (values) => {
        setIsLoading(true);
        try {
            const value = {
                identifier:values.email,
              };
          const response = await fetch("http://localhost:1337/auth/forgot-password", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
              },
            body: JSON.stringify(value),
            
          });

          const data = await response.json();
          if (data?.error) {
            throw data?.error;
          } else {
        
            message("Hi")
            navigate("/ResetPassword", { replace: true });
          }
        } catch (error) {
          console.error(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      }
      return (
       
         <Fragment>
          <Row align="middle">
            <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
              <Card title="Forgot password">
                {error ? (
                  <Alert
                    className="alert_error"
                    message={error}
                    type="error"
                    closable
                    afterClose={() => setError("")}
                  />
                ) : null}
                <Form
                  name="basic"
                  layout="vertical"
                  onFinish={forgetPassword}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "string",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login_submit_btn"
                >
                  Send Code {isLoading && <Spin size="small" />}
                </Button>
                
                
              </Form.Item>
                  </Form>
                  </Card>
        </Col>
      </Row>
    </Fragment>
       
    );
      
    };
 

export default ForgetPassword;
