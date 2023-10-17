interface TextAreaProps {
  label:string 
  placeholder:string 
  name:string 
  value:string
}

export default function TextArea({label, placeholder, name, value} : TextAreaProps) {
  const labelStyle = `${!!label ? 'block' : 'hidden'} text-md font-bold text-gray-600`
  const textareaStyle = 'w-full h-40 border rounded-lg p-4'
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className={labelStyle}>{label}</label>
      <textarea placeholder={placeholder} id={name} name={name} className={textareaStyle} defaultValue={value}/>
    </div>
  )
}