$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/CS2.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successful Login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message  displayed Login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "bhaisnkh",
        "laddlda97"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Successful Login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Lalitha\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message  displayed Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginn.user_open_the_application()"
});
formatter.result({
  "duration": 9508143300,
  "status": "passed"
});
formatter.match({
  "location": "Loginn.user_click_on_sign_in_link()"
});
formatter.result({
  "duration": 1691241200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 27
    }
  ],
  "location": "Loginn.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1660022600,
  "status": "passed"
});
formatter.match({
  "location": "Loginn.message_displayed_Login_successfully()"
});
formatter.result({
  "duration": 1145463800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6BD8NK2\u0027, ip: \u0027192.168.19.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.16\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:59408}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8c767f21fdbb11bd64f6a09479668515\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat StepDef.Loginn.message_displayed_Login_successfully(Loginn.java:42)\r\n\tat ✽.Then Message  displayed Login successfully(Feature/CS2.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"bhaisnkh\" and \"laddlda97\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message  displayed Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginn.user_open_the_application()"
});
formatter.result({
  "duration": 12671100200,
  "status": "passed"
});
formatter.match({
  "location": "Loginn.user_click_on_sign_in_link()"
});
formatter.result({
  "duration": 2431649100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhaisnkh",
      "offset": 13
    },
    {
      "val": "laddlda97",
      "offset": 28
    }
  ],
  "location": "Loginn.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1453494100,
  "status": "passed"
});
formatter.match({
  "location": "Loginn.message_displayed_Login_successfully()"
});
formatter.result({
  "duration": 96094100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6BD8NK2\u0027, ip: \u0027192.168.19.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.16\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:57014}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 78e6fb29a12b44775ef15e842afccde8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat StepDef.Loginn.message_displayed_Login_successfully(Loginn.java:42)\r\n\tat ✽.Then Message  displayed Login successfully(Feature/CS2.feature:6)\r\n",
  "status": "failed"
});
});