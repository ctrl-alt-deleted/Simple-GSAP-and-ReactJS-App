import React, { Component } from 'react';
import {TimelineLite,Bounce} from "gsap/TweenMax";
import './app.css';
import Menu from './menu'; 
import Platforms from './platforms';  

class App extends Component {
	constructor(prop){
		super();
		// default settings
		this.state = {timeLineHome:false};
		this.handleLoad = this.handleLoad.bind(this);
    }
	
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}

	handleLoad() {
		var platformHeight = window.innerHeight-12;
		var platformWidth = window.innerWidth-125;
		var siteTitle =  document.querySelectorAll(".letters");
		// Loop  and add  letters to array
		var letters = [];
		var i;
		for (i = 0; i < siteTitle.length; i++) {
			letters.push( siteTitle[i]);    
		}
		let timeLineHome = new TimelineLite({paused:true});
		this.setState({timeLineHome:timeLineHome});
		timeLineHome.to(document.getElementById('platform-one'), 1.5, {right:0});
		timeLineHome.to(document.getElementById('platform-one').getElementsByClassName('platform-two')[0],1.5, {onComplete:function(){
			timeLineHome.to(document.getElementById('platform-two'), 1.5, { ease:Bounce.easeOut, width:platformWidth,onComplete:function(){
				timeLineHome.staggerTo(letters,0.8,{y:platformHeight-70,ease:Bounce.easeOut},0.25);
			}});
		},rotation:-90, delay:1});
	}
	
	timelinePlay (playPause) {
		if(playPause)
			this.state.timeLineHome.pause();
		else
			this.state.timeLineHome.play();
		
	}
	
	timelineRestart(){
		this.state.timeLineHome.restart();
	}
	
	timelineForward(){
		this.state.timeLineHome.progress(1).pause(); 
	}
	
	render() {
		return (
		  <div className="App">
			<Platforms />
			<Menu propTimelineForward={this.timelineForward.bind(this)}  propTimelineRestart={this.timelineRestart.bind(this)}  propTimelinePlay={this.timelinePlay.bind(this)}  />
		  </div>
		);
	}
}

export default App;