

// Your test code goes here
import { expect } from 'chai';
//import { should  from 'chai';
import { By, Builder,Key } from 'selenium-webdriver';

describe.skip("To test the various input locators in the leetcode",async()=>{
    let driver;
    before("To initialize the driver",async()=>{
        driver = await new Builder().forBrowser('chrome').build();
    })
    it("To navigate and provide the values using sendKeys", async()=>{
        await driver.get('https://letcode.in/test')

        await driver.findElement(By.xpath("//a[text()='Edit']")).click()

        //Assert
        let labelValue = await driver.findElement(By.xpath("(//label[contains(@class,'label')])[1]")).getText().then(value =>{return value})
         expect(labelValue).to.be.equal('Enter your full Name')
        await driver.findElement(By.id('fullName')).sendKeys('Testing',Key.ENTER)
        let enteredValue = await driver.findElement(By.id('fullName')).getText().then(value => {return value})
        
    })
    it("To Append the test",async()=>{
        await driver.findElement(By.id('join')).sendKeys('Appended',Key.ENTER)
    })
    it("To find what inside the text",async()=>{
        let getMe = await driver.findElement(By.xpath("(//input[contains(@class,'input')])[3]")).getAttribute('value')
        expect(getMe).to.be.equal('ortonikc')
    })
    it('To Confirm edit is disabled',async()=>{
       let inputEle= await driver.findElement(By.id('noEdit'))
       let isEnabled = await inputEle.isEnabled()
       expect(isEnabled).not.to.be.true
    })
    it('To find whether the input field is readOnly',async()=>{
        let inputReadOnly = await driver.findElement(By.id('dontwrite'))
        let isReadOnly = await inputReadOnly.getAttribute('readonly')
        expect(isReadOnly).to.exist
    })
    after(async()=>{
        driver.quit()
    })
})