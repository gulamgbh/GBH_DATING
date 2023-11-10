import { Route, Routes, useNavigate } from 'react-router-dom';
import { Products, Header, Dashboard, Learn, Support, Download, Safety, Onboarding, Login, ChatBot, PremiumFeatures, Matches, Messages } from './components';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/action/userAuth.action';
import Protected from './HOC';
import Chatbox from './components/chatbot/chatbox/Chatbox';
import Gbh from './components/chatbot/chatbox/Chatbox';
import GbhChatPanel from './components/gbhchat';


function App() {
  const nevigate = useNavigate()
  const auth = useSelector(state => state.userAuth);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      nevigate('/chetbot')
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Protected />} >
          <Route path='/chetbot' element={<GbhChatPanel />} />
          {/* <Route path='/chetbot/matches' element={<Matches />} />
          <Route path='/chetbot/messages' element={<Messages />} />
          <Route path='/chetbot/box' element={<Chatbox />} /> */}
        </Route>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/safety' element={<Safety />} />
        <Route path='/support' element={<Support />} />
        <Route path='/download' element={<Download />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/Premiumfeatures' element={<PremiumFeatures />} />

        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
