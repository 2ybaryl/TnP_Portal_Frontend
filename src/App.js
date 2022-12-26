import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Profile from './components/Routes/Profile';
import Resume from './components/Routes/Resume';
import SideNav from './components/commons/SideNav';
import ApplicationDashboard from './components/Routes/ApplicationDashboard';
import AvailableJobs from './components/Routes/AvailableJobs';
import PlacementPolicy from './components/Routes/PlacementPolicy';
import Slogin from './components/Routes/Slogin';
import Student from './components/Routes/Student';
import Sregister from './components/Routes/Sregister';
import Tlogin from './components/Routes/Tlogin';

function App() {
  return (
    <>
    <Router>
      {/* <SideNav /> */}
    <Routes>
                 <Route exact path='/' element={<Slogin/>}></Route>
                 <Route exact path='/jobs' element={<AvailableJobs/>}></Route>
                 <Route exact path='/resume' element={< Resume />}></Route>
                 <Route exact path='/policy' element={<PlacementPolicy/>}></Route>
                 <Route exact path='/profile' element={< Profile />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
