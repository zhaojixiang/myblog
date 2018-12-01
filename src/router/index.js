import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import index from '@/views/index/index'
import home from '@/views/home/home'
import time from '@/views/home/time'
import aboutme from '@/views/home/aboutme'
import footprint from '@/views/home/footprint'
import photo from '@/views/home/photoShow'
import message from '@/views/home/messageBoard'
import manage from '@/views/home/manage'
import article from '@/views/home/article'


// import photo from '@/views/photo/photo'
import video from '@/views/video/video'
Vue
	.use(
		Router
	)

export default new Router
	({
		routes: [{
				path: '/',
				name: 'Login',
				component: Login
			},
			{
				path: '/index',
				name: 'index',
				component: index,
                children: [
                    // 首页
                    {
                        path: '/index',
        				name: 'home',
        				component: home,
                    },
                    // 照片展示
                    {
                        path: '/photo',
        				name: 'photo',
        				component: photo,
                    },
                    {
                        path: '/video',
        				name: 'video',
        				component: video,
                    },
                    // 时间轴
                    {
                        path: '/time',
        				name: 'time',
        				component: time,
                    },
                    // 关于我们
                    {
                        path: '/aboutme',
        				name: 'aboutme',
        				component: aboutme,
                    },
                    // 足迹
                    {
                        path: '/footprint',
        				name: 'footprint',
        				component: footprint,
                    },
                    // 留言板
                    {
                        path: '/message',
        				name: 'message',
        				component: message,
                    },
                    {
                        path: '/manage',
        				name: 'manage',
        				component: manage,
                    },
                    {
                        path: '/article',
        				name: 'article',
        				component: article,
                    }
                ]
			}
		]
	})
