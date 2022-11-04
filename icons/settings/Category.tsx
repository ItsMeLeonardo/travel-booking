import { SVGProps } from 'react'
import { IconProps } from 'icons/type'

type Props = IconProps & SVGProps<SVGSVGElement>

const Category = ({ w, size, h, strokeWidth, ...props }: Props) => {
  const width = w || size || 24
  const height = h || size || 24
  const stroke = strokeWidth || 1.5

  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Category
