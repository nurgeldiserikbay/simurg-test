function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CocktailMain-CwM1Iw82.js","./index-CSOjfTz9.js","./index-MF19Ex7s.css","./index-BNt3EKxU.js","./CocktailMain-D4CqKBw5.css","./CocktailView-BkMgaJwH.js","./CocktailView-CnjZClcz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CSOjfTz9.js";const o={path:"/",name:"CocktailMain",component:()=>e(()=>import("./CocktailMain-CwM1Iw82.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),children:[{path:"/:slug",name:"CocktailView",component:()=>e(()=>import("./CocktailView-BkMgaJwH.js"),__vite__mapDeps([5,1,2,3,6]),import.meta.url)}]},a=t=>{t.addRoute("Default",o),t.replace(t.currentRoute.value.fullPath)},l={router:a};export{l as default};
