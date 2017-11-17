import Vue from 'vue'
import Router from 'vue-router'

import header from '@/widget/header'
import footer from '@/widget/footer'

import index from '@/pages/index'
import list from '@/pages/list'
import search from '@/pages/search'
import cate from '@/pages/cate'
import special from '@/pages/special'
import learnLog from '@/pages/learn-log'
import cacheLog from '@/pages/cache-log'
import video from '@/pages/video'
import apply from '@/pages/apply'
import yuyue from '@/pages/yuyue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        header: header,
        index: index,
        footer: footer
      }
    },
    // {
    //   path: '/list',
    //   name: 'list',
    //   components: {
    //     header_search: header_search,
    //     default: list,
    //     footer: footer
    //   }
    // },
    {
      path: '/list/:cid',
      name: 'list',
      components: {
        // header: header,
        default: list
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: search
      }
    },
    {
      path: '/cate',
      name: 'cate',
      components: {
        header: header,
        cate: cate,
        footer: footer
      }
    },
    {
      path: '/special',
      name: 'special',
      components: {
        header: header,
        default: special,
        footer: footer
      }
    },
    {
      path: '/learn-log',
      name: 'learn-log',
      components: {
        header: header,
        default: learnLog
      }
    },
    {
      path: '/cache-log',
      name: 'cache-log',
      components: {
        header: header,
        default: cacheLog
      }
    },
    {
      path: '/video/:id',
      name: 'video',
      components: {
        default: video
      }
    },
    {
      path: '/apply',
      name: 'apply',
      components: {
        header: header,
        default: apply
      }
    },
    {
      path: '/yuyue',
      name: 'yuyue',
      components: {
        header: header,
        default: yuyue
      }
    }
  ]
})
