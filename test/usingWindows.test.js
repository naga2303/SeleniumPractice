const {By, Builder} = require('selenium-webdriver')

describe.skip("To Test the windows",()=>{
    let driver;
    before("To initialise  the driver",()=>{
        driver = new Builder().forBrowser('chrome').build()
    })
    it("Click home page",async()=>{
        await driver.get('https://letcode.in/windows')
        let mainWindow = await driver.getWindowHandle();
        
        await driver.findElement(By.id('home')).click()
      
        let st = await driver.getAllWindowHandles()
        
      /*  for(let handle of st){
            await driver.switchTo().window(handle);
            let title = await driver.getCurrentUrl();
            console.log('Window title:', title);
            
        }*/

        await driver.switchTo().window(st[1])
        let title = await driver.getCurrentUrl()
        console.log(title)     
        await driver.switchTo().window(st[0])
        await driver.close()
        
    })
})