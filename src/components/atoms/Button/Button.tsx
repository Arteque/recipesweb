import "../../../index.css"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: 'full' | 'outlined';
    children: React.ReactNode | string;
}
export const Button = (
    {
        variant = 'full',
        children,
        ...props
    }: ButtonProps
) => {
    return (
        <button className={`${variant}`} {...props}>
            {children}
        </button>
    )
}