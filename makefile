now=$(shell date '+%s')

all: build copy

dev: env
	NODE_ENV=dev && parcel ./src/index.html --open

build: env
	rm -rf build
	NODE_ENV=production && parcel build ./src/index.html -d build

copy:
	cp -rf src/statics build/
	cp -rf src/pwabuilder-sw.js build/pwabuilder-sw.js
	mv build/statics/CNAME build/CNAME

env:
	echo LAST_UPDATE=$(now)000 > .env

.PHONY: env copy build