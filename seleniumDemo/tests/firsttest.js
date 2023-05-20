const {Builder,By,Key} = require("selenium-webdriver");
const assert = require ("assert")

async function example() 
{

// first we have to launch the browser
let driver = await new Builder().forBrowser("firefox").build();
//let driver = await new Builder().forBrowser("chrome").build();

// navigate to our application 
await driver.get("https://lambdatest.github.io/sample-todo-app/")
//driver.quit();

// add a node first we need to add and we need to locate 
// we need to locate the filed and add 
await driver.findElement(By.id(“sampletodotext”)).sendKeys(“Learn Selenium”, Key.RETURN);

//assert
let todotext = await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
       return value
});

assert.strictEqual(todotext,"Learn Selenium");

// close the browser 
//await driver.quit();

}
// call our function and it will excute 
example()
