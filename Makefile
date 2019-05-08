.PHONY: dev start prettier lint ready clean build

dev: | start

start:
	@npm start

prettier:
	@npm run prettier

lint:
	@npm run lint

ready: | prettier lint

clean:
	@rm -rf dist
	@npm run build

build:
	@npm run build
