'use strict';

var _ = require('lodash');


var sortObject = function(obj, fn) {
    var keys = _.sortBy(_.keys(obj), fn);
    var res = {};

    _.forIn(keys, function(key) {
        res[key] = obj[key];
    })

    return res
}

var serialize = function(obj) {
    var res = '';
    var mapValue = _.map(obj, function(value, key) {
        // 若输入参数中包含下划线，则需要将其转换为 “.” ,https://cloud.tencent.com/document/api/228/1725
        value = (''+value).replace('_', '.')
        return (key+'='+value)
    });

    res = _.join(mapValue, '&');

    return res
}

exports.sortObject = sortObject;
exports.serialize = serialize;
