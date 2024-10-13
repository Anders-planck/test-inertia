import { InferPageProps } from '@adonisjs/inertia/types'
import PostsController from '#controllers/posts_controller'
import React from 'react'
import { Head, Link } from '@inertiajs/react'

export default function PostsIndex(props: InferPageProps<PostsController, 'index'>) {
  const { posts } = props
  return (
    <>
      <Head title="Posts" />
      <div className="container mx-auto p-4">
        <div className="bg-white py-24 sm:pb-32 sm:pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Posts</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.data.length > 0 ? (
                posts.data.map((post) => (
                  <React.Fragment key={post.id}>
                    <article
                      className="flex max-w-xl flex-col items-start justify-between"
                      key={post.id}
                    >
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
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <Link
                            href={`posts/${post.id}`}
                            className="hover:underline hover:underline-offset-2"
                          >
                            <span className="absolute inset-0"></span>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 line-clamp-3">
                          {post.content}
                        </p>
                      </div>

                      <Link href={`users/${post.user.id}`}>
                        <div className="relative mt-8 flex items-center gap-x-4">
                          <img
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            className="h-10 w-10 rounded-full bg-gray-50"
                          />
                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                              <Link href="#" className="hover:underline hover:underline-offset-2">
                                <span className="absolute inset-0"></span>
                                {post.user.name}
                              </Link>
                            </p>
                            <p className="text-gray-600">{post.user.email}</p>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </React.Fragment>
                ))
              ) : (
                <div className="col-span-1">
                  <p className="text-lg text-gray-600">No posts found.</p>
                </div>
              )}
            </div>

            <div className="mt-16">
              <nav className="flex justify-end gap-1">
                <Link
                  href={`/posts?page=${posts.meta.currentPage - 1}`}
                  className={`${
                    posts.meta.currentPage === 1 ? 'hidden' : 'inline-block'
                  } bg-gray-100 text-gray-600 px-4 py-2 rounded-lg`}
                >
                  Previous
                </Link>
                <Link
                  href={`/posts?page=${posts.meta.currentPage + 1}`}
                  className={`${
                    posts.meta.currentPage === posts.meta.lastPage ? 'hidden' : 'inline-block'
                  } bg-gray-100 text-gray-600 px-4 py-2 rounded-lg`}
                >
                  Next
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
