//npm i puppeteer
let puppeteer = require("puppeteer");

//create headless browser
let browserStartPromise = puppeteer.launch({
    //visible
    headless: false,

    // tyepe delay 1 sec
    // slowmo: 1000,

    defaultViewport : null,
    // setting
    args: ["--start-maximized", "--disable-notifications"]
});

let page , browser;
browserStartPromise
    .then(function(browserObj){
        console.log("Browser opened");
        //new tab
        browser = browserObj;
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    
    }).then(function (newTab){
        page = newTab;
        console.log("new tab opened");
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function(){
        console.log("google home page opened");
        //keyboard --> data entry
        let waitForTypingPromise = page.type("input[title='Search']" , "whatsapp web");
        return waitForTypingPromise;
    }).then(function(){
        //keyboard --> specific keys
        let pressEnterPromise = page.keyboard.press('Enter',{delay: 10});
        return pressEnterPromise; 
    }).then(function (){
        console.log("wait for first elements on google page to be visible");
        let waitForElementPromise = page.waitForSelector(".LC20lb.DKV0Md",{visible: true});
        return waitForElementPromise;
    }).then(function (){
        //mouse function
        let elemClickPromise = page.click(".LC20lb.DKV0Md");
        return elemClickPromise;
    })
    

    .then(function (){
        console.log("wait for elements to be visible on whatsapp login page");
        let waitForLoginElementPromise = page.waitForSelector("#app > div._1ADa8.nMnIl.app-wrapper-web.font-fix.os-win > div > div.landing-window > div.landing-main > div > div._25pwu > div > canvas",{visible: true});
        return waitForLoginElementPromise;
    })
    .then(function () {
        let waitPromise = page.waitFor(4000);
        return waitPromise;
    })
    .then(function (){
        console.log("wait for whatsapp search elements to be visible");
        let waitForSearchElementPromise = page.waitForSelector("#side > div.uwk68 > div > label > div > div._13NKt.copyable-text.selectable-text",{visible: true});
        return waitForSearchElementPromise;
    }).then(function (){
        console.log("whastapp search selector page opened");
        //keyboard --> data entry
        let waitForTypingPromise = page.type("#side > div.uwk68 > div > label > div > div._13NKt.copyable-text.selectable-text" , "Sudhanshu");
        // let waitForTypingPromise = page.type("#side > div.uwk68 > div > label > div > div._13NKt.copyable-text.selectable-text" , "😈P👹S👽P💀N🤖P😈");
        return waitForTypingPromise;
    })
    .then(function (){
        console.log("wait for search result for sudhanshu elements to be visible");
        let waitForSudElementPromise = page.waitForSelector("[title='Sudhanshu Jio']",{visible: true});
        // let waitForSudElementPromise = page.waitForSelector("[title='😈P👹S👽P💀N🤖P😈']",{visible: true});
        return waitForSudElementPromise;
    }).then(function (){
        //mouse function
        let elemClickPromise = page.click("[title='Sudhanshu Jio']");
        // let elemClickPromise = page.click("[title='😈P👹S👽P💀N🤖P😈']");
        return elemClickPromise;
    })
    .then(function(){
        console.log("whatsapp sudhanshu contact page opened");
        //keyboard --> data entry
        let waitForTypingPromise = page.type("#main > footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > div > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text" , "Hi from JavaScript puppeteer 😍😁");
        return waitForTypingPromise;
    }).then(function (){
        console.log("wait for sendKey elements to be visible");
        let waitForSendKeyElementPromise = page.waitForSelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > div > div._3HQNh._1Ae7k > button",{visible: true});
        return waitForSendKeyElementPromise;
    }).then(function (){
        //mouse function
        let sendKeyClickPromise = page.click("#main > footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > div > div._3HQNh._1Ae7k > button");
        return sendKeyClickPromise;
    })
