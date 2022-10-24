
// import './App.css';
import TopNav from './kimquynh/TopNav';
import TopNavButton from './kimquynh/TopNavButton';
import TopNavSlotholder from './kimquynh/TopNavSlotholder';
import Cloudconsult from './luu/cloudconsult';
import Grids from './hanh/cloud-features';
import CloudServices from './nhuquynh/cloudservices';
import Footer from './ngoc/Footer';

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
        <Cloudconsult />
        <Grids />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
