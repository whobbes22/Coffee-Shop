import './App.css';
import CoffeeControl from './CoffeeControl';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
    <div class="container">
      <Header />
      <CoffeeControl></CoffeeControl>
    </div>
  </React.Fragment>
  );
}

export default App;
