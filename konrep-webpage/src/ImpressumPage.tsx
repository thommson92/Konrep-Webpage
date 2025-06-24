import React from 'react';
import { Box, Typography } from '@mui/material';

const ImpressumPage: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Impressum
      </Typography>
      <Typography variant="body1">
        Hier finden Sie die rechtlichen Informationen und Kontaktmöglichkeiten.
      </Typography>
    </Box>
  );
};

export default ImpressumPage;