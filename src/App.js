
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProviderDirectory from './pages/ProviderDirectory/ProviderDirectory';
import ProviderProfile from './pages/ProviderProfile/ProviderProfile';
// import {fetchProviders, fetchProvider} from "./api";

function App() {
  // Samples of API requests
  // fetchProviders().then(console.log)
  // fetchProvider("1").then(console.log)

  return (
    <div className="App">
            <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {ProviderDirectory} />
          <Route path = "/:id" exact component = {ProviderProfile} />          
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
