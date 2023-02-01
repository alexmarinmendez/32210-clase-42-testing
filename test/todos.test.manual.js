import Todos from '../TODOS.js'

const todos = new Todos()
console.log(todos.list())

todos.add('Visitar a mi ex')
console.log(todos.list())

todos.add('Ir a misa este domingo')
console.log(todos.list())

todos.completeTodo('Visitar a mi ex')
console.log(todos.list())

todos.completeTodo('Viajar a Perú')
console.log(todos.list())