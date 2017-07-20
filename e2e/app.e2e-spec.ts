import { Angular4DemoPage } from './app.po';

describe('angular4-demo App', () => {
  let page: Angular4DemoPage;

  beforeEach(() => {
    page = new Angular4DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
