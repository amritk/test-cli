// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { ApiTest } from './client';

export abstract class APIResource {
  protected _client: ApiTest;

  constructor(client: ApiTest) {
    this._client = client;
  }
}
