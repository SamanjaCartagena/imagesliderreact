import ImageSlider from './ImageSlider';
const App = () => {
  const slides =[
    {
      url:'http://localhost:5173/bookSale.jpg',title:'booksale'
    },
    {
      url:'http://localhost:5173/cover.jpg',title:'cover'
    },{
      url:'http://localhost:5173/girl.jpg',title:'girl'
    },{
      url:'http://localhost:5173/IBM.jpg',title:'IBM'
    },{
      url:'http://localhost:5173/beach.jpg',title:'beach'
    },{
      url:'http://localhost:5173/novels.jpg',title:'novels'
    }
  ]
  const containerStyles ={
    width:"600px",
    height:"500px",
    margin: "0 auto",
    position:'fixed',
    top:'50px',
    left:'30%'
  }
  return (
    
    <div>
    
      <div style={containerStyles}>
      <ImageSlider slides={slides}/>
      </div>
     
    </div>
  )
}

export default App;
