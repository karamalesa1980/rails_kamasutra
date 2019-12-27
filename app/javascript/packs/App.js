import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




const App = () => {
  
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-contant'>
          <Route path='/dialogs' render={ () => <DialogsContainer />}/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
          <Route path='/users' render={ () => <UsersContainer />}/>
          <Route path='/news' component={News} />
          <Route path='/muzic' component={Muzic} />
        </div>

        <Footer />
      </div>
    

  );
}

export default App;




