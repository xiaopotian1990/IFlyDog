﻿$(function () {
    layui.use("form", function () {
        window.form = layui.form();

    });
    $(document).on("change propertychange keydown keyup", "#smartUseDetailTD .layui-input", function () {
        if ($(this).val() > parseInt($(this).parents("tr").data("size"))) {
            $(this).val(parseInt($(this).parents("tr").data("size")));
        }
    });
    $(document).on("click", ".add-user", function () {
        UserInfo.setConfimFunc(function (userInfo) {
            $("[name=useUserId]").val(userInfo.id);
            $("[name=smartAddUser]").val(userInfo.name);
        }).openPop();
    });
});

var i = 1;
//显示
$("#smartReturnHtml")
    .ready(function () {
        var infoFunc = function () {
            var url = "/Use/UseGet";

            var cangkId = $("#smartWarehouse").val();
            var smartWarehouseDetaiName = $("#smartWarehouseDetaiName").val();
            var beginDate = $("#beginDate").val();
            var endDate = $("#endDate").val();
            //var no = $("#No").val();

            var realData = {};
            realData.WarehouseID = cangkId;
            realData.DeptID = smartWarehouseDetaiName;
            realData.BeginTime = beginDate;
            realData.EndTime = endDate;
            // realData.No = no;
            realData.PageNum = 1;
            realData.PageSize = 2;

            var paraObj = new Object();
            paraObj.data = realData;

            var data = ajaxProcess(url, paraObj).Data;
            pageFun(1, data.PageTotals);//测试分页数据  data.PageTotals返回的数据条数
            var interText = doT.template($("#smartUse_template").text());
            $(".layui-field-box").html(interText(data.PageDatas));
        };
        infoFunc();


    });

function aa() {
    var url = "/Use/UseGet";

    var cangkId = $("#smartWarehouse").val();
    var smartWarehouseDetaiName = $("#smartWarehouseDetaiName").val();
    var beginDate = $("#beginDate").val();
    var endDate = $("#endDate").val();
    //var no = $("#No").val();

    var realData = {};
    realData.WarehouseID = cangkId;
    realData.DeptID = smartWarehouseDetaiName;
    realData.BeginTime = beginDate;
    realData.EndTime = endDate;
    // realData.No = no;
    realData.PageNum = 1;
    realData.PageSize = 2;


    var paraObj = {};
    paraObj.data = realData;

    var data = ajaxProcess(url, paraObj).Data;
    var interText = doT.template($("#smartUse_template").text());
    if (data == null) {
        $(".layui-field-box").html(interText(""));
    } else {
        $(".layui-field-box").html(interText(data.PageDatas));
        pageFun(1, data.PageTotals);//测试分页数据  data.PageTotals返回的数据条数
    }
    form.render();
    dataPlugin();
}

function pageFun(curr, size) {

    layui.use(['layer', 'laypage', 'element'], function () {
        var laypage = layui.laypage;
        var pageCount = Math.ceil(size / 2);

        //显示分页
        laypage({//size/2
            cont: 'pageDiv', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: pageCount, //通过后台拿到的总页数 （如果只有1页，则不显示分页控件）
            curr: curr || 1, //当前页
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    //pageFun(obj.curr, 2);

                    var url = "/Use/UseGet";

                    var cangkId = $("#smartWarehouse").val();
                    var smartWarehouseDetaiName = $("#smartWarehouseDetaiName").val();
                    var beginDate = $("#beginDate").val();
                    var endDate = $("#endDate").val();
                    //var no = $("#No").val();

                    var realData = {};
                    realData.WarehouseID = cangkId;
                    realData.DeptID = smartWarehouseDetaiName;
                    realData.BeginTime = beginDate;
                    realData.EndTime = endDate;
                    // realData.No = no;
                    realData.PageNum = obj.curr;
                    realData.PageSize = 2;
                    var paraObj = {};
                    paraObj.data = realData;
                    var data = ajaxProcess(url, paraObj).Data;

                    var interText = doT.template($("#smartUse_template").text());
                    $(".layui-field-box").html(interText(data.PageDatas));
                    pageFun(obj.curr, data.PageTotals);//测试分页数据  data.PageTotals返回的数据条数 先放到最后，可能有执行顺序的问题
                    form.render();
                    dataPlugin();
                }
            }
        });
    });
};