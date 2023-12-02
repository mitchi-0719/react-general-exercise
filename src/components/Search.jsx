import { Box, Button } from "@mui/material";

export const Search = ({ gameSeries, amiiboType, amiiboSeries }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box flex={1} variant="contained" sx={{ background: "lightgreen" }}>
      <form onSubmit={handleSubmit}>
        <Button type="submit">search</Button>
      </form>
    </Box>
  );
};
