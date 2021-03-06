import RouterItem from './router.d';
import PC from '../pc/index';
import MB from '../mb/index';
// import UerIndex from '../pages/userindex/userindex'
// import UserLogin from '../pages/userlogin/userlogin'
// import UserHome from '../pages/userindex/userhome/userhome'
// import UserEdite from '../pages/userindex/useredite/useredite'
// import QueryArt from '../pages/userindex/queryart/queryart'
interface RoutersParams {
    mb:RouterItem [];
    pc:RouterItem [];
}
let routers:RoutersParams = {
    mb:[
        {
            path:'/',
            redirect:{
                to:'/home'
            }
        },
        {
            path:'/home',
            component:MB.Home
        },
        {
            path:'/find',
            component:MB.Fond
        },
        {
            path:'/my',
            component:MB.Mycenter
        },
        {
            path:'/artpage',
            component:MB.Artpage
        },
        {
            path:'/setting',
            component:MB.Setting
        },
        {
            path:'/login',
            component:MB.Login
        },
        {
            path:'/artdetail',
            component:MB.Artdetail
        },
        {
            path:'/veidoList',
            component:MB.VeidoList
        }
    ],
    pc:[
        {
            path:"/",
            redirect:{
                to:'/main'
            }
        },
        {
            path:'/main',
            component:PC.Home,
            routers:[
                {
                    path:"/main",
                    component:PC.Main
                },
                {
                    path:"/edite",
                    component:PC.Main
                },
            ]
        },
        {
            path:'/login',
            component:PC.Login
        },
    ]
}
// let routers = [
//     {
        
//     }
//     // {
//     //     path:'/',
//     //     redirect:{
//     //         to:'/main'
//     //     },
//     // },
//     // {
//     //     path:'/main',
//     //     component:UerIndex,
//     //     routers:[
//     //         {
//     //             path:'/main',
//     //             redirect:{
//     //                 to:'/main/home'
//     //             }
//     //         },
//     //         {
//     //             path:"/main/home",
//     //             component:UserHome
//     //         },
//     //         {
//     //             path:"/main/edite",
//     //             component:UserEdite
//     //         },
//     //         {
//     //             path:"/main/queryart/:keywrods",
//     //             component:QueryArt
//     //         }
//     //     ]
//     // },
//     // {
//     //     path:'/login',
//     //     component:UserLogin,
//     //     exact:true
//     // }
// ]

export default routers