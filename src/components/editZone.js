"use client";
import { updateZone } from "@/app/action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function EditZone({ zone }) {
  const [nom, setNom] = useState(zone.name);
  const [capacite, setCapacite] = useState(zone.capacite);

  async function update() {
    const entrepot = {
      name: nom,
      capacite: Number(capacite),
    };

    await updateZone(parseInt(zone.id), entrepot);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Modifier la zone : {zone.name} </Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajout d'une zone de stockage</DialogTitle>
          <DialogDescription>
            Ajouter une zone de stockage en lui affectant une capacité.
          </DialogDescription>
        </DialogHeader>
        <form action={update}>
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
