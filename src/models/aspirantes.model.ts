import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Plazas} from './plazas.model';

@model()
export class Aspirantes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_aspirantes?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_aspirante: string;

  @property({
    type: 'string',
    required: true,
  })
  cargo_a_aplicar: string;

  @property({
    type: 'boolean',
    required: true,
  })
  titulo: boolean;

  @property({
    type: 'number',
    required: true,
  })
  experiencia: number;

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

  @property({
    type: 'number',
    required: true,
  })
  celular: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @belongsTo(() => Plazas)
  plazasId: string;

  constructor(data?: Partial<Aspirantes>) {
    super(data);
  }
}

export interface AspirantesRelations {
  // describe navigational properties here
}

export type AspirantesWithRelations = Aspirantes & AspirantesRelations;
