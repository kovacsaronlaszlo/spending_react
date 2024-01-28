export default function NumberFormatter({ num }: { num: number }) {
  const result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return <p>{result}</p>;
}
