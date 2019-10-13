import AppModel from '../models/AppModel';


export default class App {
  constructor(param) {
    this.clipId = '';
    this.param = param;
    this.link2 = ' https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAFSDB5FBKv0VY3iBiN4bIBw8NHQ69qGkw&id=';
    this.statistics = '&part=snippet,statistics';
    this.link = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAFSDB5FBKv0VY3iBiN4bIBw8NHQ69qGkw&type=video&part=snippet&maxResults=15&q=';
    this.state = {
      url: `${this.link}${this.param}`,
      url2: `${this.link2}${this.clipId}${this.statistics}`,
    };
  }

  get url2() {
    return this.state.url2;
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClipDescription();
    window.console.log(await data);
  }
}
