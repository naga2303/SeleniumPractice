

const {By,Builder} = require('selenium-webdriver')
const {Select} = require('selenium-webdriver')


describe("to test the tables",async()=>{
    let driver;
    before("To initialize the driver",()=>{
        
        driver = new Builder().forBrowser('chrome').build()
    })
    it.skip("To add all the prices",async()=>{
        await driver.get('https://letcode.in/table')
        let tableHeads = await driver.findElements(By.xpath("//table[@id='shopping']/thead/tr/th"))
        //print the theads
        for(let i=0;i<tableHeads.length;i++){
            console.log(await tableHeads[i].getText())
        }
       
        //To add the values of the rows
        let ar = new Array();
        let tableRows = await driver.findElements(By.xpath("//table[@id='shopping']/tbody/tr"))
        for (let i=0;i<tableRows.length;i++){
            //console.log(await tableRows[i].findElement(By.xpath('td[2]')).getText())
            ar.push(await tableRows[i].findElement(By.xpath('td[2]')).getText())
        }
        let sumTotal=ar.map(Number)
        let totalsum =0;
        for(let i=0;i<sumTotal.length;i++){
            totalsum+=sumTotal[i]
        }
            console.log(totalsum)
    })
    it.skip("Make raj has present",async()=>{
        let rows = await driver.findElements(By.xpath("//table[@id='simpletable']/tbody/tr"))
        
        for(let i=0;i<rows.length;i++){
            let lName = await rows[i].findElement(By.xpath('td[2]')).getText()
            if(lName=="Raj"){
                await rows[i].findElement(By.xpath('td[4]/input')).click()
            }
        }
    })
    it.skip("Sorting array",async()=>{
        await driver.findElement(By.xpath("(//table[contains(@class,'mat-sort')]/thead/th//div[contains(@class,'mat-sort-header-arrow')])[1]/div[1]")).click()
        let sortRows = await driver.findElements(By.xpath("//table[contains(@class,'mat-sort')]/tr"))
        await driver.sleep(3000)
        let ar = new Array()
        for(let i=0;i<sortRows.length;i++){
            let names = await sortRows[i].findElement(By.xpath("td[1]")).getText()
           ar.push(names)
        }
        for(let j=0;j<ar.length;j++){
            if(ar[j]>ar[j+1])
            console.log("not sorted")

        }
    })
    it("Advance Tables row count",async()=>{
        await driver.get('https://letcode.in/advancedtable')
        //To check if the entries changes according to the selection
        let dropdwn = await driver.findElement(By.xpath("//div[@id='advancedtable_length']/label/select"))
        let slct = new Select(dropdwn);
        await slct.selectByVisibleText('10')
        let tableRow = await driver.findElements(By.xpath("//table[@id='advancedtable']/tbody/tr"))
        console.log(tableRow.length)
    })
    it("Advance table row size",async()=>{
        await driver.findElement(By.xpath("//input[@type='search']")).sendKeys('University of Manchester')
        let tableRow = await driver.findElements(By.xpath("//table[@id='advancedtable']/tbody/tr"))
        console.log(tableRow.length)
    })
   /* after('Close the driver',async()=>{
        await driver.close()
    })*/
})