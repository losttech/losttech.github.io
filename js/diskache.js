var Compat;
(function (Compat) {
    var Styles = (function () {
        function Styles() {
        }
        Styles.supports = function (style) {
            return style in document.createElement("div").style;
        };
        return Styles;
    })();
    Compat.Styles = Styles;
})(Compat || (Compat = {}));
var Diskache;
(function (Diskache) {
    var ContactPage = (function () {
        function ContactPage() {
        }
        ContactPage.run = function () {
            $("#send").click(function () {
                var from = $("#name").val();
                var phone = $("#phone").val();
                var message = $("#message").val();
                var body = message + "\r\n\r\n" + from + (phone ? "\r\n" + phone : "");
                var productName = $("#product").val();
                var link = "mailto:" + encodeURIComponent('"Lost Tech"<contactus@lost.tech>') + "?subject=" + encodeURIComponent(productName) + "&body=" + escape(body);
                window.location.href = link;
            });
        };
        return ContactPage;
    })();
    Diskache.ContactPage = ContactPage;
})(Diskache || (Diskache = {}));
//# sourceMappingURL=diskache.js.map