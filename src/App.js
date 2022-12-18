import logo from './logo.svg';
import './App.css';
import './app.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Group from './pages/Group';
import Contact from './pages/Contact';
import Setting from './pages/Setting';
import MessageBox from './pages/MessageBox';
import CompositeComponent from './components/CompositeComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CompositeComponent />} >
        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<Chat />}>
          <Route path='/chat/message' element={<MessageBox />} />
        </Route>
        <Route path='/group' element={<Group />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/setting' element={<Setting />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
