import {IText, TypographyVariants} from './Text.types'

export const Text = ({
    id,
    children,
    className = '',

    variant = 'roboto.bodyRegular'
}: IText.IView) => {
    const typographyStyles: Record<TypographyVariants, string> = {
        'manrope.headingLarge': `text-[38px] font-[800] leading-[41.8px] font-[family-name:var(--font-manrope)] lg:text-[48px] lg:leading-[52.8px]`,
        'manrope.headingMedium': `text-[24px] font-[700] leading-[28.8px] font-[family-name:var(--font-manrope)] lg:text-[36px] lg:leading-[43.2px] lg:font-[700]`,
        'manrope.headingSmall': `text-[16px] font-[800] leading-[19.2px] font-[family-name:var(--font-manrope)] lg:text-[26px] lg:leading-[43.2px]`,
        'manrope.bodyLarge': `text-[20px] font-[800] leading-[23px] font-[family-name:var(--font-manrope)] lg:text-[24px] lg:leading-[27.6px]`,
        'manrope.bodySmall': `text-[18px] font-[700] leading-[19.2px] font-[family-name:var(--font-manrope)] lg:text-[18px] lg:leading-[19.8px]`,
        'manrope.bodySmallLight': `text-[18px] font-[300] leading-[19.8px] font-[family-name:var(--font-manrope)] lg:text-[18px] lg:leading-[19.8px]`,
        'roboto.bodyLarge': `text-[16px] font-[300] leading-[22.4px] font-[family-name:var(--font-roboto)] lg:text-[24px] lg:leading-[33.6px]`,
        'roboto.bodyMedium': ` text-[14px] font-[300] leading-[21px] font-[family-name:var(--font-roboto)] lg:text-[16px] lg:leading-[24px]`,
        'roboto.bodyRegular': `text-[14px] font-[400] leading-[20.3px] font-[family-name:var(--font-roboto)] lg:text-[16px] lg:leading-[23.2px]`,
        'roboto.bodyRegularSm': `text-[12px] font-[400] leading-[17.4px] font-[family-name:var(--font-roboto)]`,
        'roboto.bodyBold': `text-[18px] font-[700] leading-[26.1px] font-[family-name:var(--font-roboto)]`
    }

    return (
        <p data-testid={`Text-${id}`} className={`${typographyStyles[variant]} ${className}`}>
            {children}
        </p>
    )
}
