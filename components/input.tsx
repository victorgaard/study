import { useState } from 'react';

type InputProps = {
  type: string;
  name: string;
  value: string;
  label: string;
  error: string;
  required?: boolean;
  updateData: (newData: any) => void;
};

function Input({
  type,
  name,
  value,
  label,
  error,
  required,
  updateData
}: InputProps) {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={e => updateData({ [name]: e.target.value })}
          className={`w-full pt-[1.75rem] pb-[0.75rem] px-4 text-sm bg-slate-700 text-white rounded caret-primary caret-blue-300 outline outline-slate-600 focus:outline-blue-300 focus:outline-2  peer ${
            isValid === false && `outline-red-500 focus:outline-red-500`
          }`}
          placeholder=" "
          required={required}
          autoComplete="off"
        />
        <span className="absolute select-none scale-75 left-4 bottom-[1.925rem] pointer-events-none text-slate-300 font-normal peer-focus:scale-75 peer-focus:bottom-[1.925rem] peer-placeholder-shown:scale-[87.5%] peer-placeholder-shown:left-4 peer-placeholder-shown:bottom-[1.15rem] origin-left transition-all">
          {label}
        </span>
      </div>
      {isValid === false && (
        <p className="mt-2 text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}

export default Input;
4;
