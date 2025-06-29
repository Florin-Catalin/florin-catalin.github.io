import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import SplashScreen from './components/SplashScreen';

const AuthorBadge = () => (
  <span
    style={{
      position: 'fixed',
      right: 24,
      bottom: 16,
      color: '#fff',
      fontWeight: 500,
      opacity: 0.8,
      fontSize: 14,
      letterSpacing: 1,
      zIndex: 9999,
      pointerEvents: 'none',
      textShadow: '0 1px 4px #0008',
    }}
  >
    © Bafta !!
  </span>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash ? <SplashScreen /> : <Quiz />}
      <AuthorBadge />
    </div>
  );
};

export default App;