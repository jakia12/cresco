self.__BUILD_MANIFEST = function(s, e, a, c, t) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/41-d5d7eb4278e276e4.js", e, "static/css/7fb5d374130977ae.css", "static/chunks/pages/index-25950f3ded3522a8.js"],
        "/_error": ["static/chunks/pages/_error-a4ba2246ff8fb532.js"],
        "/mobile": [s, e, "static/chunks/pages/mobile-2b5353d4dfb7a16d.js"],
        "/stake": [a, s, c, e, t, "static/chunks/pages/stake-bbb9c1d25afd933d.js"],
        "/trading-page": [a, s, c, e, t, "static/chunks/pages/trading-page-5800e7796392badc.js"],
        sortedPages: ["/", "/_app", "/_error", "/mobile", "/stake", "/trading-page"]
    }
}("static/chunks/664-6863c832d33388a7.js", "static/chunks/256-df11129a3f45cba6.js", "static/chunks/de297ff1-ed016ebc0416e9f4.js", "static/chunks/584-a15a08185bfb5b64.js", "static/chunks/549-bfd1528e0312779d.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();