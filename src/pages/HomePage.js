import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "../utils/axios";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const StyledBox = styled(Box)({
  height: "100vh",
  width: "100%",
  backgroundImage: `url(https://www.teahub.io/photos/full/288-2886307_sunset-gif.gif)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
});

export const StyledFooter = styled(Box)({
  position: "absolute",
  color: "white",
  bottom: "0",
  zIndex: "999",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const StyledCard = styled(Card)({
  height: "300px",
  width: "300px",
  backgroundColor: "#fff",
});

export const StyledButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: "yellow",
  padding: "15px",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "transparent",
    color: "yellow",
  },
});

export const StyledDownloadButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: "yellow",
  padding: "15px",
  color: "black",
  fontWeight: "bold",
  width: "auto",
  "&:hover": {
    backgroundColor: "black",
    color: "yellow",
  },
});

export const StyledTextField = styled(TextField)({
  "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#fff",
  },
  "& .css-1hbh12z-MuiFormControl-root-MuiTextField-root": {
    border: "1px solid #fff",
  },
  "& .Mui-focused": {
    color: "#fff",
    backgroundColor: "fff",
  },

  "& .MuiInputLabel-outlined": {
    color: "#fff",
    backgroundColor: "fff",
  },

  "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "yellow",
    },
  },
});

export const StyledDialog = styled(Dialog)({
  backdropFilter: "blur(5px)",
});

export const StyledA = styled("a")({
  textDecoration: "none",
  color: "red",
});

function HomePage() {
  const [username, setUsername] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  const [idUser, setIdUser] = useState([]);

  const findAccount = (username) => {
    if (username == null || username === "") return;
    setOpen(true);
    const options = {
      method: "GET",
      url: `/info_username/`,
      params: { user: username },
    };
    axios
      .request(options)
      .then(function (response) {
        setDataLoading(false);
        setIdUser([response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleClose = () => {
    setOpen(false);
    setDataLoading(true);
  };

  return (
    <>
      <StyledBox>
        <Box>
          <Box
            sx={{
              width: "100%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "100%",
                maxWidth: "500px",
                width: "auto",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "2.2em",
                  marginRight: "30px",
                  fontWeight: "bold",
                }}
              >
                M E T A G R A M{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", marginRight: "30px" }}
              >
                FOR
              </Typography>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/240px-Instagram_logo.png"
                alt="insta"
                height="50px"
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              minHeight: "100px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginRight: "30px",
                textAlign: "center",
              }}
            >
              Download your fav People Private Profile Picture in
            </Typography>
            <img
              src="https://seeklogo.com/images/H/HD-logo-70A7D8A006-seeklogo.com.png"
              alt="logo"
              height="50px"
            />
          </Box>
        </Box>
        <Box sx={{ width: "50%", margin: "auto", marginTop: "50px" }}>
          <StyledTextField
            fullWidth
            label="Paste URL or Enter an Valid Name"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              input: { color: "#fff" },
              label: { color: "#fff" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <StyledButton
              startIcon={<AccountCircleIcon />}
              onClick={() => findAccount(username)}
            >
              Find Account
            </StyledButton>
            <StyledButton sx={{ ml: 2 }} startIcon={<DownloadForOfflineIcon />}>
              Download Videos/Posts
            </StyledButton>
          </Box>
        </Box>

        <StyledFooter>
          <Typography
            variant="h6"
            sx={{
              marginRight: "20px",
              fontStyle: "italic",
              fontWeight: "bold",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Secure Payments By
          </Typography>
          <img
            src="https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2021/02/white.png"
            alt="razorpay"
            width="150px"
          />
        </StyledFooter>
      </StyledBox>
      <StyledDialog onClose={handleClose} open={open}>
        {dataLoading ? (
          <Stack spacing={1} sx={{ padding: "50px" }}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ) : (
          <Stack spacing={1} sx={{ padding: "50px" }}>
            {idUser?.map((users) => (
              <>
                <h5>{users?.user?.username}</h5>
                <img
                  src={users?.user?.profile_pic_url}
                  alt="profilepic"
                  crossOrigin
                />

                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography variant="h6">
                      {users?.user?.media_count}
                    </Typography>
                    POSTS
                  </Box>
                  <Divider
                    sx={{
                      margin: "5px",
                      width: "2px",
                      height: "50px",
                    }}
                    orientation="vertical"
                  />
                  <Box>
                    <Typography variant="h6">
                      {users?.user?.follower_count}
                    </Typography>
                    FOLLOWERS
                  </Box>
                  <Divider
                    sx={{
                      margin: "5px",
                      width: "2px",
                      height: "50px",
                    }}
                    orientation="vertical"
                  />
                  <Box>
                    <Typography variant="h6">
                      {users?.user?.following_count}
                    </Typography>
                    FOLLOWING
                  </Box>
                </Box>
                <h4>Bio</h4>
                <Typography variant="h6">{users?.user?.biography}</Typography>
                <a href={users?.user?.external_url} target="_blank">
                  {users?.user?.external_url}
                </a>

                <StyledDownloadButton>
                  <StyledA
                    href={users?.user?.hd_profile_pic_url_info?.url}
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    View HD Pic
                  </StyledA>
                </StyledDownloadButton>
              </>
            ))}
          </Stack>
        )}
      </StyledDialog>
    </>
  );
}

export default HomePage;
