const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

let todoBank = []
let id = 0

const schema = buildSchema(`
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
`)

const root = {
  getTodo: () => todoBank,
  addTodo: ({ todo }) => {
    let newTodo = {
      id: id + 1,
      todo: todo,
      status: false
    }
    todoBank.push(newTodo)
    return todoBank
  },
  deleteTodo: ({ id }) => {
    let index = todoBank.findIndex(todo => todo.id == id)
    todoBank = todoBank.splice(index+1, 1)
    return todoBank
  },
  updateTodo: ({ id }) => {
    todoBank[id].status = !todoBank[id].status
    return todoBank
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen('4000', () => {
  console.log('running on 4000');
})