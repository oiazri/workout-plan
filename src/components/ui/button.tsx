export function Button({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={
        "py-1 px-2 rounded " + color === "green"
          ? "bg-green-600 text-green-100 hover:bg-green-700"
          : "bg-red-600 text-red-100 hover:bg-red-700"
      }
    >
      {children}
    </button>
  );
}
