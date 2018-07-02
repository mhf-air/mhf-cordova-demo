// front-end routes

import NotFound from "../root/NotFound.vue"

import Main from "../root/main/a.vue"

// ================================================================================
export default [
  // cordova
  { path: "/", component: Main },
  { path: "*/www/", component: Main },
  { path: "*/index.html", component: Main },
  // { path: "/index.html", component: Main },
  // { path: "/android_asset/www/index.html", component: Main },

  { path: "*", component: NotFound },
]
