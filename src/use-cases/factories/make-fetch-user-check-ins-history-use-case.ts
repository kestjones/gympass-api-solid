import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInHistoryUseCase() {
  const checkInRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserHistoryUseCase(checkInRepository)

  return useCase
}
