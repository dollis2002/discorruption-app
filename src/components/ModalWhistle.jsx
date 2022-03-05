import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DataForm from "./forms/DataForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ModalWhistle({ buttonText }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Local scope states
  const [pos, setPos] = React.useState(1);
  const [globalState, setGlobalState] = React.useState({});

  return (
    <div>
      <div
        className="button-container bg-blue-700 m-10 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700"
        onClick={handleOpen}
      >
        {buttonText}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {(pos === 1) && (
            <DataForm
              pos={pos}
              setPos={setPos}
              globalState={globalState}
              setGlobalState={setGlobalState}
            />
          )}
          {(pos === 2) && ( "works")}
        </Box>
      </Modal>
    </div>
  );
}
