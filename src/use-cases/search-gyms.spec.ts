import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymUseCase

describe('Search Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymUseCase(gymsRepository)
  })

  it('should be able to fetch ckeck-in history', async () => {
    await gymsRepository.create({
      title: 'Academia 01',
      description: 'Academia',
      phone: '123',
      latitude: -12.5405178,
      longitude: -40.319071,
    })

    await gymsRepository.create({
      title: 'Academia 02',
      description: 'Academia',
      phone: '123',
      latitude: -12.5405178,
      longitude: -40.319071,
    })

    const { gyms } = await sut.execute({
      query: 'Academia 01',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Academia 01' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Academia ${i}`,
        description: 'Academia',
        phone: '123',
        latitude: -12.5405178,
        longitude: -40.319071,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Academia',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Academia 21' }),
      expect.objectContaining({ title: 'Academia 22' }),
    ])
  })
})
