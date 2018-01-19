# Crypto Market Watcher

A nodejs application to watch Cryptocurrency exchanges for the price of BTC/USD pair. This is a base repo to be used by EITs as part of learning Javascript. 

The base was generated using Yo's [generator-express-es6](https://www.npmjs.com/package/generator-express-es6).

## Running the Application

After forking this repository, clone your version and run the following commands to start using the application. 

Review the work done for you and implement your changes.

```bash

# make sure you're in the project's directory
cd crypto-market-watcher

# installs project dependencies
npm install

# starts the server
DEBUG=crypto-market-watcher:* npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Problem Description

You have been approached by a client who has a healthy interest in Cryptocurrency. He wants to know how the various coins are performing against US Dollars. His Company is mostly interested in Bitcoin. What his team needs is a dashboard that shows the price of Bitcoin at any point in time without having to refresh the browser. They need the pricing information in realtime because that'd influence their decision whether to buy or sell.

## Implementation

* Fork (not clone) this repo
* Implement your solution using HTML, CSS and Javascript (ES6, both at the Backend and the Frontend)
* [Open an issue](https://github.com/mestafrica/crypto-market-watcher/issues/new) with a link to your fork

### Basic Features

Your implementation must include at least the following;

* Improved UI/UX
* Sign up for users at your Client's company
* Login (you are free to use a package such as [Passport](https://www.npmjs.com/package/passport) for Authentication)
* Integration with at least 3 exchanges (with Websocket API for their market data). Examples of such exchanges are Bitstamp, OKCoin, etc.

### Advanced Features

The following are nice to have features, you can decide not to implement them. It would be a good a learning opportunity to do so though.

* Persist the market data in a PostgreSQL database ([node-postgres](https://github.com/brianc/node-postgres))
* Allow users to set up alerts for a certain price point

## Resources

* [Anatomy of a Modern Javascript Application](https://www.sitepoint.com/anatomy-of-a-modern-javascript-application/)
* [Building a website using Nodejs](https://scotch.io/courses/build-a-nodejs-website/course-introduction)
* [node-postgres documentation](https://node-postgres.com/)
* [Building a Slack Bot with Modern Node.js Workflows](https://scotch.io/tutorials/building-a-slack-bot-with-modern-nodejs-workflows) (A tutorial on a real world use case of nodejs)

**Note: You are not allowed to use a library such as jQuery for traversing/manipulating the DOM.**