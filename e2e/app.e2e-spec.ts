import { MontelecAngularPage } from './app.po';

describe('montelec-angular App', () => {
  let page: MontelecAngularPage;

  beforeEach(() => {
    page = new MontelecAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
