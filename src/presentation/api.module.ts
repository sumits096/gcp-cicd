import { Module } from '@nestjs/common';
import { SpecificationRepository } from 'src/data/repository';
import { SpecificationService } from 'src/core/services';
import { Specification } from './controllers';

@Module({
    imports: [],
    controllers: [Specification],
    providers: [
        Specification,
        {
            provide: 'ISpecificationService',
            useClass: SpecificationService,
        },
        SpecificationService,
        {
            provide: 'ISpecificationRepository',
            useClass: SpecificationRepository,
        },
        SpecificationRepository
    ]
})

export class ApiModule { }
