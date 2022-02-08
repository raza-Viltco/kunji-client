export const loginApi = async (values) => {
	console.log(values);
	const data = { id: 2, name: "Ali", token: "mySecretToken" };
	// const data = setTimeout(() => ({ id: 2, name: "Ali" }), 2000);
	return await { data };
};
