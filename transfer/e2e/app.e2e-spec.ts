import { TestWorkAppPage } from './app.po';

describe('test-work-app App', () => {
  let page: TestWorkAppPage;

  beforeEach(() => {
    page = new TestWorkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
