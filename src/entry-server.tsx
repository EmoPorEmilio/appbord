// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>BORD - Máxima ciencia</title>
          <meta name="title" content="BORD - Máxima ciencia" />
          <meta name="description" content="WebApp para seguir e interactuar con los contenidos de Rebord y H.A.G.O.V."/> 
          <link rel="icon" href="/favicon-on.png" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
