const people = [
    {
        id: 1,
        name: "Jeon Jonghyun",
        age: 40,
        gender: "male"
    },
    {
        id: 2,
        name: "Kim Daae",
        age: 39,
        gender: "female"
    }
];

const getById = (id:Number) => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name || 'world'}`,
        name: () => 'Jonghyun',
        people:  () => people,
        person: (_, {id}) => getById(id)
    }
};

export default resolvers;