export function Button({
    onClick,
    label,
    className
}) {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg text-white bg-black active:bg-black/90 ${className}`}
        >
            {label}
        </button>
    )
}
