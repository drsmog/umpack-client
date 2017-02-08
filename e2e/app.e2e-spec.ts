import { UmpasClientPage } from './app.po';

describe('umpas-client App', function() {
  let page: UmpasClientPage;

  beforeEach(() => {
    page = new UmpasClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
