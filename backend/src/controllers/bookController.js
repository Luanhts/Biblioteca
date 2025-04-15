import prisma from "../prismaClient.js"

export const createBook = async (req, res) => {
    try {
        const { title, author, year } = req.body;

        const bookExists = await prisma.book.findFirst({ where: { title } });

        if (bookExists) {
            return res.status(400).json({ error: "Book already exists" });
        }

        const newBook = await prisma.book.create({
            data: { title, author, year },
        });

        return res.status(201).json(newBook);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

