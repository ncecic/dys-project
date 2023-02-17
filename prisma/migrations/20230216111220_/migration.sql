/*
  Warnings:

  - The `oib` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `zip` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "oib",
ADD COLUMN     "oib" BIGINT NOT NULL DEFAULT 0,
DROP COLUMN "zip",
ADD COLUMN     "zip" INTEGER NOT NULL DEFAULT 0;
