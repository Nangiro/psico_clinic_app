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
                className="rounded-lg font-roboto text-bodyText text-[14px] bg-background border-2 border-black w-full p-2 resize-none"
                onChange={onChange}
                value={value}
                disabled={disabled}
                {...rest}
            />
        </div>
    )
}
