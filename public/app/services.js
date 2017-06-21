app.factory('details', function() {
    return {
        number: '0208 771 2362',
        email: 'info@citywindowsandglass.co.uk'
    }
})

app.filter('numberFixedLen', function () {
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = ''+num;
        while (num.length < len) {
            num = '0'+num;
        }
        return num;
    };
});
