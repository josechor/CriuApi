.PHONY: install
install:
	rm -rf node_modules               
	docker compose down -v --rmi local --remove-orphans 
	docker compose run --rm api npm install
	docker compose run --rm api npm run build             
	echo 'Execute make up to start development environment'
	
.PHONY: up
up:
	docker compose up  

.PHONY: cache-clear
cache-clear:
	rm -rf node_modules package-lock.json
	npm install