# Portal Engine 

[![Software License][ico-license]](LICENSE.md)

A case study project to connect with recruiters, HR managers & people in the same industry to find the best job opportunities, 

#### ✨Features (Technologies Used)

- Express js
- React + VueRouter + Redux + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification and password reset
- Authentication with JWT
- Bootstrap 4 + Font Awesome 5


#### 🛸Portal-Engine
The API is organized around REST.

The API is designed to have:
- predictable, resource-oriented URLs
- to use HTTP response codes to indicate API errors
- to use built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients.

> JSON is returned in all responses from the API, including errors.

#### 🚁 Portal-Front

A frontend baked with React

- Eslint, Javascript Standard coding format used

## 🧩Modules

- [ ] Auth module
- [ ] User module
- [ ] Jobs module



## 🚀Getting started

For development, you will need Node.js installed in your environment.

#### Installation

Via Git, Yarn is preferred but optional.

- Fork repo
```bash
git clone https://github.com/mumbo-pro/portal-front.git

cd portal-front

yarn install
```

- Edit `.env` and set your database connection details

```bash
cp .env.example .env
```


- Development
```
yarn run serve
```

- Testing
```
yarn run test
```

#### Production

```bash
yarn run build
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.


## Testing

```bash
$ yarn tun test
```

## Contributing

Pull requests are welcome. Please see [CONTRIBUTING](./.github/CONTRIBUTING.md) and [CODE_OF_CONDUCT](./.github/CODE_OF_CONDUCT.md) for details.


## Security

If you discover any security related issues, please email [hello@alphaolomi.com](mailto:hello@alphaolomi.com) instead of using the issue tracker.

## Credits

- **Alpha Olomi** [hello@alphaolomi.com](hello@alphaolomi.com)
- [All Contributors][link-contributors]

## License
The Apache 2 License. Please see [License File](LICENSE) for more information.



[ico-license]: https://img.shields.io/badge/license-Apache2-brightgreen.svg?style=flat-square

[link-contributors]: ../../contributors
