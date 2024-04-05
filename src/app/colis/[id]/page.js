import { findColi } from "@/app/action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default async function Colis({ params }) {
  const colis = await findColi(Number(params.id));
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-4/12 h-auto">
        <CardHeader>
          <CardTitle>Page du colis : {colis.nom} 📦 </CardTitle>
          <CardDescription>
            Retrouver toutes les informations de votre colis ici.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col p-3">
            <Label>Adresse d'éxepedition : {colis.adresse} </Label> 
          </div>
          <div className="flex flex-col p-3">
            <Label>Adresse de destination : {colis.destination}</Label> 
          </div>
          <div className="flex flex-col p-3">
            <Label>Poids (en kg) : {colis.poids}</Label> 
          </div>
          <div className="flex flex-col p-3">
            <Label>Zone de stockage : {colis.zone}</Label> 
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
