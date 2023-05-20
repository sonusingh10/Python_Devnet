var webdriver = require ('selenium-webdriver'),
     By = webdriver.By,
     untill = webdriver.until;

     var driver = new webdriver.Builder().forBrowser('chrome').build();
     //var driver = new webdriver.Builder().forBrowser('firefox').build();
     driver.get('http:google.com');
//  driver.quit();




    