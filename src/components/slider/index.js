import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Slider = () => {
  return (
    <div>
      <div className='container mt-5 mb-5' >
        <OwlCarousel items={3}
          className="owl-theme"
          loop
          nav
          margin={8} autoplay={true}>
          <div className='col-lg-4' >
            <div className='px-4 py-4 box-width'>
              <b className='mb-5 fs-5'>Ryan & lindsey</b>
              <div style={{ borderBottom: '1px solid gray', width: '100%' }} className='mt-3'></div>
              <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia laborum quis,
                officiis laudantium ipsa excepturi recusandae debitis aut aspernatur.</p>
            </div>
          </div>
          <div className='col-lg-4' >
            <div className='px-4 py-4 box-width'>
              <b className='fs-5'>Rebecca</b>
              <div style={{ borderBottom: '1px solid gray' }} className='mt-3'></div>
              <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia laborum quis,
                officiis laudantium ipsa excepturi recusandae debitis aut aspernatur.</p>
            </div>
          </div>

          <div className='col-lg-4' >
            <div className='px-4 py-4 box-width'>
              <b className='fs-5'>Shannon</b>
              <div style={{ borderBottom: '1px solid gray' }} className='mt-2'></div>
              <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia laborum quis,
                officiis laudantium ipsa excepturi recusandae debitis aut aspernatur.</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>

  )
}

export default Slider;