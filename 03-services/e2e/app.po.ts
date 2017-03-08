import { browser, element, by } from 'protractor';

export class ServicesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('svc-root h1')).getText();
  }
}
