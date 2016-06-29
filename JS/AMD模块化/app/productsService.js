/**
 * Created by Administrator on 2016/6/29.
 */

define(function(require,exports,module){
    var $ = require('tc1');
    var config = require('app/config.js')

    module.exports = {


        //获取全部数据
        getData:function () {
            $.get(config.apiUrl+"/products",function (data) {
                console.log(data);
            });
        },
        //添加数据
        addData:function (formData) {
            $.post(config.apiUrl+"/products",formData,function (data) {
                console.log(data);
            })
        },
        //删除数据
        delData:function (id) {
            $.ajax({
                url:config.apiUrl + "/products/" + id,
                type:'delete',
                success:function (data) {
                    console.log(data);
                }
            });
        },
        //修改
        updateData:function (id, formdata) {
            $.ajax({
                url:config.apiUrl + "/products/" + id,
                type:'put',
                data:formdata,
                success:function (data) {
                    console.log(data);
                }
            })
        }
    }
})