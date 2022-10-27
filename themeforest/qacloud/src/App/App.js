

import TopNav from '../homepage/header-banner/TopNav';
import CloudServices from '../homepage/cloud-services/cloudservices';
import CloudFeatures from '../homepage/cloud-features/cloud-features';
import Cloudconsult from '../homepage/consult/cloudconsult';
import Footer from '../homepage/footer/Footer';
import Sidebar from '../detailspage/Sidebar/Sidebar';

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
    </div>
  );
}

export default App;
