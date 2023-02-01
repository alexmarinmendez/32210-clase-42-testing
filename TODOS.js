class TODOS {
    constructor() {
        this.todos = []
    }

    list() {
        return this.todos
    }

    add(title) {
        let todo = {
            title,
            completed: false
        }
        this.todos.push(todo)
    }

    completeTodo(title) {
        if (this.todos.length === 0) throw new Error('No tasks')
        let todoFound = false
        this.todos.forEach(todo => {
            if (todo.title === title) {
                todo.completed = true
                todoFound = true
                return
            }
        })
    }
}

export default TODOS