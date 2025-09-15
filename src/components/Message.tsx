export default function Message({
  text,
  from,
}: {
  text: string;
  from: "user" | "bot";
}) {
  return <div className={`message ${from}`}>{text}</div>;
}
