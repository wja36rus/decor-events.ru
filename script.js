$(document).ready(function () {


    $('#send-btn').click(function (e) {
        e.preventDefault();
        var name = $('#form-name').val();
        var mail = $('#form-mail').val();
        var tel = $('#form-tel').val();
        var check = $('#check').prop("checked");

        const reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!name) {
            $("#form-error").empty().text("Введите имя").addClass('text-white');
            $('#form-name').css("border", "2px solid red");
        } else if (!mail) {
            $("#form-error").empty().text("Введите электронную почту").addClass('text-white');
            $('#form-name').css("border", "1px solid #ced4da");
            $('#form-mail').css("border", "2px solid red");
        } else if (!reg.test(mail)) {
            $("#form-error").empty().text("Введите корректный адрес почты").addClass('text-white');
            $('#form-name').css("border", "1px solid #ced4da");
            $('#form-mail').css("border", "2px solid red");
        } else if (!check) {
            $("#form-error").empty().text("Требуется согласие на обработку персональных данных").addClass('text-white');
            $('#form-name').css("border", "1px solid #ced4da");
            $('#form-mail').css("border", "1px solid #ced4da");
        } else {
            $("#form-error").empty().removeClass('text-white').addClass('text-white');
            $('#form-name').css("border", "1px solid #ced4da");
            $('#form-mail').css("border", "1px solid #ced4da");

            $("#form-error").empty().text("Сообщение отправлено");
            setTimeout(() => {
                $("#form-error").empty().removeClass('text-white');
                $('#form-name').val('');
                $('#form-mail').val('');
                $('#form-tel').val('');
            }, 2500);

            /*
            $.ajax({
                type: "post",
                url: "send.php",
                data: {
                    name: name,
                    mail: mail,
                    tel: tel
                },
                dataType: "text",
                success: function (response) {
                    if (response === "success") {
                        $("#form-error").empty().text("Сообщение отправлено");
                        setTimeout(() => {
                            $("#form-error").empty().removeClass('text-white');
                            $('#form-name').val('');
                            $('#form-mail').val('');
                            $('#form-tel').val('');
                        }, 2500);
                    } else {
                        $("#form-error").empty().removeClass('text-white').adddClass('text-white').text("Ошибка отправки сообщения");
                    }
                }
            });*/
        }
    });
    $('#send-btns').click(function (e) {
        e.preventDefault();
        var name = $('#form-names').val();
        var mail = $('#form-mails').val();
        var tel = $('#form-tels').val();
        var check = $('#checks').prop("checked");
        const reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!name) {
            $("#form-errors").empty().text("Введите имя").addClass('text-white');
            $('#form-names').css("border", "2px solid red");
        } else if (!mail) {
            $("#form-errors").empty().text("Введите электронную почту").addClass('text-white');
            $('#form-names').css("border", "1px solid #ced4da");
            $('#form-mails').css("border", "2px solid red");
        } else if (!reg.test(mail)) {
            $("#form-errors").empty().text("Введите корректный адрес почты").addClass('text-white');
            $('#form-names').css("border", "1px solid #ced4da");
            $('#form-mails').css("border", "2px solid red");
        } else if (!check) {
            $("#form-errors").empty().text("Требуется согласие на обработку персональных данных").addClass('text-white');
            $('#form-names').css("border", "1px solid #ced4da");
            $('#form-mails').css("border", "2px solid №ced4da");
        } else {
            $("#form-errors").empty().removeClass('text-white').addClass('text-white');
            $('#form-names').css("border", "1px solid #ced4da");
            $('#form-mails').css("border", "1px solid #ced4da");

            $("#form-errors").empty().text("Сообщение отправлено");
            setTimeout(() => {
                $("#form-errors").empty().removeClass('text-white');
                $('#form-names').val('');
                $('#form-mails').val('');
                $('#form-tels').val('');
            }, 2500);
            /*
            $.ajax({
                type: "post",
                url: "send.php",
                data: {
                    name: name,
                    mail: mail,
                    tel: tel
                },
                dataType: "text",
                success: function (response) {
                    if (response === "success") {
                        $("#form-errors").empty().text("Сообщение отправлено");
                        setTimeout(() => {
                            $("#form-errors").empty().removeClass('text-white');
                            $('#form-names').val('');
                            $('#form-mails').val('');
                            $('#form-tels').val('');
                        }, 2500);
                    } else {
                        $("#form-errors").empty().removeClass('text-white').adddClass('text-white').text("Ошибка отправки сообщения");
                    }
                }
            });*/
        }
    });
});