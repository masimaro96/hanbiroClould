
// import './App.css';
import TopNav from './kimquynh/TopNav';
import TopNavButton from './kimquynh/TopNavButton';
import TopNavSlotholder from './kimquynh/TopNavSlotholder';
import Cloudconsult from './luu/cloudconsult';
import Grids from './hanh/cloud-features';
import CloudServices from './nhuquynh/cloudservices';

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <body>
        <CloudServices />
        <Cloudconsult />
        <Grids />
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
