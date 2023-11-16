source .env

if [ "$SANDBOX" = "glitch" ]; then

	echo "Setting up for Glitch..."

	# Write a config override with the correct Glitch project domain.
	echo "{\"web_server_url\":\"https://$PROJECT_DOMAIN.glitch.me\"}" > mightymeld_override.json

	# git commit -am 'Add changes on sandbox to keep diffs looking nice'

  npx mightymeld

  # After envoy exits, let’s run a static server so Glitch won’t restart over and over if there is an error.
	echo "Envoy exited; serving notice."
  node -e 'require("http").createServer((_, r) => { r.writeHead(200); r.end("Sandbox ended."); }).listen(process.env.PORT)'
  
else
  # No Sandbox, start normally
  npx mightymeld
fi
