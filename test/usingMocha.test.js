const { Builder } = require("selenium-webdriver")


describe.skip("To test the selenium Using Mocha",()=>{

    let driver;
    before(async()=>{
        driver = await new Builder().forBrowser('chrome').build()
    })
    it("To test the driver navigate",async()=>{
        
        await driver.get('https://www.npmjs.com/package/mocha')
    })
    after(async()=>{
        await driver.quit()
    })
})