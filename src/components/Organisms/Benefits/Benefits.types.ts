type IData = {
    id: string
    title: string
    description: string
    img: string
}

export namespace IBenefits {
    export interface IView {}
    export interface IModelProps {}
    export interface IModel {
        data: IData[]
    }
}
