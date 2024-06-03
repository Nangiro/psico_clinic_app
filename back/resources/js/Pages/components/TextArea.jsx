export function TextArea({
    label,
    className,
    onChange,
    value,
    type = 'text',
    rest,
    disabled = false
}) {
    return (
        <div className={`w-full flex flex-col text-white gap-1 items-start ${className}`}>
            <span>{label}</span>
            <textarea
                type={type}
                className="rounded-lg border-2 border-black w-full text-black p-2 bg-white resize-none"
                onChange={onChange}
                value={value}
                disabled={disabled}
                {...rest}
            />
        </div>
    )
}
