/*
  Warnings:

  - You are about to drop the column `City` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Country` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "City",
DROP COLUMN "Country",
ADD COLUMN     "city" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "country" TEXT NOT NULL DEFAULT '';
