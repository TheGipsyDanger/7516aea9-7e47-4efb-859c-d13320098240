import {withChildren} from '@/utils'

export type TypographyVariants =
    | 'manrope.headingLarge'
    | 'manrope.headingMedium'
    | 'manrope.headingSmall'
    | 'manrope.bodyLarge'
    | 'manrope.bodySmall'
    | 'manrope.bodySmallLight'
    | 'roboto.bodyLarge'
    | 'roboto.bodyMedium'
    | 'roboto.bodyRegular'
    | 'roboto.bodyRegularSm'
    | 'roboto.bodyBold'

export namespace IText {
    export interface IView extends withChildren {
        id: string
        className?: string
        variant?: TypographyVariants
    }
    export interface IModelProps {}
    export interface IModel {}
}
