
//import logo from './logo.svg';
import './App.css';
import Game from './Game.jsx';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  // const [count, setCount] = useState(0);

  // function incrCount() {
  //   setCount(count => count + 1);
  // }

  return (
    <div className="App">
      <Game />
    </div>
  );
};

export default App;
