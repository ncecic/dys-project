/*
  Warnings:

  - You are about to alter the column `oib` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "email" SET DEFAULT '',
ALTER COLUMN "password" SET DEFAULT '',
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "oib" SET DEFAULT 0,
ALTER COLUMN "oib" SET DATA TYPE INTEGER,
ALTER COLUMN "phone" SET DEFAULT '',
ALTER COLUMN "address" SET DEFAULT '',
ALTER COLUMN "zip" SET DEFAULT 0,
ALTER COLUMN "Country" SET DEFAULT '',
ALTER COLUMN "City" SET DEFAULT '';
