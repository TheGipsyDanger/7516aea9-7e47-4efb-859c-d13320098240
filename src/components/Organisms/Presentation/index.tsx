import {Text} from '@/components'
import Image from 'next/image'

export const Presentation = () => {
    return (
        <section data-testid={`Presentation`} className="bg-white">
            <div className=" flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mt-12 lg:text-left md:ml-16 ml-8">
                    <Image
                        src={`/logo.png`}
                        alt={'netspaces logo'}
                        width="161"
                        height="40"
                        className="mb-10"
                    />
                    <div className="w-2.5/3 lg:w-full">
                        <Text
                            id="h1"
                            variant="manrope.headingLarge"
                            className="md:text-primary-text text-black mb-5"
                        >
                            {`A primeira assinatura de patrimônio imobiliário`}
                        </Text>
                    </div>
                    <div className="flex flex-row justify-between items:center w-full mb-10">
                        <Text
                            id="presentation"
                            variant="roboto.bodyLarge"
                            className="text-primary-text w-2/3"
                        >
                            {`Acumule frações de imóveis reais mensalmente e veja seu patrimônio crescer.
                        Aproveite os descontos exclusivos de lançamento com planos de R$ 5,90 até R$
                        1999,00.`}
                        </Text>
                        <div className="flex lg:hidden w-[249px] h-[249px]">
                            <Image
                                src={`/presentation_2.png`}
                                layout="responsive"
                                alt={'presentation image app'}
                                width="249"
                                height="249"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <button className="bg-blue-500 text-white py-3 px-6 md:w-1/2 w-full mr-8 md:mr-0 rounded-lg shadow-md hover:bg-blue-600 mb-12">
                            <Text id="button-text" variant="roboto.bodyBold">
                                {`Reservar meu lugar na fila`}
                            </Text>
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 justify-end relative hidden lg:flex">
                    <Image
                        src={`/presentation.png`}
                        alt={'presentation image app'}
                        width="710"
                        height="646"
                    />
                </div>
            </div>
        </section>
    )
}
