import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Layout, Menu, Button, Image } from "antd";
import { RetweetOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  const tweets = require("./data/tweetIds.json");

  const getRandomTweet = (tweets: string[]) => {
    return tweets[Math.floor(Math.random() * tweets.length)];
  };

  const [tweetId, setTweetId] = useState(getRandomTweet(tweets));

  const handleClick = (e: any) => {
    const newTweets = tweets.filter((tweet: string) => tweet !== tweetId);
    setTweetId(getRandomTweet(newTweets));
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
          <br />
          {tweetId && (
            <Image
              preview={false}
              src={require(`../screenshots/${tweetId}-${"light"}.png`)}
            />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Tech Twitter ©2021</Footer>
    </Layout>
  );
}

export default App;
