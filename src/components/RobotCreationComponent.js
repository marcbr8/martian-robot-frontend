import React, { Component } from 'react'
import RobotService from '../services/RobotService'

	class RobotCreationComponent extends Component {

		constructor(props){
			super(props)
			this.state = {
				robot : {
					coordinates : {
						x : 0,
						y : 0
					},
					orientation : "N",
					instructions :""
			
				}
			}
		}

		componentDidMount(){
			RobotService.clearAllRobots();
		}

		defineXforRobot(a){
			var robot = {...this.state.robot}
			robot.coordinates = {...robot.coordinates,
				x: a}
			this.setState({robot})

		}

		defineYforRobot(a){
			var robot = {...this.state.robot}
			robot.coordinates = {...robot.coordinates,
				y: a}
			this.setState({robot})

		}

		defineOrientationForRobot(a){

			this.setState( prevState => ({
				robot : {
					...prevState.robot,
					orientation: a
				}
			}));
		}

		isAValidRobot(robot){
			if(robot.instructions === "" || robot.instructions.match(/^[LFR]+$/))
				return true
			return false
		}

		submitRobot(){
			if(this.isAValidRobot(this.state.robot)) {
				this.setState ({
					invalidRobot : false,
					submitted : true
				})
				this.props.funcSubmitRobot(this.state.robot)
			} else {
				this.setState ({
					invalidRobot : true,
					submitted: false
				})
			}
		}

		setInstructions = (e) => {
			this.setState ( prevState => ({
				robot : {
					...prevState.robot,
					instructions: e.target.value
				}
			}))
		}


		createDropdownsForX () {
			var row = []
				for (let i=0; i < 11; i ++){
					row.push(<button key={i} onClick = { () => this.defineXforRobot(i) } className="dropdown-item" >{i}</button>)
				}
			
			return row

		}

		createDropdownsForY () {
			var row = []
				for (let i=0; i < 11; i ++){
					row.push(<button key={i} onClick = { () => this.defineYforRobot(i) } className="dropdown-item" >{i}</button>)
				}
			
			return row

		}

		submitted () {
			if(this.state.submitted){
			return (
					<div className="container">
						<div className="row  justify-content-center">
							<div className="col-5 alert-success">
								<p className = "text-center text-success">
								{this.state.submitted ? 'Robot submitted' :'' }
								</p>
							</div>
						</div>
					</div>
					);
			}
		}


		renderError () {
			if(this.state.invalidRobot){
				return (
					<div className="container">
						<div className="row  justify-content-center">
							<div className="col-5 alert-danger">
								<p className = "text-center text-danger">
									{this.state.invalidRobot ?'Invalid Instructions: must be L, R or F (case senstive)' : ''}
								</p>
							</div>
						</div>
					</div>
					);
			}
				
		}


		render () {
			return (
				<div>
					<div className="container mt-5">

						<h2 className="text-left text-light"> Robot {this.props.id} </h2>
						<div className="row alert alert-light mars-font">
							<div className="col">
								<div className="container">
									<div className="row">								
										<div className="col">
											<p className="text-left">
												X coordinate
											</p>
										</div>
										<div className="col my-auto">
											<div className="dropdown">
											  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											    {this.state.robot.coordinates.x}
											  </button>
											  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												{this.createDropdownsForX()}
											  </div>
											</div>
										</div>
									</div>
								</div>	
							</div>
							<div className="col">
								<div className="container">
									<div className="row">								
										<div className="col">
											<p className="text-left">
												Y coordinate
											</p>
										</div>
										<div className="col my-auto">
											<div className="dropdown">
											  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											    {this.state.robot.coordinates.y ? this.state.robot.coordinates.y : '0'}
											  </button>
											  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												{this.createDropdownsForY()}
											  </div>
											  </div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="container">
									<div className="row">								
										<div className="col">
											<p className="text-left">
												Orientation
											</p>
										</div>
										<div className="col my-auto">
											<div className="dropdown">
											  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											    {this.state.robot.orientation ? this.state.robot.orientation : 'N'}
											  </button>
											  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											    <button onClick = { () => this.defineOrientationForRobot("N") } className="dropdown-item" >N</button>
											    <button onClick = { () => this.defineOrientationForRobot("E") } className="dropdown-item" >E</button>
											    <button onClick = { () => this.defineOrientationForRobot("S") } className="dropdown-item" >S</button>
											    <button onClick = { () => this.defineOrientationForRobot("W") } className="dropdown-item" >W</button>
											  </div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col my-auto">
								<div className="input-group mb-3">
								  <input type="text" className="form-control input-size" placeholder="Instructions" onChange={this.setInstructions} aria-label="" aria-describedby="basic-addon1"></input>
								</div>
							</div>
						</div>
						<div className="row text-center mars-font">	
							<div className="col align-self-center">	

								<button onClick = { () => this.submitRobot() }type="button" className="btn btn-success">Submit robot</button>
							</div>
						</div>
						{this.renderError()}
						{this.submitted()}
					
					</div>
				</div>
				)
		}

	}
export default RobotCreationComponent;