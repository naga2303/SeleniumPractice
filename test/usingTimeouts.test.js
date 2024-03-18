//implicit wait
await driver.manage().setTimeouts({ implicit: 10000 });

driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

//Explicit waits
alertIsPresent() -  await driver.wait(until.alertIsPresent(), 5000);
------------------------------------------------------------------------
elementSelectionStateToBe() -  const wait = new WebDriverWait(driver, 10); // Set a timeout of 10 seconds
await wait.until(ExpectedConditions.elementSelectionStateToBe(checkbox, true));
------------------------------------------------------------------------------
elementToBeClickable() - await wait.until(ExpectedConditions.elementToBeClickable(button));
--------------------------------------------------------------
elementToBeSelected() -            await driver.wait(until.elementToBeSelected(checkbox), 5000);


frameToBeAvaliableAndSwitchToIt() -         await driver.wait(until.frameToBeAvailableAndSwitchToIt('frameNameOrId'), 5000); // Replace 'frameNameOrId' with the name or id of the frame

invisibilityOfTheElementLocated() -         await driver.wait(until.invisibilityOfElementLocated(By.id('elementId')), 5000); // Replace 'elementId' with the actual id of the element

invisibilityOfElementWithText() -         await driver.wait(until.invisibilityOfElementWithText(By.id('elementId'), 'Element Text'), 5000);

presenceOfAllElementsLocatedBy() -         let elements = await driver.wait(until.presenceOfAllElementsLocatedBy(By.className('someClass')), 5000);

presenceOfElementLocated() -         let element = await driver.wait(until.presenceOfElementLocated(By.id('elementId')), 5000);

textToBePresentInElement() -         await driver.wait(until.textToBePresentInElement(driver.findElement(By.id('elementId')), 'Expected Text'), 5000);

textToBePresentInElementLocated() -  await driver.wait(until.textToBePresentInElementLocated(By.id('elementId'), 'Expected Text'), 5000);

textToBePresentInElementValue() -    await driver.wait(until.textToBePresentInElementValue(driver.findElement(By.id('elementId')), 'Expected Text'), 5000);

titleIs() -         await driver.wait(until.titleIs('Expected Title'), 5000);

titleContains()- await driver.wait(until.titleContains('Expected Substring'), 5000);

visibilityOf() -         await driver.wait(until.visibilityOf(driver.findElement(By.id('elementId'))), 5000);

visibilityOfAllElements() -         await driver.wait(until.visibilityOfAllElements(driver.findElements(By.className('elementClass'))), 5000);

visibilityOfAllElementsLocatedBy() -         await driver.wait(until.visibilityOfAllElementsLocatedBy(By.className('elementClass')), 5000);

visibilityOfElementLocated() -    await driver.wait(until.visibilityOfElementLocated(By.id('elementId')), 5000);


//Fluent wait
Wait wait = new FluentWait(WebDriver reference)
.withTimeout(timeout, SECONDS)
.pollingEvery(timeout, SECONDS)
.ignoring(Exception.class);