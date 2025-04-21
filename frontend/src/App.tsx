import { useEffect, useState } from "react";
import axios from "axios";
import  {BookForm} from "./components/BookForm.tsx";
import  {BookTable} from "./components/BookTable";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Book } from "./types/Book";
export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/books/")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-50">
          <BookForm setBooks={setBooks} />
          <BookTable books={books} />
        </main>
      </div>
    </div>
  );
}