
import { browser, element, by, ExpectedConditions } from 'protractor';

export class OccurrenceChart {

    async navigateTo() {
        browser.waitForAngularEnabled(true);
        return browser.get(browser.baseUrl);
    }
    
    getPlottedSeriesNames() {
        return element.all(by.css('.highcharts-legend-item>text>tspan')).getText();
    }

    async hoverOverASeries() {
       const webElement = await element(by.css('.highcharts-point')).getWebElement();
        return browser.actions().mouseMove(webElement).mouseMove(webElement).perform();
    }

    // getTooltip() {
    //     const tooltip = element(by.css('.highcharts-tooltip-box>text>tspan'));
    //     return browser.wait(ExpectedConditions.presenceOf(tooltip)).then(() => {
    //         return tooltip.getText();
    //     });
    // }

    getTooltip() {
        return element(by.css('.highcharts-tooltip-box+text>tspan')).getText();
    }
}
