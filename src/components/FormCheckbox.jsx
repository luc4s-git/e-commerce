export default function FormCheckbox({ name, label, defaultValue, size }) {
  return (
    <div className="form-control items-center">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        className={`checkbox checkbox-primary ${size}`}
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        id={name}
      />
    </div>
  );
}
