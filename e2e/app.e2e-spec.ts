import { TopoPage } from './app.po';

describe('topo App', function() {
  let page: TopoPage;

  beforeEach(() => {
    page = new TopoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
