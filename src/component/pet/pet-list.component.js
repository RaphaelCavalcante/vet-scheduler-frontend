import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import NewPetDialog from "./new-pet.dialog";

const PetList = (pets) => {
  const [selectedValue, setSelectedValue] = React.useState();
  
  
  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <List
        sx={{
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
      >
        {pets.pets.map((pet) => {
          return (
            <>
              <ListItem key={pet.id} disablePadding>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: 100, height: 100 }}
                      alt={`Avatar n°${pet.id + 1}`}
                      src={pet.photo}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ marginLeft: 5 }}
                    id={pet.id}
                    primary={pet.name}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
        <ListItem>
          <NewPetDialog
            selectedValue={selectedValue}
          ></NewPetDialog>
        </ListItem>
      </List>
    </Box>
  );
};

export default PetList;
