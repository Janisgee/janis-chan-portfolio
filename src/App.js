import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './App.css';

import RootLayout from './pages/RootLayout.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Coding from './pages/Coding.js';
import MyWork from './pages/MyWork.js';
import Contact from './pages/Contact.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/coding-skill' element={<Coding />} />
      <Route path='/my-work' element={<MyWork />} />
      <Route path='/contact' element={<Contact />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
