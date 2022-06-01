const AuthController = ((SET) => {
    const showPassword = () => {
        $(".show-password").on("click", function () {
            if ($(this).is(":checked")) {
                $("#password").attr("type", "text");
            } else {
                $("#password").attr("type", "password");
            }
        });
    };

    const submitLogin = () => {
        $("#form_login").validate({
            errorClass: "is-invalid",
            successClass: "is-valid",
            validClass: "is-valid",
            errorElement: "div",
            errorPlacement: function (error, element) {
                error.addClass("invalid-feedback");
                error.insertAfter(element);
            },
            rules: {
                email: "required",
                password: "required",
            },
            submitHandler: (form) => {
                $.ajax({
                    url: `${SET.baseURL()}login`,
                    type: "POST",
                    dataType: "JSON",
                    data: $(form).serialize(),
                    beforeSend: (xhr) => {
                        SET.buttonLoader("#btn_submit");
                    },
                    success: res => {
                        window.location.href = `${SET.baseURL()}task`;
                    },
                    error: err => {
                        toastr.error(
                            "Failed",
                            err.responseJSON.message,
                            SET.bottomNotif()
                        );
                    },
                    complete: () => {
                        SET.closeButtonLoader("#btn_submit");
                    },
                });
            },
        });
    };

    const TokenSetup = TOKEN => {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': TOKEN
            }
        });
    }

    return {
        init: TOKEN => {
            TokenSetup(TOKEN);
            showPassword();
            submitLogin();
        },
    };
})(SettingController);
