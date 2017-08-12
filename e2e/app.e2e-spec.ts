import { FileManagerPage } from './app.po';

describe('file-manager App', () => {
  let page: FileManagerPage;

  beforeEach(() => {
    page = new FileManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
