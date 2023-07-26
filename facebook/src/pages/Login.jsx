import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from 'react-router-dom';

const validText = () => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "350px", display: "flex", paddingBlockEnd : '5px' } }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Email or phone number" variant="outlined" />
      <TextField label="Password" variant="outlined" />
    </Box>
  );
};

const InvalidText = () => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "350px", display: "flex" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField error id="outlined-error" label="Error" />
        <TextField error id="outlined-error" label="Error" />
      </div>
    </Box>
  );
};

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Box
      sx={{
        bgcolor: "#F0F2F5",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            color: "#1877F2",
            height: "95px",
            width: "400px",
            fontSize: "100px",
            textAlign: "start",
            justifyContent: "center",
          }}
        >
          FaceBook{" "}
        </Box>
        <Box
          sx={{
            width: "480px",
            height: "80px",
            color: "black",
            fontSize: "32px",
            textAlign: "start",
            justifyContent: "center",
            paddingTop: "15px",
          }}
        >
          <Typography variant="h5">Connect with friends and the</Typography>
          <Typography variant="h5">world around you on Facebook.</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "500px",
            height: "400px",
            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "350px",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {inputValue.length <= 5 ? validText() : InvalidText()}
            <Button
              component={Link} to ='/'
              variant="contained"
              onClick={handleChange}
              sx={{
                width: "350px",
                justifyContent: "center",
                alignContent: "center",
                paddingTop: "15px",
                my: "20px",
              }}
            >
              Login
            </Button>
            <Button
              href="#text-buttons"
              sx={{ alignItems: "center", justifyItems: "center" }}
            >
              Forgot Password?
            </Button>
            <Divider sx={{ width: "350px", color: "#8A8D91", my: "20px" }} />
            <Button
              variant="contained"
              sx={{
                bgcolor: "green",
                paddingBlockStart: "10px",
                width: "350px",
              }}
            >
              Create new account
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
