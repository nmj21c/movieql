const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name || 'world'}`,
        name: () => 'Jonghyun',
    }
};

export default resolvers;