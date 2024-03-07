-- CreateTable
CREATE TABLE `Box` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `superzahl` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numbers` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Box_Ticket` (
    `boxId` INTEGER NOT NULL,
    `ticketId` INTEGER NOT NULL,

    PRIMARY KEY (`ticketId`, `boxId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Box_Ticket` ADD CONSTRAINT `Box_Ticket_boxId_fkey` FOREIGN KEY (`boxId`) REFERENCES `Box`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Box_Ticket` ADD CONSTRAINT `Box_Ticket_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
