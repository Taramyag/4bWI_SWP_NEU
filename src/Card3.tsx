import React from 'react'
type Props = {

    image: string
    image2: string
    image3: string
    image4: string
}




export default function Card2({ image, image2, image3, image4 }: Props) {
    return (
        <div className='card3'>

            <img src={image} className='Images' />
            <img src={image2} className='Images' />
            <img src={image3} className='Images' />
            <img src={image4} className='Images' />

        </div>
    )
}