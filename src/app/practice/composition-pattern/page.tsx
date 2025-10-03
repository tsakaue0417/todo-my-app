import ClientBoundary from "@/components/ClientBoundary";
import StaticServerComponent from "@/components/StaticServerComponent";
import StaticServerDataFetch from "@/components/StaticServerDataFetch";
import { Box } from "@mui/material";
import React from "react";

const CompositionPatternPage = () => {
  return (
    <Box>
      <h1>Composition Pattern Page</h1>
      <ClientBoundary>
        <StaticServerDataFetch />
      </ClientBoundary>
    </Box>
  );
};

export default CompositionPatternPage;
