

import TopNav from '../homepage/header-banner/TopNav';
import CloudServices from '../homepage/cloud-services/cloudservices';
import CloudFeatures from '../homepage/cloud-features/cloud-features';
import Cloudconsult from '../homepage/consult/cloudconsult';
import cardluu from '../homepage/consult/cardluu';
import LUU from '../homepage/consult/kimquynh';
import Luucloudtask2 from '../homepage/consult/luucloud2';
import Luucloud3 from '../homepage/consult/luucloud3';
import Luucloud4 from '../homepage/consult/luucloud4';
import Luucloud5 from '../homepage/consult/luucloud5';
import Luucloudtask3 from '../homepage/consult/cardluu';
import Footer from '../homepage/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        {/* <TopNav /> */}
      </header>
      <body>
        {/* <LUU /> */}
        {/* <CloudServices />
        <CloudFeatures /> */}
        <Cloudconsult />
        {/* <Luucloudtask2 /> */}
        {/* <Luucloud3/> */}
        {/* <Luucloud4/> */}
        <Luucloud5/>
        {/* <Luucloudtask3 /> */}
        
      </body>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
