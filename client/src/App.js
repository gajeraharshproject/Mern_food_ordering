
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Deshbord from './Pages/Deshbord/Deshbord';
import Nav from './components/Navbar/Nav'
import { useEffect } from 'react';
import CreateRestorent from './Pages/CreateRestorent/CreateRestorent';
import Profile from './Pages/Profile/Profile';
import Records from './Pages/Records/Records';
import Fooditem from './Pages/FoodItem./Fooditem';
import {useSelector,useDispatch} from "react-redux"



import {checktoken} from "./Helper/Helper"
function App() {

  const {login,loding} = useSelector(state => state.userreducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checktoken()) 
  },[dispatch])

  return (
    <>
      <div className="main_app_Deshbord_foodordering">
        {
          loding?
               <div className="loding_div">
                    <h1>Loding....</h1>
               </div>
        :  login ?
            <>
              <Nav />
              <div className="Right_side_main_container">
                <Switch >
                  <Route exact path="/" component={Deshbord} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/records" component={Records} />
                  <Route exact path="/fooditems" component={Fooditem} />
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
