import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const LektorPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        marginTop: '64px',
      }}
    >
      {/* Foto des Lektors */}
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          marginBottom: 2,
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image="/path/to/lektor-photo.jpg" // Ersetze mit dem tatsächlichen Bildpfad
          alt="Foto des Lektors"
        />
      </Card>

      {/* Informationsbox */}
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Über den Lektor
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Name:</strong> Max Mustermann
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Berufserfahrung:</strong> Über 10 Jahre Erfahrung im Bereich Lektorat und Textbearbeitung.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Qualifikationen:</strong> Master in Germanistik, zertifizierter Lektor.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Schwerpunkte:</strong> Wissenschaftliche Arbeiten, kreative Texte, technische Dokumentationen.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LektorPage;