import {Entity, model, property, hasMany} from '@loopback/repository';
import {Aspirantes} from './aspirantes.model';

@model()
export class Plazas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_plazas?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_cargo: string;

  @property({
    type: 'boolean',
    required: true,
  })
  disponible: boolean;

  @property({
    type: 'date',
    required: true,
  })
  fecha_postulada: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_expiracion: string;

  @property({
    type: 'number',
    required: true,
  })
  experiencia: number;

  @property({
    type: 'boolean',
    required: true,
  })
  titulo: boolean;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;

  @property({
    type: 'boolean',
    required: true,
  })
  bilingue: boolean;

  @hasMany(() => Aspirantes)
  aspirantes: Aspirantes[];

  constructor(data?: Partial<Plazas>) {
    super(data);
  }
}

export interface PlazasRelations {
  // describe navigational properties here
}

export type PlazasWithRelations = Plazas & PlazasRelations;
