import './App.css';
import Feed from './mainPage/Feed';
import Header from './mainPage/Header';
import Sidebar from './mainPage/Sidebar';
import Widgets from './mainPage/Widgets';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="appBody">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
