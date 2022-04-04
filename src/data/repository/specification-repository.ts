import { Injectable } from '@nestjs/common';
import { getInternalSpec } from '../../core/entity/internal-spec';
import { SpecificationRepositoryInterface } from '../../core/interfaces/repositories';

@Injectable()
export class SpecificationRepository implements SpecificationRepositoryInterface {
  constructor( ){}

  async internalSpec(): Promise<any> {
    try {
        return getInternalSpec();
    } catch (error: any) {
        throw error;
    }
  }
}
