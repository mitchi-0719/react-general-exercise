import { Box, Button } from "@mui/material";
import { Card } from "./Card";

export const Gallery = ({ amiibo, displayCount, setDisplayCount }) => {
  return (
    <Box flex={4} sx={{ background: "yellow" }}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        columnGap={2}
        rowGap={3}
        mt={1}
      >
        {amiibo.map((item, index) => {
          if (index >= displayCount) {
            return;
          }
          return <Card key={index} item={item} />;
        })}
      </Box>
      <Button
        onClick={() => setDisplayCount((prev) => prev + 20)}
        variant="contained"
        sx={{ width: "80%", mx: "auto", my: 5, display: "block" }}
      >
        もっと見る
      </Button>
    </Box>
  );
};
