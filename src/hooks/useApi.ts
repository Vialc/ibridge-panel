import { DataType } from "./../types/DataTypes";
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://infinite-earth-22664.herokuapp.com/https://www.ibridge.com.br/",
});

export const useApi = () => ({
  getDataFromApi: async () => {
    try {
      const response = await api.get("/dados.json");

      // console.log("passou pela api");
      // console.log(response);

      return response.data as DataType;
    } catch (error) {
      console.error(error);
    }
  },
  getDataFromLocalStorage: async () => {},
});
