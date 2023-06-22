import { Button, CssBaseline, Container, Grid, TextField } from "@mui/material";

export function login() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <h2>Faça seu login</h2>
          </Grid>
          <Grid item>
            <TextField  id="outline-required" label="Email" size="small"/>
          </Grid>
          <Grid item>
          <TextField  id="outline-required" label="Password" size="small" type="password"/>
          </Grid>
          <Grid item>
            <a href="/*">Esqueci minha senha</a>
          </Grid>
          <Grid item>
            <Button variant="contained">Entrar</Button>
          </Grid>
          <Grid item>
            <a href="/*">Ainda não tenho uma conta</a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
