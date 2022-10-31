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
import BuilderOnboarding from './pages/BuilderOnboarding';
import EditBuilderConfig from './pages/EditBuilderConfig';
import EditTraitLayering from './pages/EditTraitLayering';
import EditCategoryConflicts from './pages/EditCategoryConflicts';
import EditCategoryConflicts2 from './pages/EditCategoryConflicts2';
import EditBlockedTraits from './pages/EditBlockedTraits';
import EditBlockedTraits2 from './pages/EditBlockedTraits2';

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
             <Route path='/builderhome' element={<BuilderHome/>} />
             <Route path='/pendingtrait' element={<PendingTrait/>} />
             <Route path='/createdtraits' element={<CreatedTraits/>} />
             <Route path='/createdtrait' element={<CreatedTrait/>} />
             <Route path='/builderonboarding' element={<BuilderOnboarding/>} />
             <Route path='/editbuilderconfig' element={<EditBuilderConfig/>} />
             <Route path='/edittraitlayering' element={<EditTraitLayering/>} />
             <Route path='/editcategoryconflicts' element={<EditCategoryConflicts/>} />
             <Route path='/editCategoryconflicts2' element={<EditCategoryConflicts2/>} />
             <Route path='/editblockedtraits' element={<EditBlockedTraits/>} />
             <Route path='/editblockedtraits2' element={<EditBlockedTraits2/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
