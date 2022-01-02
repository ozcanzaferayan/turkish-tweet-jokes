import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Layout, Menu, Button } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import { Tweet } from "react-twitter-widgets";

const { Header, Content, Footer } = Layout;

function App() {
  const tweets = require("./data/tweetIds.json");

  const getRandomTweet = () => {
    return tweets[Math.floor(Math.random() * tweets.length)];
  };

  const [tweetId, setTweetId] = useState(getRandomTweet());

  const handleClick = (e: any) => {
    setTweetId(getRandomTweet());
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>Tweet Jokes</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ margin: "16px 0" }}>
          <Button
            type="primary"
            onClick={handleClick}
            icon={<RetweetOutlined />}
          >
            Rasgele
          </Button>
          {tweetId && <Tweet tweetId={tweetId} />}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Tech Twitter ©2021</Footer>
    </Layout>
  );
}

export default App;
