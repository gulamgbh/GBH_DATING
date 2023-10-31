import { Route, Routes } from 'react-router-dom';
import { Products, Login, Footer, Header, Dashboard, Learn, Support, Download, Safety, Signup, OnBoarding } from './components';
// import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/safety' element={<Safety />} />
        <Route path='/support' element={<Support />} />
        <Route path='/download' element={<Download />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/onboarding' element={<OnBoarding />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
