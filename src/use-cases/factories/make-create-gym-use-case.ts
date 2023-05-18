import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  const gymsReposotory = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(gymsReposotory)

  return useCase
}
