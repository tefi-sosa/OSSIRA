import { Routes, Route } from 'react-router-dom'
// import {useContext} from 'react'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Auth from './components/Auth'
import Home from './components/pages/Home'
import All from './components/pages/All'
import Flats from './components/pages/Flats'
import Sneakers from './components/pages/Sneakers'
import Platforms from './components/pages/Platforms'
import Search from './components/pages/Search'

import './App.css';
import Profile from './components/pages/Profile'
import { Footer } from './components/Footer'


function App() {
  const token = useSelector(state => state.auth.token)


  return (
    <div className="App">
			<Header />
			<main className="main-content">
				<Routes>
          <Route index element={<Home />}></Route>
					<Route path="/all" element={<All />} />
					<Route path="/flats" element={<Flats />} />
					<Route path="/platforms" element={<Platforms />} />
					<Route path="/sneakers" element={<Sneakers />} />
					<Route path="/search" element={<Search />} />
					<Route path="/auth" element={<Auth />} />
					{token && (
					<Route path="/profile" element={<Profile />}/>
					)}
				</Routes>
			</main>
			<Footer></Footer>
    </div>
  );
}

export default App;
