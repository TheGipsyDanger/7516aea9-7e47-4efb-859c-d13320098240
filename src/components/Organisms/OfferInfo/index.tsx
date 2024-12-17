import {Text, Line} from '@/components'
import Image from 'next/image'

export const OfferInfo = () => {
    return (
        <div
            data-testid={`OfferInfo`}
            className="lg:w-1/2 pt-8 flex flex-col justify-center px-8 lg:pr-24"
        >
            <div className="mb-2.5">
                <Text id="h2" variant="manrope.headingSmall" className="text-pink-600 mb-2">
                    {`Exclusivo no lançamento`}
                </Text>
            </div>
            <Text
                id="offer-title"
                variant="manrope.headingMedium"
                className="text-primary-text mb-8"
            >
                {`Até 35% Off na compra do primeiro imóvel*`}
            </Text>
            <Text
                id="offer-reserve"
                variant="roboto.bodyMedium"
                className="text-primary-text mb-11"
            >
                {`Reserve sua assinatura antes do lançamento e todas as frações do primeiro imóvel,
                adquiridas mensalmente, serão compradas por um valor muito abaixo do valor de
                mercado. O bom negócio imobiliário se faz na compra, e a gente sabe disso.`}
            </Text>
            <div className="flex flex-row mb-4 justify-center lg:justify-start">
                <Text
                    id="offer-original-price"
                    variant="manrope.bodySmallLight"
                    className="text-primary-text"
                >
                    {`De: R$ 250.000`}
                </Text>
                <div className="w-[16px]" />
                <Text id="offer-price" variant="manrope.bodySmall" className="text-pink-600">
                    {`Por: R$ 162.500`}
                </Text>
            </div>
            <Line />
            <div className="pt-4">
                <div className="flex justify-between">
                    <div className="w-2/3 sm:w-full">
                        <div className="flex items-center w2/3 lg:w-full mb-3">
                            <div className="w-[50px] h-[50px">
                                <Image
                                    src={`/offer_ellipse_1.png`}
                                    alt={'offer image with netspaces logo'}
                                    width="50"
                                    height="50"
                                />
                            </div>
                            <div className="ml-3">
                                <Text
                                    id="offer-original-price"
                                    variant="manrope.bodySmall"
                                    className="text-primary-text"
                                >
                                    {`15% Off`}
                                </Text>
                                <Text
                                    id="offer-original-price"
                                    variant="roboto.bodyRegular"
                                    className="text-zinc-500"
                                >
                                    {`Para os 10.000 primeiros a reservar`}
                                </Text>
                            </div>
                        </div>
                        <div className="flex items-center w2/3 lg:w-full mb-3">
                            <div className="w-[50px] h-[50px]">
                                <Image
                                    src={`/offer_ellipse_2.png`}
                                    alt={'offer image with netspaces logo'}
                                    width="50"
                                    height="50"
                                />
                            </div>
                            <div className="ml-3">
                                <Text
                                    id="offer-original-price"
                                    variant="manrope.bodySmall"
                                    className="text-primary-text"
                                >
                                    {`20% Off`}
                                </Text>
                                <Text
                                    id="offer-original-price"
                                    variant="roboto.bodyRegular"
                                    className="text-zinc-500"
                                >
                                    {`Para clientes do movimento`}
                                </Text>
                                <Text
                                    id="offer-original-price"
                                    variant="roboto.bodyBold"
                                    className="text-violet-600"
                                >
                                    {`Me Poupe! Felizes 20.23`}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[98px] h-[127px] self-end mt-[-127px]">
                <Image
                    src={`/person.png`}
                    alt={'offer image with netspaces logo'}
                    width="98"
                    height="127"
                />
            </div>
            <Line />
            <div className="flex flex-row mt-4">
                <Text
                    id="offer-original-price"
                    variant="roboto.bodyRegularSm"
                    className="text-zinc-500"
                >
                    {`* os descontos são limitados às reservas de planos de R$ 49,00 ou mais, e até
                    que se esgotem as frações do primeiro imóvel deste plano de assinatura.`}
                </Text>
            </div>
        </div>
    )
}
