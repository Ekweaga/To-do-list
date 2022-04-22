import logo from './logo.svg';
import './App.css';

import Home from './home'
import Todos from './todos'
import {Switch,BrowserRouter,Link,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <div className="App">
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="jh" exact component={Home} />
        <Route path="" exact component={Todos}/>
      </Switch>

      <br/><br/>
    
      
      
      </BrowserRouter>
      <footer>
        TODOAPP
      </footer>
    

    </div> 
    </div>
   
    
    </>
  );
}

export default App;
