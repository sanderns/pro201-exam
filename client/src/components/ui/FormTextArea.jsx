export function FormTextArea({ label, value, setValue }) {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
}
