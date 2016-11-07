import { OpenfactWebConsolePage } from './app.po';

describe('openfact-web-console App', function() {
  let page: OpenfactWebConsolePage;

  beforeEach(() => {
    page = new OpenfactWebConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
