import {Given} from '@cucumber/cucumber'

Given(
    /^I am on the "([^"]*)" page$/,
    async function (pageID: string) {
        const {
            screen: { page },
        } = this;
        console.log(`I am on the ${pageID} page`);
        await page.goto("http://localhost:3000")
    }
)