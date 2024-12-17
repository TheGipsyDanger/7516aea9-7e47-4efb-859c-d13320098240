import {IGlobalWrapper} from '../GlobalWrapper.types'

export const Content = ({children}: IGlobalWrapper.IView) => (
    <div data-testid={`GlobalWrapperContent`} className="flex w-[1440px] h-screen">
        {children}
    </div>
)
