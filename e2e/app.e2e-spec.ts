import { RepeidWebConsolePage } from './app.po';

describe('repeid-web-console App', function() {
  let page: RepeidWebConsolePage;

  beforeEach(() => {
    page = new RepeidWebConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
