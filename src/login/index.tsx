import { Button, CssBaseline, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./style.css";
import backgroundImage from '../assets/backgroung.jpg';


export function login() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Box className="app" component="div" style={backgroundStyle}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container direction="column" spacing={2} justifyContent="flex-start" alignItems="flex-start">
          <Grid item>
            <Typography variant="h4">Faça seu login</Typography>
          </Grid>
          <Grid item>
            <TextField id="outline-required" label="Email" size="small" />
          </Grid>
          <Grid item>
            <TextField id="outline-required" label="Password" size="small" type="password" />
          </Grid>
          <Grid item>
            <Grid item>
                <a href="/*" className="smallFont">Esqueci minha senha</a>
              <Grid item>
                <Button variant="contained">Entrar</Button>
              </Grid>
              <Grid item>
                  <a href="/*" className="smallFont">Ainda não tenho uma conta</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

