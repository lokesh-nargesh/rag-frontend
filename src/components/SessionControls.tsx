export default function SessionControls({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="session-controls">
      <button onClick={onReset}>Reset Session</button>
    </div>
  );
}
