"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const createColis = async (colis) => {
  await prisma.colis.create({ data: colis });
  revalidatePath("/");
};

export const createZone = async (zone) => {
  await prisma.zone.create({ data: zone });
  revalidatePath("/");
};

export const findZone = async (id) => {
  return await prisma.zone.findUnique({ where: { id: id } });
};

export const findZones = async () => {
  return await prisma.zone.findMany();
};

export const findColi = async (id) => {
  return await prisma.colis.findUnique({
    where: { id: id },
    include: { zone: true },
  });
};

export const findColis = async () => {
  return await prisma.colis.findMany( {include: { zone: true }});
};

export const updateZone = async (id, zone) => {
  await prisma.zone.update({
    where: {
      id: id,
    },
    data: { name: zone.name, capacite: zone.capacite },
  });
  revalidatePath("/zone/" + id);
};
