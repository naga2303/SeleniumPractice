const {By, Builder} = require('selenium-webdriver')
const {Select} = require('selenium-webdriver')
const {assert} = require('assert')

describe("To Verify the dropdowns",()=>{
     let driver;
    before("To initalize the driver",()=>{
        driver = new Builder().forBrowser('chrome').build();
    })
    it("To select the apple",async()=>{
        await driver.get('https://letcode.in/test')
        await driver.findElement(By.xpath("//a[text()='Drop-Down']")).click()
        let dropDown = await driver.findElement(By.id('fruits'))
        let select = new Select(dropDown)
        await select.selectByVisibleText('Apple')

    })
    it("To select and verify the selected text",async()=>{
        
    })
    after("To Close the browser",async()=>{
        await driver.close()
    })
})