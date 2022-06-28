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
  // const month = date.getMonth() + 1;
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear();

  const format = day + " " + month + ", " + year;

  return format;
};

export const validEmail = (txt) => {
  if (txt?.indexOf("@") > 0) {
    return txt;
  }
  return "N/A";
};

export const checkForPermission = (module, right) => {
  const authData = getFromPersistance("kunji_auth_data");
  const loggedInUserPermissions = authData?.data?.permissions;

  if (!!loggedInUserPermissions[module]) {
    for (let i = 0; i < loggedInUserPermissions[module].length; i++) {
      if (loggedInUserPermissions[module][i] === right) return true;
    }
  }

  return false;
};
