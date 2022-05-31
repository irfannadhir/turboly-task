const MainUI = ((SET) => {
    return {
        renderNotifications: ({results}) => {
            let html = results.data.map(v => {
            return `
                <li>
                    <a class="text-dark d-flex py-2" href="${SET.baseURL()}order">
                        <div class="flex-shrink-0 me-2 ms-3">
                            <i class="fa fa-fw fa-check-circle text-success"></i>
                        </div>
                        <div class="flex-grow-1 pe-2">
                            <div class="fw-semibold">${v.no_order} ${v.status}</div>
                            <span class="fw-medium text-muted">${SET.dateTimeFormat(v.created_at)}</span>
                        </div>
                    </a>
                </li>
            `;
            }).join('')
            $("#notificationsStatus").html(html);
        },
    };
})(SettingController);

const MainController = ((SET, UI) => {

    const logoutSystem = () => {
        $("#logout").on("click", function () {
            $.ajax({
                url: `${SET.baseURL()}logout`,
                type: "POST",
                dataType: "JSON",
                beforeSend: (xhr) => {
                    SET.pageLoader();
                },
                success: (res) => {
                    window.location.href = `${SET.baseURL()}login`;
                },
                error: (err) => {
                    let error = err.responseJSON;
                    toastr.error("Failed", error.message, SET.bottomNotif());
                },
                complete: () => {
                    SET.closePageLoader();
                },
                statusCode: {
                    404: function () {
                        toastr.error(
                            "Endpoint Not Found",
                            "Failed",
                            SET.bottomNotif()
                        );
                    },
                    401: function () {
                        window.location.href = `${SET.baseURL()}delete_session`;
                    },
                    500: function () {},
                },
            });
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
            logoutSystem();
        },
    };
})(SettingController, MainUI);
