import Image from 'next/image'

export const OfferDisplay = () => {
    return (
        <div
            data-testid={`OfferDisplay`}
            className="lg:pt-20 pb-20 pt-9 flex justify-center w-full lg:w-1/2 lg:items-center lg:justify-center"
        >
            <Image src={`/offer.png`} alt={'offer image with prices'} width="405" height="420" />
        </div>
    )
}
