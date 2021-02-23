import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ks7VFOZ-DqO6kDJi8CL7ljRLEup6wxoOF880HV_i2zQ",
  },
});
