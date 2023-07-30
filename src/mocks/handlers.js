import { rest } from 'msw'

export const users = [
    {
        "id": 1,
        "name": "john",
        "email": "john@test.com"
    },
    {
        "id": 2,
        "name": "kevin",
        "email": "kc@test.com"
    },
    {
        "id": 3,
        "name": "marcux",
        "email": "marc@test.com"
    },
    {
        "id": 4,
        "name": "henrey",
        "email": "henrey@test.com"
    }
]

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(users)
        )
    }),
]
