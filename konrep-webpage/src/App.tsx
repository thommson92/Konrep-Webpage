import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SavingsPlanPage from './SavingsPlanPage';
import LektorPage from './LektorPage';
import MainPage from './MainPage';
import ImpressumPage from './ImpressumPage';

const App: React.FC = () => {
  
  const [activePage, setActivePage] = useState<string>('main');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const isSmallScreen = window.innerWidth < 600;

  return (
    <>
      {/* Top-Bar */}
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => handlePageChange('main')} // Navigate back to the main page
          >
            Meine Webseite
          </Typography>
          {isSmallScreen ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handlePageChange('savingsPlans')}>Kurse</MenuItem>
                <MenuItem onClick={() => handlePageChange('lektor')}>Lektor</MenuItem>
                <MenuItem onClick={() => handlePageChange('impressum')}>Impressum</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography
                variant="button"
                sx={{ cursor: 'pointer' }}
                onClick={() => handlePageChange('savingsPlans')}
              >
                Kurse
              </Typography>
              <Typography
                variant="button"
                sx={{ cursor: 'pointer' }}
                onClick={() => handlePageChange('lektor')}
              >
                Lektor
              </Typography>
              <Typography
                variant="button"
                sx={{ cursor: 'pointer' }}
                onClick={() => handlePageChange('impressum')}
              >
                Impressum
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {/* Content to push below the fixed AppBar */}
      <Box sx={{ marginTop: '64px', padding: 2 }}>
        {activePage === 'main' && <MainPage onNavigate={handlePageChange} />}
        {activePage === 'savingsPlans' && <SavingsPlanPage />}
        {activePage === 'lektor' && <LektorPage />}
        {activePage === 'impressum' && <ImpressumPage />}
      </Box>
    </>
  );
};

export default App;