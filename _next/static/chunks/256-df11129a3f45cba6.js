"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [256], {
        851: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return x
                }
            });
            var l = s(5893),
                r = s(7294),
                i = s(6342),
                a = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        s = e[1];
                    return (0, l.jsx)("footer", {
                        className: "hidden lg:flex w-full bg-black self-stretch justify-center flex w-full flex-col mt-7 px-5 py-6 w-full min-h-[180px] relative",
                        children: (0, l.jsx)("div", {
                            className: "self-center w-full px-20 my-4 max-md:max-w-full",
                            children: (0, l.jsxs)("div", {
                                className: "gap-5 flex justify-between w-full items-center max-md:gap-0",
                                children: [(0, l.jsx)("div", {
                                    className: "flex flex-col items-stretch w max-md:w-full",
                                    children: (0, l.jsxs)("div", {
                                        className: "items-start flex max-w-full justify-between gap-5 my-auto max-md:justify-center max-md:mt-12 relative",
                                        children: [(0, l.jsx)("a", {
                                            href: "/stake",
                                            className: "text-center text-white text-[18px] font-light leading-8 self-stretch hover:opacity-70 cursor-pointer",
                                            children: "Stake"
                                        }), (0, l.jsx)("a", {
                                            href: "https://medium.com/@cresowallet",
                                            className: "text-center text-white text-[18px] font-light leading-8 self-stretch hover:opacity-70 cursor-pointer",
                                            children: "Blog"
                                        }), (0, l.jsx)("a", {
                                            className: "text-center text-white text-[18px] font-light leading-8 self-stretch hover:opacity-70 cursor-pointer",
                                            onClick: function() {
                                                return s(!t)
                                            },
                                            children: "Socials"
                                        }), t && (0, l.jsx)(i.Z, {
                                            className: "bottom-12 left-40"
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "flex flex-col items-stretch max-md:w-full absolute left-1/2 transform -translate-x-1/2 -mb-4 ",
                                    children: (0, l.jsx)("img", {
                                        loading: "lazy",
                                        srcSet: "/logo-on-black.svg",
                                        className: "h-[36px] -mt-[10px]",
                                        alt: "Logo"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "flex flex-col items-stretch max-md:w-full",
                                    children: (0, l.jsxs)("div", {
                                        className: "items-start flex gap-3",
                                        children: [(0, l.jsx)("div", {
                                            className: "justify-center items-center self-stretch flex w-36 max-w-full flex-col px-5 py-6 rounded-[44.279px] border-[1.197px] border-solid border-white h-[64px] cursor-pointer hover:opacity-80",
                                            children: (0, l.jsx)("div", {
                                                onClick: function() {
                                                    return window.location.href = "https://www.dextools.io/app/en/ether/pair-explorer/0x7262a43c94258e6071d3bac00ebec6d7c9b4ef30"
                                                },
                                                className: "text-white text-justify text-xl font-light self-center",
                                                children: "Chart"
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "justify-center items-center bg-white self-stretch flex w-[207px] max-w-full flex-col px-5 py-6 rounded-[44.279px] h-[64px] cursor-pointer hover:opacity-80",
                                            children: (0, l.jsxs)("div", {
                                                onClick: function() {
                                                    return window.location.href = "https://app.uniswap.org/swap?outputCurrency=0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
                                                },
                                                className: "self-center flex w-[139px] max-w-full items-start gap-3",
                                                children: [(0, l.jsx)("img", {
                                                    loading: "lazy",
                                                    srcSet: "/icons/cart-on-white.svg",
                                                    className: "aspect-square object-cover object-center w-7 overflow-hidden shrink-0 mt-px",
                                                    alt: "Logo"
                                                }), (0, l.jsx)("div", {
                                                    className: "text-black text-justify text-xl font-medium self-stretch",
                                                    children: "Buy Creso"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                c = s(1664),
                n = s.n(c),
                o = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        s = e[1];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [t && (0, l.jsx)("div", {
                            className: "block lg:hidden",
                            children: (0, l.jsx)(i.Z, {
                                setShowPopup: s
                            })
                        }), (0, l.jsxs)("footer", {
                            className: "flex lg:hidden bg-black flex w-full grow flex-col -mt-[28px] -z-10 px-5 py-10 pt-16 w-full auto z-[1] mt-[-35px] pt-[4.9rem]",
                            children: [(0, l.jsxs)("nav", {
                                className: "justify-center items-center self-center flex w-[55px] max-w-full flex-col mt-8",
                                children: [(0, l.jsx)(n(), {
                                    href: "stake",
                                    children: (0, l.jsx)("div", {
                                        className: "text-white text-base md:text-xl font-light leading-6 self-center",
                                        children: "Stake"
                                    })
                                }), (0, l.jsx)("a", {
                                    href: "https://medium.com/@cresowallet",
                                    children: (0, l.jsx)("div", {
                                        className: "text-white text-base md:text-xl font-light leading-6 self-center mt-6",
                                        children: "Blog"
                                    })
                                }), (0, l.jsx)("div", {
                                    id: "sociasl",
                                    className: "text-white text-base md:text-xl font-light leading-6 mt-6 z-10",
                                    onClick: function() {
                                        s(!t)
                                    },
                                    children: "Socials"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "items-start self-center flex max-w-full justify-between flex gap-2.5 mt-10",
                                children: [(0, l.jsx)("div", {
                                    className: "justify-center items-center flex w-[120px] max-w-full flex-col px-5 py-5 rounded-[36.952px] border-[0.999px] border-solid border-white",
                                    children: (0, l.jsx)("div", {
                                        onClick: function() {
                                            return window.location.href = "https://www.dextools.io/app/en/ether/pair-explorer/0x7262a43c94258e6071d3bac00ebec6d7c9b4ef30"
                                        },
                                        className: "text-white text-justify text-base md:text-xl font-light leading-6 self-center -mt-px",
                                        children: "Chart"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "justify-between items-start bg-pink-500 flex max-w-full px-5 py-5 rounded-[36.952px]",
                                    children: [(0, l.jsx)("img", {
                                        loading: "lazy",
                                        srcSet: "/icons/cart.svg",
                                        className: "aspect-square object-cover object-center w-6 overflow-hidden shrink-0 -mt-px mr-[10px]",
                                        alt: "Icon 4"
                                    }), (0, l.jsx)("div", {
                                        className: "text-white text-justify text-base md:text-xl font-medium leading-6 -mt-px",
                                        children: "Buy Creso"
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                className: "items-start self-center flex w-[118px] md:w-[140px] max-w-full gap-1.5 -ml-1.5 mt-8 md:mt-12",
                                children: (0, l.jsx)(n(), {
                                    href: "/",
                                    children: (0, l.jsx)("img", {
                                        loading: "lazy",
                                        srcSet: "/logo-on-black.svg",
                                        className: "pb-4",
                                        alt: "Icon 5"
                                    })
                                })
                            })]
                        })]
                    })
                },
                x = function() {
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a, {}), (0, l.jsx)(o, {})]
                    })
                }
        },
        4226: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return h
                }
            });
            var l = s(5893),
                r = s(7294),
                i = s(1664),
                a = s.n(i),
                c = s(6342),
                n = function(e) {
                    var t = e.setShowConnectWalletModal,
                        s = void 0 === t ? function() {} : t;
                    return (0, l.jsx)("div", {
                        className: "fixed top-0 left-0 w-screen h-screen min-w-screen min-h-screen bg-[#00000060] z-10 ",
                        onClick: function() {
                            return s(!1)
                        },
                        children: (0, l.jsxs)("div", {
                            className: "fixed top-28 left-1/2 transform -translate-x-1/2  popup connect-wallet-modal",
                            onClick: function(e) {
                                e.stopPropagation()
                            },
                            children: [(0, l.jsx)("div", {
                                className: "p-2 absolute top-1.5 right-1.5 opacity-30 cursor-pointer hover:bg-[#00000030] rounded-full",
                                onClick: function() {
                                    return s(!1)
                                },
                                children: (0, l.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-7 h-7",
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    children: [(0, l.jsx)("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }), (0, l.jsx)("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsx)("div", {
                                    className: "popup-item flex items-center",
                                    children: "Metamask"
                                }), (0, l.jsx)("div", {
                                    className: "popup-item flex items-center",
                                    children: "Trust wallet"
                                }), (0, l.jsx)("div", {
                                    className: "popup-item flex items-center",
                                    children: "WalletConnect"
                                })]
                            })]
                        })
                    })
                },
                o = function(e) {
                    var t = e.active,
                        s = void 0 !== t && t,
                        r = e.children,
                        i = e.onClick;
                    return (0, l.jsxs)("div", {
                        onClick: i,
                        className: "hover:opacity-80 cursor-pointer ".concat(s ? "text-black  text-[20px] font-semibold leading-7 self-stretch relative" : "text-[rgba(0,0,0,0.60)] text-[20px] font-light leading-7 self-stretch"),
                        children: [r, s && (0, l.jsx)("div", {
                            className: "bg-[#FF4085] flex w-1.5 h-1.5 flex-col ml-6 mt-1 rounded-[35px] max-md:ml-2.5 absolute"
                        })]
                    })
                },
                x = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        s = e[1],
                        i = (0, r.useState)(!1),
                        x = i[0],
                        d = i[1];
                    return (0, l.jsxs)("header", {
                        className: "hidden lg:flex self-center flex w-full items-start justify-between gap-5 mt-12 relative",
                        children: [t && (0, l.jsx)(c.Z, {}), (0, l.jsx)("nav", {
                            className: "",
                            children: (0, l.jsx)(a(), {
                                href: "/",
                                children: (0, l.jsx)("img", {
                                    loading: "lazy",
                                    srcSet: "/logo.svg",
                                    className: "",
                                    alt: "Logo"
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "self-stretch flex items-start justify-between max-md:max-w-full max-md:flex-wrap max-md:justify-center",
                            children: [(0, l.jsx)("div", {
                                className: "self-center flex flex-col my-auto mr-[12px]",
                                children: (0, l.jsxs)("div", {
                                    className: "items-start flex max-w-full justify-between gap-8 max-md:justify-center mr-[21px]",
                                    children: [(0, l.jsx)(o, {
                                        active: !0,
                                        children: "Stake"
                                    }), (0, l.jsx)("a", {
                                        target: "_blank",
                                        className: "hover:opacity-80 cursor-pointer text-[rgba(0,0,0,0.60)] text-[20px] font-light leading-7 self-stretch",
                                        href: "https://medium.com/@cresowallet",
                                        children: "Blog"
                                    }), (0, l.jsx)("a", {
                                        target: "_blank",
                                        className: "hover:opacity-80 cursor-pointer text-[rgba(0,0,0,0.60)] text-[20px] font-light leading-7 self-stretch",
                                        href: "https://creso-wallet.gitbook.io/whitepaper/",
                                        children: "Whitepaper"
                                    }), (0, l.jsx)(o, {
                                        onClick: function() {
                                            return s(!t)
                                        },
                                        children: "Socials"
                                    })]
                                })
                            }), x && (0, l.jsx)(n, {
                                setShowConnectWalletModal: d
                            })]
                        })]
                    })
                },
                d = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        s = e[1];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [t && (0, l.jsx)("div", {
                            className: "block lg:hidden",
                            children: (0, l.jsx)(c.Z, {
                                setShowPopup: s
                            })
                        }), (0, l.jsxs)("header", {
                            className: "w-full flex lg:hidden self-center flex w-[297px] max-w-full items-start justify-between gap-5 mt-12 px-5",
                            children: [(0, l.jsxs)("div", {
                                className: "self-center flex items-start gap-1.5 my-auto scale-this-left",
                                children: [(0, l.jsx)("img", {
                                    loading: "lazy",
                                    srcSet: "/icons/menu.svg",
                                    className: "aspect-square object-cover object-center w-6 overflow-hidden self-center shrink-0 my-auto w-[23px]",
                                    onClick: function() {
                                        return s(!t)
                                    },
                                    alt: "Logo"
                                }), (0, l.jsx)("div", {
                                    className: "items-start self-stretch flex justify-between gap-1.5",
                                    children: (0, l.jsx)(a(), {
                                        href: "/",
                                        children: (0, l.jsx)("img", {
                                            loading: "lazy",
                                            srcSet: "/logo.svg",
                                            className: "h-[29px]",
                                            alt: "Icon 2"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "self-stretch flex items-start justify-between gap-1 scale-this-right",
                                children: [(0, l.jsx)("div", {
                                    onClick: function() {
                                        return window.location.href = "https://www.dextools.io/app/en/ether/pair-explorer/0x7262a43c94258e6071d3bac00ebec6d7c9b4ef30"
                                    },
                                    className: "justify-center items-center self-stretch flex w-[76px] max-w-full flex-col px-[1px] py-[1px] lg:px-5 lg:py-3 rounded-3xl border-[0.597px] border-solid border-black h-[36px]",
                                    children: (0, l.jsx)("div", {
                                        className: "text-black text-justify text-xs md:text-[0.6rem] lg:text-lg font-light leading-4 self-center -mb-px",
                                        children: "Chart"
                                    })
                                }), (0, l.jsx)("div", {
                                    onClick: function() {
                                        return window.location.href = "https://app.uniswap.org/swap?outputCurrency=0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
                                    },
                                    className: "justify-center items-center self-stretch flex w-[36px] bg-black rounded-full max-w-full flex-col p-1.5 md:p-1 lg:p-2.5 rounded-3xl border-[0.597px] border-solid border-black h-[36px]",
                                    children: (0, l.jsx)("img", {
                                        loading: "lazy",
                                        srcSet: "/icons/cart.svg",
                                        className: "",
                                        alt: "Image"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                h = function() {
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(x, {}), (0, l.jsx)(d, {})]
                    })
                }
        },
        6342: function(e, t, s) {
            var l = s(5893),
                r = function(e) {
                    var t = e.setShowPopup;
                    return (0, l.jsx)("div", {
                        className: "bg-white block lg:hidden",
                        children: (0, l.jsx)("div", {
                            className: "fixed top-28 left-1/2 transform -translate-x-1/2  popup",
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col pt-3",
                                children: [(0, l.jsx)("div", {
                                    className: "p-2 absolute top-1.5 right-1.5 opacity-30",
                                    onClick: function() {
                                        return t(!1)
                                    },
                                    children: (0, l.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-7 h-7",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "1.5",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        children: [(0, l.jsx)("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }), (0, l.jsx)("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        })]
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col border-b mb-6 pb-4",
                                    children: [(0, l.jsx)("a", {
                                        href: "/",
                                        children: (0, l.jsx)("div", {
                                            className: "popup-item flex items-center",
                                            children: "Home"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "/stake",
                                        children: (0, l.jsx)("div", {
                                            className: "popup-item flex items-center",
                                            children: "Stake"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://medium.com/@cresowallet",
                                        target: "_blank",
                                        children: (0, l.jsx)("div", {
                                            className: "popup-item flex items-center",
                                            children: "Blog"
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex justify-around",
                                    children: [(0, l.jsx)("a", {
                                        href: "https://twitter.com/cresowallet",
                                        target: "_blank",
                                        children: (0, l.jsx)("img", {
                                            style: {
                                                height: 50
                                            },
                                            src: "/images/twitter-logo.png"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://t.me/cresowallet",
                                        target: "_blank",
                                        children: (0, l.jsx)("img", {
                                            style: {
                                                height: 50
                                            },
                                            src: "/images/telegram-logo.png"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://etherscan.io/token/0x41ea5d41eeacc2d5c4072260945118a13bb7ebce",
                                        target: "_blank",
                                        children: (0, l.jsx)("img", {
                                            style: {
                                                height: 50
                                            },
                                            src: "/images/ether.png"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://discord.gg/creso",
                                        target: "_blank",
                                        children: (0, l.jsx)("img", {
                                            style: {
                                                height: 50
                                            },
                                            src: "/images/di.png"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://github.com/CresoWallet",
                                        target: "_blank",
                                        children: (0, l.jsx)("img", {
                                            style: {
                                                height: 50
                                            },
                                            src: "/images/git.png"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                };
            t.Z = function(e) {
                var t = e.className,
                    s = void 0 === t ? "top-12 right-44" : t,
                    i = e.setShowPopup,
                    a = void 0 === i ? function() {} : i;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r, {
                        setShowPopup: a
                    }), (0, l.jsxs)("div", {
                        className: " ".concat(s, " absolute  popup hidden lg:block"),
                        children: [(0, l.jsx)("a", {
                            target: "_blank",
                            href: "https://twitter.com/cresowallet",
                            children: (0, l.jsxs)("div", {
                                className: "popup-item flex items-center",
                                children: [(0, l.jsx)("img", {
                                    style: {
                                        height: 50
                                    },
                                    src: "/images/twitter-logo.png"
                                }), "Twitter (X)"]
                            })
                        }), (0, l.jsx)("a", {
                            target: "_blank",
                            href: "https://t.me/cresowallet",
                            children: (0, l.jsxs)("div", {
                                className: "popup-item flex items-center",
                                children: [(0, l.jsx)("img", {
                                    style: {
                                        height: 50
                                    },
                                    src: "/images/telegram-logo.png"
                                }), "Telegram"]
                            })
                        }), (0, l.jsx)("a", {
                            target: "_blank",
                            href: "https://etherscan.io/token/0x41ea5d41eeacc2d5c4072260945118a13bb7ebce",
                            children: (0, l.jsxs)("div", {
                                className: "popup-item flex items-center",
                                children: [(0, l.jsx)("img", {
                                    style: {
                                        height: 50
                                    },
                                    src: "/images/ether.png"
                                }), "Etherscan"]
                            })
                        }), (0, l.jsx)("a", {
                            target: "_blank",
                            href: "https://discord.gg/creso",
                            children: (0, l.jsxs)("div", {
                                className: "popup-item flex items-center",
                                children: [(0, l.jsx)("img", {
                                    style: {
                                        height: 50
                                    },
                                    src: "/images/di.png"
                                }), "Discord"]
                            })
                        }), (0, l.jsx)("a", {
                            target: "_blank",
                            href: "https://github.com/CresoWallet",
                            children: (0, l.jsxs)("div", {
                                className: "popup-item flex items-center",
                                children: [(0, l.jsx)("img", {
                                    style: {
                                        height: 50
                                    },
                                    src: "/images/git.png"
                                }), "Github"]
                            })
                        })]
                    })]
                })
            }
        }
    }
]);