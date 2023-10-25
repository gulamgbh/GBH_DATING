import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
const Slider = () => {
    return (  
        <div>  
      {/* <div class='container-fluid' >      
       <div className="row title" style={{marginBottom: "20px"}} >      
       <div class="col-sm-12 btn btn-info">      
       Owl Carousel In React Application   
       </div>      
       </div>  
   </div>   */}
   <div class='container mt-5 mb-5' >            
    <OwlCarousel items={3}  
      className="owl-theme"  
      loop  
      nav  
      margin={8}  autoplay={true}>  
       <div className='col-lg-4' >
       <div className='px-4 py-4 box-width'>

       <b className='mb-5 fs-5'>Ryan & lindsey</b> 
       <div style={{borderBottom:'1px solid gray',width:'100%'}} className='mt-3'></div>
       <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia laborum quis, 
        officiis laudantium ipsa excepturi recusandae debitis aut aspernatur.</p>
        </div>  
       </div>
       <div className='col-lg-4' >
       <div className='px-4 py-4 box-width'>
       <b className='fs-5'>Rebecca</b>
       <div style={{borderBottom:'1px solid gray'}} className='mt-3'></div>
       <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia laborum quis, 
       officiis laudantium ipsa excepturi recusandae debitis aut aspernatur.</p>
       </div>  
       </div>
      
       <div className='col-lg-4' >
       <div className='px-4 py-4 box-width'>
       <b className='fs-5'>Shannon</b>
       <div style={{borderBottom:'1px solid gray'}} className='mt-2'></div>
       <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia laborum quis, 
       officiis laudantium ipsa excepturi recusandae debitis aut aspernatur.</p>
       </div> 
       </div> 
       {/* <img  className="img" src= {'assets/img/img1.jpg'}/>
       <div><img  className="img" src= {'assets/img/img2.jpg'}/></div>  
       <div><img  className="img" src= {'assets/img/img4.jpg'}/></div>  
       <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>  
       <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  
       <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  
       <div><img className="img" src= {'assets/img/img7.jpg'}/></div>   */}
  </OwlCarousel>  
  </div>  
  </div> 
 
      )  
    }  

export default Slider;