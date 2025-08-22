"use client";
import React from "react";

const TrashCan = () => {
  return (
    <div
      id="trash-can"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 64,
        height: 64,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 32,
        zIndex: 9998,
        pointerEvents: "none",
      }}
    >
      🗑️
    </div>
  );
};

export default TrashCan;
