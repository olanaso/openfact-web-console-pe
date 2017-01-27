import { OpenfactWebConsolePePage } from './app.po';

describe('openfact-web-console-pe App', function() {
  let page: OpenfactWebConsolePePage;

  beforeEach(() => {
    page = new OpenfactWebConsolePePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('of works!');
  });
});
