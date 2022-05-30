const SettingController = (() => {
  const ENV = "DEVELOPMENT";

  const selfBaseURL = () => {
    const PROTOCOL = window.location.protocol;
    const HOST = window.location.host;

    if (ENV === "DEVELOPMENT") {
      return `${PROTOCOL}//${HOST}/`;
    } else {
      return `${PROTOCOL}//${HOST}/`;
    }
  };

  const selfPublicURL = () => {
    if (ENV === "DEVELOPMENT") {
      return "http://127.0.0.1:3000/";
    } else {
      return "https://mangkurir.com/";
    }
  };

  return {
    publicURL: () => {
      if (ENV === "DEVELOPMENT") {
        return "http://127.0.0.1:3000/";
      } else {
        return "https://mangkurir.com/";
      }
    },

    baseURL: () => {
      const PROTOCOL = window.location.protocol;
      const HOST = window.location.host;

      if (ENV === "DEVELOPMENT") {
        return `${PROTOCOL}//${HOST}/`;
      } else {
        return `${PROTOCOL}//${HOST}/`;
      }
    },

    closeGlobalLoader: () => {
      $(".preloader").fadeOut();
    },

    contentLoader: (container) => {
      $(container).block({
        message: `
                    <div class="loader-wrapper" style="height: 300px">
                      <div class="loader-container">
                        <div class="ball-pulse loader-primary">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                `,
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });
    },

    buttonLoader: (button) => {
      $(button).block({
        message: `
                    <div class="loader-wrapper">
                      <div class="loader-container">
                        <div class="ball-clip-rotate loader-primary">
                          <div></div>
                        </div>
                      </div>
                    </div>
                `,
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });
    },

    tableLoader: (table_id, colspan) => {
      let html = `
                    <tr>
                        <td class="text-center" colspan="${colspan}">
                            <div class="loader-wrapper" style="height: 300px">
                                <div class="loader-container">
                                    <div class="ball-grid-pulse loader-primary">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                `;

      $(table_id + " tbody").html(html);
    },

    shopLoader: (container) => {
      $(container).html(`Loading....`);
    },

    spinnerLoader: (container) => {
      $(container).html(`<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>`);
    },

    afterLoader: (container) => {
      $(container).html("");
    },

    pageLoader: () => {
      $.blockUI({
        message: `
                    <div class="loader-wrapper">
                      <div class="loader-container">
                        <div class="ball-grid-pulse loader-success">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                `,
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });
    },

    bottomNotif: () => {
      return {
        progressBar: true,
        closeButton: true,
        positionClass: "toast-bottom-full-width",
        preventDuplicates: true,
        timeOut: "1500",
      };
    },

    bottomRightNotif: () => {
      return {
        progressBar: true,
        closeButton: true,
        positionClass: "toast-bottom-right",
        preventDuplicates: true,
        timeOut: "1500",
      };
    },

    bottomLeftNotif: () => {
      return {
        progressBar: true,
        closeButton: true,
        positionClass: "toast-bottom-left",
        preventDuplicates: true,
        timeOut: "1500",
      };
    },

    closeContentLoader: (container) => {
      $(container).unblock();
    },

    closeButtonLoader: (button) => {
      $(button).unblock();
    },

    closePageLoader: () => {
      $.unblockUI();
    },

    positiveNumber: (num) => {
      return Math.abs(num);
    },

    negativeNumber: (num) => {
      return Math.abs(num) * -1;
    },

    realCurrency: (num) => {
      return parseFloat(num).toLocaleString(["ban", "id"]);
    },

    positiveCurrency: (num) => {
      return Math.abs(num).toLocaleString(["ban", "id"]);
    },

    negativeCurrency: (num) => {
      let new_num = Math.abs(num) * -1;

      new_num.toLocaleString(["ban", "id"]);
    },

    replaceEnter: (text) => {
      return text.replace(/(\r\n|\n|\r)/gm, "<br>");
    },

    filterNull: (text) => {
      if (text === null) {
        return "";
      } else {
        return text;
      }
    },

    replaceNull: (text) => {
      if (text === null) {
        return "-";
      } else {
        return text;
      }
    },

    replaceNullToZero: (text) => {
      if (text === null) {
        return 0;
      } else {
        return text;
      }
    },

    dateFormat: (date) => {
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [day, month, year].join("-");
    },

    timeFormat: (time) => {
      let new_time = time.split(":");
      let hours = new_time[0];
      let minuets = new_time[1];

      return [hours, minuets].join(":");
    },

    dateTimeFormat: (datetime) => {
      let d = new Date(datetime),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = "" + d.getHours(),
        minutes = "" + d.getMinutes(),
        seconds = "" + d.getSeconds();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      if (hours.length < 2) hours = "0" + hours;
      if (minutes.length < 2) minutes = "0" + minutes;
      if (seconds.length < 2) seconds = "0" + seconds;

      return `${[year, month, day].join("-")} ${[hours, minutes, seconds].join(
        ":"
      )}`;
    },

    checkStatus: (text) => {
      if (text === "GAGAL" || text == "DITOLAk") {
        var status = `<span class="text-danger">${text}</span>`;
      } else if (text == "BERJALAN") {
        var status = `<span class="text-primary">${text}</span>`;
      } else {
        var status = `<span class="text-success">${text}</span>`;
      }

      return status;
    },

    safeObject: (obj) => {
      try {
        return obj();
      } catch (e) {
        return "-";
      }
    },

    safeXSS: (data) => {
      if (data === null) {
        return "";
      } else {
        return data.replace(/(<([^>]+)>)/gi, "");
      }
    },

    durationTime: (date) => {
      let startDate = moment(new Date(date).getTime());
      let endDate = moment(new Date().getTime());
      let difference = moment.duration(endDate.diff(startDate));
      return `Durasi: <strong>${difference._data.hours} Jam ${difference._data.minutes} Menit ${difference._data.seconds} Detik </strong>`;
    },

    __404page: () => {
      let html = `
            <div class="main-wrapper">
            
                <div class="error-box">
                    <div class="error-body text-center">
                        <img src="${selfBaseURL()}assets/images/404page.png">
                        <p class="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                        <a href="${selfPublicURL()}dashboard" class="btn btn-info btn-rounded waves-effect waves-light m-b-40">Back to home</a> 
                    </div>
                </div>
            </div>
                
            <script src="${selfBaseURL()}assets/libs/jquery/dist/jquery.min.js"></script>
            <script src="${selfBaseURL()}assets/libs/popper.js/dist/umd/popper.min.js"></script>
            <script src="${selfBaseURL()}assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
                
            
            `;
      $("body").html(html);
    },

    cardLoader: (container) => {
      $(container).block({
        message: `
                    <div>
                      <div class="loader-container">
                        <div class="ball-pulse-sync loader-purple">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                `,
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 0.8,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        },
      });
    },

    closeCardLoader: (container) => {
      $(container).unblock();
    },
  };
})();
