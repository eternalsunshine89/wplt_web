import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {
        path: '/project-manage',
        component: () => import('@/pages/ProjectPage')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {router}