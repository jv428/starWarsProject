import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import BlockIcon from "@mui/icons-material/Block";
import DraftsIcon from "@mui/icons-material/Drafts";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

const letters = [
  { id: 1, disabled: false, open: false },
  { id: 2, disabled: false, open: false },
  { id: 3, disabled: false, open: false },
  { id: 4, disabled: false, open: false },
];

export const GetLaminates = ({ data, setShowCounter, showCounter }) => {
  const [listLetters, setListLetters] = useState(letters);
  const [currentLetter, setCurrentLetter] = useState(null);
  const [open, setOpen] = useState(false);

  const openLetter = (currentId) => {
    const newList = listLetters.map(({ id, open }) => {
      return { id, disabled: currentId == id ? false: true, open: !open? currentId == id: open };
    });
    setListLetters(newList);
    setShowCounter(true);
    setCurrentLetter(currentId);
  };
  useEffect(() => {
    console.log("dataAll", data);
  }, [data]);
  useEffect(() => {
    if (!showCounter) {
      const newList = listLetters.map(({ id, open }) => {
        return {
          id,
          disabled: open,
          open,
        };
      });
      setListLetters(newList);
    }
  }, [showCounter]);
  return (
    <div className="flex flex-wrap items-center justify-between m-10">
      <div className="w-full text-center mb-20 text-3xl font-medium">
        <h1>¿Que hay al interior?</h1>
      </div>
      {listLetters.map(({ id, disabled, open }) => {
        const openL = (open && disabled) || (!disabled && open);
        const closeL = !open && !disabled;
        const block = !open && disabled;
        return (
          <button
            className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500"
            key={id}
            onClick={() => {
              openLetter(id);
              setOpen(true);
            }}
            disabled={open || disabled}
          >
            {openL && <DraftsIcon sx={{ fontSize: 150, color: "white" }} />}
            {block && <BlockIcon sx={{ fontSize: 150, color: "white" }} />}
            {closeL && <EmailIcon sx={{ fontSize: 150, color: "white" }} />}
          </button>
        );
      })}
      {/* <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div> */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
};
