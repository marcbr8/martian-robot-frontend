import React, { Component } from 'react'
import GridService from '../services/GridService'

	class GridCreationComponent extends Component {

		constructor(props){
			super(props)
			this.state = {
				marsGrid : {
					boundaries : {
						x : 0,
						y : 0			
					}
				}
			}
		}

		componentDidMount(){
			GridService.clearAllGrids();
			
		}

		defineXForMarsGrid(a){
			var marsGrid = {...this.state.marsGrid}
			marsGrid.boundaries = {...marsGrid.boundaries,
				x: a}
			this.setState({marsGrid})

		}

		defineYForMarsGrid(a){

			var marsGrid = {...this.state.marsGrid}
			marsGrid.boundaries = {...marsGrid.boundaries,
				y: a}
			this.setState({marsGrid})

		}

		submitGrid(){
			this.props.funcSubmitMarsGrid(this.state.marsGrid);
		}

		clearGrids() {
			this.props.funcClearAllGrids();
		}

		createDropDownForXGrid () {
			var row = []
			for (let i=0; i < 11; i ++){
				row.push(<button key={i} onClick = { () => this.defineXForMarsGrid(i) } className="dropdown-item" >{i}</button>)
			}
			return row
		}

		createDropDownForYGrid () {
			var row = []
			for (let i=0; i < 11; i ++){
				row.push(<button key={i} onClick = { () => this.defineYForMarsGrid(i) } className="dropdown-item" >{i}</button>)
			}
			
			return row
		}

		render () {
			return (
				<div>
					<div className="container mars-font">
						<h2 className="text-left"> Mars Grid </h2>
						<div className="row alert alert-info">
							<div className="col">
								<div className="container">
									<div className="row">								
										<div className="col my-auto">
											<p className="text-left my-auto">
												X coordinate
											</p>
										</div>
										<div className="col my-auto">
											<div className="dropdown">
											  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								 			   {this.state.marsGrid.boundaries.x}
											  </button>
											  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											  	{this.createDropDownForXGrid()}
											  </div>
											</div>
										</div>
									</div>
								</div>	
							</div>
							<div className="col">
								<div className="container">
									<div className="row">								
										<div className="col my-auto">
											<p className="text-left my-auto">
												Y coordinate
											</p>
										</div>
										<div className="col my-auto">
											<div className="dropdown">
											  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								  			  {this.state.marsGrid.boundaries.y}
											  </button>
											  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											    {this.createDropDownForYGrid()}
											  </div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row text-center">	
							<div className="col align-self-right">					
								<button onClick = { () => this.submitGrid() }type="button" className="btn btn-success">Submit Grid</button>
							</div>
							<div className="col align-self-left">					
								<button onClick = { () => this.clearGrids() }type="button" className="btn btn-danger">Clear all stored grids</button>
							</div>
						</div>
					</div>
				</div>
				)
		}

	}
export default GridCreationComponent;