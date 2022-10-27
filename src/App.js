import Layout from '../src/components/Layout'
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import TraitShopHome from './pages/TraitShopHome';
import AddTrait from './pages/AddTrait';
import PendingTraits from './pages/PendingTraits';
import BuilderHome from './pages/BuilderHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
             <Route index path='/' element={<LandingPage/>} />
             <Route path='/welcome' element={<WelcomePage/>} />
             <Route path='/traitshop' element={<TraitShopHome/>} />
             <Route path='/addtrait' element={<AddTrait/>} />
             <Route path='/pendingtraits' element={<PendingTraits/>} />
             <Route path='/editbuiderconfig' element={<BuilderHome/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
