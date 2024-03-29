import axios from "axios";

const baseURL = "NorthWind-Vue/";

const instance = axios.create({
  baseURL,
});

export const getTableData = async (params = { $top: 20, $skip: 0 }) => {
  const { data } = await instance.get("/Categories", {
    params,
  });

  return data.d?.results || data.d || data.value;
};
