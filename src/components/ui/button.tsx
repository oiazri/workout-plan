export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-red-600 py-1 px-2 rounded text-red-100 hover:bg-red-700">
      {children}
    </button>
  );
}
