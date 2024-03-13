const {By, Builder,Key, WebElement} = require('selenium-webdriver')
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
        let dropdown = await driver.findElement(By.id('superheros'))
       let option1 = await driver.findElement(By.xpath("//option[text()='Ant-Man']"))
       let option2 = await driver.findElement(By.xpath("//option[text()='Batman']"))

       let actions = driver.actions({async:true})
       await actions.keyDown(Key.CONTROL).click(option1).click(option2).keyUp(Key.CONTROL).perform()
     
    })
    it("To select the last option",async()=>{
        let selectLang = await driver.findElement(By.id('lang'))
        let selectMenu = new Select(selectLang);
        
        let options = await driver.findElements(By.xpath("//select[@id='lang']/option"));
        console.log(options.length)
        await selectMenu.selectByIndex(options.length-1)
    })
    after("To Close the browser",async()=>{
        await driver.close()
    })
})