import axios from "axios";

export const API = axios.create({
  baseURL: "https://square-dove-73.hasura.app/api/rest",
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "15S69DEMAIaP6CSxytqQbQPdBLBLF8viC2olz6lTt5jUjDLAw34omV1f4vIH8mhj",
  },
});
