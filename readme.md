# Simple CRUD gql
Graphql array todo CRUD

## Run ?
```
npm install
npm start
```

## Scheme & Querys
```
type Todo {
  id: Int,
  todo: String,
  status: Boolean
}
type Query {
  getTodo: [Todo!],
  addTodo(todo: String!): [Todo!],
  deleteTodo(id: Int!): [Todo!],
  updateTodo(id: Int!): [Todo!]
}
```

## Sample QL
```
{
  getTodo{
  	id
    todo
    status
  }
}
{
  addTodo(todo: "sleep") {
    id
    todo
    status
  }
}
{
  updateTodo(id: 0) {
    id
    todo
    status
  }
}
{
  deleteTodo(id: 1) {
    id
    todo
    status
  }
}

```


fariswd  
2020  
⚛️  
