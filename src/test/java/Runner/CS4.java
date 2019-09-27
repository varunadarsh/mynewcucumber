package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(features= "Feature\\CS4.feature",glue= {"StepDef"}, plugin= {"html:target/cucumber3.html"})
public class CS4 {

}
