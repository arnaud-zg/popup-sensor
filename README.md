<h1 align="center">Welcome to popup-sensor 👋</h1>

<p>Popup window sensor written in typescript</p>

<p>
  <a href="https://www.npmjs.com/package/popup-sensor" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/popup-sensor.svg">
  </a>
  <img alt="Commit Activity" src="https://img.shields.io/github/commit-activity/m/arnaud-zg/popup-sensor" />
  <a href="https://travis-ci.org/arnaud-zg/popup-sensor" target="_blank">
    <img alt="Build Status" src="https://travis-ci.org/arnaud-zg/popup-sensor.svg?branch=develop" />
  </a>
  <a href="https://bundlephobia.com/result?p=popup-sensor" target="_blank">
    <img alt="Bundle Size" src="https://badgen.net/bundlephobia/min/popup-sensor" />
  </a>
</p>

<p>
  <img alt="Issues Closed" src="https://img.shields.io/github/issues-closed/arnaud-zg/popup-sensor">
  <img alt="Issues Open" src="https://img.shields.io/github/issues/arnaud-zg/popup-sensor">
  <img alt="Pull Request Closed" src="https://img.shields.io/github/issues-pr-closed/arnaud-zg/popup-sensor">
  <img alt="Pull Request Open" src="https://img.shields.io/github/issues-pr/arnaud-zg/popup-sensor">
</p>

### Installing

Using npm:

```shell
npm i --save popup-sensor
```

Using yarn:

```shell
yarn add --dev popup-sensor
```

## Usage

Here are examples of how you can use `popup-sensor`.

### Simply open a popup window

```ts
import Popup from 'popup-sensor'

const onClick = () => {
  const popupInstance = new Popup({})

  popupInstance.open({
    title: 'Google',
    url: 'https://www.google.com/',
  })
}
```

### One-liner

```ts
import Popup from 'popup-sensor'

const onClick = () => {
  new Popup({}).open({
    title: 'Google',
    url: 'https://www.google.com/',
  })
}
```

### Catch the close event of popup window

```ts
import Popup from 'popup-sensor'

const onPopupClose = () => {
  console.log('popup close event')
}

const onClick = () => {
  const popupInstance = new Popup({ onClose: onPopupClose })

  popupInstance.open({
    title: 'Google',
    url: 'https://www.google.com/',
  })
}
```

### Track location and dispatch action

```ts
import * as queryString from 'query-string'
import Popup from 'popup-sensor'
import { EPopupAction } from 'popup-sensor/types'

const onLocationChange = (location: Location) => {
  const locationSearch = queryString.parse(location.search)

  return locationSearch.code ? EPopupAction.CLOSE : EPopupAction.NONE
}

const onClick = () => {
  const popupInstance = new Popup({ onLocationChange })

  popupInstance.open({
    title: 'Google',
    url: 'https://www.google.com/',
  })
}
```

## Running the tests

Tests are written with jest

### Unit tests

Using jest:

```shell
yarn run test
```

## Deployment

Deployment is done with Travis.

## Built With

- [TSDX](https://github.com/palmerhq/tsdx) - TSDX

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/arnaud-zg/ts-foursquare/tags).

## Authors

- **Arnaud Zheng** - _Initial work_ - [arnaud-zg](https://github.com/arnaud-zg)

See also the list of [contributors](https://github.com/arnaud-zg/ts-foursquare/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
