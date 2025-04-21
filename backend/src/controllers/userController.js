import prisma from "../prismaClient.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await prisma.user.findUnique({ where: { email } });

        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }

        const newUser = await prisma.user.create({
            data: { name, email, password },
        });

        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export const getUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: req.body
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: "User not found" });
    }
}
export const deleteUser = async (req, res) => {
    try {
        await prisma.user.delete({ where: { id: parseInt(req.params.id) } })
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(400).json({ error: "User not found" });
    }
}