"use client";
import { createZone } from "@/app/action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function DialogZone() {
  const [nom, setNom] = useState("Zone n°38");
  const [capacite, setCapacite] = useState(10);

  async function creation() {
    const zone = {
      name: nom,
      capacite: Number(capacite),
    };

    await createZone(zone);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ajouter une Zone de stockage</Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajout d'une zone de stockage</DialogTitle>
          <DialogDescription>
            Ajouter une zone de stockage en lui affectant une capacité.
          </DialogDescription>
        </DialogHeader>
        <form action={creation}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nom de la zone
              </Label>
              <Input
                id="name"
                onChange={(e) => setNom(e.target.value)}
                value={nom}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Capacité
              </Label>
              <Input
                id="poids"
                onChange={(e) => setCapacite(e.target.value)}
                value={capacite}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
