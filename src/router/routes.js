import Layout from "@/layout/index.vue";
import Home from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "首頁"
        }
      },
      {
        path: "market/:symbol?",
        name: "Market",
        component: () => import("@/views/market/index.vue"),
        meta: {
          title: "合約交易"
        }
      },
      {
        path: "task",
        name: "Task",
        component: () => import("@/views/task/index.vue"),
        meta: {
          title: "任務"
        }
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/index.vue"),
        meta: {
          title: "個人中心",
          noCache: true
        }
      },
      {
        path: "demo",
        name: "Demo",
        component: () => import("@/views/demo/index.vue"),
        meta: {
          title: "Demo"
        }
      },
    ]
  }
];

export default routes;
