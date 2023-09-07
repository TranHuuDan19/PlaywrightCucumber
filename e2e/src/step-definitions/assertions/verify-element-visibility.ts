import  {Then} from '@cucumber/cucumber'
import  {expect}  from "@playwright/test"

Then(
    /^The "([^"]*)" should contain the text "([^"]*)"$/,
    async function (elementKey: string, expectedElementText: string){
        console.log(`The ${elementKey} should contain the text ${expectedElementText}`);
        const content = await global.page.textContent("[data-id='contacts']");
        expect(content).toBe(expectedElementText);
    }
)

Then (
    /^The "([^"]*)" should be displayed$/,
    async function(elementKey: string){
        console.log(`the ${elementKey} should be displayed`);
        const  locator = await global.page.locator("[class='testing-talks-logo']");
        await expect(locator).toBeVisible();
    }
)
