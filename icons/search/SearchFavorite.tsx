import { SVGProps } from 'react'
import { IconProps } from 'icons/type'

type Props = IconProps & SVGProps<SVGSVGElement>

const SearchNormal = ({ w, size, h, strokeWidth, ...props }: Props) => {
  const width = w || size || 24
  const height = h || size || 24
  const stroke = strokeWidth || 1.5

  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SearchNormal
