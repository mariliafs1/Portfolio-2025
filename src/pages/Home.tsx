import { Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function Home() {
    return (
        // <Button variant="contained">Hello world </Button>
   <Container maxWidth="md" className="mt-8">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to My Application
      </Typography>
      <Card className="mb-4">
        <CardContent>
          <Typography variant="body1" paragraph>
            This is a simple application built with React, Vite, and Material-UI.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}