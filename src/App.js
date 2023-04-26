import './App.css';
import HomePage from './container/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatMsg from './component/chatMsg/chatMsg';
import './App.css';
import './font.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QRCode from './container/qrCode/QRCode';
import QRCodeSuccess from './container/qrCodeSuccess/QRCodeSuccess';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/info/:aptId">
          <div>
            <QRCode/>
          </div>
        </Route>
        <Route exact path="/info/:aptId/success">
          <div>
            <QRCodeSuccess/>
          </div>
        </Route>
        <Route path="/">
          <div id="app">
            <div>
              <HomePage />
            </div>
            <ChatMsg />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
