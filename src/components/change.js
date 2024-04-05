"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import DialogZone from "@/components/dialogZone";
import DialogColis from "./dialogColis";
import TableColis from "./tableColis";
import TableZones from "./tableZones";

export default function Change({colis, zones}) {
  const [isColis, setIsColis] = useState(true);
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex flex-row gap-4 justify-end w-11/12">
        <div className="flex flex-row justify-start  w-full">
          <Button onClick={() => setIsColis(!isColis)}>
            {isColis ? "Afficher les zones de stockage" : "Afficher les colis"}
          </Button>
        </div>
        <DialogColis zones={zones} />
        <DialogZone />
      </div>
      {isColis ? <TableColis colis={colis} /> : <TableZones zones={zones} /> }
      
    </div>
  );
}
