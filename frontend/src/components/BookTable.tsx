import { Book } from "../types/Book";
import axios from "axios";
type Props = {
  books: Book[];
  onDelete: (id: number) => void;
};

export function BookTable({ books, onDelete }: Props) {
  const handleDeleteBook = async (id: number) => {
    try {
      await axios
      .delete(`http://localhost:3000/books/${id}`);
      alert("Livro excluído com sucesso!");
      onDelete(id);
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
    
      
      
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Book List</h2>
      <table className="w-full table-auto text-left border border-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 border-b border-gray-200">Title</th>
            <th className="px-4 py-2 border-b border-gray-200">Author</th>
            <th className="px-4 py-2 border-b border-gray-200">Category</th>
            <th className="px-4 py-2 border-b border-gray-200">Year</th>
            <th className="px-4 py-2 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-100">
                {book.title}
              </td>
              <td className="px-4 py-2 border-b border-gray-100">
                {book.author}
              </td>
              <td className="px-4 py-2 border-b border-gray-100">
                {book.category}
              </td>
              <td className="px-4 py-2 border-b border-gray-100">
                {book.year}
              </td>
              <td className="px-4 py-2 border-b border-gray-100 space-x-2">
                <button className="text-blue-600 hover:underline cursor-pointer">
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline cursor-pointer"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
