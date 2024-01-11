import HomePage from './pages/HomePage/HomePage';
import BallroomPage from './pages/BallroomPage/BallroomPage';
import StudyPage from './pages/StudyPage/StudyPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import GuestRoomPage from './pages/GuestRoomPage/GuestRoomPage'; 
import SolvePage from './pages/SolvePage/SolvePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/ballroom" element={<BallroomPage />}/>
      <Route path="/study" element={<StudyPage />}/>
      <Route path="/library" element={<LibraryPage />}/>
      <Route path="/guestroom" element={<GuestRoomPage />}/>
      <Route path="/solve" element={<SolvePage />}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
