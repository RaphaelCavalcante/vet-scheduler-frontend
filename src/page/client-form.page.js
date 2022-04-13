import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormGroup,
  InputLabel,
  OutlinedInput,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Page from "../component/page.component";
import PetList from "../component/pet/pet-list.component";

const ClientForm = () => {
  const { state } = useLocation();

  const [client, setClient] = useState(state.client);
  return (
    <Page>
      <Card>
        <CardHeader title={client ? "Editar" : "Novo Cliente"} />
        <CardContent>
          <form>
            <FormGroup
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Stack spacing={2}>
                <FormControl>
                  <InputLabel htmlFor="tutor-name">Nome</InputLabel>
                  <OutlinedInput
                    id="tutor-name"
                    label="Nome"
                    value={client.name}
                    onChange={(event) =>
                      setClient({ name: event.target.value })
                    }
                  ></OutlinedInput>
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="tutor-address">Endereço</InputLabel>
                  <OutlinedInput
                    id="tutor-address"
                    label="Endereço"
                    value={client.address}
                    onChange={(event) =>
                      setClient({ address: event.target.value })
                    }
                  ></OutlinedInput>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="tutor-address">Localização</InputLabel>
                  <OutlinedInput
                    id="tutor-location"
                    label="Localização"
                    value={client.location}
                    onChange={(event) =>
                      setClient({ location: event.target.value })
                    }
                  ></OutlinedInput>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="tutor-phone">Telefone</InputLabel>
                  <OutlinedInput
                    id="tutor-phone"
                    label="Telefone"
                    value={client.phoneNumber}
                    onChange={(event) =>
                      setClient({ phoneNumber: event.target.value })
                    }
                  ></OutlinedInput>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="side-tes">Observações</InputLabel>
                  <OutlinedInput
                    id="side-notes"
                    value={client.sideNotes}
                    aria-label="Side Notes"
                    label="Side Notes"
                    multiline={true}
                    onChange={(event) =>
                      setClient({ sideNotes: event.target.value })
                    }
                  />
                </FormControl>
                <PetList pets={client.pets} />
              </Stack>
            </FormGroup>
          </form>
        </CardContent>
        <CardActions>
          <Button>Salvar</Button>
          <Button>Cancelar</Button>
        </CardActions>
      </Card>
    </Page>
  );
};

export default ClientForm;
