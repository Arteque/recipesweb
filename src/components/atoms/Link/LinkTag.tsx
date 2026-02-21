import type { FC } from "react"
import { Link } from "react-router"

interface LinkTagProps  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to:string;
    className?:string;
    children: React.ReactNode | string;
}

export const LinkTag:FC<LinkTagProps> = ({ to, className='', children, ...props }) => {
  return (
    <Link to={to} className={className} {...props}>{children}</Link>
  )
}