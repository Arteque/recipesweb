import { Link } from "react-router"

interface LinkTagProps  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to:string;
    className?:string;
    children: React.ReactNode | string;
}

export const LinkTag = ({ to, className='', children, ...props }: LinkTagProps) => {
  return (
    <Link to={to} className={className} {...props}>{children}</Link>
  )
}