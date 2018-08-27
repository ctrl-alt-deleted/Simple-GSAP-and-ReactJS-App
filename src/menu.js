import React, { Component } from 'react';
import {TweenMax,Elastic,Bounce} from "gsap/TweenMax";

class Menu extends Component {
	constructor(prop){
		super();
		// default settings
		this.state =  {playButtonActive:false,menuWrapActive:false, menuButtonActive:false, followButton:true};
	}
	
	
	componentDidMount() {
		console.log('did mount'); 
    }
	// get random number from a range
	randomNumberRange(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	resetMenu(){
		let rotateDeg = this.randomNumberRange(100,300);
		this.setState({menuButtonActive:false, followButton:true});
		TweenMax.to(document.getElementById('menu-wrap-rotate'),0.2,{rotation:rotateDeg, ease:Elastic.easeInOut});
		TweenMax.to(document.getElementById('menu-button-play'),0.3,{left:5,top:5, ease:Bounce.easeOut});
		TweenMax.to(document.getElementById('menu-button-restart'),0.3,{delay:0.2, right:5,top:5, ease:Bounce.easeOut});
		TweenMax.to(document.getElementById('menu-button-forward'),0.3,{delay:0.3,left:5,bottom:5, ease:Bounce.easeOut});
	}
	
    // follow menu 	
	menuMove(e) {
		if(this.state.followButton){
			TweenMax.to(document.getElementById('menu-wrap'), 0.8, {
				  css: {
					left: e.pageX-15,
					top: e.pageY-15
				  },
				ease:Elastic.easeInOut
			})
		}	
    }
	
	menuOpen(e){
		
		if(this.state.menuButtonActive){
			this.setState({menuWrapActive:false,menuButtonActive:false, followButton:true});
			this.resetMenu();
		}else{
			this.setState({menuWrapActive:true,menuButtonActive:true, followButton:false});
			TweenMax.to(document.getElementById('menu-wrap-rotate'),0.5,{delay:0.1, rotation:0, ease:Elastic.easeInOut});
			TweenMax.to(document.getElementById('menu-button-play'),0.3,{left:-30,top:-4, ease:Bounce.easeOut});
			TweenMax.to(document.getElementById('menu-button-restart'),0.3,{delay:0.2,right:-30,top:-4, ease:Bounce.easeOut});
			TweenMax.to(document.getElementById('menu-button-forward'),0.3,{delay:0.3,left:8,bottom:-30, ease:Bounce.easeOut});
		}
	}
	
	timelinePlayPause(){
		
		if(this.state.playButtonActive)
			this.setState({playButtonActive:false});
		else
			this.setState({playButtonActive:true});
		
		this.props.propTimelinePlay(this.state.playButtonActive);
		this.resetMenu();
	}
	
	timelineRestart(){
		this.props.propTimelineRestart();
		this.setState({playButtonActive:false});
		this.resetMenu();
	}
	
	timelineForward(){
		this.props.propTimelineForward();
		this.setState({playButtonActive:false});
		this.resetMenu();
	}
	
	render() {
		// local active states for each button
		let activeClass = (this.state.menuButtonActive ? ' active ': '');
		let activeMenuWrapClass = (this.state.menuWrapActive ? ' active ': '');
		let activePlayButtonClass = (this.state.playButtonActive ? ' pause active ': '');
		return (
		  	<div id="menu-container" onMouseMove={this.menuMove.bind(this)}>
			<div id="menu-wrap" className={activeMenuWrapClass}>
					<div id="menu-wrap-rotate">
						<button id="menu-button-play"  onClick={this.timelinePlayPause.bind(this)} className={"button absolute " +  activePlayButtonClass }><img src={window.location.origin + '/imgs/icons/play.png'} alt="Play"/> <img src={window.location.origin + '/imgs/icons/pause.png'} alt="Pause"/></button>
						<button id="menu-button-restart"  onClick={this.timelineRestart.bind(this)} className="button absolute"><img src={window.location.origin + '/imgs/icons/restart.png'} alt="Restart"/></button>
						<button id="menu-button-forward" onClick={this.timelineForward.bind(this)} className="button absolute"><img src={window.location.origin + '/imgs/icons/forward.png'} alt="Forward"/></button>
						<div style={{display:'none'}} id="menu-button-back" className="button absolute"></div> 
					</div>
					<button onClick={this.menuOpen.bind(this)} id="menu-button" className={"absolute " + activeClass}>
						<span className="menu-line menu-line-1"></span>
						<span className="menu-line menu-line-2"></span>
						<span className="menu-line menu-line-3"></span>
					</button>
				</div>
			</div>
		);
	}
}
export default Menu;