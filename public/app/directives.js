// Directives Path
var dir = 'app/views/';

app.directive('head', function() {
	return {
		templateUrl: dir+'head.html',
		controller: 'HomeCtrl',
	}
})

app.directive('navi', function() {
	return {
		templateUrl: dir+'navi.html',
		controller: 'NaviCtrl',
	}
})

app.directive('foot', function() {
	return {
		templateUrl: dir+'foot.html',
		controller: 'HomeCtrl',
	}
})

app.directive('cta', function() {
	return {
		templateUrl: dir+'cta.html',
		controller: 'HomeCtrl',
	}
})

app.directive('info', function() {
	return {
		templateUrl: dir+'info.html',
		controller: 'HomeCtrl',
	}
})

app.directive('extra', function() {
	return {
		templateUrl: dir+'extra.html',
		controller: 'HomeCtrl',
	}
})
