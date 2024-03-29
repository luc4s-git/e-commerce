export default function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        id={name}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
}
