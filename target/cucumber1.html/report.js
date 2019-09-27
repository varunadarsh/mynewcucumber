$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/CS1.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up Feature",
  "description": "",
  "id": "sign-up-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User create a new account",
  "description": "",
  "id": "sign-up-feature;user-create-a-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the Sign Up is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enetrs the registration details",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is redirected to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.the_Sign_Up_is_opened()"
});
formatter.result({
  "duration": 14712587300,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_enetrs_the_registration_details()"
});
formatter.result({
  "duration": 5529249100,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_clicks_on_Register()"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_is_redirected_to_homepage()"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
});