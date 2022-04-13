import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Page from "../component/page.component";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const sample = [
  {
    id: 1,
    name: "tutor1",
    address: "street name, apt 01",
    location: "-3.1133673, -60.037346",
    sideNote: "sample client",
    phoneNumber: "+55 92 9 9988-7766",
    sideNotes:
    "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit enim. Aenean vehicula, justo ac luctus sagittis, ante mi viverra arcu, eget suscipit magna turpis vitae dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales arcu suscipit purus molestie ullamcorper",
    pets: [
      {
        name: "dog 1",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
    ],
  },
  {
    id: 2,
    name: "tutor2",
    address: "street name, apt 01",
    location: "-3.1001124,-60.063546",
    sideNote: "sample client",
    phoneNumber: "+55 92 9 9988-7766",
    sideNotes:
    "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit enim. Aenean vehicula, justo ac luctus sagittis, ante mi viverra arcu, eget suscipit magna turpis vitae dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales arcu suscipit purus molestie ullamcorper",
    pets: [
      {
        name: "dog 1",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
      {
        name: "dog 2",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
    ],
  },
  {
    id: 3,
    name: "tutor3",
    address: "street name, apt 01",
    location: "-3.1099613, -60.028067",
    sideNote: "sample client",
    phoneNumber: "+55 92 9 9988-7766",
    sideNotes:
      "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit enim. Aenean vehicula, justo ac luctus sagittis, ante mi viverra arcu, eget suscipit magna turpis vitae dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales arcu suscipit purus molestie ullamcorper",
    pets: [
      {
        name: "dog 1",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
      {
        name: "dog 2",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
      {
        name: "dog 3",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
    ],
  },
  {
    id: 4,
    name: "tutor4",
    address: "street name, apt 01",
    location: "-3.1099613, -60.028067",
    sideNote: "sample client",
    phoneNumber: "+55 92 9 9988-7766",
    sideNotes:
    "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit enim. Aenean vehicula, justo ac luctus sagittis, ante mi viverra arcu, eget suscipit magna turpis vitae dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales arcu suscipit purus molestie ullamcorper",
    pets: [
      {
        name: "dog 1",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
      {
        name: "dog 2",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
      {
        name: "dog 3",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
      {
        name: "dog 4",
        photo:
          "https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png",
        age: 2,
        lastWeight: 12,
        breed: "dog",
        specied: "dog",
        gender: "male",
        neutred: true,
      },
    ],
  },
];

const ClientList = () => {
  const navigate = useNavigate();
  const handleItemClick = (data) => {
    console.log(data);
    navigate("/client-form", { state: { client: data } });
  };
  return (
    <Page>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              C
            </Avatar>
          }
          action={
            <Button>
              <AddIcon />
              Inserir Novo Cliente
            </Button>
          }
          title="Clientes"
          subheader="Lista de clientes"
        />
        <CardContent>
          <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
            {sample.map((tutor) => {
              const labelId = `checkbox-list-secondary-label-${tutor.id}`;
              return (
                <>
                  <ListItem
                    key={tutor.id}
                    disablePadding
                    onClick={() => handleItemClick(tutor)}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          sx={{ width: 100, height: 100 }}
                          alt={`Avatar n°${tutor.id + 1}`}
                          src={`https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Design-sem-nome-61.png`}
                        />
                      </ListItemAvatar>
                      <ListItemText id={labelId} primary={tutor.name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Page>
  );
};

export default ClientList;
