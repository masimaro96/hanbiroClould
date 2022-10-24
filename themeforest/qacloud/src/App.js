
// import './App.css';
import TopNav from './kimquynh/TopNav';
import TopNavButton from './kimquynh/TopNavButton';
import TopNavSlotholder from './kimquynh/TopNavSlotholder';
import Cloudconsult from './luu/cloudconsult';
import CloudFeatures from './hanh/cloud-features';
import CloudServices from './nhuquynh/cloudservices';

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
        <TopNavButton />
        <TopNavSlotholder />
      </header>
      <body>
        <CloudServices />
        <CloudFeatures />
        <Cloudconsult />
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
