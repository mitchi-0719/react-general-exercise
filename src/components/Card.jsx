import { Box } from "@mui/material";
import style from "../styles/Card.module.css";

export const Card = ({ item }) => {
  return (
    <Box textAlign="center" sx={{ width: "300px", height: "310px" }}>
      <Box
        border={1}
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
  );
};
