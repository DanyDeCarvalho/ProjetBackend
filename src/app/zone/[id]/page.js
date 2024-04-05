import { findColi, findZone, updateZone } from "@/app/action";
import EditZone from "@/components/editZone";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default async function Zone({ params }) {
  const zone = await findZone(Number(params.id));

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-4/12 h-auto">
        <CardHeader>
          <CardTitle className="flex justify-between">Page de la zone : {zone.name} <EditZone zone={zone} /></CardTitle>
          <CardDescription>
            Retrouver toutes les informations de votre zone ici.
            
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col p-3">
            <Label>Capacité Totale : {zone.capacite} </Label> 
          </div>
        </CardContent>
        <CardFooter>
          <p>™️</p>
        </CardFooter>
      </Card>
    </div>
  );
}
