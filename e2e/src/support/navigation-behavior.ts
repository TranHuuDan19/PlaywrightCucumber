import { Page } from 'playwright'
import { GlobalConfig, PageId } from "../env/global";

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig
): Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost'
    } = process.env

    const hostPath = hostsConfig[`${hostName}`];
    console.log('hostPath: ', hostPath);

    const url = new URL(hostPath);
    console.log("url: ", url);
    console.log("pageId: ", pageId)

    const pagesConfigItem = pagesConfig[pageId];
    console.log("pagesConfigItem: ", pagesConfigItem)

    url.pathname = pagesConfigItem.route;
    console.log("url.pathname: ", url.pathname);

    await page.goto(url.href)
}