import {Given} from '@cucumber/cucumber'

Given(
    /^I am on the "([^"]*)" page$/,
    async function (pageID: string) {
        console.log(`I am on the ${pageID} page`);
        await global.page.goto("http://localhost:3000")
    }
)