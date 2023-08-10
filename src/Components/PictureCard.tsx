import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  margin: "10px",
};

interface PictureCardProps {
  picture: {
    name: string;
    pictureUrl: string;
    pictureDescription: string;
  };
}

const PictureCard = ({ picture }: PictureCardProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [newDescription, setNewDescription] = useState("");

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewDescription(event.target.value);
  };

  const [description, setDescription] = useState(picture.pictureDescription);

  const handleSave = () => {
    console.log("Imagen guardada:", picture.name);
  };

  const handleDelete = () => {};

  const handleModify = () => {
    setDescription(newDescription);
    handleClose();
  };

  return (
    <>
      <Card
        sx={{ minWidth: "400px", maxHeight: "300px", overflow: "auto" }}
        style={style}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={picture.pictureUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {picture.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleSave}>
            Guardar
          </Button>
          <Button size="small" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button size="small" onClick={handleClickOpen}>
            Modificar
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modificar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escriba el texto que desee para actualizar la descripción de la foto
          </DialogContentText>
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
          <Button onClick={handleModify}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default PictureCard;
