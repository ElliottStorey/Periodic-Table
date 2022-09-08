import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import PeriodicTable from './PeriodicTable';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/table' element={<PeriodicTable />} />
      </Routes>
    </BrowserRouter>
  );
}