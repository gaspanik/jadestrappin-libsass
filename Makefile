init:
	mkdir -p src/css src/js dist/css dist/js
	cp -r bower/bootstrap-sass-official/assets/stylesheets/* src/css/
	cp -r bower/bootstrap-sass-official/assets/fonts/* dist/css/
	cp bower/bootstrap-sass-official/assets/javascripts/bootstrap.js dist/js
	cp bower/bootstrap-sass-official/assets/javascripts/bootstrap/*.js src/js
	cp bower/jquery/dist/jquery.min.js dist/js
	cp bower/bootstrap-accessibility-plugin/plugins/css/bootstrap-accessibility.css dist/css
	cp bower/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.min.js dist/js
