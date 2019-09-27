$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/CS4.feature");
formatter.feature({
  "line": 1,
  "name": "Cart Feature",
  "description": "",
  "id": "cart-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "the one where user moves to cart without adding any item in it",
  "description": "",
  "id": "cart-feature;the-one-where-user-moves-to-cart-without-adding-any-item-in-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Alex has registered into TestMeApp",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Alex search a particular product like headphones",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "try to proceed to payment without adding any item in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "TestMeApp doesn\u0027t display the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Payment.alex_has_registered_into_TestMeApp()"
});
formatter.result({
  "duration": 9974982700,
  "status": "passed"
});
formatter.match({
  "location": "Payment.alex_search_a_particular_product_like_headphones()"
});
formatter.result({
  "duration": 4976626400,
  "status": "passed"
});
formatter.match({
  "location": "Payment.try_to_proceed_to_payment_without_adding_any_item_in_the_cart()"
});
formatter.result({
  "duration": 31329100,
  "status": "passed"
});
formatter.match({
  "location": "Payment.testmeapp_doesn_t_display_the_cart_icon()"
});
formatter.result({
  "duration": 197080900,
  "status": "passed"
});
});