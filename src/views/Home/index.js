import React, { Component, PropTypes } from 'react';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Home extends Component {
  static propTypes = {
    routing: PropTypes.object,
    actions: PropTypes.object
  };
  render() {
    const { test, actions } = this.props;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Button onClick={actions.testClick} type="primary">点</Button>
              {test.toJS().name}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            yunle Design ©2017 Created by Ant YUNLE-UED
          </Footer>
        </Layout>
      </div>
    );
  }
};
export default Home;
