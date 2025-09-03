export function Button({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  if (color === "green") {
    return (
      <button className="bg-green-600 py-1 px-2 rounded text-green-100 hover:bg-green-700">
        {children}
      </button>
    );
  }

  return (
    <button className="bg-red-600 py-1 px-2 rounded text-red-100 hover:bg-red-700">
      {children}
    </button>
  );
}
