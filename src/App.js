import "./App.css"
import React, { useState } from "react"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Layout, Menu, theme } from "antd"
import PaginationDesign from "./components/Pagination/PaginationDesign"

const { Header, Sider, Content } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      <PaginationDesign />
    </>
  )
}

export default App
/*function App() {
  const title = "Petland"
  const intro = "Where our furry friends can find their forever home"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>
          <h4>{intro}</h4>
        </p>
        <a href="https://petify.io/profiles/view/ama">
          <h5>AMA Shelter</h5>
        </a>
        <p>
          <h3>Still a Draft</h3>
        </p>
      </div>
    </div>
  )
}

export default App

/* <BrowserRouter>
        <Searchbox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter> */
