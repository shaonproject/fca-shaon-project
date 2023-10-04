[![Socket Badge](https://socket.dev/api/badge/npm/package/fca-horizon-remastered)](https://socket.dev/npm/package/fca-horizon-remastered)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/JustKemForFun/JustKemForFun)

## Important !

[ ENG ]: This package require NodeJS 14.17.0 to work properly.

[ VIE ]: Gói này yêu cầu NodeJS 14.17.0 để hoạt động bình thường.

## Notification !

+ Original Project(Deprecated): https://github.com/Schmavery/facebook-chat-api
+ This is The Defunct Project https://github.com/KanzuXHorizon/Fca-Horizon-Remastered and Redeveloped By KanzuXHorizon

## Support Language :

+ English, VietNamese, Tagalog, Cebuano(Bisaya)

# Api For ChatBot Messenger

Facebook already exists and allows users to create Api for Chatbots 😪 Here => [Here](https://developers.facebook.com/docs/messenger-platform).

### This Api Can Make You Payy Acc Like You Never Had Acc, Please Pay Attention =))

Note ! If You Want To Use This Api Please See Document At [Here](https://github.com/Schmavery/facebook-chat-api).

## Download

If You Want To Use It, Download It By:
```bash
npm i fca-horizon-remastered
```
or
```bash
npm install fca-horizon-remastered
```

It Will Download To node_modules (Your Lib) - Note Replit Will Not Show Anywhere To Find 😪

### Download Latest Version Or Update

If You Want To Use The Latest Or Updated Version Then Go To Terminal Or Command Promt Type:
```bash
npm install fca-horizon-remastered@latest
```
Or
```bash
npm i fca-horizon-remastered@latest
```

## If You Want To Test Api

The benefit of this is that you won't waste time paying and having an account 😪
Please Use With Test Account => [Facebook Whitehat Accounts](https://www.facebook.com/whitehat/accounts/).

## Using

```javascript
const login = require("fca-horizon-remastered"); // get it from lib

// log in
login({email: "Gmail Account", password: "Your Facebook Password"}, (err, api) => {

     if(err) return console.error(err); // error case

     // create a bot that automatically imitates you:
     api.listenMqtt((err, message) => {
         api.sendMessage(message.body, message.threadID);
     });

});
```

As a result, it will imitate you as shown below:
<img width="517" alt="screen shot 2016-11-04 at 14 36 00" src="https://cloud.githubusercontent.com/assets/4534692/20023545/f8c24130-a29d-11e6-9ef7-47568bdbc1f2 .png">

If You Want Advanced Use Then Use The Bot Types Listed Above!

## List

You Can Read Full Api At => [here](DOCS.md).

## Settings For Mirai:

You Need To Go To File Mirai.js, Then Find Line
```js
     var login = require('depend on bot');
     /* Maybe :
         var login = require('@maihuybao/fca-Unofficial');
         var login = require('fca-xuyen-get');
         var login = require('fca-unofficial-force');
     ...
     */
```

And Replace It With:

```js
     var login = require('fca-horizon-remastered')
```

After that, run normally!

## Self-study

If You Want To Research Or Create Your Own Bot, Go To This To Read Its Functions And How To Use => [Link](https://github.com/Schmavery/facebook-chat-api#Unofficial %20Facebook%20Chat%20API)

------------------------------------

### Save Login Information.

To Save, You Need 1 Apstate Type (Cookie, etc,..) To Save Or Use Login Code As Above To Log In!

And this mode is already available in some Vietnamese bots, so you can rest assured!

__Instructions With Appstate__

```js
const fs = require("fs");
const login = require("fca-horizon-remastered");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"}; // account information

login(credentials, (err, api) => {
     if(err) return console.error(err);
     // log in
     fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState(), null,'\t')); //create appstate
});
```

Or Easier (Professional) You Can Use => [c3c-fbstate](https://github.com/c3cbot/c3c-fbstate) To Get Fbstate And Rename It Back To Apstate! (appstate.json)

------------------------------------

## FAQS

FAQS => [Link](https://github.com/Schmavery/facebook-chat-api#FAQS)