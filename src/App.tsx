import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Layout, Menu, Button, Image } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import PullToRefresh from "react-simple-pull-to-refresh";

const { Header, Content, Footer } = Layout;



function App() {
  const tweets = require("./data/tweetIds.json");

  const getRandomTweet = (tweets: string[]) => {
    return tweets[Math.floor(Math.random() * tweets.length)];
  };

  const [tweetId, setTweetId] = useState(getRandomTweet(tweets));

  const handleClick = () => {
    return new Promise((resolve, reject) => {
      const newTweets = tweets.filter((tweet: string) => tweet !== tweetId);
      setTweetId(getRandomTweet(newTweets));
      resolve(newTweets)
    })
  };


  return (
    <PullToRefresh onRefresh={handleClick}>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>Tweet Jokes</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <Button
            type="primary"
            onClick={handleClick}
            icon={<RetweetOutlined />}
          >
            Rasgele
          </Button>
          <br />
          <br />
          {tweetId && (
            <a rel="noopener" href={`https://twitter.com/i/web/status/${tweetId}`} target={'_blank'}>
                <Image
                  preview={false}
                  src={require(`../screenshots/${tweetId}-${"light"}.png`)}
                />
              </a>
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Tech Twitter ©2021</Footer>
    </Layout>
    </PullToRefresh>
  );
}

export default App;
