export const loginApi = async (values) => {
	console.log(values)
	const data = { id: 2, name: "Ali" };
	// const data = setTimeout(() => ({ id: 2, name: "Ali" }), 2000);
	console.log(data);
	return await data;
};
