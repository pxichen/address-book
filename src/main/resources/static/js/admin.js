//编辑学生
function editStudent(infoTable) {
    console.log("editAdminDetailTable");
    $('#name' + infoTable).attr("contenteditable", true);
    $('#sex' + infoTable).attr("contenteditable", true);
    console.log("editAdminDetailTableend");
}

//保存学生
function saveStudent(infoTable) {
    console.log("saveStudent...")
    var student = {
        sid: $('#sid' + infoTable).text(),
        name: $('#name' + infoTable).text(),
        sex: $('#sex' + infoTable).text()
    }
    console.log(student)
    $.ajax({
        url: '/admin/update-student',
        type: 'put',
        dataType: 'json',
        cache: false,
        data: JSON.stringify(student),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            // alert("成功");
            // var str = data.username + data.age + data.job;
            // $("#result").html(str);
            if (data.errCode == 0) {
                // alert("修改成功");
                $('#motai').html('修改成功！')
                $('#myModal').modal('show');
                // location.reload();
            } else if (data.errCode == 1) {
                $('#motai').html('改失败，请检查输入的数据！')
                $('#myModal').modal('show');
                // alert("修改失败，请检查输入的数据！");
            } else {
                $('#motai').html('发生未知错误,请重试！')
                $('#myModal').modal('show');
                // alert("发生未知错误,请重试");
            }

            // location.reload();
        },
        complete: function (data) {
            // alert("complete");
        }

    });
    $("#infoTable").attr("contenteditable", false);
}

//删除学生
function deleteStudent(sid) {
    console.log("deleteStudent...")
    if (confirm("是否确认删除")) {
        $.ajax({
            url: '/admin/delete-student',
            type: 'delete',
            dataType: 'json',
            cache: false,
            data: JSON.stringify({'sid': sid}),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                if (data.errCode == 0) {
                    $('#motai').html('删除成功！')
                    $('#myModal').modal('show');
                    // location.reload();
                } else if (data.errCode == 1) {
                    $('#motai').html('删除失败！')
                    $('#myModal').modal('show');
                    // alert("删除失败！");
                } else {
                    $('#motai').html('发生未知错误,请重试!')
                    $('#myModal').modal('show');
                    // alert("发生未知错误,请重试");
                }
            },
        });
    }
}

//增加学生
function addStudent(classesNum) {
    console.log("addStudent");
    var student = {
        sid: $('#addsid').text(),
        name: $('#addname').text(),
        sex: $('#addsex').text(),
        classesNum: classesNum

    }
    console.log(student);
    $.ajax({
        url: '/admin/add-student',
        type: 'post',
        dataType: 'json',
        cache: false,
        data: JSON.stringify(student),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            // alert("成功");
            // var str = data.username + data.age + data.job;
            // $("#result").html(str);
            console.log(data)
            if (data.errCode == 0) {
                console.log("保存成功")
                $('#motai').html('保存成功')
                $('#myModal').modal('show');
                // alert("添加成功");
                // location.reload();
            } else if (data.errCode == 1) {
                $('#motai').html('添加失败,请检查你输入的数据！')
                $('#myModal').modal('show');
                // alert("添加失败,请检查你输入的数据！");
            } else {
                $('#motai').html('发生未知错误,请重试！')
                $('#myModal').modal('show');
                // alert("发生未知错误,请重试");
            }

            // location.reload();
        },
        complete: function (data) {
            // alert("complete");
        }
    });


    // 班级操作

    //编辑班级
    function editClasses(infoTable) {
        console.log("editAdminDetailTable");
        $('#classesNum' + infoTable).attr("contenteditable", true);
        $('#classesName' + infoTable).attr("contenteditable", true);
        $('#monitorID' + infoTable).attr("contenteditable", true);
        console.log("editAdminDetailTableend");
    }

//保存班级
    function saveClasses(infoTable) {
        console.log("saveStudent...")
        var classes = {
            sid: $('#sid' + infoTable).text(),
            name: $('#name' + infoTable).text(),
            sex: $('#sex' + infoTable).text()
        }
        console.log(student)
        $.ajax({
            url: '/admin/classes',
            type: 'put',
            dataType: 'json',
            cache: false,
            data: JSON.stringify(student),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // alert("成功");
                // var str = data.username + data.age + data.job;
                // $("#result").html(str);
                if (data.errCode == 0) {
                    // alert("修改成功");
                    $('#motai').html('修改成功！')
                    $('#myModal').modal('show');
                    // location.reload();
                } else if (data.errCode == 1) {
                    $('#motai').html('改失败，请检查输入的数据！')
                    $('#myModal').modal('show');
                    // alert("修改失败，请检查输入的数据！");
                } else {
                    $('#motai').html('发生未知错误,请重试！')
                    $('#myModal').modal('show');
                    // alert("发生未知错误,请重试");
                }

                // location.reload();
            },
            complete: function (data) {
                // alert("complete");
            }

        });
        $("#infoTable").attr("contenteditable", false);
    }

//删除班级
    function deleteClasses(sid) {
        console.log("deleteStudent...")
        if (confirm("是否确认删除")) {
            $.ajax({
                url: '/admin/classes',
                type: 'delete',
                dataType: 'json',
                cache: false,
                data: JSON.stringify({'sid': sid}),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    if (data.errCode == 0) {
                        $('#motai').html('删除成功！')
                        $('#myModal').modal('show');
                        // location.reload();
                    } else if (data.errCode == 1) {
                        $('#motai').html('删除失败！')
                        $('#myModal').modal('show');
                        // alert("删除失败！");
                    } else {
                        $('#motai').html('发生未知错误,请重试!')
                        $('#myModal').modal('show');
                        // alert("发生未知错误,请重试");
                    }
                },
            });
        }
    }

//增加班级
    function addClasses(classesNum) {
        var student = {
            sid: $('#addsid').text(),
            name: $('#addname').text(),
            sex: $('#addsex').text(),
            classesNum: classesNum

        }
        console.log(student);
        $.ajax({
            url: '/admin/classes',
            type: 'post',
            dataType: 'json',
            cache: false,
            data: JSON.stringify(student),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // alert("成功");
                // var str = data.username + data.age + data.job;
                // $("#result").html(str);
                console.log(data)
                if (data.errCode == 0) {
                    console.log("保存成功")
                    $('#motai').html('保存成功')
                    $('#myModal').modal('show');
                    // alert("添加成功");
                    // location.reload();
                } else if (data.errCode == 1) {
                    $('#motai').html('添加失败,请检查你输入的数据！')
                    $('#myModal').modal('show');
                    // alert("添加失败,请检查你输入的数据！");
                } else {
                    $('#motai').html('发生未知错误,请重试！')
                    $('#myModal').modal('show');
                    // alert("发生未知错误,请重试");
                }

                // location.reload();
            },
            complete: function (data) {
                // alert("complete");
            }
        });

    }
}