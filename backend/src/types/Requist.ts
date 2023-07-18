

declare namespace Express {
    export interface Requist {
        user:{
            id: string
            name: string
            email: string
            isAdmin: boolean
            token: string
        }
    }
}