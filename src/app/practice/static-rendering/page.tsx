import Box from "@/components/Box";
import DynamicServerComponent from "@/components/DynamicServerComponent";
import StaticClientComponent from "@/components/StaticClientComponent";
import StaticServerComponent from "@/components/StaticServerComponent";
import React from "react";

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1>Static Rendering Page</h1>
      <StaticServerComponent text="Static Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
    </Box>
  );
};

export default StaticRenderingPage;
