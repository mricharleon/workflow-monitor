import { ProjectXPage } from './app.po';

describe('project-x App', () => {
  let page: ProjectXPage;

  beforeEach(() => {
    page = new ProjectXPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
