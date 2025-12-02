
import axiosInstance from "../../../api/axiosInstance";

export async function registerUser(values) {
  return axiosInstance.post("/auth/signup", values);
}

export async function loginUser(values) {
  return axiosInstance.post("/auth/signin", values);
}
