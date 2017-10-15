import Mock from 'mockjs';
import mockAPI from './mockAPI'


Mock.mock(/\/10829\/querybizlocations\.json/, 'post', mockAPI.bizlocations);

