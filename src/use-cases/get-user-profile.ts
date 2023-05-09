import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found'

interface GetProfileUserUseCaseRequest {
  userId: string
}
interface GetProfileUserUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {
    // apenas para nao dar erro
  }

  async execute({
    userId,
  }: GetProfileUserUseCaseRequest): Promise<GetProfileUserUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}
