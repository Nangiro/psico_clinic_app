export function Button ({
    onClick,
    label,
    className
} : {
    onClick?: () => void
    label?: string
    className?: string
}) 
: React.ReactElement<HTMLInputElement> {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg text-white bg-black active:bg-black/90 ${className}`}
        >
            {label}
        </button>
    )
}