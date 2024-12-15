interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square text-gray-900" onClick={onSquareClick}>
      {value}
    </button>
  );
}
