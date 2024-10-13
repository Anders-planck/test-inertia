import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'
import Post from '#models/post'

export class PostsPresenter {
  toJson(posts: ModelPaginatorContract<Post>) {
    const meta = posts.getMeta()
    console.log(meta)
    return {
      meta: {
        total: meta.total,
        perPage: meta.perPage,
        currentPage: meta.currentPage,
        lastPage: meta.lastPage,
        firstPage: meta.firstPage,
        hasMorePages: meta.hasMorePages,
        firstPageUrl: meta.firstPageUrl,
        lastPageUrl: meta.lastPageUrl,
        nextPageUrl: meta.nextPageUrl,
        previousPageUrl: meta.previousPageUrl,
      },
      data: posts.all().map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        url: post.url,
        createdAt: post.createdAt.toRelative()!,
        updatedAt: post.updatedAt.toRelative()!,
        user: {
          id: post.user.id,
          name: post.user.fullName,
          email: post.user.email,
        },
      })),
    }
  }
}
