interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    children: React.ReactNode | string;
}
export const Button:React.FC<ButtonProps> = (
    {
        variant = 'primary',
        size='md',
        children,
        ...props
    }
) => {
    return (
        <button className={`btn btn--${variant} btn--${size}`} {...props}>
            {children}
        </button>
    )
}