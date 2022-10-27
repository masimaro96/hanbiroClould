
import TopNav from '../homepage/header-banner/TopNav';
import CloudServices from '../homepage/cloud-services/cloudservices';
import CloudFeatures from '../homepage/cloud-features/cloud-features';
import Cloudconsult from '../homepage/consult/cloudconsult';
import Footer from '../homepage/footer/Footer';
import Sidebar from '../detailspage/Sidebar/Sidebar';
import HomePage from "../homepage";
import Pagedetails from "../detailspage";

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <body>
        <Sidebar />
        {/* <CloudServices />
        <CloudFeatures />
        <Cloudconsult /> */}
      </body>
      <footer>
        <Footer />
      </footer>
      <HomePage />
      <Pagedetails />
    </div>
  );

}

export default App;
