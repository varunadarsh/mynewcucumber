package Runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith (Cucumber.class)
@CucumberOptions(features= "Feature\\CS1.feature",glue= {"StepDef"}, plugin= {"html:target/cucumber1.html"})
		

public class CS1 {

}

