import { DynamicIcon } from "@/components/icon";
import React from "react";

export default function InPut() {
  return (
    <div>
      <div className="relative">
        <input
          placeholder="Search Products..."
          style={{
            height: "46px",
            width: "200px",
            borderRadius: "6px",
            padding: 15,
            fontSize: "16px",
            borderColor: "white",
            outline: "none",
          }}
        />
        {/* <DynamicIcon
          size={20}
          color="gray"
          name="search"
          className="absolute bottom-4 right-2 cursor-pointer"
        /> */}
      </div>
    </div>
  );
}
