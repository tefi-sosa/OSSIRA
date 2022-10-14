import { Routes, Route } from 'react-router-dom'
// import {useContext} from 'react'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Auth from './components/Auth'
import Home from './components/pages/Home'

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
