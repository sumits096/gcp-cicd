import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SpecificationServiceInterface } from 'src/core/interfaces/services';

@ApiTags('Specification')
@Controller('api/specification')
export class Specification {
  constructor(@Inject('ISpecificationService') private specService: SpecificationServiceInterface){}

  /**
   * Returns internal specification object
   * @returns 
   */
  @Get('internalSpec')
  async internalSpec(): Promise<any> {
    return this.specService.internalSpec();
  }
}
