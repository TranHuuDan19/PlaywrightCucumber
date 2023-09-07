import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
import {chromium} from "playwright";

BeforeAll(async ()=> {
    global.broswer = await chromium.launch({
        headless: false,
    })
});

AfterAll(async ()=> {
    await global.broswer.close();
});

Before( async ()=> {
    global.context = await global.broswer.newContext();
    global.page = await global.context.newPage();
});

After (async ()=> {
    await global.page.close();
});