/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

router.get('/', async ({ inertia }) => inertia.render('home'))
router.get('/posts', [PostsController, 'index'])
router.get('/posts/:id', [PostsController, 'show'])
