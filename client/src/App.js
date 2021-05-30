
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Deshbord from './Pages/Deshbord/Deshbord';
import Nav from './components/Navbar/Nav'
import { useState } from 'react';
import CreateRestorent from './Pages/CreateRestorent/CreateRestorent';

function App() {
  const [login, setlogin] = useState(true);

  return (
    <>
      <div className="main_app_Deshbord_foodordering">
        {
          login ?
            <>
              <Nav />
              <div className="Right_side_main_container">
                <Switch >
                  <Route exact path="/" component={Deshbord} />
                </Switch>
              </div>

            </>
            :
            <>
              <CreateRestorent />
            </>
        }
      </div>
    </>
  );
}

export default App;
