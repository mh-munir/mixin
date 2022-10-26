import Layout from '../src/components/Layout'
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import TraitShopHome from './pages/TraitShopHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
             <Route index path='/' element={<LandingPage/>} />
             <Route path='/welcome' element={<WelcomePage/>} />
             <Route path='/traitshop' element={<TraitShopHome/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;