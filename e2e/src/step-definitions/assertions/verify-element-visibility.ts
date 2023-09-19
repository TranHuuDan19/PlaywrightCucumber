import  { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from "../setUp/world";
import { waitFor} from "../../support/wait-for-behavior"

Then (
    /^The "([^"]*)" should( not)? be displayed$/,
    async function(elementKey: ElementKey, negate: boolean){
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should ${negate?'not':''}be displayed`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const locator = page.locator(elementIdentifier);

        await waitFor( async () => {
            let isElementVisible: boolean;
            isElementVisible = (await page.$(elementIdentifier)) != null;
            return isElementVisible === !negate ;
        });
    }
)
