import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home';
import Board from '../views/Board';
import PostDetail from '../views/PostDetail';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        // path별 component를 추가한다.
    { path : "/home", name : "Home", component : Home },
    { path : "/board", name : "Board", component : Board},
    { path : "/postdetail", name : "PostDetail", component : PostDetail},
    ]
});


export default router;