export const saveToPersistance = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const getFromPersistance = (key) => {
	const data = localStorage.getItem(key);
	return JSON.parse(data);
};

export const deleteFromPersistance = (key) => {
	localStorage.removeItem(key);
};
