
"use server"
import { findColis, findZones } from "./action";
import Change from "@/components/change";

export default async function Home() {
  const colis = await findColis();
  const zones = await findZones();

  return (
    <Change colis={colis} zones={zones} />
  );
}
