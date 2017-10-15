import {fetch} from './fetch';

export function querybizlocations(data = {}){
	return fetch('10829/querybizlocations.json',data);
}