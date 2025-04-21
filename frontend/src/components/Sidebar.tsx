export function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Library</h2>
      <nav className="flex flex-col gap-4">
        <button className="text-left hover:underline">Books</button>
        <button className="text-left hover:underline">Categories</button>
        <button className="text-left hover:underline">Users</button>
      </nav>
    </aside>
  );
}
