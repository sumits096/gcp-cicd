/**
 * Defines methods definition for specification.
 */
export interface SpecificationRepositoryInterface {
    /**
     * return object
     */
    internalSpec(): Promise<any>;
}
