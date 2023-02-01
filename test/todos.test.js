import TODOS from '../TODOS.js'
import assert from 'assert'

describe('Pruebas de TODOS', () => {
    it('Si instancío la clase TODOS, debe estar vacía', () => {
        const todos = new TODOS()
        assert.strictEqual(todos.list().length, 0)
    })
    it('Al agregarse un nuevo todo, debe aumentar la cantidad de todos registrados', () => {
        const todos = new TODOS()
        todos.add('Ir a misa este domingo')
        assert.strictEqual(todos.list().length, 1)
    })
    it('Debería agregar una tarea no completada', () => {
        const todos = new TODOS()
        todos.add('Escuchar a Shakira')
        assert.deepStrictEqual(todos.list(), [{ title: 'Escuchar a Shakira', completed: false}])
    })
})

describe('Probemos los errores', () => {
    it('Debe arrojar un error si no tengo tareas al querer completar una', () => {
        const todos =  new TODOS()
        assert.throws(() => {
            todos.completeTodo('Estudiar')
        }, new Error('No tasks'))
    })
})