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

export const getAllBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        return res.status(200).json(books);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const getBookByID = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await prisma.book.findUnique({ where: { id: parseInt(id) } });
        return res.status(200).json(book);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await prisma.book.update({
            where: { id: parseInt(id) },
            data: req.body
        });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(400).json({ error: "Book not found" });
    }
}

export const deleteBook = async (req, res) => {
    try {
        await prisma.book.delete({ where: { id: parseInt(req.params.id) } })
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        return res.status(400).json({ error: "Book not found" });
    }
}