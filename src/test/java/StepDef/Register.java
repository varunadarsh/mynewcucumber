package StepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Register {
	WebDriver driver= null;

	@Given("^the Sign Up is opened$")
	public void the_Sign_Up_is_opened()  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser_driver\\chromedriver_win32\\chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.manage().window().maximize();
	    driver.findElement(By.linkText("SignUp")).click();
	   
	}

	@When("^user enetrs the registration details$")
	public void user_enetrs_the_registration_details()  {
		driver.findElement(By.name("userName")).sendKeys("bhaisnkh");
		driver.findElement(By.id("firstName")).sendKeys("Vrun");
		driver.findElement(By.id("lastName")).sendKeys("Adrsh");
		driver.findElement(By.id("password")).sendKeys("laddlda97");
		driver.findElement(By.name("confirmPassword")).sendKeys("laddlda97");
		WebElement radio1=driver.findElement(By.xpath("/html/body/main/div/div/form/fieldset/div/div[6]/div/div/label/span[1]"));
		radio1.click();
		driver.findElement(By.name("emailAddress")).sendKeys("varun53@gmail.com");
		driver.findElement(By.name("mobileNumber")).sendKeys("9755568173");
		driver.findElement(By.id("dob")).sendKeys("05/02/1998");
		driver.findElement(By.id("address")).sendKeys("Whitefiled");
		Select pc= new Select(driver.findElement(By.id("securityQuestion")));
		pc.selectByIndex(3);
		driver.findElement(By.id("answer")).sendKeys("ghuicc");
		driver.findElement(By.xpath("/html/body/main/div/div/form/fieldset/div/div[13]/div/input[1]")).click();

	}

	@When("^user clicks on Register$")
	public void user_clicks_on_Register()  {
	  
	}
	@Then("^user is redirected to homepage$")
	public void user_is_redirected_to_homepage()  {
	    
	}

}
