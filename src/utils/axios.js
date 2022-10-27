import Axios from "axios";
import { toast } from "react-toastify";
import { ErrorStore } from "../shared-state/ErrorStore";

let axios = Axios.create({
  baseURL: "https://instagram-scraper-2022.p.rapidapi.com/ig",
  crossOrigin: true,
  headers: {
    "X-RapidAPI-Key": "5605356a21msh4b697bd7469456dp160d55jsnd68d0ce773ee",
    "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
  },
});

axios.interceptors.response.use(
  function (response) {
    ErrorStore.update((s) => {
      s.error = null;
      s.statusCode = null;
      s.data = null;
    });
    return response;
  },
  function (err) {
    const message = {
      heading: "",
      description: "",
    };
    if (err.message == "Network Error") {
      ErrorStore.update((s) => {
        s.message.heading = err.message;
        s.message.description = "Please check your internet connection";
      });
    } else if (err.response?.status == 401) {
      message.heading = "Session Expired!";
      message.description =
        "Your session has been expired, Please login to continue";
      if (localStorage.getItem("token")) {
        localStorage.clear();
        window.location.reload();
      }
    } else if (err.response?.status == 403) {
      message.heading = "Forbidden!";
      message.description =
        "The resource you are trying to access is forbidden.";
    } else {
      message.heading = "Unknown Error!";
      message.description = "Unknown error occurred!";
    }

    if (err.response?.status == 400 || err.response?.status == 422) {
      ErrorStore.update((s) => {
        s.error = null;
        s.statusCode = null;
        s.data = null;
      });
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default axios;

export const axiosErrorToast = (error) => {
  return toast.error(error?.response?.data?.message ?? "Server Error");
};
