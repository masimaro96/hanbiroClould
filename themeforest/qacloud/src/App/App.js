

import TopNav from '../homepage/header-banner/TopNav';
import TrafficFee from '../homepage/header-banner/traffic-fee ';
import ServerPricing from '../homepage/header-banner/server-pricing ';
import CloudServices from '../homepage/cloud-services/cloudservices';
import CloudFeatures from '../homepage/cloud-features/cloud-features';
import Cloudconsult from '../homepage/consult/cloudconsult';
import Footer from '../homepage/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        {/* <TopNav /> */}
        <ServerPricing />
        <TrafficFee />
      </header>
      <body>
        <CloudServices />
        <CloudFeatures />
        <Cloudconsult />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
