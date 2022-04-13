import { styled } from "@mui/material/styles";
import { Button, Container, Grid, Paper } from "@mui/material";
import { useHistory, useNavigate } from "react-router-dom";
import Page from "../component/page.component";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Button onClick={ () => navigate("/client")}>Clients</Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Button>Schedule</Button>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
