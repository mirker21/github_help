import Image from "next/image"

import filledStar from '../../filled-star.svg'
import emptyStar from '../../empty-star.svg'

export default function Star({isFilled}) {
    return (
        <Image src={isFilled ? filledStar : emptyStar} />
    )
}