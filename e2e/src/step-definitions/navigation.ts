import { Given } from '@cucumber/cucumber';
import { PageId } from '../env/global'
import { navigateToPage } from "../support/navigation-behavior";

Given(
    /^I am on the "([^"]*)" page$/,
    async function (pageID: PageId) {
        const {
            screen: { page },
            globalVariables,
            globalConfig,
        } = this;
        console.log(`I am on the ${pageID} page`);

        globalVariables.currentScreen = pageID;
        await navigateToPage(page, pageID, globalConfig);
    }
)