interface Posts {
    id: number,
    cityId: number,
    title: string,
    author: string,
    content: string   
}

export const posts: Posts[] = [
    
    {   id: 1,
        cityId: 1,
        title: 'Adventures in San Francisco',
        author: 'Lorena Rojas',
        content: 'Visit San Francisco'
    },

    {
        id: 2,
        cityId: 2,
        title: 'Adventures in London',
        author: 'Obinna Umerah',
        content: 'Visit London'
    },

    {
        id: 3,
        cityId: 3,
        title: 'Adventures in Seattle',
        author: 'Maksym Zinchenko',
        content: 'Visit Seattle'
    },

    {
        id: 4,
        cityId: 4,
        title: 'Adventures in Sydney',
        author: 'Obinna Umerah',
        content: 'Lorem ipsum dolor sit amet. Id voluptatem culpa et eligendi internos ex deleniti animi. Rem quas dolore eum molestias tenetur in aliquid quod et voluptate culpa qui perferendis nisi ut impedit necessitatibus. Vel magni mollitia eum fugiat sequi qui quaerat perspiciatis qui suscipit dolor non quia doloribus aut consequatur omnis et aliquid soluta! In velit rerum qui voluptates incidunt aut dignissimos optio est explicabo adipisci qui modi neque.'
    },
    {   id: 5,
        cityId: 1,
        title: 'Adventures in San Francisco part 2',
        author: 'Lorena Rojas',
        content: 'Visit San Francisco'
    },

    {
        id: 6,
        cityId: 2,
        title: 'Adventures in London part 2',
        author: 'Obinna Umerah',
        content: 'Visit London'
    },

    {
        id: 7,
        cityId: 3,
        title: 'Adventures in Seattle part 2',
        author: 'Maksym Zinchenko',
        content: 'Visit Seattle'
    },

    {
        id: 8,
        cityId: 4,
        title: 'Adventures in Sydney part 2',
        author: 'Obinna Umerah',
        content: 'Visit Sydney'
    }
]