import axios from 'axios';

const API = `${process.env.REACT_APP_API}/users`;
//const API = "http://localhost:4000/users";
const getUserByEmail = (email) => {
	return axios.get(`${API}?email=${email}`);
}

const login = (email, password) => {
	return new Promise((resolve, reject) => {
		console.log("email >", `${API}?email=${email}`);
		getUserByEmail(email)
			.then(response => {
				
				const [ user ] = response.data;
				console.log("user >", user);
				if (user) {
					if (user.password === password) {
						resolve(user);
					}
				}

				reject(null);
			})
	});
}

export default {
	login
}