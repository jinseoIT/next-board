interface InputProps {
  value?: string;
  label: string;
  name: string;
  placeholder: string;
  className?: string;
}

export default function Input({label, name, placeholder, value = '',  className=''}: InputProps) {
  const labelStyle = `${!!label ? 'block' : 'hidden'} text-md font-bold text-gray-600`;
  const inputStyle = `w-full px-4 py-2 border rounded-md`;
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label htmlFor={name} className={labelStyle}>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className={inputStyle}
        name={name}
        id={name}
        defaultValue={value}
      />
    </div>
  )
}