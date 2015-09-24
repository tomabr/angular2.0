module.exports = function() {
	var config = {
		allTs: './app/**/*.ts',
		typings: './typings/**/*.d.ts',
		tsOutputPath: './app/',
		jsPath: './app/javascripts/',
		jsOutputPath: './app/javascripts'	
	};
	
	return config;
}