package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(features= "Feature\\CS2.feature",glue= {"StepDef"}, plugin= {"html:target/cucumber.html"})
public class CS2 {

}
