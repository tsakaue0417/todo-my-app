import Box from "@/components/Box";
import DynamicServerComponent from "@/components/DynamicServerComponent";
import StaticClientComponent from "@/components/StaticClientComponent";
import React from "react";

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>DynamicServerComponent</h1>
      <DynamicServerComponent text="Dynamic Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
    </Box>
  );
};

export default DynamicRenderingPage;
