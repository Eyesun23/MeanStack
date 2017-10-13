import { AysunnetPage } from './app.po';

describe('aysunnet App', () => {
  let page: AysunnetPage;

  beforeEach(() => {
    page = new AysunnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
