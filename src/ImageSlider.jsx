import {useState} from 'react'
import left from '../public/left.png'
import right from '../public/right.png'

const ImageSlider=({slides}) =>{
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const sliderStyles={
        height:'100%',
        position:'relative'
    }

    const slideStyles ={
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentIndex].url})`
    }
   const leftArrowStyles ={
    position:'absolute',
   
    top:'50%',
    transform:'translate(0, -50%)',
    left:'32px',
    
    color:'black',
    zIndex:500,
   

    cursor:'pointer',

   }
   const rightArrowStyles ={
    position:'absolute',
    top:'50%',
    transform:'translate(0, -50%)',
    right:'32px',
    fontSize:'45px',
    color:'black',
    zIndex:1,
    cursor:'pointer',

   }

   const goToPrevious =() =>{
     
    const isFirstSlide = currentIndex === 0
    if(isFirstSlide){
     
    setCurrentIndex(5)
    }else{
        setCurrentIndex(currentIndex - 1)
    }

   }
   const goToNext =() =>{
    
    const isLastSlide = currentIndex === 5
    if(isLastSlide){
     
    setCurrentIndex(0)
    }else{
        setCurrentIndex(currentIndex + 1)
    }


   }
    return (
    <div style={sliderStyles}>
    <div style={leftArrowStyles} onClick={goToPrevious}><img style={{height:'50px', width:'50px',zIndex:500, position:'absolute', left:'0px'}} src={left}/></div>
    <div style={rightArrowStyles} onClick={goToNext}><img style={{height:'50px', width:'50px',zIndex:500, position:'absolute', right:'0px'}} src={right}/></div>
    <div style={slideStyles}></div>
    </div>
    )
}

export default ImageSlider;