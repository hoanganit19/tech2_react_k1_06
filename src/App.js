import './Assets/Css/fonts.css';
import './Assets/Css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import RoutePublic from './Routes/Route';

import GlobalState from './Context/GlobalState';

function App() {
  return (
    <GlobalState>
        <RoutePublic />
    </GlobalState>
  );
}

export default App;
