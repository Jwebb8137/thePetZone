import React, { useEffect } from 'react';
import FormBg from '../../assets/form-bg.png';
import './SearchForm.css';

const SearchForm = () => {
  const setActiveSearchLink = () => {
    // Get the container element
    const searchLinkContainer = document.getElementById('homepage-search');

    // Get all buttons with class="btn" inside the container
    const links = searchLinkContainer.getElementsByClassName('nav-link-search');

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        for (var i = 0; i < links.length; i++) {
          links[i].classList.remove('active');
        }
        const current = document.getElementsByClassName('form-active');
        current[0].className = current[0].className.replace(' form-active', '');
        this.className += ' form-active';
      });
    }
  };

  useEffect(() => {
    setActiveSearchLink();
  }, []);

  return (
    <form id='homepage-search'>
      <nav class='navbar p-0'>
        <div class='container-fluid p-0'>
          <div id='search-nav' class='navbar w-100'>
            <a class='nav-link-search form-active' aria-current='page' href='#'>
              <i class='fas fa-cat'></i>
            </a>
            <a class='nav-link-search' href='#'>
              <i class='fas fa-dog'></i>
            </a>
            <a class='nav-link-search' href='#'>
              <i class='fas fa-store-alt'></i>
            </a>
          </div>
        </div>
      </nav>
      <div className='container px-2'>
        <p className='mt-3 txt-md'>
          Ready To Find Your Next <br />
          <span className='txt-lg d-block'>Best Friend?</span>
        </p>
        <div class='mt-3 mb-3 label-container'>
          <label for='locationSearch' class='form-label'>
            Location
          </label>
          <input
            type='text'
            class='form-control'
            id='locationSearch'
            placeholder='Raleigh, NC'
            aria-describedby='locationHelp'
          />
          <div id='location-help' class='form-text mt-2'>
            Use My Location <i class='fas fa-map-marker-alt'></i>
          </div>
        </div>

        <div class='row mb-4'>
          <div class='col'>
            <div className='label-container'>
              <input
                type='text'
                class='form-control'
                id='exampleBreedSearch'
                placeholder='Any'
              />
              <label for='floatingInputValue'>Age</label>
            </div>
          </div>
          <div class='col'>
            <div className='label-container'>
              <label for='exampleInputPassword1' class='form-label'>
                Breed
              </label>
              <input
                type='text'
                class='form-control'
                id='exampleBreedSearch'
                placeholder='Any'
              />
            </div>
          </div>
        </div>
        <button type='submit' class='btn submit'>
          Start Looking <i class='fas fa-caret-right'></i>
        </button>
      </div>
      <img src={FormBg} />
    </form>
  );
};

export default SearchForm;
