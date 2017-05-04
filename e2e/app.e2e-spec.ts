import { CollectionPage } from './app.po';

describe('collection App', () => {
  let page: CollectionPage;

  beforeEach(() => {
    page = new CollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
