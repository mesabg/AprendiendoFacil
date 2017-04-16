import { AprendiendoFacilPage } from './app.po';

describe('aprendiendo-facil App', () => {
  let page: AprendiendoFacilPage;

  beforeEach(() => {
    page = new AprendiendoFacilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
