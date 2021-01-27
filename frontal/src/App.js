import "./App.css";
import Counter from "./Components/Counter";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderFile from "./Components/HeaderFile";
import UseCase from "./Components/UseCase";
import FeedBack from "./Components/FeedBack";
import { GlobalProvider } from "./Components/GlobalContext";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <HeaderFile />
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route exact path="/usecase" component={UseCase} />
            <Route exact path="/feedback" component={FeedBack} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
