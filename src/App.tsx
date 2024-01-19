import './styles/App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Header from './components/Header';
import Main from './pages/Main';
import LoginModal from './components/modals/LoginModal';
import SignUpModal from './components/modals/SignUpModal';
import ResetPwdModal from './components/modals/ResetPwdModal';
import SignUpInfoModal from './components/modals/SignUpInfoModal';
import { CommonBtn } from './styles/button/commonBtn';
import RegistScheduleModal from './components/modals/RegistScheduleModal';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<LoginModal/>}/>
            <Route path='/signUp' element={<SignUpModal/>}/>
            <Route path='/resetPwd' element={<ResetPwdModal/>}/>
            <Route path='/signUpInfo' element={<SignUpInfoModal/>}/>
            <Route path='/newSchedule' element={<RegistScheduleModal/>}/>
        </Routes>
        <CommonBtn><Link to="/newSchedule">일정 등록하기</Link></CommonBtn>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
