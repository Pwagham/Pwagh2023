
import './App.css';

// import Sign from './Component/Sign';

import Service from './Component/Service';

// import Home from './Component/Home';

// import Call_me from './Component/Call_me';


// import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

// import About from './Component/About';



function App() {


  return (
    <div className='home1 '>

<marquee className="marquee"> &#128525; &#128515; Happy new year 2023 &#128515; &#128525;</marquee>


      {/* <Router> */}
      {/* <ol className='ol font-effect-neon'> */}


      

        {/* <li id='lih'><Link to="/">Home</Link></li>
        <li id='lia'><Link to="/About">About</Link></li>
        <li id='lis'><Link to="/Service">Service</Link></li>
        <li id='lic'><Link to="/Call_me">Call me</Link></li> */}
      {/* </ol> */}

      {/* <Routes> */}
     
      {/* <Route path="About" element={<About />}> </Route>
      <Route path="/" element={<Home />}> </Route>
      <Route path="Service" element={<Service />}> </Route>
      <Route path="Call_me" element={<Call_me />}> </Route> */}

      
      {/* </Routes>

      </Router> */}


  

      {<Service />}
     

  
           
    </div>

  );
}

export default App;
