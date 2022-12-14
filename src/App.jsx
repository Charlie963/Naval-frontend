    import React from "react";
    import { Col, Layout, Row } from "antd";
    import AppHeader from "./components/Appheader/Appheader";
    import AppRoutes from "./Routes";
    import Directory from "./components/Table/Directory";
    import Home from "./pages/Home/Home";
    import Footer from "./components/Footer";
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
    const { Header, Content } = Layout;

    
    
    const App = () => {
      return (
        <Layout>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <Header>
                <AppHeader/>
              </Header>
            </Col>
            <Col span={24} offset={0}>
              <Content>
                <AppRoutes/>
              </Content>
            </Col>
            <Col span={24} offset={0}>
              <Footer>
                <Footer/>
              </Footer>
            </Col>
          </Row>
        </Layout>
      );
    };
    
    export default App;
