module.exports.template = ({ url, accessToken, version }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Swagger UI</title>
  <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/${version}/swagger-ui.css">
  <style>
      html {
          box-sizing: border-box;
          overflow: -moz-scrollbars-vertical;
          overflow-y: scroll;
      }

      *,
      *:before,
      *:after {
          box-sizing: inherit;
      }

      body {
          margin: 0;
          background: #fafafa;
      }
  </style>
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/${version}/swagger-ui-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/${version}/swagger-ui-standalone-preset.js"></script>
<script>
  window.onload = function () {
    // Build a system
    const ui = SwaggerUIBundle({
      url: '${url}',
      ${!accessToken ? '' : `onComplete: function() {
        ui.preauthorizeApiKey('${accessToken.name}', '${accessToken.value}');
      },`}
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: 'StandaloneLayout'
    });

    window.ui = ui;
  };
</script>
</body>
</html>
`;
