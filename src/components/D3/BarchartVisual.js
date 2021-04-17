import React, { useState, useEffect, Fragment } from 'react';
import BarChart from './Barchart';
import ButtonSlider from '../Buttons/ButtonSlider';
const BarchartVisual = () => {
  const [data, setData] = useState([54, 23, 37]);
  const [label, setLabel] = useState(["Pet Name", "Pet Views", "Pet Likes", "Pet Requests"])

  return (
    <Fragment>
      <div id="chart" className='fade-in pt-4'>
        <h3 className="m-0">Activity Summary</h3>
        <BarChart width={90} height={400} data={data} label={label}/>
        <div className="row d-flex px-3 pt-1 fade-in bar-chart">
          <div className="col-4">
            <p>Views</p>
          </div>
          <div className="col-4">
            <p>Meets</p>
          </div>
          <div className="col-4">
            <p>Likes</p>
          </div>
          <div className="col-12 mt-3">
            <h3>Need some extra help?</h3>
            <p className="helper-text">Finding a new home can be hard! A lot of factors can come into play.</p>
          </div>
          <button
            class="btn submit btn-outline-dark w-75 mt-1"
            type="button"
          >
            Get Help <i class="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default BarchartVisual;