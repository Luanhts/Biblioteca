import prisma from "../prismaClient";
export const createRent = async (req, res) => {
    try {
        const { userId, bookId } = req.body;
        const rent = await prisma.rent.create({
            data: {
                userId,
                bookId,
            },
        });
        res.status(201).json(rent);
    } catch (error) {
        res.status(500).json({ error: "Failed to create rent" });
    }
};

export const getAllRents = async (req, res) => {
    try {
        const rents = await prisma.rent.findMany();
        res.status(200).json(rents);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch rents" });
    }
};


export const updateRent = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, bookId } = req.body;
        const rent = await prisma.rent.update({
            where: { id: parseInt(id) },
            data: {
                userId,
                bookId,
            },
        });
        res.status(200).json(rent);
    } catch (error) {
        res.status(500).json({ error: "Failed to update rent" });
    }
};
export const deleteRent = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.rent.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: "Rent deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete rent" });
    }
};


export const getRentById = async (req, res) => {
    try {
        const { id } = req.params;
        const rent = await prisma.rent.findUnique({ where: { id: parseInt(id) } });
        res.status(200).json(rent);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch rent" });
    }
};

export const getRentsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const rents = await prisma.rent.findMany({ where: { userId: parseInt(userId) } });
        res.status(200).json(rents);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch rents" });
    }
};

export const getRentsByBookId = async (req, res) => {
    try {
        const { bookId } = req.params;
        const rents = await prisma.rent.findMany({ where: { bookId: parseInt(bookId) } });
        res.status(200).json(rents);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch rents" });
    }
};

export const getRentsByUserIdAndBookId = async (req, res) => {
    try {
        const { userId, bookId } = req.params;
        const rents = await prisma.rent.findMany({ where: { userId: parseInt(userId), bookId: parseInt(bookId) } });
        res.status(200).json(rents);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch rents" });
    }
};

