package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(features= "Feature\\CS3.feature",glue= {"StepDef"}, plugin= {"html:target/cucumber2.html"})
public class CS3 {

}
