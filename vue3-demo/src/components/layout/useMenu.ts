import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

  interface INavMenu {
      name: string,
      url: string,
      icon?:any
  }
export const useMenu = ()=>{
    const menuItems: INavMenu[] = [
        {name:'home', url:'/index', icon:IconMenu},
        {name:'monitor', url:'/monitor', icon:Document},
        {name:'order', url:'/order', icon:Document},
        {name:'census', url:'/census', icon:Document},
    ];
    return {
        menuItems
    }
}