import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Plazas,
  Aspirantes,
} from '../models';
import {PlazasRepository} from '../repositories';

export class PlazasAspirantesController {
  constructor(
    @repository(PlazasRepository) protected plazasRepository: PlazasRepository,
  ) { }

  @get('/plazas/{id}/aspirantes', {
    responses: {
      '200': {
        description: 'Array of Plazas has many Aspirantes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aspirantes)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Aspirantes>,
  ): Promise<Aspirantes[]> {
    return this.plazasRepository.aspirantes(id).find(filter);
  }

  @post('/plazas/{id}/aspirantes', {
    responses: {
      '200': {
        description: 'Plazas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aspirantes)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Plazas.prototype.id_plazas,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aspirantes, {
            title: 'NewAspirantesInPlazas',
            exclude: ['id_aspirantes'],
            optional: ['plazasId']
          }),
        },
      },
    }) aspirantes: Omit<Aspirantes, 'id_aspirantes'>,
  ): Promise<Aspirantes> {
    return this.plazasRepository.aspirantes(id).create(aspirantes);
  }

  @patch('/plazas/{id}/aspirantes', {
    responses: {
      '200': {
        description: 'Plazas.Aspirantes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aspirantes, {partial: true}),
        },
      },
    })
    aspirantes: Partial<Aspirantes>,
    @param.query.object('where', getWhereSchemaFor(Aspirantes)) where?: Where<Aspirantes>,
  ): Promise<Count> {
    return this.plazasRepository.aspirantes(id).patch(aspirantes, where);
  }

  @del('/plazas/{id}/aspirantes', {
    responses: {
      '200': {
        description: 'Plazas.Aspirantes DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Aspirantes)) where?: Where<Aspirantes>,
  ): Promise<Count> {
    return this.plazasRepository.aspirantes(id).delete(where);
  }
}
