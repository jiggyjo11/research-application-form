export const Dropdown = ({
    id,
    label,
    register,
    errorMessage,
    placeholder,
    options,
  }) => (
    <div className="form-control w-full mb-4" key={id}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="input input-bordered w-full"
        id={id}
        name={id}
        maxLength={id === "event_title" ? 80 : undefined}
        {...register(id)}
      >
        <option value={options[1]} disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errorMessage && (
        <label className="label">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </label>
      )}
    </div>
  );
  