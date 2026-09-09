# Changelog

## [0.4.0](https://github.com/amritk/test-cli/compare/v0.3.1...v0.4.0) (2026-09-09)


### ⚠ BREAKING CHANGES

* **api:** 4 breaking changes to the SDK surface.
    - Renamed SDK from `Testing12` to `TestingMeOut`.
    - Property `planet.habitabilityIndex` type changed from `number<float>` to `number<float>`.
    - Property `planet.physicalProperties` type changed from `object` to `object`.
    - Property `planet.atmosphere` type changed from `Array<object>` to `Array<object>`.
* **api:** 3 breaking changes to the SDK surface.
    - Renamed SDK from `Galaxy` to `Testing12`.
    - URL of environment `responds_with_your_request_data` changed from `{protocol}://void.scalar.com/{path}` to `https://void.scalar.com/{path}`.
    - Removed operation `planets.listAllData` (`GET /planets`).

### Features

* **api:** update SDK name (+4 more changes) ([ee00bbe](https://github.com/amritk/test-cli/commit/ee00bbeb78fb3bf233e325c57fefea0298df3cd4))
* **api:** update SDK name (+5 more changes) ([645a123](https://github.com/amritk/test-cli/commit/645a1231146c2554172a39bfb817383d337d1f27))


### Chores

* **api:** regenerate SDK ([1a50fdb](https://github.com/amritk/test-cli/commit/1a50fdba341ce566dccfc923d062f9b7d1299ee6))
* **api:** regenerate SDK ([b66fefe](https://github.com/amritk/test-cli/commit/b66fefe67e95c29094829ef55e1afffba09131c9))

## [0.3.1](https://github.com/amritk/test-cli/compare/v0.3.0...v0.3.1) (2026-07-31)


### Chores

* **api:** update generated SDK content ([1985b22](https://github.com/amritk/test-cli/commit/1985b2254002b21976c24b9aac2823a16b943a29))

## [0.3.0](https://github.com/amritk/test-cli/compare/v0.2.0...v0.3.0) (2026-07-31)


### ⚠ BREAKING CHANGES

* **api:** Removed server `{protocol}://void.scalar.com/{path}`.

### Features

* **api:** remove server {protocol}://void.scalar.com/{path} ([5e3e059](https://github.com/amritk/test-cli/commit/5e3e059ef26b1c5ac8b8817ad6984b6f72eeb2a8))

## [0.2.0](https://github.com/amritk/test-cli/compare/v0.1.0...v0.2.0) (2026-07-31)


### Features

* **api:** initial SDK generation ([7f2d022](https://github.com/amritk/test-cli/commit/7f2d02260645a4dda516f88edbad6e7a99afdde1))
