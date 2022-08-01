import React,{useEffect} from 'react';
import Slider from 'infinite-react-carousel';

const data=[1,2,3,4,5,6,7,8,9,10,11,12]

const NewPage = () => {
  const settings =  {
    arrowsScroll: 4,
    //autoplay: false,
   // autoplaySpeed: 1000,
    duration: 400,
    shift: 100,
    slidesPerRow: 4,
    virtualList: true,
    wheel: false,
    wheelScroll: 0,
  };
      return (
        <div>
          <span>CustomSlider</span>
          <Slider { ...settings }>
            {data.map(d =>(
              <div>
              <h3 style={{height:'270px',backgroundColor:'black',margin:'0px 5px',color:'white'}}>{d}</h3>
            </div>
            ))}
          </Slider>
        </div>
      );
    }



export default NewPage