import factory from '@adonisjs/lucid/factories'
import Post from '#models/post'
import { UserFactory } from '#database/factories/user_factory'

export const PostFactory = factory
  .define(Post, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      url: faker.internet.url(),
    }
  })
  .relation('user', () => UserFactory)
  .build()
