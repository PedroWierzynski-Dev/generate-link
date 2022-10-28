import axios from 'axios';

export const key = "00d216339d0a964907738148e820b0dcad7ebb28";

const api = axios.create({

	baseURL: 'https://api-ssl.bitly.com/v4',
	headers:{
		'Authorization': `Bearer ${key}`
	}
})

export default api; 