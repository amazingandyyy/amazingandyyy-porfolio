now=$(shell date '+%s')

insert-last-update-env:
	echo LAST_UPDATE=$(now)000 > .env