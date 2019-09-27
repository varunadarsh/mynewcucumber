package StepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginn {
	WebDriver driver= null;
	@Given("^user open the application$")
	public void user_open_the_application()  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser_driver\\chromedriver_win32\\chromedriver.exe");
		 driver= new ChromeDriver();
		    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		    driver.manage().window().maximize();
	}

	@When("^user click on sign in link$")
	public void user_click_on_sign_in_link() {
		 driver.findElement(By.linkText("SignIn")).click();
		 System.out.println("Tilte page is"+driver.getTitle());
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)  {

		driver.findElement(By.name("userName")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.name("Login")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@href='logout.htm']")).click();
		driver.close();
	}

	@Then("^Message  displayed Login successfully$")
	public void message_displayed_Login_successfully(){
		System.out.println("logout page"+driver.getTitle());


}
}