// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as PizzasAPI from './pizzas';
import {
  Pizzas,
  type Planet,
  type PaginatedResource,
  type Satellite,
  type PizzaListResponse,
  type PizzaUploadImageResponse,
  type PizzaListParams,
  type PizzaCreateParams,
  type PizzaUploadImageParams,
} from './pizzas';

export class Planets extends APIResource {
  pizzas: PizzasAPI.Pizzas = new PizzasAPI.Pizzas(this._client);
}

Planets.Pizzas = Pizzas;

export declare namespace Planets {
  export {
    Pizzas as Pizzas,
    type Planet as Planet,
    type PaginatedResource as PaginatedResource,
    type Satellite as Satellite,
    type PizzaListResponse as PizzaListResponse,
    type PizzaUploadImageResponse as PizzaUploadImageResponse,
    type PizzaListParams as PizzaListParams,
    type PizzaCreateParams as PizzaCreateParams,
    type PizzaUploadImageParams as PizzaUploadImageParams,
  };
}
