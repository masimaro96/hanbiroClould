

import TopNav from '../homepage/header-banner/TopNav';
import CloudServices from '../homepage/cloud-services/cloudservices';
import DetailContent from '../homepage/cloud-features/detail-content';
import Cloudconsult from '../homepage/consult/cloudconsult';
import Footer from '../homepage/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <body>
        {/* <CloudServices />
        <CloudFeatures />
        <Cloudconsult /> */}
        <DetailContent />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
