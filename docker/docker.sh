export PERMISSIONS=$(id -u):$(id -g)
export WEBPACK_COMMAND_SCRIPT=$1
export WEBSITE_COMMAND_SCRIPT="lektor server --no-prune --host 0.0.0.0 --port 5000"

# Printer with shell colors
function utils.printer {
  # BASH COLORS
  GREEN='\033[0;32m'
  RESET='\033[0m'
  echo -e "${GREEN}$1${RESET} $2"
}

if [[ "$1" == "build:clean" ]]; then
  docker-compose -f docker/docker-compose.yaml up
  utils.printer "Node modules && Output bundle removed"
elif [[ "$1" == "build:dev" ]]; then
  docker-compose -f docker/docker-compose.yaml up -d
  utils.printer "Your website is running on:" "http://localhost:5000/"
  utils.printer "You can print services logs typing:" "\"yarn docker:logs:website\" or \"yarn docker:logs:webpack\""
  utils.printer "You can stop services typing:" "yarn docker:stop"
elif [[ "$1" == "build:prod" ]]; then
  docker-compose -f docker/docker-compose.yaml up webpack
  utils.printer "Webpack output delivered on: assets/dist"
elif [[ "$1" == "logs:service" ]]; then
  docker-compose -f docker/docker-compose.yaml logs -f --tail 100 $2
elif [[ "$1" == "stop" ]]; then
  docker-compose -f docker/docker-compose.yaml stop
fi