"use client";
import { createColis, findZones } from "@/app/action";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function DialogColis({ zones }) {
  const [nom, setNom] = useState("colis num 4813");
  const [poids, setPoids] = useState("7.8");
  const [expedition, setExpedition] = useState(
    "2 rue du pont Colberg 78100 Versailles"
  );
  const [destination, setDestination] = useState(
    "25 rue du Cottage 95500 Gonesse"
  );
  const [zone, setZone] = useState("");
  async function creation() {
    const colis = {
      nom: nom,
      poids: parseFloat(poids),
      adresse: expedition,
      destination: destination,
    };

    await createColis(colis);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ajouter un colis</Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajout d'un colis</DialogTitle>
          <DialogDescription>
            Ajouter un colis en lui affectqnt un zone de stockage.
          </DialogDescription>
        </DialogHeader>
        <form action={creation}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nom Colis
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
                Poids (en kg)
              </Label>
              <Input
                id="poids"
                onChange={(e) => setPoids(e.target.value)}
                value={poids}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Adresse d'expedition
              </Label>
              <Input
                id="expedition"
                onChange={(e) => setExpedition(e.target.value)}
                value={expedition}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Destination
              </Label>
              <Input
                id="destination"
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Zone de stockage
              </Label>
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue
                    onChange={(e) => setZone(e.target.value)}
                    placeholder="Selectionner la zone de stockage"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {zones.map((item) => (
                      <SelectItem key={item.id} value="pineapple">
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
