import ClientDataFetch from "@/components/ClientDataFetch";
import DynamicServerDataFetch from "@/components/DynamicServerDataFetch";
import RequestMemoization from "@/components/RequestMemoization";
import { Box } from "@mui/material";
import React from "react";

const RequestMemoizationPage = () => {
  return (
    <Box>
      <h1>Request Memoization Page</h1>
      <DynamicServerDataFetch />
      <RequestMemoization />
      <ClientDataFetch />
    </Box>
  );
};

export default RequestMemoizationPage;
