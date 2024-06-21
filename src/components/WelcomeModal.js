import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const WelcomeModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle(isMobile, isTablet)}>
        <Typography id="modal-title" variant="h6" component="h2">
          Welcome Video
        </Typography>
        <video width="100%" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button onClick={onClose} variant="contained" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = (isMobile, isTablet) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : isTablet ? '70%' : '400px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: isMobile ? 2 : 4,
  borderRadius: 2,
  textAlign: 'center',
});

export default WelcomeModal;
