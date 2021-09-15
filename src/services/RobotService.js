import axios from 'axios';

const ROBOT_API_BASE_URL = "https://tranquil-cove-41891.herokuapp.com/robot"
const ROBOT_API_BASE_URL_CALCULATE = "https://tranquil-cove-41891.herokuapp.com/robot/calculate"


class RobotService {

	createRobot (robot){
		var result = axios.post(ROBOT_API_BASE_URL, robot);
		return result;
	}

	clearAllRobots () {
		var result = axios.delete(ROBOT_API_BASE_URL);
		return result;

	}

	getCurrentRobots() {
		var result = axios.get(ROBOT_API_BASE_URL);
		return result;
	}

	getPositionOfRobots(ROBOT_API_BASE_URL){
		var result = axios.get(ROBOT_API_BASE_URL_CALCULATE);
		return result;

	}	

}

export default new RobotService();