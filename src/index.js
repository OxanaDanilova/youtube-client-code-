import App from './controllers/App';
import './views/AppView/app-view.css';


let searchPar = 'js';


function startRequest() {
  searchPar = document.getElementById('searchLine').value;
  const app = new App(searchPar);
  app.start();
}


function startDraw() {
  const wrapperSearch = document.createElement('div');
  wrapperSearch.className = 'wrapperSearch';
  document.body.appendChild(wrapperSearch);

  const search = document.createElement('input');
  search.setAttribute('type', 'text');
  search.setAttribute('id', 'searchLine');
  search.className = 'searchLine';
  wrapperSearch.appendChild(search);
  search.addEventListener('change', startRequest);
}

startDraw();
