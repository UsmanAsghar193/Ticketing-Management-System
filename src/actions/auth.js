const { default: axios } = require("axios");
const { API } = require("./api");

const authData = async () => {
  const res = await axios.get(`${API}/auth/current-user`);
  // console.log(res)
  return res;
};

export default authData;
