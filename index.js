const http = require('http');
const { template } = require('./template');

class ServerlessSwagger {
  static buildTemplate(url, accessToken, version) {
    return template({ url, accessToken, version });
  }

  constructor(serverless) {
    const startServer = () => {
      const {
        port = 1991,
        url,
        path = '/local/swagger',
        accessToken,
        version = '3.46.0'
      } = serverless.service.custom?.swagger ?? {};

      const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html');

        // No caching so the token can be renewed
        res.end(ServerlessSwagger.buildTemplate(
          url || `http://localhost:${serverless.service.custom?.['serverless-offline']?.httpPort ?? 3000}${path}`,
          accessToken,
          version
        ));
      });

      server.listen(port, () => {
        serverless.cli.log(
          `[Swagger] serving swagger UI on http://localhost:${port} 🎂`
        );
      });
    };

    this.hooks = {
      'after:offline:start:init': startServer,
    };
  }
}

module.exports = ServerlessSwagger;
