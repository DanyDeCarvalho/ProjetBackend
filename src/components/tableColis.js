import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function TableColis({ colis }) {
  return (
    <Table>
      <TableCaption>Liste de tout les colis.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Colis</TableHead>
          <TableHead>Poids (en kg)</TableHead>
          <TableHead>Expedition</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Zone de stockage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {colis.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              <Link key={item.id} href="/colis/[id]" as={`/colis/${item.id}`}>
                {item.nom}
              </Link>
            </TableCell>
            <TableCell>{item.poids}</TableCell>
            <TableCell>{item.adresse}</TableCell>
            <TableCell>{item.destination}</TableCell>
            <TableCell>{item?.zone?.name}</TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}
