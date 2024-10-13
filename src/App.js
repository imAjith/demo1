import logo from './logo.svg';
import './App.scss';
import './styles';

function App() {
  return (
    <div className="App">
        <div id="nav">
	        <ul>
		          <li><a href="#">Test 1</a></li>
		          <li><a href="#">Test 2</a></li>
		          <li><a href="#">Test 3</a></li>
	        </ul>
        </div>
        <div id="teste" className="front"></div>
        <div id="panner" data-cursor="stretch" className="panner"><div className="front disable-all">&larr; pan me &rarr;</div></div>
        <div id="pointer"></div>
    </div>
  );
}

export default App;
