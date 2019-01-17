
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'antd-course',
      dll: true,
      // routes: {
      //   exclude: [
        
      //     /components\//,
      //   ],
      // },
    }],
  ],
  routes:[
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            {path: "/", component: 'puzzlecards'},
            {
                path: '/dashboard',
                routes: [
                    {path: 'analysis', component: 'dashboard/Analysis'},
                    {path: 'monitor', component: 'dashboard/Monitor'},
                    {path: 'workplace', component: 'dashboard/Workplace'},
                ],
            }
        ]
    },
  ],
  proxy: {
    '/test': {
      target: 'http://114.116.89.193:8999/',
      changeOrigin: true,
    },
  },
}
