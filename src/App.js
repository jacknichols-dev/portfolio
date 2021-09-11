import "./App.scss";
import { DataProvider } from './DataProvider';

import Header from "./components/header/header.comp";
import HomePage from "./pages/Home.comp";
import AboutPage from "./pages/About.comp";
import ResumePage from "./pages/Resume.comp";
import ContactPage from "./pages/Contact.comp";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./components/footer/footer.comp";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/resume" component={ResumePage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
