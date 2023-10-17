interface ButtonProps {
  content : string
  className ?: string
  onClick ?: React.MouseEventHandler;
}

export default function Button ({content, className, onClick}: ButtonProps) {
  return (
    <button className={`button select-none ${className}`} onClick={onClick}>
      {content}
    </button>
  )
}