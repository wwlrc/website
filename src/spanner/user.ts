import { spannerApiFetch } from './api'

export type User = {
    first_name: string
    last_name: string
    email: string
}

function isUser(value: unknown): value is User {
    return (
        typeof value === 'object' &&
        value !== null &&
        typeof (value as User).first_name === 'string' &&
        typeof (value as User).last_name === 'string' &&
        typeof (value as User).email === 'string'
    )
}

export async function getUser(): Promise<User | null> {
    let data = await spannerApiFetch("/me")

    if (!isUser(data.user)) {
        return null
    }

    return data.user
}
