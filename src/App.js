import Layout from '../src/components/Layout'
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import TraitShopHome from './pages/TraitShopHome';
import AddTrait from './pages/AddTrait';
import PendingTraits from './pages/PendingTraits';
import BuilderHome from './pages/BuilderHome';
import PendingTrait from './pages/PendingTrait';
import CreatedTraits from './pages/CreatedTraits';
import CreatedTrait from './pages/CreatedTrait';

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
             <Route path='/pendingtrait' element={<PendingTrait/>} />
             <Route path='/createdtraits' element={<CreatedTraits/>} />
             <Route path='/createdtrait' element={<CreatedTrait/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
