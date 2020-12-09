import React from 'react';
import './App.css';
class App extends React.Component {
constructor() {
  super();
  this.state = {
    speed : 0
  }
}
componentDidMount() {
  this.startSpeed();
}
startSpeed = () => {
  this.intervalID = setInterval(this.changeSpeed, 1000)
}
stopSpeed = () => {
  clearInterval(this.intervalID)
}
changeSpeed = () => {
  if (this.state.speed < 220){
    this.setState({ speed: this.state.speed + 1})
  } else {
    this.setState({ speed: 0 })
  }
}
render() {
return(
<div>
   <div className="speed-container speed-container--fast">
      <svg viewBox="0 0 82 82">
         <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%"/>
               <stop offset="100%"/>
            </linearGradient>
         </defs>
         <path className="circle circle--outer"  
            d="M 41 3 a 38 38 0 0 1 0 76 a 38 38 0 0 1 0 -76">
         </path>
         <path className="circle circle--inner"  
            d="M 41 3
            a 38 38 0 0 1 0 76
            a 38 38 0 0 1 0 -76"
            stroke="url(#gradient)">
         </path>
      </svg>
   </div>
   <div className="speedometer">
      <div className="speedometer-inner">
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick">
         </div>
         <div className="tick"><span></span>
         </div>
         <div className="inner-circle">
            <div className="speed-digit">{this.state.speed}<span className="kmh">kmh</span></div>
         </div>
         <div className="half-circle"></div>
      </div>
   </div>
</div>
);
}
}
export default App;