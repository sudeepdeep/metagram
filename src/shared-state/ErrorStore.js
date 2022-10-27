import { Store } from "pullstate";

export const ErrorStore = new Store({
  error: null,
  statusCode: null,
  data: {},
  message: {
    heading: "",
    description: "",
  },
});
