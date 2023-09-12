const Input = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        name={id}
        value={value}
        id={id}
        className="
          block
          rounded-md
          pt-6
          px-6
          w-full
          pb-1
         text-white
          text-md
          appearance-none
         bg-neutral-700
          focus:ring-0
          focus:outline-none
          peer
         "
        placeholder=" "
      />
      <label
        className="
      absolute
      text-md
      text-zinc-400
      duration-150
      transform
      -translate-y-3
      scale-75
      top-4
      z-10
      origin-[0]
      left-6
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-3
      "
        htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
