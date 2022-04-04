import { Inject, Injectable } from '@nestjs/common';
import { SpecificationRepositoryInterface } from '../interfaces/repositories';
import { SpecificationServiceInterface } from '../interfaces/services';

@Injectable()
export class SpecificationService implements  SpecificationServiceInterface {
    constructor(@Inject('ISpecificationRepository') private specRepository: SpecificationRepositoryInterface) { }

    internalSpec(): Promise<any> {
        return this.specRepository.internalSpec();
    }
}
