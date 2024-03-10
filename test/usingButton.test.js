const {assert} = require('assert')
const {By, Builder,Key} = require('selenium-webdriver')

describe.skip("To verify the button",()=>{
    let driver;
    before("To initialise the driver",async()=>{
        driver = new Builder().forBrowser('chrome').build()
    })
    it('To click on the button site and click "Go to Home" button',async()=>{
        await driver.get('https://letcode.in/test')
        await driver.findElement(By.xpath('//a[text()="Click"]')).click()
        await driver.findElement(By.xpath('//button[text()="Goto Home"]')).click()
        await driver.get('https://letcode.in/test')
        await driver.findElement(By.xpath('//a[text()="Click"]')).click()
    })
    it("To find the x and y co-ordinates of a button",async()=>{
        let buttonLocation = await driver.findElement(By.xpath("//button[text()='Find Location']"))
        let locButton = await buttonLocation.getRect()
        console.log(locButton.x+" Rectangle: "+locButton.y)
    })
    it("To find the color of a button",async()=>{
        let colorButton = await driver.findElement(By.id('color'))
        let colors = await colorButton.getCssValue('color')
        console.log("Colors: "+colors)
    })
    it("Find the height & width of the buton",async()=>{
        let heightButton = await driver.findElement(By.id('property'))
        let height = await heightButton.getRect()
        console.log(height.height+" : "+height.width)
    })
    it("To find the button if disabled",async()=>{
        let isDisabled = await driver.findElement(By.id('isDisabled'))
        await isDisabled.isEnabled()?console.log('true'):console.log('false')
    })
    it("Click and hold button",async()=>{
        let buttonHold = await driver.findElement(By.id('isDisabled'))
        let actions = driver.actions({async:true})
        await actions.move({origin:buttonHold}).perform()
        await actions.press().perform();
        await actions.release().perform();

    })
    after("Closing",()=>{
        driver.quit()
    })
})