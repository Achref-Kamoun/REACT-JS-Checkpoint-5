import React from 'react';

class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     Person:{
      fullName:"Achref Kamoun",
      bio:"I am 25",
      imgSrc : "/Photo.jpeg",
      profession :"Developer"
     },
     shows:false,
     count :0
   }
 }
     componentDidMount(){
     setInterval(()=>this.setState({count:this.state.count+1}),1000)}

render(){
     return(
       <div style={{background:"grey",borderStyle:"solid",borderColor:"black",borderRadius:"30px",width:"700px"
       ,height:"800px",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 



<button onClick={ () =>this.setState({shows : !this.state.shows, count : this.state.count})} style={{backgroundColor:"white",color:"black",fontSize:"large",fontWeight:"bold"}}>Show</button>
{this.state.shows &&
      <div style={{borderStyle:"solid",borderColor:"gray",borderRadius:"30px",width:"350px",height:"670px",margin:"auto",marginTop:"15px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <img src={this.state.Person.imgSrc} alt="" style={{width:"400px",height:"400px"}}/>
      <h1 style={{color:"black"}}>{this.state.Person.fullName}</h1>
      <h2 style={{color:"black"}}>{this.state.Person.bio}</h2>
      <h3 style={{color:"black"}}>{this.state.Person.profession}</h3>
      <h4 style={{color:"black"}}>{this.state.count}</h4> 
    </div> 
      }
      

      </div>
    )
    
  }
}

export default App;