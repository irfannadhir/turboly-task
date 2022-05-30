const TaskUI = ((SET) => {
    return {
        renderData: ({ results }) => {
            let body = results.map(v => {
                return `
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    </td>
                    <td class="text-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-alt-secondary" data-bs-toggle="tooltip" title="Edit">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-alt-secondary" data-bs-toggle="tooltip" title="Delete">
                        <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                    </td>
                </tr>
                `;
            }).join('')

            $("#t_task tbody").html(body);
        },

        renderFooter: ({ results }) => {

            let max_page = 15;
            let start = results.current_page - 5
            let end = results.current_page + 5

            if (start <= 1) { start = 2 }
            if (end > results.last_page) { end = results.last_page - 1 }

            let footer = `
                <tr>
                    <td colspan="8" class="text-center">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary btn-pagination"  ${results.prev_page_url === null ? "disabled" : "" } data-url="${results.first_page_url}"> << </button>
                            <button type="button" class="btn btn-secondary btn-pagination" data-toggle="modal" ${results.prev_page_url === null ? "disabled" : "" } data-url="${results.prev_page_url}"> < </button>
                        </div>
            `;

            footer += `
                <div class="btn-group mr-2" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === 1 ? 'disabled' : ''} data-url="${results.first_page_url}">1</button>`

            if (results.current_page != 1) {
                footer += `<button type="button" class="btn btn-secondary btn-pagination" disabled data-url="">...</button>`;
            }

            for (let i = start; i <= end; i++) {
                if (i === results.current_page) {
                    footer += `<button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === i ? 'disabled' : ''} data-url="${results.path}?page=${i}">${i}</button>`;
                } else {
                    footer += `<button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === i ? 'disabled' : ''} data-url="${results.path}?page=${i}">${i}</button>`;
                }
            }

            if ((results.current_page != results.last_page)) {
                footer += `<button type="button" class="btn btn-secondary btn-pagination" disabled data-url="">...</button>`;

            }

            footer += `    
                    <button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === results.last_page ? 'disabled' : ''} data-url="${results.last_page_url}">${results.last_page}</button>
                </div>
            `;

            footer += `
                        <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-secondary btn-pagination" ${results.next_page_url === null ? "disabled" : "" } data-url="${results.next_page_url}"> > </button>
                                <button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === results.last_page ? "disabled" : "" } data-url="${results.last_page_url}"> >> </button>
                            </div>
                        </div>
                    </td>
                </tr>
            `;

            $("#t_task tfoot").html(footer);
        },

        renderNoData: () => {
            let html = `
                <tr>
                    <td class="text-center" colspan="8">
                        <img class="img-fluid" src="${SET.baseURL()}assets/no-data.svg" alt="" style="height: 150px; margin-bottom: 35px;"><br>
                        <span class="font-weight-bold">Tidak ada data tersedia.</span><br>
                        <span>
                            <div class="btn-group mt-2">
                                <button class="btn btn-info btn-md" id="btn_add_data" style="width: 125px;"><i class="fas fa-plus"></i> Add</button>
                            </div>
                        </span>
                    </td>
                </tr>
            `

            $("#t_task tbody").html(html);
        },

        renderData_toko: ({ results }) => {
            let body = results.map(v => {
                return `
                    <tr>
                        <td style="width: 10%;">${results.from++}</td>
                        <td style="width: 10%;">${v.name}</td>
                        <td style="width: 20%;">Rp. ${SET.realCurrency(v.price)}</td>
                        <td style="width: 10%;">${v.stock}</td>
                        <td style="width: 20%;">${v.description}</td>
                        <td style="width: 20%;"><img src="${SET.imageURL()}${v.image}" alt="Image" width="100%"></td>
                        <td style="width: 10%;">
                            <div class="btn-group">
                                <button class="btn btn-sm btn-warning btn-edit" data-id="${v.id}">Edit</button>
                                <button class="btn btn-sm btn-danger btn-delete" data-id="${v.id}" data-name="${v.name}">Delete</button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('')

            $("#t_task tbody").html(body);
        },

        renderFooter_toko: ({ results }) => {

            let max_page = 15;
            let start = results.current_page - 5
            let end = results.current_page + 5

            if (start <= 1) { start = 2 }
            if (end > results.last_page) { end = results.last_page - 1 }

            let footer = `
                <tr>
                    <td colspan="7" class="text-center">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary btn-pagination"  ${results.prev_page_url === null ? "disabled" : "" } data-url="${results.first_page_url}"> << </button>
                            <button type="button" class="btn btn-secondary btn-pagination" data-toggle="modal" ${results.prev_page_url === null ? "disabled" : "" } data-url="${results.prev_page_url}"> < </button>
                        </div>
            `;

            footer += `
                <div class="btn-group mr-2" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === 1 ? 'disabled' : ''} data-url="${results.first_page_url}">1</button>`

            if (results.current_page != 1) {
                footer += `<button type="button" class="btn btn-secondary btn-pagination" disabled data-url="">...</button>`;
            }

            for (let i = start; i <= end; i++) {
                if (i === results.current_page) {
                    footer += `<button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === i ? 'disabled' : ''} data-url="${results.path}?page=${i}">${i}</button>`;
                } else {
                    footer += `<button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === i ? 'disabled' : ''} data-url="${results.path}?page=${i}">${i}</button>`;
                }
            }

            if ((results.current_page != results.last_page)) {
                footer += `<button type="button" class="btn btn-secondary btn-pagination" disabled data-url="">...</button>`;

            }

            footer += `    
                    <button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === results.last_page ? 'disabled' : ''} data-url="${results.last_page_url}">${results.last_page}</button>
                </div>
            `;

            footer += `
                        <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-secondary btn-pagination" ${results.next_page_url === null ? "disabled" : "" } data-url="${results.next_page_url}"> > </button>
                                <button type="button" class="btn btn-secondary btn-pagination" ${results.current_page === results.last_page ? "disabled" : "" } data-url="${results.last_page_url}"> >> </button>
                            </div>
                        </div>
                    </td>
                </tr>
            `;

            $("#t_task tfoot").html(footer);
        },       
        
        renderNoData_toko: () => {
            let html = `
                <tr>
                    <td class="text-center" colspan="7">
                        <img class="img-fluid" src="${SET.baseURL()}/images/no-data.svg" alt="" style="height: 150px; margin-bottom: 35px;"><br>
                        <span class="font-weight-bold">Tidak ada data tersedia.</span><br>
                        <span>
                            <div class="btn-group mt-2">
                                <button class="btn btn-info btn-md" id="btn_add_data" style="width: 125px;"><i class="fas fa-plus"></i> Add</button>
                            </div>
                        </span>
                    </td>
                </tr>
            `

            $("#t_task tbody").html(html);
        }
    }
})(SettingController)

const TaskController = ((SET, UI) => {
    const fetchTask = (filter = {}, link = null) => {
        $.ajax({
            url: `${link === null ? SET.baseURL() + "get-task" : link}`,
            type: "GET",
            dataType: "JSON",
            data: filter,
            beforeSend: SET.tableLoader("#t_task", 7),
            success: res => {
                $("#count_data").text(res.total);
                if (res.results.length !== 0) {
                    UI.renderData(res, filter);
                    // UI.renderFooter(res, filter);
                } else {
                    UI.renderNoData();
                }
            },
            error: (err) => {},
            complete: () => {},
            statusCode: {
                404: function () {
                    toastr.error(
                        "Endpoint Not Found",
                        "Failed",
                        SET.bottomNotif()
                    );
                },
                401: function () {
                    window.location.href = `${SET.baseURL()}login`;
                },
                500: function () {},
            },
        });
    };

    const gettaskID = (id, loaderContainer, callback) => {
        $.ajax({
            url: `${SET.baseURL()}task/${id}`,
            type: "GET",
            dataType: "JSON",
            beforeSend: () => {
                SET.contentLoader(loaderContainer);
            },
            success: (res) => {
                callback(res.results);
            },
            error: (err) => {},
            complete: () => {
                SET.closeContentLoader(loaderContainer);
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
    };

    const openAdd = () => {
        $("#btn_add").on("click", function () {
            $("#form_add")[0].reset();
            $("#form_add").validate().resetForm();
            $("#modal_add").modal("show");
        });

        $("#t_task").on("click", "#btn_add_data", function () {
            $("#form_add")[0].reset();
            $("#form_add").validate().resetForm();
            $("#modal_add").modal("show");
        });
    };

    const submitAdd = filter => {
        $("#form_add").validate({
            errorClass: "is-invalid",
            errorElement: "div",
            errorPlacement: function (error, element) {
                if (element.hasClass("select2")) {
                    let el = element.next();
                    error.addClass("invalid-feedback");
                    $(".select2-selection").addClass("is-invalid");
                    error.insertAfter(el);
                } else {
                    error.addClass("invalid-feedback");
                    error.insertAfter(element);
                }
            },
            rules: {
                shop_id: {
                    required: true,
                    maxlength: 50,
                },
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.baseURL()}task`,
                    type: "POST",
                    dataType: "JSON",
                    data: $(form).serialize(),
                    beforeSend: xhr => {
                        SET.buttonLoader("#btn_submit");
                    },
                    success: res => {
                        console.log(res);
                        // fetchTask(filter);
                        // $("#modal_add").modal("hide");
                        // toastr.success(
                        //     "Success",
                        //     res.message,
                        //     SET.bottomNotif()
                        // );
                    },
                    error: (err) => {
                        toastr.error(
                            "Failed",
                            "Failed to create data",
                            SET.bottomNotif()
                        );
                    },
                    complete: () => {
                        SET.closeButtonLoader("#btn_submit");
                    },
                    statusCode: {
                        422: function () {
                            toastr.error(
                                "Please Check Input Name or Value",
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
            },
        });
    };   

    const openDelete = () => {
        $("#t_task").on("click", ".btn-delete", function () {
            let delete_id = $(this).data("id");
            let delete_name = $(this).data("name");

            $("#delete_id").val(delete_id);
            $("#delete_name").text(delete_name);
            $("#modal_delete").modal("show");
        });
    };

    const submitDelete = (filter) => {
        $("#form_delete").validate({
            errorClass: "is-invalid",
            errorElement: "div",
            errorPlacement: function (error, element) {
                error.addClass("invalid-feedback");
                error.insertAfter(element);
            },
            rules: {
                id: "required",
            },
            submitHandler: (form) => {
                let id = $("#delete_id").val();

                $.ajax({
                    url: `/task/${id}`,
                    type: "DELETE",
                    dataType: "JSON",
                    data: $(form).serialize(),
                    beforeSend: xhr => {
                        SET.buttonLoader("#btn_submit_delete");
                    },
                    success: (res) => {
                        fetchTask(filter);
                        $("#modal_delete").modal("hide");
                        toastr.success(
                            "Success",
                            res.message,
                            SET.bottomNotif()
                        );
                    },
                    error: (err) => {
                        // let error = err.responseJSON;
                        // toastr.error(
                        //     "Failed",
                        //     error.message,
                        //     SET.bottomNotif()
                        // );
                    },
                    complete: () => {
                        SET.closeButtonLoader("#btn_submit_delete");
                    },
                    statusCode: {
                        404: function () {
                            toastr.error(
                                "Cannot find ID",
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
            },
        });
    };

    const openEdit = () => {
        $("#t_task").on("click", ".btn-edit", function () {
            let edit_id = $(this).data("id");

            $("#form_edit")[0].reset();

            gettaskID(edit_id, ".modal-body", data => {
              
                $("#edit_id").val(data.id);
                $("#edit_name").val(data.name);
                $("#edit_price").val(parseInt(data.price));
                $("#edit_stock").val(data.stock);
                $("#edit_description").val(data.description);

                if (data.image !== null && data.image.length > 0) {      
                    html = `<input type="file" name="image" id="edit_image" class="dropify" data-default-file="${SET.imageURL()}${data.image}"   data-allowed-file-extensions="jpg jpeg png" data-max-file-size="2M">`;   
                    $('#old_image').val(data.image)                
                }else{
                    html = `<input type="file" name="image" id="edit_image" class="dropify" data-allowed-file-extensions="jpg jpeg png" data-max-file-size="2M">`;
                }
                $('#task-image').html(html);
                $('#edit_image').dropify();
            });

            $("#modal_edit").modal("show");
        });
    };

    const submitEdit = filter => {
        $("#form_edits").validate({
            errorClass: "is-invalid",
            errorElement: "div",
            errorPlacement: function (error, element) {
                error.addClass("invalid-feedback");
                error.insertAfter(element);
            },
            rules: {
                shop_id: {
                    required: true,
                    maxlength: 50,
                },
                name: {
                    required: true,
                    maxlength: 50,
                },
                price: {
                    required: true,
                    maxlength: 50,
                },
                stock: {
                    required: true,
                    maxlength: 50,
                },
                description: {
                    required: false,
                    maxlength: 255,
                },
            },
            submitHandler: (form) => {
                let edit_id = $("#edit_id").val();

                $.ajax({
                    url: `${SET.baseURL()}task/${edit_id}`,
                    type: "PUT",
                    dataType: "JSON",
                    data: $(form).serialize(),
                    beforeSend: xhr => {
                        SET.buttonLoader("#btn_submit_edit");
                    },
                    success: (res) => {
                        fetchTask(filter);
                        $("#modal_edit").modal("hide");
                        toastr.success(
                            "Success",
                            res.message,
                            SET.bottomNotif()
                        );
                    },
                    error: (err) => {
                        toastr.error(
                            "Success",
                            "Failed to create data",
                            SET.bottomNotif()
                        );
                    },
                    complete: () => {
                        SET.closeButtonLoader("#btn_submit_edit");
                    },
                    statusCode: {
                        422: function () {
                            toastr.error(
                                "Please Check Input Name or Value",
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
            },
        });
    };

    const changePaginate = (filter) => {
        $('#page_number').on('change',function() {
            let pagination = $(this).val()
            filter.paginate = pagination;
            fetchTask(filter)
        });
    }

    const search = (filter) => {
        $('#search').keyup(function() {
            let search = $(this).val()
            filter.search = search;
            fetchTask(filter)
        });
    }

    const changeType = (filter) => {
        $('#sort_task_type').change(function() {
            let task_type = $(this).val()
            filter.task_type = task_type;
            fetchTask(filter)
        });
    }

    const clickPagination = (filter = {}) => {
        $('#t_task').on('click', '.btn-pagination', function() {
            let link = $(this).data('url');

            fetchTask(filter, link);
        });
    }

    const setupToken = TOKEN => {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': TOKEN
            }
        });
        
    }

    return {
        init: TOKEN => {
            setupToken(TOKEN)
            let filter = {};
            fetchTask()

            openAdd();
            submitAdd(filter);
            openDelete();
            submitDelete(filter);
            openEdit();
            submitEdit(filter);

            clickPagination(filter)
            changePaginate(filter);
            search(filter);
            changeType(filter);
        },
    };
})(SettingController, TaskUI);
