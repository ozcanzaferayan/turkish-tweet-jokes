import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.min.css";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  TwitterTweetEmbed,
  // @ts-ignore
} from "react-twitter-embed";
import { RetweetOutlined } from "@ant-design/icons";
import { Tweet } from "react-twitter-widgets";

const { Header, Content, Footer } = Layout;

function App() {
  const tweets = [
    "1477421611645030400",
    "1476597455357677574",
    "1408354507478736899",
    "1432433072457363462",
    "1476140024953458702",
  ];

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
