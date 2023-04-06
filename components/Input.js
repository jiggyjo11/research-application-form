const Input = ({ id, label, type, register, errorMessage, placeholder }) => (
    <div className="form-control w-full mb-4" key={id}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="input input-bordered w-full"
        placeholder={placeholder}
        id={id}
        name={id}
        maxLength={id === "event_title" ? 80 : undefined}
        {...register(id)}
      />
      {errorMessage && (
        <label className="label">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </label>
      )}
    </div>
  );

  export default Input;