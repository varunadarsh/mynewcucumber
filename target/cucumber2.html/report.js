$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/CS3.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User enters Username and Password",
  "description": "",
  "id": "login-feature;user-enters-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the login is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enetrs bhaisnkh  as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters laddlda97 as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will Finds a testMeApp homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Order.the_login_is_opened()"
});
formatter.result({
  "duration": 9835556700,
  "status": "passed"
});
formatter.match({
  "location": "Order.user_enetrs_bhaisnkh_as_username()"
});
formatter.result({
  "duration": 245166000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "97",
      "offset": 19
    }
  ],
  "location": "Order.user_enters_laddlda_as_password(int)"
});
formatter.result({
  "duration": 181353800,
  "status": "passed"
});
formatter.match({
  "location": "Order.user_will_Finds_a_testMeApp_homepage()"
});
formatter.result({
  "duration": 4336708500,
  "status": "passed"
});
});