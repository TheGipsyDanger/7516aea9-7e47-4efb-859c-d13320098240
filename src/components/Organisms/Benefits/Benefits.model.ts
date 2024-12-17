import {IBenefits} from './Benefits.types'
export const useBenefits = (): IBenefits.IModel => {
    const data = [
        {
            id: '1',
            img: 'benefits_1.png',
            title: 'Juntos, mais fortes.',
            description:
                'Somando o dinheiro de milhares de assinantes, todos os meses o grupo ganha o poder de pagar à vista por novos imóveis, o que permite negociar melhor o valor e aproveitar oportunidades.'
        },
        {
            id: '2',
            img: 'benefits_2.png',
            title: 'Os melhores imóveis, seus',
            description:
                'Experts do mercado imobiliário estão atentos às oportunidades de compra em todo o Brasil e escolhem as melhores administradoras de imóveis para cuidar das locações e do bem.'
        },
        {
            id: '3',
            img: 'benefits_3.png',
            title: 'Hiper diluição de risco.',
            description:
                'Os riscos de vacância ou inadimplência, típicos de imóveis, são diluídos, pois você será dono de apenas uma fração de cada imóvel e o aluguel dos seus outros imóveis pode cobrir os custos.'
        }
    ]

    return {
        data
    }
}
