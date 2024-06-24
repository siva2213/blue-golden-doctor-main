import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import welcomeVideo from "../assets/welcomeVideo.mp4";
import CancelIcon from "../assets/ic_round-cancel";

const WelcomeModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle(isMobile, isTablet)}>
        <Box sx={cancelIconStyle} onClick={onClose}>
          <CancelIcon />
        </Box>
        <Box sx={{mt: 4}}>
          <video
            style={{borderRadius: '40px'}}
            width="100%"
            autoPlay
            muted
            onError={(e) => console.error("Error playing video:", e)}
          >
            <source src={welcomeVideo} type="video/mp4" />
          </video>
        </Box>

        <Button onClick={onClose} variant="contained" sx={buttonStyle}>
          Get Started
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = (isMobile, isTablet) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isMobile ? "55%" : isTablet ? "70%" : "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: isMobile ? 2 : 4,
  borderRadius: '50px',
  textAlign: "center",
});

const buttonStyle = {
  mt: 2,
  padding: "10px 20px",
  borderRadius: "25px",
  background: "#372F62",
  color: "#FFD700",
  fontWeight: "bold",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textTransform: "uppercase",
};

const cancelIconStyle = {
  position: "absolute",
  top: "13px",
  right: "13px",
  cursor: "pointer",
  color: "#666", // Adjust color as needed
};

export default WelcomeModal;
