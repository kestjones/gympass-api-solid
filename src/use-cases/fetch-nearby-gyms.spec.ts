import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Academia Perto',
      description: 'Academia',
      phone: '123',
      latitude: -12.5405178,
      longitude: -40.319071,
    })

    await gymsRepository.create({
      title: 'Academia Longe',
      description: 'Academia',
      phone: '123',
      latitude: -12.767476,
      longitude: -40.2107816,
    })

    const { gyms } = await sut.execute({
      userLatitude: -12.5405178,
      userLongitude: -40.319071,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Academia Perto' })])
  })
})
