import { Routes, Route } from 'react-router-dom';

import { ReviewMovie } from '../pages/ReviewMovie';
import { NewMovies } from '../pages/NewMovies';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewMovies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/review/:id" element={<ReviewMovie />} />
    </Routes>
  )
}