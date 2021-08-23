import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const apiUrl = `${API_URL}/api`;
const adminUrl = `${API_URL}/admin`;

const access_token = localStorage.getItem("access_token");

class talentAPI {
  static async getAll(page, search) {
    return await axios
      .get(
        `${adminUrl}/talents/${page}/${
          search === "" || search === " " ? "dimas" : search
        }`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  static async getOne(id) {
    return await axios
      .get(`${adminUrl}/talents/details/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  static async add(data) {
    return await axios
      .post(`${adminUrl}/talents/add`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          access_token,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  static async update(id, data) {
    return await axios
      .put(`${adminUrl}/talents/${id}/update`, data, {
        headers: {
          access_token,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
}

export default talentAPI;
