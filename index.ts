/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {

	async fetch(request) {
	  let html_content = "";
	  let COUNTRY = "";
	  let html_style =
		"body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}";
  
	  html_content += "<p> Colo: " + request.cf.colo + "</p>";
	  html_content += "<p> Continent: " + request.cf.continent + "</p>";
	  html_content += "<p> Region: " + request.cf.region + "</p>";
	  html_content += "<p> Timezone: " + request.cf.timezone + "</p>";
	  COUNTRY += request.cf.country;

	  	const countryLink = `<a href="https://seanproject2024.xyz/${COUNTRY}.webp"> ${COUNTRY} </a>`;
		const EMAIL = request.headers.get('Cf-Access-Authenticated-User-Email');
		const timestampRaw = Date.now(); // Get the current timestamp
		const TIMESTAMP = new Date(timestampRaw).toLocaleString(); // Convert to readable format
  
	  let html = `<!DOCTYPE html>
		<head>
		  <title> Hello World </title>
		  <style> ${html_style} </style>
		</head>
		<body>
		  <h1>Geolocation: Hello World!</h1>
		  <p> ${EMAIL} authenticated at ${TIMESTAMP} GMT from ${countryLink} </p>
		</body>`;
  
	  return new Response(html, {
		headers: {
		  "content-type": "text/html;charset=UTF-8",
		},
	  });
	},
  };