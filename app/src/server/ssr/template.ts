import { lang, title } from "./opts.json";
export const ssrTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="${lang ?? "en"}">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="/static/index.js" defer></script>
    <title>${title ?? "site"}</title>
  </head>
  <body>
	  <div id="root">${content}</div>
	</body>
</html>`;
