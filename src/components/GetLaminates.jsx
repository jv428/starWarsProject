import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import BlockIcon from "@mui/icons-material/Block";
import DraftsIcon from "@mui/icons-material/Drafts";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import { find, isEmpty } from "lodash";
import Face6Icon from "@mui/icons-material/Face6";
import MovieIcon from "@mui/icons-material/Movie";
import AgricultureIcon from "@mui/icons-material/Agriculture";

export const GetLaminates = ({
  data,
  setShowCounter,
  setAlbum,
  album,
  listLetters,
  setListLetters,
  randomData,
  configRandom,
  ramdonConfig,
}) => {
  const [layout, setLayout] = useState(undefined);

  const openLetter = (currentId) => {
    const newList = listLetters.map(({ id, open }) => {
      return {
        id,
        disabled: currentId == id ? false : true,
        open: !open ? currentId == id : open,
      };
    });
    setListLetters(newList);
    setShowCounter(true);
    ramdonConfig();
  };

  const saveAlbum = (item, key) => {
    const auxAlbum = { ...album };
    auxAlbum[key] = [...auxAlbum[key], item];
    setAlbum(auxAlbum);
  };
  const validItem = (item, key) => {
    const category = album[key];
    const result = find(category, item);
    return isEmpty(result);
  };
  useEffect(() => {
    console.log("dataAll", data);
  }, [data]);

  const renderCategory = (list, key) => (
    <>
      <div className="flex w-full justify-between flex-wrap p-5">
        {list.map((item) => (
          <div
            className="flex w-[30%] mb-8 animate-fade animate-once animate-duration-[1500ms] animate-ease-out max-sm:w-full"
            key={item?.url}
          >
            <Card variant="outlined" sx={{ width: 550 }}>
              {key == "people" && (
                <>
                  <CardContent>
                    <div className="flex items-center space-x-5">
                      <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-emerald-500">
                        <Face6Icon />
                      </div>
                      <Typography level="title-md">
                        Nombre: {item?.name}
                      </Typography>
                    </div>
                    <Typography level="body-sm">
                      Genero: {item?.gender}
                    </Typography>
                    <Typography level="body-sm">
                      Estatura: {item?.height}
                    </Typography>
                    <Typography level="body-sm">
                      Color de piel: {item?.skin_color}
                    </Typography>
                  </CardContent>
                  <CardOverflow
                    variant="soft"
                    sx={{ bgcolor: "background.level1" }}
                  >
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                      >
                        Año de nacimiento: {item?.birth_year}
                      </Typography>
                      <Divider orientation="vertical" />
                      {validItem(item, key) && (
                        <button
                          className="p-1 px-2 bg-emerald-500 text-white border-none rounded-md"
                          onClick={() => saveAlbum(item, key)}
                        >
                          Agregar al albúm
                        </button>
                      )}
                    </CardContent>
                  </CardOverflow>
                </>
              )}
              {key == "films" && (
                <>
                  <CardContent>
                    <div className="flex items-center space-x-5">
                      <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-sky-500">
                        <MovieIcon />
                      </div>
                      <Typography level="title-md">
                        Nombre: {item?.title}
                      </Typography>
                    </div>
                    <Typography level="body-sm">
                      Director: {item?.director}
                    </Typography>
                    <Typography level="body-sm">
                      Fecha de estreno: {item?.release_date}
                    </Typography>
                  </CardContent>
                  <CardOverflow
                    variant="soft"
                    sx={{ bgcolor: "background.level1" }}
                  >
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                      >
                        Poducido por {item?.producer}
                      </Typography>
                      <Divider orientation="vertical" />
                      {validItem(item, key) && (
                        <button
                          className="p-1 px-2 bg-emerald-500 text-white border-none rounded-md"
                          onClick={() => saveAlbum(item, key)}
                        >
                          Agregar al albúm
                        </button>
                      )}
                    </CardContent>
                  </CardOverflow>
                </>
              )}
              {key == "vehicles" && (
                <>
                  <CardContent>
                    <div className="flex items-center space-x-5">
                      <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-indigo-500">
                        <AgricultureIcon />
                      </div>
                      <Typography level="title-md">
                        Nombre: {item?.name}
                      </Typography>
                    </div>
                    <Typography level="body-sm">
                      Modelo: {item?.model}
                    </Typography>
                    <Typography level="body-sm">
                      Costo en créditos: {item?.cost_in_credits}
                    </Typography>
                    <Typography level="body-sm">
                      Tripulantes: {item?.crew}
                    </Typography>
                    <Typography level="body-sm">
                      Pasajeros: {item?.passengers}
                    </Typography>
                  </CardContent>
                  <CardOverflow
                    variant="soft"
                    sx={{ bgcolor: "background.level1" }}
                  >
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                      <Typography
                        level="body-xs"
                        fontWeight="md"
                        textColor="text.secondary"
                      >
                        Fabricado por {item?.manufacturer}
                      </Typography>
                      <Divider orientation="vertical" />
                      {validItem(item, key) && (
                        <button
                          className="p-1 px-2 bg-emerald-500 text-white border-none rounded-md"
                          onClick={() => saveAlbum(item, key)}
                        >
                          Agregar al albúm
                        </button>
                      )}
                    </CardContent>
                  </CardOverflow>
                </>
              )}
            </Card>
          </div>
        ))}
      </div>
    </>
  );
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
            className="flex justify-center items-center bg-amber-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500 disabled:bg-slate-400 disabled:scale-100 max-sm:w-full max-sm:mb-8"
            key={id}
            onClick={() => {
              openLetter(id);
              setLayout("fullscreen");
            }}
            disabled={open || disabled}
          >
            {openL && (
              <div className="flex flex-wrap justify-center">
                <div>
                  <DraftsIcon sx={{ fontSize: 150, color: "white" }} />
                </div>
                <h1 className="w-full text-white text-2xl">Abierto</h1>
              </div>
            )}
            {block && <BlockIcon sx={{ fontSize: 150, color: "white" }} />}
            {closeL && <EmailIcon sx={{ fontSize: 150, color: "white" }} />}
          </button>
        );
      })}
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout}>
          <ModalClose />
          <DialogTitle>¡Genial!, estas son tus láminas</DialogTitle>
          <DialogContent>
            <div>
              {configRandom?.map((confRan) =>
                renderCategory(randomData[confRan], confRan)
              )}
            </div>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </div>
  );
};
