import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
import { inject } from '@adonisjs/core'
import { PostsPresenter } from '#presenters/posts_presenter'
import { PostPresenter } from '#presenters/post_presenter'

export default class PostsController {
  @inject()
  async index({ inertia, request }: HttpContext, postsPresenter: PostsPresenter) {
    const page = request.input('page', 1)

    const posts = await Post.query().preload('user').orderBy('created_at', 'desc').paginate(page, 6)
    return inertia.render('posts/index', { posts: postsPresenter.toJson(posts) })
  }

  @inject()
  async show({ inertia, params }: HttpContext, postPresenter: PostPresenter) {
    const post = await Post.query().preload('user').where('id', params.id).firstOrFail()
    return inertia.render('posts/show', { post: postPresenter.toJson(post) })
  }
}
