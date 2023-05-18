import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })
  it('should be able create gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)
    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Java Script Gym',
        description: 'some description',
        phone: '123',
        latitude: -12.5405178,
        longitude: -40.319071,
      })

    expect(response.statusCode).toEqual(201)
  })
})
