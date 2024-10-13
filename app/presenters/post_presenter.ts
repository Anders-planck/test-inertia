import Post from '#models/post'

export class PostPresenter {
  toJson(post: Post) {
    return {
      data: {
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
      },
    }
  }
}
