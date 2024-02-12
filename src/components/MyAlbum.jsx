import React, { useState } from "react";
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Films } from "./laminas/Films";

export const MyAlbum = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -2,
        overflowX: "hidden",
      }}
    >
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList
          sx={{
            pt: 1,
            justifyContent: "center",
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
              },
              [`&.${tabClasses.selected}`]: {
                color: "warning.plainColor",
                "&::after": {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: "warning.500",
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
            Peliculas{" "}
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? "warning" : "neutral"}
            >
              14
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Personajes{" "}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? "warning" : "neutral"}
            >
              20
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Naves{" "}
            <Chip
              size="sm"
              variant="soft"
              color={index === 2 ? "warning" : "neutral"}
            >
              8
            </Chip>
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            "--bg": theme.vars.palette.background.surface,
            background: "var(--bg)",
            boxShadow: "0 0 0 100vmax var(--bg)",
            clipPath: "inset(0 -100vmax)",
          })}
        >
          <TabPanel value={0}><Films/></TabPanel>
          <TabPanel value={1}>Library</TabPanel>
          <TabPanel value={2}>Products</TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
};
