-- CreateTable
CREATE TABLE `login` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('ADMIN', 'SUPERADMIN') NOT NULL DEFAULT 'ADMIN',
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
