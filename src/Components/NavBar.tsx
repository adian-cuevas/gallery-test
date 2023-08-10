import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Gallery from "./Gallery";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Counter } from "../features/counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addPicture } from "../features/pictures/pictureSlice";
import ICardPicture from "../Interfaces/ICardPicture";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.pictures);
  console.log(pictures);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [picker, setPicker] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handlePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPicker(event.target.value);
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewDescription(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewPicture = () => {
    alert("New Foto");
    setPicker("");
    setNewTitle("");
    setNewDescription("");
    handleClose();
    console.log(picker);
    console.log(newTitle);
    console.log(newDescription);
    const newFoto: ICardPicture = {
      name: newTitle,
      pictureUrl: picker,
      pictureDescription: newDescription,
    };
    dispatch(addPicture(newFoto));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={handleClickOpen}
          >
            <ListItemText primary="Añadir Foto" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              MUI
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "#fff" }} onClick={handleClickOpen}>
                Añadir Foto
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Gallery />
          <Counter />
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Foto</DialogTitle>
        <DialogContent>
          <input type="file" value={picker} onChange={handlePickerChange} />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Titulo"
            type="text"
            fullWidth
            variant="standard"
            value={newTitle}
            onChange={handleTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descripción"
            type="text"
            fullWidth
            variant="standard"
            value={newDescription}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleNewPicture}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
