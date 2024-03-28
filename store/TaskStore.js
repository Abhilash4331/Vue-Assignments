import { defineStore } from "pinia";
import { computed, reactive } from "vue";


export const useTaskStore = defineStore('taskStore1', () => {
    const tasks = reactive({
        tasks: [
           {id: 1, title: "buy some vegetable", isFav: false},
           {id: 2, title: "play kabaddi", isFav: true},
           {id: 3, title: "pay cricket", isFav: true}
        ]
    })

    const favs = computed(() => {
        return tasks.tasks.filter((t) => t.isFav)
    })

    const favCount = computed(() => {
        return tasks.tasks.reduce((p, c) => {
            return c.isFav ? p + 1 : p
        }, 0)
    })

    const totalCount = () => {
        return tasks.tasks.length
    }

    const addTask = (task) => {
        tasks.tasks.push(task)
    }

    const deleteTask = (id) => {
        tasks.tasks = tasks.tasks.filter( t => {
            return t.id !== id
        })
    }
    const toggleFav = (id) => {
        const task = tasks.tasks.find(t => t.id === id)
        task.isFav = !task.isFav
    }

    return { tasks, favCount, favs, totalCount , addTask , deleteTask , toggleFav } 
})