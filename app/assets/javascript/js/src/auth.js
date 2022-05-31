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
                      
                    },
                    complete: () => {
                        SET.closeButtonLoader("#btn_submit");
                    },
                    statusCode:  {
                        404: function () {
                            SET.__404page()
                        },
                        422: function (res) {
                            let error = res.responseJSON;
                            toastr.error(error.message, "Failed 422", SET.bottomNotif());
                        },
                        401: function () {
                            window.location.href = `${SET.__baseURL()}delete_session`;
                        },
                        500: function () {
        
                        },
                        400: () => {
                            let error = err.responseJSON;
                  
                            toastr.error(
                                "Failed",
                                "Akun anda di-nonaktifkan, silakan hubungi admin!",
                                SET.bottomNotif()
                            );
                            setTimeout(() => {
                                window.location.href = `${SET.baseURL()}login`;
                            }, 1000);
                        }
                    }
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
