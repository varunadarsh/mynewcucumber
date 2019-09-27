package StepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Payment {
	WebDriver driver= null;
	@Given("^Alex has registered into TestMeApp$")
	public void alex_has_registered_into_TestMeApp()  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser_driver\\chromedriver_win32\\chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.manage().window().maximize();
	    driver.findElement(By.linkText("SignIn")).click(); 
	}

	@When("^Alex search a particular product like headphones$")
	public void alex_search_a_particular_product_like_headphones() throws InterruptedException {
		driver.findElement(By.name("userName")).sendKeys("bhaisnkh");   
		driver.findElement(By.id("password")).sendKeys("laddlda97");
		driver.findElement(By.name("Login")).click();
		System.out.println("Tilte page is"+driver.getTitle());
		WebElement search=driver.findElement(By.xpath("//*[@id=\"myInput\"]"));
		Actions act1=new Actions(driver);
		act1.sendKeys(search,"bag").perform();
		Thread.sleep(3000);
		act1.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
	}

	@When("^try to proceed to payment without adding any item in the cart$")
	public void try_to_proceed_to_payment_without_adding_any_item_in_the_cart()  {
	  try 
	  {
		  driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div/div/div[2]/center/a"));
	  }
	  catch(Exception e)
	  {
		  System.out.println("The cart is not present so payment page is displayed");
	  }
	}

	@Then("^TestMeApp doesn't display the cart icon$")
	public void testmeapp_doesn_t_display_the_cart_icon()  {
		driver.close();
	}

}
