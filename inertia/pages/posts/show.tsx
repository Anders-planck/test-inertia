import { InferPageProps } from '@adonisjs/inertia/types'
import PostsController from '#controllers/posts_controller'
import { Head } from '@inertiajs/react'

export default function PostsShow(props: InferPageProps<PostsController, 'show'>) {
  const post = props.post.data
  return (
    <>
      <Head title="Posts" />
      <div className="container mx-auto p-4">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.createdAt} className="text-gray-500">
                    {post.createdAt}
                  </time>
                  <a
                    href={post.url}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Marketing
                  </a>
                </div>
                <div className="group relative">
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.content}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.user.name}</p>
                    <p className="text-xs text-gray-500">{post.user.email}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
