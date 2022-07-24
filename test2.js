data = [{
    dataModels: [{
        childNodes: {
            appId: 'foo'
        }
    }]
}, {
dataModels: [{
    childNodes: {
        appId: 'foo'
    }
}]}];


data.forEach(function(obj) {
    console.log(obj)
    var res = obj.dataModels.map(function(o) {
        return o;
    });
    console.log(res[0]);
});