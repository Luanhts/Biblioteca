import axios from "axios";
import { Book } from "../types/Book";

type Props = {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
};

export function BookForm({ setBooks }: Props) {
  const handleSaveBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const book: Omit<Book, 'id'> = {
      title: (form[0] as HTMLInputElement).value,
      author: (form[1] as HTMLInputElement).value,
      category: (form[2] as HTMLInputElement).value,
      year: Number((form[3] as HTMLInputElement).value),
    };

    axios
      .post("http://localhost:3000/books/", book)
      .then((res) => {
        setBooks((prev) => [...prev, res.data]);
        form.reset();
      })
      .catch((err) => console.error("Erro ao salvar livro:", err));
  };
  return (
    <form onSubmit={handleSaveBook} className="grid grid-cols-2 gap-4 bg-white p-4 rounded shadow mb-6">
      <input type="text" placeholder="Title" className="border p-2 rounded" required />
      <input type="text" placeholder="Author" className="border p-2 rounded" required />
      <input type="text" placeholder="Category" className="border p-2 rounded" required />
      <input type="number" placeholder="Year" className="border p-2 rounded" required />
      <button
        type="submit"
        className="col-span-2 bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700"
      >
        Save Book
      </button>
    </form>
  );
}
