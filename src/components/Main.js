import React from 'react';
import '../style/Main.css';
import ImageSlider from './ImageSlider';

const Main = () => {
     return (
          <div className='container-fluid hero-header'>
               <div className='container py-5'>
                    <div className='row g-5 align-items-center'>
                         <div className='col-md-12 col-lg-7'>
                              <h4 className='mb-3 text-orange-500'>100% Organic Foods</h4>
                              <h1 className='mb-5 text-3xl text-color font-bold'>Organic Veggies & Fruits Foods</h1>
                              <div className="position-relative mx-auto">
                                   <input className="form-control border-2 border-secondar w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
                                   <button 
                                        type="submit" 
                                        className="btn btn-green border-2 border-secondar py-3 px-4 position-absolute rounded-pill  h-100 text-white" 
                                        style={{ top: 0, right: '25%' }}>
                                        Submit Now
                                   </button>
                              </div>
                         </div>
                         <div className='col-md-12 col-lg-5'>
                           <ImageSlider/>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Main;
