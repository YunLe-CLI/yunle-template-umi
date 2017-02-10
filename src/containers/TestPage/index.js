import React, { Component, PropTypes, cloneElement } from 'react';
import { Button, Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import './assets/style.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };
  static propTypes = {
    routing: PropTypes.object,
    state: PropTypes.object,
    actions: PropTypes.object
  };
  render() {
    const { children, actions, state, routing  } = this.props;
    return (
      <div id="components-layout-demo-side">
        <Layout>
          <Sider>
            <div className="logo">
              <Icon type="message" />
              <span style={{marginLeft: 5}} className="nav-text">社区系统</span>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <SubMenu
              key="1" title={
                <span>
                  <Icon type="home" /><span className="nav-text">首页管理</span>
                </span>
              }>
                <Menu.Item key="home-1">策略列表</Menu.Item>
                <Menu.Item key="home-2">策略管理</Menu.Item>
              </SubMenu>
              <SubMenu key="2" title={
                <span>
                  <Icon type="user" /><span className="nav-text">用户管理</span>
                </span>
              }>
                <Menu.Item key="user-1">策略列表</Menu.Item>
                <Menu.Item key="user-2">策略管理</Menu.Item>
              </SubMenu>
              <SubMenu key="3" title={
                <span>
                  <Icon type="star-o" /><span className="nav-text">社区管理</span>
                </span>
              }>
                <Menu.Item key="star-1">策略列表</Menu.Item>
                <Menu.Item key="star-2">策略管理</Menu.Item>
              </SubMenu>
              <SubMenu key="4" title={
                <span>
                  <Icon type="delete" /><span className="nav-text">反垃圾管理</span>
                </span>
              }>
                <Menu.Item key="delete-1">策略列表</Menu.Item>
                <Menu.Item key="delete-2">策略管理</Menu.Item>
              </SubMenu>
              <SubMenu key="5" title={
                <span>
                  <Icon type="share-alt" /><span className="nav-text">推荐管理</span>
                </span>
              }>
                <Menu.Item key="share-1">策略列表</Menu.Item>
                <Menu.Item key="share-2">策略管理</Menu.Item>
              </SubMenu>
              <SubMenu key="6" title={
                <span>
                  <Icon type="android" /><span className="nav-text">机器人</span>
                </span>
              }>
                <Menu.Item key="android-1">策略列表</Menu.Item>
                <Menu.Item key="android-2">策略管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, height: 48, lineHeight: 48 }} >
              <Menu
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{float: 'right', height: '100%', border: 0}}
              >
                <Menu.Item key="mail">
                  <Icon type="mail" />消息
                </Menu.Item>
                <Menu.Item key="app">
                  <Icon type="user" />何潇
                </Menu.Item>
              </Menu>
            </Header>
            <Breadcrumb style={{ margin: '12px 16px' }}>
              <Breadcrumb.Item><Link to='/login'>首页管理</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to='/login'>策略列表</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ margin: '0 16px' }}>
              <Scrollbars autoHide style={{ background: '#fff', width: '100%', height: '100%' }}>
                <div style={{ padding: 24, maxHeight: '100%' }}>
                  { children ? cloneElement(children, {
                    actions, state, routing  }) :
                    null
                  }
                  <Button onClick={() => actions.testHome('saga')} type="primary">{123}</Button>
                </div>
              </Scrollbars>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              godman Design ©2017 Created by hexiao
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
