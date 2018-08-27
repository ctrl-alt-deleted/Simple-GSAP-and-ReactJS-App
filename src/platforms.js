import React, { Component } from 'react';
class Platforms extends Component {
	constructor(prop){
		super();
		this.state = {timeLineHome:false};
	}

	render() {
		return (
			<div className="h-100">	
				<div className="container d-flex h-100">
					<section className="row align-center h-100 w-100 align-items-center-noneed  align-self-center">
						<div className="col-sm-12 h-100 relative">	
							<h1 id="site-title" className="h-100">
								<span className="relative letters">J</span>
								<span className="relative letters">A</span>
								<span className="relative letters">N</span>
								<span className="relative letters">S</span>
								<span className="relative letters">A</span>
								<span className="relative letters">R</span>
							</h1>
						</div>	
					</section>
				</div>
				
				<div id="platform-two">
					<div className="platform-block">
					
					</div>
				</div>
				<div id="platform-one">
					<div className="cog relative">
						<div className="cog-inner absolute"></div>
						<div className="platform-two">
							<div className="platform-block"></div>
						</div>
					</div>
					<div className="platform"></div>
				</div>
			</div>
			
		);
	}
}
export default Platforms;



