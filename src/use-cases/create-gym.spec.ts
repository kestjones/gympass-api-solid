import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able register', async () => {
    const { gym } = await sut.execute({
      title: 'Academia 01',
      description: 'Academia',
      phone: '123',
      latitude: -12.5405178,
      longitude: -40.319071,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
