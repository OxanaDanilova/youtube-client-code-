import AppView from './AppView';

describe('AppView.prototype.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should  render correctly', () => {
    const context = {
      titles: [
        'Video 1',
        'Video 2',
        'Video 3',
      ],
    };
    AppView.prototype.render.call(context);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
