import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface FetchUserHistoryUseCaseRequest {
  userId: string
  page: number
}
interface FetchUserHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserHistoryUseCase {
  constructor(private checkInRepository: CheckInsRepository) {
    // apenas para nao dar erro
  }

  async execute({
    userId,
    page,
  }: FetchUserHistoryUseCaseRequest): Promise<FetchUserHistoryUseCaseResponse> {
    const checkIns = await this.checkInRepository.findManyByUserId(userId, page)

    return { checkIns }
  }
}
