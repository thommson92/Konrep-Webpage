import React from 'react';
import { Box, Typography } from '@mui/material';

interface MainPageProps {
    onNavigate: (page: string) => void;
  }

const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  return (
    <Box>
      {/* Introduction Section */}
      <Typography variant="h4" gutterBottom>
        Willkommen auf meiner Webseite!
      </Typography>
      <Typography variant="body1" paragraph>
        Diese Seite bietet Informationen über Kurse, Lektorat und weitere Dienstleistungen. 
        Erkunden Sie die verschiedenen Bereiche über die untenstehenden Links.
      </Typography>

      {/* Links to Menu Items */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="button"
          sx={{ cursor: 'pointer', color: 'primary.main' }}
          onClick={() => onNavigate('savingsPlans')}
        >
          Kurse
        </Typography>
        <Typography
          variant="button"
          sx={{ cursor: 'pointer', color: 'primary.main' }}
          onClick={() => onNavigate('lektor')}
        >
          Lektorat
        </Typography>
        <Typography
          variant="button"
          sx={{ cursor: 'pointer', color: 'primary.main' }}
          onClick={() => onNavigate('impressum')}
        >
          Impressum
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPage;