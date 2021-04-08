# Serverless-swaggerui

Tiny plugin that simply serves SwaggerUI.

## Config options

All options are optional.

```yml
custom:
  swagger:
    version: 3.46.0 # Version of swaggerUI to use.
    port: 1991 # What port to serve swaggerUI from
    url: http://localhost:3000/local/swagger # Where to find the swagger definition
    path: /local/swagger # Used when url was not provided.
    accessToken: # prefill swagger-ui with an api-key.
      name: bearerBasedAuth
      value: the.jwt.token
```

## Notes

- If you intend to use the accessToken option it is recommended you [use a javascript file to provide the config](https://www.serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-in-javascript-files).
- The only magic is the default swagger URL. When not provided this plugin assumes you have [serverless-offline](https://www.serverless.com/plugins/serverless-offline) installed and uses it to build the URL.

## License

MIT
