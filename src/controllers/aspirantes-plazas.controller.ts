import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Aspirantes,
  Plazas,
} from '../models';
import {AspirantesRepository} from '../repositories';

export class AspirantesPlazasController {
  constructor(
    @repository(AspirantesRepository)
    public aspirantesRepository: AspirantesRepository,
  ) { }

  @get('/aspirantes/{id}/plazas', {
    responses: {
      '200': {
        description: 'Plazas belonging to Aspirantes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plazas)},
          },
        },
      },
    },
  })
  async getPlazas(
    @param.path.string('id') id: typeof Aspirantes.prototype.id_aspirantes,
  ): Promise<Plazas> {
    return this.aspirantesRepository.plazas(id);
  }
}
