import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const SplashScreen: React.FC = () => (
  <div
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ff69b4 0%, #6a5acd 100%)',
      position: 'relative',
    }}
  >
    <img
      src="/law-logo.png"
      alt="Law Logo"
      style={{ width: 180, height: 180, marginBottom: 32 }}
    />
    <CircularProgress size={48} thickness={5} style={{ color: '#fff' }} />
  </div>
);

export default SplashScreen;