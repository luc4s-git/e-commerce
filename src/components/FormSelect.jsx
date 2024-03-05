export default function FormSelect({ label, list, defaultValue, name, size }) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        className={`select select-bordered ${size}`}
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        {list?.map((listItem, index) => {
          return (
            <option key={index} value={listItem}>
              {listItem}
            </option>
          );
        })}
      </select>
    </div>
  );
}
