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
        content: 'Visit Sydney'
    }
]