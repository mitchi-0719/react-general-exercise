import { Box } from "@mui/material";
import style from "../styles/Card.module.css";
import { useState } from "react";
import { DetailDialog } from "./DetailDialog";

export const Card = ({ item }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <Box
        textAlign="center"
        sx={{ width: "300px", height: "310px" }}
        onClick={handleClick}
      >
        <Box
          border={2}
          margin="auto"
          p={1}
          sx={{ width: "280px", height: "250px" }}
          display="flex"
        >
          <img src={item.image} alt={item.character} className={style.image} />
        </Box>
        <Box sx={{ background: "#232323", color: "#dddddd" }}>
          <p className={style.p}>Name : {item.character}</p>
          <p className={style.p}>Game Series : {item.gameSeries}</p>
        </Box>
      </Box>
      <DetailDialog
        item={item}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </>
  );
};
