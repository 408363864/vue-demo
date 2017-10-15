import Mock from 'mockjs';

const Random = Mock.Random;

const location = {
	rencode: "200",
	issuccess: "1",
	bizLocs: [{
		name: "mock1",
		cd: "mock1"
	},{
		name: "mock2",
		cd: "mock2"
	}]
}

export default {
	bizlocations(){
		return location
	}
}