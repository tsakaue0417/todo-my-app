import React from "react";
import Box from "./Box";
import Typography from "@mui/material/Typography";

interface Todo {
  id: number;
  contents: string;
}

const todo = () => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Todo管理アプリ
      </Typography>
    </Box>
  );
};

export default todo;
