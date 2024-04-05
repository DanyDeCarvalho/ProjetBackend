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

export default function TableZones({ zones }) {
  return (
    <Table>
      <TableCaption>Liste de toutes les zones de stockage.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Nom de la zone de stockage</TableHead>
          <TableHead>Capacité</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {zones.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              <Link key={item.id} href="/zone/[id]" as={`/zone/${item.id}`}>
                {item.name}
              </Link>
            </TableCell>
            <TableCell>{item.capacite}</TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}
