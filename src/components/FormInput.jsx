export default function FormInput({ label, name, type, defaultValue }) {
  return (
    <div className="form-control">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
}
