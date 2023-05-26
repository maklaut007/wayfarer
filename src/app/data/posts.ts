interface Posts {
    id: number,
    cityId: number,
    title: string,
    author: string,
    content: string,
    photo: string
}

export const posts: Posts[] = [
    
    {   id: 1,
        cityId: 1,
        title: 'Adventures in San Francisco',
        author: 'Lorena Rojas',
        content: 'Visit San Francisco',
        photo:'./assets/images/post-images/sf1.tiff'
    },

    {
        id: 2,
        cityId: 2,
        title: 'Adventures in London',
        author: 'Obinna Umerah',
        content: 'Visit London',
        photo:'./assets/images/post-images/london1.jpg'
    },

    {
        id: 3,
        cityId: 3,
        title: 'Adventures in Seattle',
        author: 'Maksym Zinchenko',
        content: 'Visit Seattle',
        photo:'./assets/images/post-images/seattle1.jpg'
    },

    {
        id: 4,
        cityId: 4,
        title: 'Adventures in Sydney',
        author: 'Obinna Umerah',
        content: 'Lorem ipsum dolor sit amet. Id voluptatem culpa et eligendi internos ex deleniti animi. Rem quas dolore eum molestias tenetur in aliquid quod et voluptate culpa qui perferendis nisi ut impedit necessitatibus. Vel magni mollitia eum fugiat sequi qui quaerat perspiciatis qui suscipit dolor non quia doloribus aut consequatur omnis et aliquid soluta! In velit rerum qui voluptates incidunt aut dignissimos optio est explicabo adipisci qui modi neque.',
        photo:'./assets/images/post-images/sydney1.jpg'
    },
    {   id: 5,
        cityId: 1,
        title: 'A week in SF',
        author: 'Maksym Zinchenko',
        content: 'Visit San Francisco',
        photo:'./assets/images/post-images/sf2.jpg'
    },

    {
        id: 6,
        cityId: 2,
        title: 'Land of the King',
        author: 'Obinna Umerah',
        content: 'Visit London',
        photo:'./assets/images/post-images/london2.jpg'
    },

    {
        id: 7,
        cityId: 3,
        title: 'The EMP in Seattle',
        author: 'Lorena Rojas',
        content: 'Visit Seattle',
        photo:'./assets/images/post-images/seattle2.jpg'
    },

    {
        id: 8,
        cityId: 4,
        title: 'A trip to Sydney',
        author: 'Maksym Zinchenko',
        content: 'Visit Sydney',
        photo:'./assets/images/post-images/sydney2.jpg'
    }
]