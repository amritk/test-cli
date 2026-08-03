---
name: galaxy-cli-sdk
description: "CLI SDK for galaxy API. Use when writing CLI code that calls galaxy API with the galaxy-cli package: installing it, constructing and authenticating the client, and calling API operations."
---

# galaxy CLI SDK

Generated CLI client for galaxy API, published as `galaxy-cli`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
# Homebrew — standalone binary, no Node.js required
brew install amritk/tap/galaxy
```

## Client setup and authentication

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `--bearer-auth` (env: `BEARER_AUTH`) — JWT Bearer token authentication
- `--basic-auth-username` (env: `BASIC_AUTH_USERNAME`) — Basic HTTP authentication
- `--basic-auth-password` (env: `BASIC_AUTH_PASSWORD`) — Basic HTTP authentication
- `--api-key-header` (env: `API_KEY_HEADER`) — API key request header
- `--api-key-query` (env: `API_KEY_QUERY`) — API key query parameter
- `--api-key-cookie` (env: `API_KEY_COOKIE`) — API key browser cookie
- `--o-auth2` (env: `SCALAR_O_AUTH2`) — OAuth 2.0 authentication
- `--open-id-connect` (env: `SCALAR_OPEN_ID_CONNECT`) — OpenID Connect Authentication

## Calling operations

```sh
galaxy [resource] [command] [flags]

galaxy planets list-all-data --bearer-auth "$BEARER_AUTH" --limit '10' --offset '0'
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

## Requirements

- None — the standalone binaries bundle their own runtime.

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
