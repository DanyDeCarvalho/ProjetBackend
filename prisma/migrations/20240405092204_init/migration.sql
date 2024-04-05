-- CreateTable
CREATE TABLE "Colis" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "poids" DOUBLE PRECISION,
    "adresse" TEXT,
    "destination" TEXT,
    "zoneId" INTEGER,

    CONSTRAINT "Colis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Colis" ADD CONSTRAINT "Colis_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;
