import { Route, Routes } from 'react-router-dom';
import { Products, Footer, Header, Dashboard, Learn, Support, Download, Safety, Signup, Onboarding, Login } from './components';
import './App.css'
import Premiumfetures from './components/Primium features';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/action/userAuth.action';
import Protected from './HOC';


function App() {
  const auth = useSelector(state => state.userAuth);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Protected />} >
          <Route path='/onboarding' element={<Onboarding />} />
        </Route>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/safety' element={<Safety />} />
        <Route path='/support' element={<Support />} />
        <Route path='/download' element={<Download />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Premiumfeatures' element={<Premiumfetures />} />

        <Route path='/login' element={<Login />} />
      </Routes>
      {window.location.pathname !== '/onboarding' && window.location.pathname !== '/login' ? <Footer /> : ''}

    </div>
  );
}

export default App;
