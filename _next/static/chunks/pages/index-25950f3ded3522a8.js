(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(3678)
            }])
        },
        3678: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return h
                }
            });
            var t = a(7568),
                l = a(92),
                i = a(5893),
                r = a(7294),
                c = a(4226),
                n = a(851),
                o = a(6342),
                x = a(5121),
                m = a(2920),
                d = a(8045);
            a(7986);

            function h() {
                var e = (0, r.useState)(!1),
                    s = e[0],
                    a = e[1],
                    h = (0, r.useState)(!1),
                    g = h[0],
                    p = h[1],
                    f = (0, r.useState)(!1),
                    j = (f[0], f[1], (0, r.useState)("")),
                    u = j[0],
                    b = j[1],
                    N = function() {
                        var e = (0, t.Z)((function() {
                            var e, s;
                            return (0, l.__generator)(this, (function(a) {
                                return p(!0), /\S+@\S+\.\S+/.test(u) ? (e = JSON.stringify({
                                    email: u
                                }), s = {
                                    method: "post",
                                    maxBodyLength: 1 / 0,
                                    url: "https://cresoservices.com/reserve.php",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    data: e
                                }, x.Z.request(s).then((function(e) {
                                    return JSON.parse(JSON.stringify(e.data))
                                })).then((function(e) {
                                    200 == e.status ? ((0, m.Am)("Spot Already Reserved!", {
                                        position: "top-right",
                                        autoClose: 5e3,
                                        hideProgressBar: !1,
                                        closeOnClick: !0,
                                        pauseOnHover: !0,
                                        draggable: !0,
                                        progress: void 0,
                                        theme: "colored"
                                    }), p(!1)) : 201 == e.status ? ((0, d._1)({
                                        title: "CRESO",
                                        message: "Spot reserved. Thanks for signing up!",
                                        buttons: [{
                                            label: "OK"
                                        }]
                                    }), b(""), p(!1)) : (m.Am.error("Please try again. Can't connect to server", {
                                        position: "top-right",
                                        autoClose: 5e3,
                                        hideProgressBar: !1,
                                        closeOnClick: !0,
                                        pauseOnHover: !0,
                                        draggable: !0,
                                        progress: void 0,
                                        theme: "colored"
                                    }), p(!1))
                                })).catch((function(e) {
                                    console.log(e)
                                }))) : (m.Am.error("Please enter valid email address", {
                                    position: "top-right",
                                    autoClose: 5e3,
                                    hideProgressBar: !1,
                                    closeOnClick: !0,
                                    pauseOnHover: !0,
                                    draggable: !0,
                                    progress: void 0,
                                    theme: "colored"
                                }), p(!1)), [2]
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: "lg:flex hidden flex-col relative home",
                        children: [(0, i.jsxs)("div", {
                            className: "header flex justify-between items-center",
                            children: [(0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0, i.jsx)("img", {
                                    src: "/icons/nav.svg",
                                    className: "block lg:hidden"
                                }), (0, i.jsx)("img", {
                                    src: "/logo.svg",
                                    alt: "Creso"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0, i.jsxs)("div", {
                                    className: "items-center hidden lg:flex header-links relative",
                                    children: [(0, i.jsx)("a", {
                                        href: "/stake",
                                        children: "Stake"
                                    }), (0, i.jsx)("a", {
                                        href: "https://medium.com/@cresowallet",
                                        children: "Blog"
                                    }), (0, i.jsx)("a", {
                                        target: "_blank",
                                        href: "https://creso-wallet.gitbook.io/whitepaper/",
                                        children: "Whitepaper"
                                    }), (0, i.jsx)("a", {
                                        href: "#",
                                        onClick: function() {
                                            return a(!s)
                                        },
                                        children: "Socials"
                                    }), s && (0, i.jsx)(o.Z, {
                                        className: "right-0 top-12"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex space-x-3",
                                    children: [(0, i.jsx)("button", {
                                        onClick: function() {
                                            return window.location.href = "https://www.dextools.io/app/en/ether/pair-explorer/0x7262a43c94258e6071d3bac00ebec6d7c9b4ef30"
                                        },
                                        className: "secondary",
                                        children: "Chart"
                                    }), (0, i.jsxs)("button", {
                                        onClick: function() {
                                            return window.location.href = "https://app.uniswap.org/swap?outputCurrency=0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
                                        },
                                        target: "_blank",
                                        className: "primary min-w-max",
                                        children: [(0, i.jsx)("img", {
                                            src: "/icons/cart.svg"
                                        }), "Buy Creso"]
                                    })]
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-col relative block12",
                            children: [(0, i.jsxs)("div", {
                                className: "block1",
                                children: [(0, i.jsx)("span", {
                                    className: "web3-made-easy",
                                    children: "Web3 Made Easy"
                                }), (0, i.jsxs)("h1", {
                                    className: "text-black text-8xl font-extrabold leading-[107.5%] tracking-tighter uppercase max-lg:text-4xl relative",
                                    children: [(0, i.jsx)("span", {
                                        className: "font-light",
                                        children: "Your"
                                    }), (0, i.jsxs)("span", {
                                        className: "font-extrabold",
                                        children: [" ", "Next-Gen ", (0, i.jsx)("br", {}), " ", (0, i.jsx)("span", {
                                            className: "smart",
                                            children: "Smart"
                                        }), " "]
                                    }), (0, i.jsx)("span", {
                                        className: "font-light",
                                        children: "Wallet"
                                    }), (0, i.jsx)("img", {
                                        src: "/images/taxi1.png",
                                        className: "taxi1"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "text-[rgba(0,0,0,0.65)] text-justify text-xl font-semibold leading-[152.5%] w-[499px] max-w-full",
                                    children: [(0, i.jsxs)("span", {
                                        className: "font-light",
                                        children: ["Seedless, Gasless, Fearless. Creso makes your", " "]
                                    }), (0, i.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Web3"
                                    }), (0, i.jsxs)("span", {
                                        className: "font-light",
                                        children: [" ", "journey easy and safe, powered by", " "]
                                    }), (0, i.jsx)("span", {
                                        className: "font-semibold",
                                        children: "ERC-4337"
                                    }), (0, i.jsx)("span", {
                                        className: "font-light",
                                        children: ". It's not just a wallet\u2014it's your simple key to the decentralized world."
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "block2 flex justify-between",
                                children: [(0, i.jsx)("div", {
                                    className: "w-1/2"
                                }), (0, i.jsx)("div", {
                                    className: "w-1/2",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex grow flex-col content",
                                        children: [(0, i.jsxs)("h1", {
                                            className: "text-white text-opacity-50 text-8xl font-medium leading-[93.5%] tracking-tighter uppercase self-stretch w-full max-lg:text-4xl relative",
                                            children: [(0, i.jsx)("span", {
                                                className: "font-extrabold text-white",
                                                children: "Seedless "
                                            }), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                                className: "font-medium text-white text-opacity-50",
                                                children: "Login"
                                            }), (0, i.jsx)("img", {
                                                src: "/images/taxi2.png",
                                                className: "taxi2"
                                            })]
                                        }), (0, i.jsxs)("h2", {
                                            className: "",
                                            children: ["Create and login to your wallet seamlessly", (0, i.jsx)("br", {}), "with your Google, Twitter, or Apple", (0, i.jsx)("br", {}), "account\u2014no mnemonic fuss, just simple,", (0, i.jsx)("br", {}), "swift access!"]
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_1.png",
                                className: "img1"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_2.png",
                                className: "hidden lg:block stripe stripe2"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_2_left.png",
                                className: "hidden lg:block stripe stripe2_left"
                            })]
                        }), (0, i.jsx)("img", {
                            src: "/images/stripes/home_1.png",
                            className: "hidden lg:block stripe stripe1"
                        }), (0, i.jsxs)("div", {
                            className: "block3 relative",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-col items-start max-lg:max-w-full content",
                                children: [(0, i.jsx)("img", {
                                    loading: "lazy",
                                    srcSet: "/images/taxi3.png",
                                    className: "aspect-square object-cover object-center w-[66px] shrink-0 mt-7 rounded-none",
                                    alt: "Wallet Image"
                                }), (0, i.jsxs)("div", {
                                    className: "text-[rgba(0,0,0,0.30)] text-7xl leading-[132%] tracking-tighter uppercase max-w-[496px] mt-3.5 max-lg:max-w-full max-lg:text-4xl",
                                    children: [(0, i.jsxs)("span", {
                                        className: "font-extrabold text-black",
                                        children: ["Gasless ", (0, i.jsx)("br", {})]
                                    }), (0, i.jsx)("span", {
                                        className: " text-[rgba(0,0,0,0.30000001192092896)]",
                                        children: "Transactions"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "text-[rgba(0,0,0,0.65)] text-justify text-2xl font-light leading-9 max-w-[528px] mt-11 max-lg:max-w-full",
                                    children: "Use any token to manage gas fees. Relish the ease as an App or a friend takes care of the gas, turning every transaction into a smooth sail."
                                })]
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_2.png",
                                className: "img2"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_3.png",
                                className: "hidden lg:block stripe stripe3"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "block4 relative flex",
                            children: [(0, i.jsx)("div", {
                                className: "w-1/2"
                            }), (0, i.jsx)("div", {
                                className: "w-1/2 content",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col max-lg:max-w-full",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex-col relative flex w-full max-lg:max-w-full",
                                        children: (0, i.jsx)("div", {
                                            className: "relative w-[518px] max-w-full",
                                            children: (0, i.jsxs)("div", {
                                                className: "gap-5 flex max-lg:flex-col max-lg:items-stretch max-lg:gap-0",
                                                children: [(0, i.jsx)("div", {
                                                    className: "flex flex-col items-stretch w-[86%] max-lg:w-full",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "text-[rgba(0,0,0,0.30)] text-7xl leading-[132%] tracking-tighter uppercase max-w-[433px] relative max-lg:text-4xl",
                                                        children: [(0, i.jsx)("img", {
                                                            loading: "lazy",
                                                            className: "taxi4",
                                                            srcSet: "/images/taxi4.png"
                                                        }), (0, i.jsx)("span", {
                                                            className: "font-extrabold text-black text-[112px]",
                                                            children: "Social"
                                                        }), (0, i.jsxs)("span", {
                                                            className: "font-extrabold text-black",
                                                            children: [" ", (0, i.jsx)("br", {})]
                                                        }), (0, i.jsx)("span", {
                                                            className: " text-[80px] text-[rgba(0,0,0,0.30000001192092896)]",
                                                            children: "Recovery"
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "flex flex-col items-stretch w-[14%] max-lg:w-full"
                                                })]
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[rgba(0,0,0,0.65)] text-justify text-2xl font-light leading-9 z-[1] w-[518px] max-w-full",
                                        children: "Total control, endless recovery possibilities! With familiar logins like email, Google, and Apple, secure your wallet the smart way. Add more guardians, amplify security, and recover with social backup whenever your account gets lost."
                                    })]
                                })
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_3.png",
                                className: "img3"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_4.png",
                                className: "hidden lg:block stripe stripe4"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "block5 flex flex-col items-center relative flex w-full min-w-screen",
                            children: [(0, i.jsxs)("h1", {
                                className: "text-black text-9xl font-light leading-[98%] tracking-tighter uppercase relative",
                                children: [(0, i.jsx)("img", {
                                    loading: "lazy",
                                    className: "taxi5",
                                    srcSet: "/images/taxi5.png"
                                }), (0, i.jsx)("span", {
                                    className: " text-[rgba(0,0,0,0.30000001192092896)]",
                                    children: "Boost"
                                }), (0, i.jsxs)("span", {
                                    className: "font-extrabold text-black",
                                    children: [" ", (0, i.jsx)("br", {}), "Security", " "]
                                }), (0, i.jsx)("span", {
                                    className: "font-light text-black boost-with",
                                    children: "with "
                                }), (0, i.jsx)("span", {
                                    className: "font-extrabold text-black",
                                    children: "2FA"
                                }), (0, i.jsx)("img", {
                                    src: "/images/HOME_IMAGE_4.png",
                                    className: "img4"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "text-[rgba(0,0,0,0.65)] text-center text-2xl font-light leading-9 self-center mt-40",
                                children: ["Enable two-factor authentication and add an extra security layer to your Zonan", (0, i.jsx)("br", {}), "Wallet, ensuring no assets are withdrawn without verification from another device"]
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_5.png",
                                className: "hidden lg:block stripe stripe5"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "block6 relative flex flex-col items-center",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-col items-center block6_content",
                                children: [(0, i.jsx)("div", {
                                    className: "flex flex-col items-stretch w-[48%] max-lg:w-full",
                                    children: (0, i.jsxs)("h1", {
                                        className: "text-white text-opacity-50 text-6xl font-medium leading-[108%] tracking-tighter uppercase z-[1] mr-0 w-[793px] max-w-full",
                                        children: [(0, i.jsx)("img", {
                                            src: "/images/taxi6.png",
                                            className: "taxi6"
                                        }), (0, i.jsxs)("span", {
                                            className: "font-light text-white",
                                            children: ["Join the ", (0, i.jsx)("br", {})]
                                        }), (0, i.jsxs)("span", {
                                            className: "font-extrabold text-white",
                                            children: ["Advance Queue ", (0, i.jsx)("br", {})]
                                        }), (0, i.jsx)("span", {
                                            className: "font-medium text-white text-opacity-50",
                                            children: "for Creso Wallet"
                                        })]
                                    })
                                }), (0, i.jsx)("h2", {
                                    className: "text-white text-opacity-70 text-2xl font-light leading-9 w-[909px] max-w-full",
                                    children: "Reserve your spot and be among the first to experience secure, effortless trading with Creso Wallet. Sign up now, your advanced trading journey awaits!"
                                }), (0, i.jsx)("div", {
                                    className: "border bg-white flex w-[680px] max-w-full flex-col mt-24 pl-5 pr-4 py-4 rounded-[85px] border-solid border-white",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex w-[621px] max-w-full items-start justify-between gap-5 -mt-px max-lg:flex-wrap",
                                        children: [(0, i.jsx)("input", {
                                            value: u,
                                            onChange: function(e) {
                                                return b(e.target.value)
                                            },
                                            className: "text-[rgba(0,0,0,0.65)] text-2xl font-light leading-9 self-center w-[194px] home-input",
                                            placeholder: "Enter Your Email"
                                        }), (0, i.jsx)("button", {
                                            disabled: g,
                                            style: {
                                                opacity: g ? "0.1" : 1
                                            },
                                            onClick: function() {
                                                return N()
                                            },
                                            className: "justify-center items-center bg-black self-stretch flex w-[207px] max-w-full flex-col px-5 py-6 rounded-[44.279px] hover:opacity-80",
                                            children: (0, i.jsx)("div", {
                                                className: "text-white text-justify text-xl font-bold leading-8 self-center -mb-px",
                                                children: "Sign Up"
                                            })
                                        })]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "gap-5 flex justify-between items-center form-links absolute bottom-0",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex flex-col items-stretch",
                                        children: (0, i.jsxs)("div", {
                                            className: "items-start flex w-[231px] max-w-full justify-between gap-5 mt-5 max-lg:mt-12 footer-links relative footer-home-links",
                                            children: [(0, i.jsx)("a", {
                                                href: "/stake",
                                                className: "text-white text-2xl font-light leading-8 self-stretch",
                                                children: "Stake"
                                            }), (0, i.jsx)("a", {
                                                target: "_blank",
                                                href: "https://medium.com/@cresowallet",
                                                className: "text-white text-2xl font-light leading-8 self-stretch",
                                                children: "Blog"
                                            }), (0, i.jsx)("a", {
                                                className: "text-white text-2xl font-light leading-8 self-stretch relative",
                                                onClick: function() {
                                                    return a(!s)
                                                },
                                                children: "Socials"
                                            }), s && (0, i.jsx)(o.Z, {
                                                className: "bottom-12 left-40"
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex flex-col items-stretch",
                                        children: (0, i.jsxs)("div", {
                                            className: "items-start flex gap-3 max-lg:mt-12",
                                            children: [(0, i.jsx)("button", {
                                                onClick: function() {
                                                    return window.location.href = "https://www.dextools.io/app/en/ether/pair-explorer/0x7262a43c94258e6071d3bac00ebec6d7c9b4ef30"
                                                },
                                                className: "justify-center items-center self-stretch flex w-36 max-w-full flex-col px-5 py-6 rounded-[44.279px] border-[1.197px] border-solid border-white hover:opacity-70",
                                                children: (0, i.jsx)("div", {
                                                    className: "text-white text-justify text-xl font-light leading-8 self-center -mb-px",
                                                    children: "Chart"
                                                })
                                            }), (0, i.jsx)("button", {
                                                onClick: function() {
                                                    return window.location.href = "https://app.uniswap.org/swap?outputCurrency=0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
                                                },
                                                className: "justify-center items-center bg-pink-500 self-stretch flex w-[207px] max-w-full flex-col px-5 py-6 rounded-[44.279px] hover:opacity-90",
                                                children: (0, i.jsxs)("div", {
                                                    className: "self-center flex max-w-full items-start gap-3 -mb-px",
                                                    children: [(0, i.jsx)("img", {
                                                        loading: "lazy",
                                                        srcSet: "/icons/cart.svg",
                                                        className: "aspect-square object-cover object-center w-7 shrink-0 mt-px",
                                                        alt: "Wallet Image"
                                                    }), (0, i.jsx)("div", {
                                                        className: "text-white text-justify text-xl font-medium leading-8 self-stretch",
                                                        children: "Buy Creso"
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_5.png",
                                className: "img5"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_6_left.png",
                                className: "hidden lg:block stripe stripe6_left"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_6_right.png",
                                className: "hidden lg:block stripe stripe6_right"
                            })]
                        }), (0, i.jsx)("footer", {
                            className: "flex flex-col items-center",
                            children: (0, i.jsx)("img", {
                                loading: "lazy",
                                srcSet: "/logo-on-black.svg",
                                className: "mb-10 -mt-10",
                                alt: "Wallet Image"
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "flex lg:hidden flex-col relative",
                        children: [(0, i.jsx)("img", {
                            src: "/images/stripes/home_mobile_1.png",
                            className: "block lg:hidden stripe mobile_stripe1"
                        }), (0, i.jsx)(c.Z, {}), (0, i.jsxs)("div", {
                            className: "mobile_block1 relative flex flex-col",
                            children: [(0, i.jsx)("span", {
                                className: "mobile_web3-made-easy",
                                children: "Web3 Made Easy"
                            }), (0, i.jsxs)("h1", {
                                className: "relative",
                                children: [(0, i.jsx)("span", {
                                    className: "font-light",
                                    children: "Your"
                                }), (0, i.jsxs)("span", {
                                    className: "font-extrabold",
                                    children: [" ", "Next-Gen ", (0, i.jsx)("br", {}), " ", (0, i.jsx)("span", {
                                        className: "ml-[32px]",
                                        children: "Smart"
                                    }), " "]
                                }), (0, i.jsx)("span", {
                                    className: "font-light",
                                    children: "Wallet"
                                }), (0, i.jsx)("img", {
                                    src: "/images/taxi1.png",
                                    className: "mobile_taxi1"
                                })]
                            }), (0, i.jsxs)("h2", {
                                className: "",
                                children: [(0, i.jsxs)("span", {
                                    className: "font-light",
                                    children: ["Seedless, Gasless, Fearless. Creso makes your", " "]
                                }), (0, i.jsx)("span", {
                                    className: "font-semibold",
                                    children: "Web3"
                                }), (0, i.jsxs)("span", {
                                    className: "font-light",
                                    children: [" ", "journey easy and safe, powered by", " "]
                                }), (0, i.jsx)("span", {
                                    className: "font-semibold",
                                    children: "ERC-4337"
                                }), (0, i.jsx)("span", {
                                    className: "font-light",
                                    children: ". It's not just a wallet\u2014it's your simple key to the decentralized world."
                                })]
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_1_MOBILE.png",
                                className: "mobile_img1"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile_block12 relative",
                            children: [(0, i.jsxs)("h1", {
                                className: "relative",
                                children: [(0, i.jsx)("span", {
                                    className: "font-extrabold text-white",
                                    children: "Seedless "
                                }), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                    className: "font-medium text-white text-opacity-50",
                                    children: "Login"
                                }), (0, i.jsx)("img", {
                                    src: "/images/taxi2.png",
                                    className: "mobile_taxi2"
                                })]
                            }), (0, i.jsxs)("h2", {
                                className: "",
                                children: ["Create and login to your wallet seamlessly", (0, i.jsx)("br", {}), "with your Google, Twitter, or Apple", (0, i.jsx)("br", {}), "account\u2014no mnemonic fuss, just simple,", (0, i.jsx)("br", {}), "swift access!"]
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_mobile_2.png",
                                className: "block lg:hidden stripe mobile_stripe2"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_mobile_3.png",
                                className: "block lg:hidden stripe mobile_stripe3"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile_block2 relative flex flex-col items-center",
                            children: [(0, i.jsxs)("h1", {
                                className: "relative",
                                children: [(0, i.jsx)("img", {
                                    loading: "lazy",
                                    className: "mobile_taxi3",
                                    srcSet: "/images/taxi3.png"
                                }), (0, i.jsxs)("span", {
                                    className: "font-extrabold text-black",
                                    children: ["Gasless ", (0, i.jsx)("br", {})]
                                }), (0, i.jsx)("span", {
                                    className: " text-[rgba(0,0,0,0.30000001192092896)]",
                                    children: "Transactions"
                                })]
                            }), (0, i.jsx)("h2", {
                                className: "",
                                children: "Use any token to manage gas fees. Relish the ease as an App or a friend takes care of the gas, turning every transaction into a smooth sail."
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_2_MOBILE.png",
                                className: "mobile_img2"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_mobile_4.png",
                                className: "block lg:hidden stripe mobile_stripe4"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile_block3 relative flex flex-col items-center",
                            children: [(0, i.jsxs)("h1", {
                                className: "relative",
                                children: [(0, i.jsx)("img", {
                                    loading: "lazy",
                                    className: "mobile_taxi4",
                                    srcSet: "/images/taxi4.png"
                                }), (0, i.jsx)("span", {
                                    className: "font-extrabold text-black",
                                    children: "Social"
                                }), (0, i.jsxs)("span", {
                                    className: "font-extrabold text-black",
                                    children: [" ", (0, i.jsx)("br", {})]
                                }), (0, i.jsx)("span", {
                                    className: " text-[rgba(0,0,0,0.30000001192092896)]",
                                    children: "Recovery"
                                })]
                            }), (0, i.jsx)("h2", {
                                className: "",
                                children: "Total control, endless recovery possibilities! With familiar logins like email, Google, and Apple, secure your wallet the smart way. Add more guardians, amplify security, and recover with social backup whenever your account gets lost."
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_3_MOBILE.png",
                                className: "mobile_img3"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile_block4 relative flex flex-col items-center",
                            children: [(0, i.jsxs)("h1", {
                                className: "relative",
                                children: [(0, i.jsx)("img", {
                                    loading: "lazy",
                                    className: "mobile_taxi5",
                                    srcSet: "/images/taxi5.png"
                                }), (0, i.jsx)("span", {
                                    className: "-mr-[10px] text-[rgba(0,0,0,0.30000001192092896)]",
                                    children: "Boost"
                                }), (0, i.jsxs)("span", {
                                    className: "font-extrabold text-black",
                                    children: [" ", (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                        className: "-ml-[48px]",
                                        children: "Security"
                                    })]
                                }), (0, i.jsx)("br", {}), (0, i.jsxs)("span", {
                                    className: "flex -mr-[30px]",
                                    children: [(0, i.jsxs)("span", {
                                        className: "mr-[6px] font-light text-black mobile_boost-with",
                                        children: ["with", " "]
                                    }), (0, i.jsx)("span", {
                                        className: "font-extrabold text-black",
                                        children: "2FA"
                                    })]
                                })]
                            }), (0, i.jsxs)("h2", {
                                children: ["Enable two-factor authentication and add", (0, i.jsx)("br", {}), "an extra security layer to your Creso Wallet,", (0, i.jsx)("br", {}), "ensuring no assets are withdrawn without", (0, i.jsx)("br", {}), "verification from another device"]
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_4_MOBILE.png",
                                className: "mobile_img4"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile_block5 relative flex flex-col items-center",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-col mt-[26px] items-stretch w-[48%] max-lg:w-full",
                                children: (0, i.jsxs)("h1", {
                                    className: "relative ml-[26px]",
                                    children: [(0, i.jsx)("img", {
                                        src: "/images/taxi6.png",
                                        className: "mobile_taxi6"
                                    }), (0, i.jsxs)("span", {
                                        className: "font-light text-white",
                                        children: ["Join the ", (0, i.jsx)("br", {})]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-extrabold text-white",
                                        children: ["Advance", (0, i.jsx)("br", {}), "Queue ", (0, i.jsx)("br", {})]
                                    }), (0, i.jsxs)("span", {
                                        className: "font-medium text-white text-opacity-50",
                                        children: ["for Creso", (0, i.jsx)("br", {}), "Wallet"]
                                    })]
                                })
                            }), (0, i.jsx)("h2", {
                                className: "mt-[28px] ml-[26px]",
                                children: "Reserve your spot and be among the first to experience secure, effortless trading with Creso Wallet. Sign up now, your advanced trading journey awaits!"
                            }), (0, i.jsx)("input", {
                                placeholder: "Enter your email",
                                className: "flex items-center justify-center w-full mt-[52px]",
                                value: u,
                                onChange: function(e) {
                                    return b(e.target.value)
                                }
                            }), (0, i.jsx)("button", {
                                className: "flex items-center justify-center w-full mt-[10px]",
                                onClick: function() {
                                    return N()
                                },
                                children: "Sign Up"
                            }), (0, i.jsx)("img", {
                                src: "/images/HOME_IMAGE_5_MOBILE.png",
                                className: "mobile_img5"
                            }), (0, i.jsx)("img", {
                                src: "/images/stripes/home_mobile_5.png",
                                className: "block lg:hidden stripe mobile_stripe5"
                            })]
                        }), (0, i.jsx)(n.Z, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [664, 41, 256, 774, 888, 179], (function() {
            return s = 5557, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);