import { Box, Button } from "@mui/material";

export const Search = () => {
  return (
    <Box flex={1} variant="contained" sx={{ background: "lightgreen" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Button type="submit">search</Button>
      </form>
    </Box>
  );
};
