import React, { Fragment } from 'react';
import ContextComponent from '../ContextComponent/ContextComponent'
import SearchForm from '../SearchForm/SearchForm';
import Carousel from '../Carousel/Carousel';
import MainVid from '../../assets/main-bg.mp4';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <Fragment>
      <ContextComponent />
      <div>
        <video className='video-full' autoPlay muted loop>
          <source src={MainVid} type='video/mp4' />
          <source src={MainVid} type='video/ogg' />
          Your browser does not support the video tag.
        </video>
        <i class='fas fa-paw green lg-paw mt-3 mb-2'></i>
        <h2>
          Helping To Find Their
          <br />
          <span className='green'>Furever</span> Homes{' '}
        </h2>
      </div>
      <Carousel />
    </Fragment>
  );
};

export default HomeScreen;
