export function Button({
  color,
  children,
}: {
  color?: string;
  children: React.ReactNode;
}) {
  const classGreen =
    color === "green" ? " bg-green-600 text-green-100 hover:bg-green-700" : "";
  const classRed =
    color === "red" ? " bg-red-600 text-red-100 hover:bg-red-700" : "";
  const classBlack = !color ? " bg-black text-white" : "";

  return (
    <button
      className={"py-1 px-2 rounded" + classGreen + classRed + classBlack}
    >
      {children}
    </button>
  );
}
