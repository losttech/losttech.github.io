var Compat;
(function (Compat) {
    var Styles = (function () {
        function Styles() {
        }
        Styles.supports = function (style) {
            return style in document.createElement("div").style;
        };
        return Styles;
    }());
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
                var link = "mailto:" + encodeURIComponent('"Diskache Contact Email"<contact@diskache.io>')
                    + "?subject=" + encodeURIComponent(productName)
                    + "&body=" + escape(body);
                window.location.href = link;
            });
        };
        return ContactPage;
    }());
    Diskache.ContactPage = ContactPage;
})(Diskache || (Diskache = {}));
var Diskache;
(function (Diskache) {
    var IndexPage = (function () {
        function IndexPage() {
        }
        IndexPage.run = function () {
            var playAnimation = !window.localStorage
                || (localStorage.getItem(IndexPage.mainAnimationPlayed) != "1");
            if (playAnimation)
                IndexPage.playAppearAnimation();
            else
                IndexPage.appearInstantly();
            if (window.localStorage)
                localStorage.setItem(IndexPage.mainAnimationPlayed, "1");
            $("#repeat").click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                IndexPage.disappear();
                IndexPage.playAppearAnimation();
            });
        };
        IndexPage.playAppearAnimation = function () {
            setTimeout(function () {
                $('.appear-animation').animate({ opacity: 1 }, 1000);
            }, 3000);
        };
        IndexPage.appearInstantly = function () {
            $('.appear-animation').css("opacity", 1);
        };
        IndexPage.disappear = function () {
            $('.appear-animation').css("opacity", 0);
        };
        return IndexPage;
    }());
    IndexPage.mainAnimationPlayed = "index.mainAnimation";
    Diskache.IndexPage = IndexPage;
})(Diskache || (Diskache = {}));
//# sourceMappingURL=diskache.js.map