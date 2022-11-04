import { SVGProps } from 'react'
import { IconProps } from 'icons/type'

type Props = IconProps & SVGProps<SVGSVGElement>

const CloseCircle = ({ w, size, h, strokeWidth, ...props }: Props) => {
  const width = w || size || 24
  const height = h || size || 24
  const stroke = strokeWidth || 1.5

  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CloseCircle
