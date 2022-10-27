import { Done } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { Slide, ToastContainer as ReactToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainer() {
  return (
    <ReactToastContainer
      containerId={"toast-container"}
      position="bottom-center"
      autoClose={4000}
      hideProgressBar={true}
      newestOnTop={false}
      transition={Slide}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="colored"
      icon={<Icon />}
    />
  );
}

const Icon = () => {
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.1)",
        minWidth: "50px",
        height: "100%",
        alignSelf: "stretch",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Done />
    </Box>
  );
};
