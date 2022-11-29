import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Aspirantes, AspirantesRelations, Plazas} from '../models';
import {PlazasRepository} from './plazas.repository';

export class AspirantesRepository extends DefaultCrudRepository<
  Aspirantes,
  typeof Aspirantes.prototype.id_aspirantes,
  AspirantesRelations
> {

  public readonly plazas: BelongsToAccessor<Plazas, typeof Aspirantes.prototype.id_aspirantes>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('PlazasRepository') protected plazasRepositoryGetter: Getter<PlazasRepository>,
  ) {
    super(Aspirantes, dataSource);
    this.plazas = this.createBelongsToAccessorFor('plazas', plazasRepositoryGetter,);
    this.registerInclusionResolver('plazas', this.plazas.inclusionResolver);
  }
}
