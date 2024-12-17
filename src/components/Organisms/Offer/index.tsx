import {Text} from '@/components'
import Image from 'next/image'

import {OfferInfo} from '../OfferInfo'
import {OfferDisplay} from '../OfferDisplay'

export const Offer = () => {
    return (
        <section data-testid={`Offer`} className="bg-gray-100">
            {/* Desktop */}
            <div className="flex-col lg:flex-row pb-20 hidden lg:flex">
                <OfferDisplay />
                <OfferInfo />
            </div>
            {/* Mobile */}
            <div className="flex-col pb-20 lg:hidden">
                <OfferInfo />
                <OfferDisplay />
            </div>
        </section>
    )
}
