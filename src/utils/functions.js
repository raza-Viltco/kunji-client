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

export const timeFormat = (date) => {
  const time = new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return time;
};

export const dateFormat = (inputDate) => {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const format = day + "-" + month + "-" + year;

  return format;
};
