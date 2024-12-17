import {Text} from '@/components'
import Image from 'next/image'
import {useBenefits} from './Benefits.model'

export const Benefits = () => {
    const {data} = useBenefits()

    return (
        <section data-testid={`Benefits`} className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-8 lg:px-16">
                <div className="mb-2.">
                    <Text
                        id="benefits-title"
                        variant="manrope.headingSmall"
                        className="text-pink-600 mb-2"
                    >
                        {`Descubra o poder do grupo!`}
                    </Text>
                </div>
                <div className="mb-14 lg:mb-20">
                    <Text
                        id="benefits-subtitle"
                        variant="manrope.headingMedium"
                        className="text-primary-text mb-0.5 w-full lg:w-2/3"
                    >
                        {`Milhares de assinantes, juntos, compram imóveis à vista com preços melhores.`}
                    </Text>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {data.map(benefit => (
                        <div key={benefit.id}>
                            <Image
                                src={`/${benefit.img}`}
                                alt={'netspaces logo'}
                                width="261"
                                height="134"
                                className="mb-10"
                            />
                            <Text
                                id="benefits-subtitle"
                                variant="manrope.bodyLarge"
                                className="text-primary-text mb-4"
                            >
                                {benefit.title}
                            </Text>
                            <Text
                                id="benefits-subtitle"
                                variant="roboto.bodyMedium"
                                className="text-primary-text mb-4"
                            >
                                {benefit.description}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
