interface ISignUpReq{
    fullName: string,
    email: string,
    password: string,
}

interface ISignInReq{
    email: string,
    password: string,
}

export type { ISignUpReq, ISignInReq, }