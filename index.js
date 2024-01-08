var wn = Object.defineProperty
  , bn = Object.defineProperties;
var xn = Object.getOwnPropertyDescriptors;
var ct = Object.getOwnPropertySymbols;
var ca = Object.prototype.hasOwnProperty
  , ia = Object.prototype.propertyIsEnumerable;
var kt = (e,r,a)=>r in e ? wn(e, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[r] = a
  , U = (e,r)=>{
    for (var a in r || (r = {}))
        ca.call(r, a) && kt(e, a, r[a]);
    if (ct)
        for (var a of ct(r))
            ia.call(r, a) && kt(e, a, r[a]);
    return e
}
  , Y = (e,r)=>bn(e, xn(r));
var Je = (e,r)=>{
    var a = {};
    for (var l in e)
        ca.call(e, l) && r.indexOf(l) < 0 && (a[l] = e[l]);
    if (e != null && ct)
        for (var l of ct(e))
            r.indexOf(l) < 0 && ia.call(e, l) && (a[l] = e[l]);
    return a
}
;
var le = (e,r,a)=>(kt(e, typeof r != "symbol" ? r + "" : r, a),
a);
import {b as Nn, R as t, P as it, B as J, G as n, T as m, a as ma, m as Tn, c as R, L as ye, r as w, S as fe, d as ua, F as I, u as An, h as re, e as Sn, i as vn, f as Xe, g as Qe, U as mt, l as W, j as Cn, k as Pn, A as da, n as pa, o as ha, p as On, q as fa, s as ya, D as kn, C as Rn, t as pe, v as ut, w as Ie, x as Ea, y as _e, M as G, z as ga, E as Rt, H as dt, I as Ft, J as Ut, K as ze, N as Ee, O as Mt, Q as Se, V as _a, W as wa, X as ba, Y as Fn, Z as xa, _ as Un, $ as Mn, a0 as Bn, a1 as zn, a2 as Wn, a3 as Bt, a4 as zt, a5 as We, a6 as Ke, a7 as De, a8 as Na, a9 as Ta, aa as we, ab as Vn, ac as Le, ad as et, ae as Aa, af as Wt, ag as Sa, ah as va, ai as qn, aj as jn, ak as Gn, al as $n, am as Yn, an as Hn, ao as Ve, ap as qe, aq as je, ar as Zn, as as Jn, at as pt, au as ht, av as ke, aw as Xn, ax as Qn, ay as Vt, az as tt, aA as Ca, aB as qt, aC as ft, aD as In, aE as Pa, aF as Oa, aG as Kn, aH as Dn, aI as Ln, aJ as el, aK as tl, aL as be, aM as al, aN as rl, aO as nl, aP as ll, aQ as ol, aR as sl, aS as cl} from "./vendor.09831822.js";
const il = function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        l(o);
    new MutationObserver(o=>{
        for (const c of o)
            if (c.type === "childList")
                for (const s of c.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && l(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(o) {
        const c = {};
        return o.integrity && (c.integrity = o.integrity),
        o.referrerpolicy && (c.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? c.credentials = "include" : o.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function l(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const c = a(o);
        fetch(o.href, c)
    }
};
il();
window.global = window;
window.Buffer = Nn.Buffer;
class Ge extends t.Component {
    constructor(r) {
        super(r);
        le(this, "next", r=>this.setState(a=>({
            page: Math.min(a.page + 1, this.props.children.length - 1),
            values: r
        })));
        le(this, "previous", ()=>this.setState(r=>({
            page: Math.max(r.page - 1, 0)
        })));
        le(this, "validate", r=>{
            const a = t.Children.toArray(this.props.children)[this.state.page]
              , l = document.querySelector("#backButton");
            return l && typeof a == "undefined" || this.props.initialValues.launchType != this.state.values.launchType ? (l && l.click(),
            {}) : a.props.validate ? a.props.validate(r) : {}
        }
        );
        le(this, "titles", ()=>t.Children.toArray(this.props.children).map(({props: a})=>a == null ? void 0 : a.title));
        le(this, "handleSubmit", r=>{
            const {children: a, onSubmit: l} = this.props
              , {page: o} = this.state;
            if (o === t.Children.count(a) - 1 || r.launchType == "2" && o == 1)
                return l(r);
            this.next(r),
            document.documentElement.style.setProperty("--scroll-y", "0px"),
            document.body.removeAttribute("style"),
            window.scrollTo(0, 0)
        }
        );
        le(this, "onSaveAndExit", r=>{
            const {onSaveAndExit: a} = this.props;
            a(r)
        }
        );
        le(this, "onSaveAndContinue", async r=>{
            const {onSaveAndContinue: a} = this.props;
            a(r, this.state.page, this.next)
        }
        );
        this.state = {
            page: 0,
            values: r.initialValues || {},
            isNew: r.isNew
        }
    }
    componentDidUpdate(r, a) {
        if (r.initialValues !== this.props.initialValues && this.setState({
            values: this.props.initialValues
        }),
        r.isNew !== this.props.isNew && this.setState({
            isNew: this.props.isNew
        }),
        this.props.initialValues.launchType == "2" && this.state.page == "2") {
            const l = document.querySelector("#backButton");
            l && l.click()
        }
    }
    render() {
        const {children: r} = this.props
          , {page: a, values: l, isNew: o} = this.state;
        t.Children.toArray(this.props.children);
        const c = t.Children.toArray(r)[a];
        let s = a === t.Children.count(r) - 1;
        return t.createElement(J, {
            sx: {
                overflow: "hidden",
                marginTop: {
                    xs: "0",
                    sm: "48px"
                },
                marginBottom: {
                    xs: "0",
                    sm: "48px"
                },
                outline: {
                    xs: "none",
                    sm: "1px solid #0FC89F"
                },
                backgroundColor: {
                    xs: "transparent",
                    sm: "#FEFEFE"
                },
                borderRadius: {
                    xs: "0px",
                    sm: "25px"
                }
            }
        }, t.createElement(n, {
            container: !0,
            pt: 3,
            pb: 3,
            sx: {
                backgroundColor: "#0FC89F",
                display: "flex",
                justifyContent: "space-around"
            }
        }, this.titles().map((p,f)=>f === a ? t.createElement(m, {
            variant: "h5",
            key: f,
            sx: {
                color: "#ffffff"
            }
        }, `${f + 1}. ${p}`) : t.createElement(m, {
            className: "disabled",
            variant: "h5",
            key: f,
            sx: {
                color: "#ffffff"
            }
        }, `${f + 1}. ${p}`))), t.createElement(J, {
            mt: {
                xs: 1,
                sm: 2
            },
            mb: {
                xs: 1,
                sm: 2
            },
            ml: {
                xs: 2,
                sm: 4
            },
            mr: {
                xs: 2,
                sm: 4
            }
        }, t.createElement(ma, {
            initialValues: l,
            validate: this.validate,
            onSubmit: this.handleSubmit,
            flag: !0,
            mutators: U({}, Tn)
        }, ({handleSubmit: p, submitting: f, values: i, valid: h})=>t.createElement("form", {
            onSubmit: p
        }, c, t.createElement("div", {
            style: {
                width: "100%"
            }
        }, t.createElement(J, {
            sx: {
                display: "flex",
                justifyContent: "space-between",
                p: 1,
                m: 1
            }
        }, t.createElement(J, {
            sx: {
                display: "flex",
                justifyContent: "flex-start",
                p: 1,
                m: 1
            }
        }, a > 0 && t.createElement(J, {
            sx: {
                p: 1,
                m: 1
            }
        }, t.createElement(R, {
            id: "backButton",
            variant: "outlined",
            size: "small",
            onClick: this.previous
        }, "Back"))), t.createElement(J, {
            sx: {
                display: "flex",
                justifyContent: "flex-end",
                p: 1,
                m: 1
            }
        }, i.hasOwnProperty("launchType") && t.createElement(J, {
            sx: {
                p: 1,
                m: 1
            }
        }, t.createElement(R, {
            variant: "outlined",
            size: "small",
            component: ye,
            to: localStorage.getItem("_fromWhichUser") == "admin" ? "/dashboard/admin" : "/dashboard/collections"
        }, "Cancel")), !s && i.hasOwnProperty("launchType") && (i.launchType == "1" || i.launchType == "2" && a == 0) && t.createElement(J, {
            sx: {
                p: 1,
                m: 1
            }
        }, t.createElement(R, {
            variant: "outlined",
            size: "small",
            disabled: this.props.isSubmitting || !h || i.hasOwnProperty("launchStatus") && i.launchStatus != "INITIATED" && localStorage.getItem("_fromWhichUser") == "user",
            onClick: ()=>this.onSaveAndExit(i)
        }, "Save & Exit")), !s && i.hasOwnProperty("launchType") && (i.launchType == "1" || i.launchType == "2" && a == 0) && t.createElement(J, {
            sx: {
                p: 1,
                m: 1
            }
        }, t.createElement(R, {
            variant: "outlined",
            size: "small",
            type: "submit",
            disabled: !h
        }, "Continue")), !s && i.hasOwnProperty("launchType") && (i.launchType == "1" || i.launchType == "2" && a == 0) && t.createElement(J, {
            sx: {
                p: 1,
                m: 1
            }
        }, t.createElement(R, {
            variant: "contained",
            size: "small",
            disabled: this.props.isSubmitting || !h || i.hasOwnProperty("launchStatus") && i.launchStatus != "INITIATED" && localStorage.getItem("_fromWhichUser") == "user",
            onClick: ()=>this.onSaveAndContinue(i)
        }, "Save & Continue")), (s || i.hasOwnProperty("launchType") && i.launchType == "2" && a == 1) && t.createElement(J, {
            sx: {
                p: 1,
                m: 1
            }
        }, t.createElement(R, {
            variant: "contained",
            type: "submit",
            disabled: f || !h || i.hasOwnProperty("launchStatus") && i.launchStatus != "INITIATED" && localStorage.getItem("_fromWhichUser") == "user",
            size: "small"
        }, o ? "Create" : "Update")))))))))
    }
}
le(Ge, "propTypes", {
    onSubmit: it.func.isRequired,
    onSaveAndExit: it.func.isRequired,
    onSaveAndContinue: it.func.isRequired,
    isSubmitting: it.bool.isRequired
}),
le(Ge, "Page", ({children: r})=>r);
const ml = ({initialValues: e, app: r, setLoader: a, setReload: l})=>{
    w.exports.useState(0),
    w.exports.useState(0);
    const [o,c] = t.useState("");
    return t.createElement(t.Fragment, null, e.hasOwnProperty("launchType") ? "" : t.createElement(n, {
        item: !0,
        xs: 12,
        ml: 1,
        mt: 2,
        sx: {
            display: "flex",
            justifyContent: "center"
        }
    }, t.createElement(m, {
        variant: "h6",
        sx: {
            fontWeight: "bold"
        }
    }, "How will you distribute your NFTs?")), t.createElement(fe, {
        direction: "row",
        spacing: 7,
        justifyContent: "center",
        alignItems: "center",
        mt: 2
    }, t.createElement(R, {
        variant: e.hasOwnProperty("launchType") && e.launchType == "1" ? "contained" : "outlined",
        onClick: ()=>{
            e.launchType = "1",
            c("1"),
            l(Math.random())
        }
    }, "NFT launch sale via Entrepot"), t.createElement(R, {
        variant: e.hasOwnProperty("launchType") && e.launchType == "2" ? "contained" : "outlined",
        onClick: ()=>{
            e.launchType = "2",
            e.airdropNFT = "2",
            c("2"),
            l(Math.random())
        }
    }, "Airdrop all of your NFTs for free")))
}
  , ee = c=>{
    var s = c
      , {input: e, label: r, meta: {touched: a, error: l}} = s
      , o = Je(s, ["input", "label", "meta"]);
    return w.exports.createElement(ua, U(U({}, e), o))
}
;
const ul = ({content: e, isOpen: r})=>{
    const a = ()=>{
        document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`)
    }
    ;
    return w.exports.useEffect(()=>{
        window.addEventListener("scroll", a.bind(globalThis))
    }
    , []),
    w.exports.useEffect(()=>()=>{
        window.removeEventListener("scroll", a.bind(globalThis))
    }
    , []),
    w.exports.useEffect(()=>{
        if (r) {
            const l = document.documentElement.style.getPropertyValue("--scroll-y")
              , o = document.body;
            o.style.position = "fixed",
            o.style.left = "0",
            o.style.right = "0",
            o.style.top = `-${l}`
        } else {
            const l = document.body
              , o = l.style.top === "" | l.style.top === "0px" ? document.documentElement.style.getPropertyValue("--scroll-y") : l.style.top;
            document.body.removeAttribute("style");
            const c = parseInt(o || "0");
            window.scrollTo(0, c < 0 ? c * -1 : c)
        }
    }
    , [r]),
    t.createElement("div", {
        className: `modal ${r ? "open" : ""}`
    }, e)
}
;
const Re = e=>{
    const {isOpen: r, title: a, message: l, dismissText: o="Cancel", confirmText: c="Confirm", onCancel: s, onConfirm: p} = e;
    return t.createElement(ul, {
        content: t.createElement("div", {
            className: "dialog",
            style: {
                width: e.width
            }
        }, t.createElement("div", {
            className: "content-wrapper"
        }, t.createElement("div", {
            className: "content"
        }, t.createElement("div", {
            className: "title"
        }, a), t.createElement("div", {
            className: "message"
        }, l)), t.createElement("div", {
            className: "action-wrapper"
        }, typeof s == "function" ? t.createElement("button", {
            type: "button",
            className: "action cancel",
            onClick: f=>s(f)
        }, o) : "", typeof p == "function" ? t.createElement("button", {
            type: "button",
            className: "action confirm",
            onClick: f=>p(f)
        }, c) : ""))),
        isOpen: r
    })
}
;
const me = l=>{
    var o = l
      , {name: e, previewTable: r} = o
      , a = Je(o, ["name", "previewTable"]);
    return t.createElement(t.Fragment, null, t.createElement(I, Y(U({
        name: e
    }, a), {
        component: dl
    })))
}
;
function dl(i) {
    var h = i
      , {required: e, input: r, dropZoneProps: a, accept: l=".jpg,.png,.svg,.gif,.mp4,.html", hasModal: o, title: c, message: s, uploadDone: p} = h
      , f = Je(h, ["required", "input", "dropZoneProps", "accept", "hasModal", "title", "message", "uploadDone"]);
    const u = t.useCallback(E=>{
        f.onChange ? f.onChange(E) : r.onChange(E)
    }
    , [r])
      , {getRootProps: y, getInputProps: d} = An(U({
        onDrop: u,
        noDrag: !0,
        maxFileSize: 2 * 1024 * 1024 * 1024
    }, a))
      , g = (f == null ? void 0 : f.size) === "large"
      , x = w.exports.createRef();
    let _;
    const [N,T] = w.exports.useState(!1)
      , [O,S] = w.exports.useState(!1)
      , C = ()=>{
        _ = x.current,
        setTimeout(()=>{
            _.click()
        }
        , 250),
        setTimeout(()=>{
            S(!1)
        }
        , 500)
    }
      , M = ()=>{
        T(!1),
        S(!1)
    }
      , V = ()=>{
        T(!1),
        S(!0),
        C()
    }
    ;
    return t.createElement("div", null, t.createElement("div", U({}, y()), t.createElement("input", Y(U({}, d()), {
        accept: l
    })), t.createElement(R, Y(U({
        ref: x,
        variant: g ? "outlined" : "contained"
    }, f), {
        onClick: E=>{
            if (o && !O)
                E.preventDefault(),
                E.stopPropagation(),
                T(!0);
            else
                return !0
        }
    }), f.label || "choose file", f.uploadDone ? t.createElement(m, {
        className: "icon ico-checkmark",
        style: {
            marginLeft: "8px"
        }
    }) : "")), t.createElement(Re, {
        title: c,
        message: s,
        onCancel: M,
        onConfirm: V,
        isOpen: N
    }))
}
const ka = e=>{
    var r = /^-?\d+\.?\d*$/;
    return r.test(e)
}
  , pl = e=>{
    var r = /^\-?[0-9]+(?:\.[0-9]{1,2})?$/;
    return r.test(e)
}
  , Ra = e=>{
    var r = /^[0-9]+[0-9]*$/;
    return r.test(e)
}
  , Fa = e=>r=>ka(r) && parseFloat(r) >= e ? void 0 : `Should be atleast ${e}`
  , hl = e=>r=>ka(r) && pl(r) && parseFloat(r) >= 0 ? void 0 : "Should be positive real number upto 2 decimals"
  , ve = e=>r=>Ra(r) ? void 0 : "Should be positive integer"
  , Ua = e=>r=>r == "" || r == null || Ra(r) ? void 0 : "Should be positive integer"
  , Ma = ()=>new Date().getTime()
  , ue = e=>new Date(Math.round(parseInt(e) / 1e6))
  , Fe = e=>re(e).format("MMM D, YYYY")
  , Ba = e=>re(e).format("hh:mm a")
  , fl = e=>{
    const {launchDate: r, launchTime: a, endSaleDate: l, endSaleTime: o} = e;
    if (o) {
        const c = re(re(r).format("DD/MM/YYYY") + " " + re(a).format("hh:mm:ss"), "DD/MM/YYYY hh:mm:ss")
          , s = re(re(l).format("DD/MM/YYYY") + " " + re(o).format("hh:mm:ss"), "DD/MM/YYYY hh:mm:ss");
        let f = re.duration(s.diff(c)).asSeconds();
        if (f < 0)
            return "With this end date, your sale would last 0 hour, 0 minutes";
        const i = Math.floor(f / 86400);
        f -= i * 86400;
        const h = Math.floor(f / 3600) % 24;
        f -= h * 3600;
        const u = Math.floor(f / 60) % 60;
        f -= u * 60;
        let y = "With this end date, your sale would last ";
        return i > 0 && (y += i === 1 ? `${i} day, ` : `${i} days, `),
        y += h === 0 || h === 1 ? `${h} hour, ` : `${h} hours, `,
        y += u === 0 || h === 1 ? `${u} minutes` : `${u} minutes`,
        y
    } else
        return ""
}
  , jt = (e,r)=>(e = e.replace(/(^\s*)|(\s*$)/gi, ""),
e = e.replace(/[ ]{2,}/gi, " "),
e = e.replace(/\n /, `
`),
e.split(" ").length < r ? 1 : 0)
  , za = (e,r)=>e.length < r ? 1 : 0
  , Gt = async e=>{
    const r = URL.createObjectURL(e)
      , c = await Sn(r)
      , {columns: a} = c
      , l = Je(c, ["columns"])
      , o = [];
    for (const [s,p] of Object.entries(l)) {
        let f = Object.keys(p);
        o.push(p[f])
    }
    return o
}
  , Wa = (e,r)=>e.reduce((a,l)=>Y(U({}, a), {
    [l[r]]: (a[l[r]] || []).concat(l)
}), {})
  , yt = "4cfe9f4b-3283-4403-9bd6-a3eb2a5b5e95"
  , Va = "none.jpeg"
  , xe = "a2727dddb5e765a1bafb"
  , Et = async e=>new Promise((r,a)=>{
    vn(e, {
        publicKey: xe
    }).then(l=>l.size).then(l=>{
        r(l)
    }
    )
}
)
  , yl = e=>Math.round(parseFloat(e * 5 / 1024) * 100) / 100
  , El = e=>Math.floor(parseFloat(e / Math.pow(1024, 2)))
  , qa = e=>{
    var r = /(.*)m/;
    return e.replace(r, "").slice(1, -1)
}
  , $t = [{
    key: "All",
    value: "ALL LAUNCHES"
}, {
    key: "1 Day",
    value: "1d"
}, {
    key: "1 Week",
    value: "1w"
}, {
    key: "1 Month",
    value: "1m"
}, {
    key: "1 Year",
    value: "1y"
}]
  , gt = e=>{
    for (var r = e.length - 1; r > 0; r--) {
        var a = Math.floor(Math.random() * (r + 1))
          , l = e[r];
        e[r] = e[a],
        e[a] = l
    }
    return e
}
  , gl = ({name: e})=>t.createElement(I, {
    name: e,
    subscription: {
        touched: !0,
        error: !0
    },
    render: ({meta: {touched: r, error: a}})=>r && a ? t.createElement("span", null, a) : null
})
  , _l = (e,r)=>{
    let a = 0;
    return e.forEach((l,o)=>{
        a += parseFloat(e.value[o][r]).toFixed(2) * 100 || 0
    }
    ),
    a = a / 100,
    parseFloat(a).toFixed(2)
}
  , wl = async(e,r,a)=>{
    try {
        a(!0);
        const l = [];
        r.forEach(c=>{
            const s = new mt({
                publicKey: xe
            });
            l.push(s.uploadFile(c))
        }
        );
        const o = await Promise.all(l);
        r.forEach((c,s)=>{
            e.push({
                file: c,
                traitName: c.name.substring(0, c.name.lastIndexOf(".")),
                percentage: "",
                url: o[s].cdnUrl,
                uuid: o[s].uuid,
                type: c.name
            })
        }
        )
    } catch {
        W.NotificationManager.error("Some error occurred. Please try again.")
    } finally {
        a(!1),
        W.NotificationManager.success("Uploaded Successfully")
    }
}
  , bl = async(e,r,a,l)=>{
    try {
        let o = {
            name: r,
            type: r
        };
        a.push({
            file: o,
            traitName: o.name.substring(0, o.name.lastIndexOf(".")),
            percentage: "",
            url: `https://ucarecdn.com/${e}/`,
            uuid: e,
            type: o.name
        }),
        l(!0);
        let c = document.querySelectorAll("#uploadingTypeRadioBtn");
        c && (c[1].focus(),
        c[1].blur())
    } catch {}
}
  , xl = ({category: e, categoryIndex: r, app: a, push: l, pop: o, setLoader: c, values: s})=>{
    const [p,f] = w.exports.useState(!0)
      , [i,h] = w.exports.useState(!1)
      , [u,y] = w.exports.useState(!1)
      , d = `https://ucarecdn.com/${yt}/`;
    return w.exports.useEffect(()=>{
        h(s.hasOwnProperty("categories") && s.categories[r].hasOwnProperty("noneAdded") ? s.categories[r].noneAdded : !1);
        let g = document.getElementById(`noneBtn${r}`);
        g && s.hasOwnProperty("categories") && s.categories[r].hasOwnProperty("noneAdded") && s.categories[r].noneAdded == !0 ? (g.disabled = !0,
        g.classList.add("Mui-disabled")) : (g.disabled = !1,
        g.classList.remove("Mui-disabled"))
    }
    , []),
    t.createElement(t.Fragment, null, p ? t.createElement(Xe, {
        name: `${e}.files`,
        companyIndex: r
    }, ({fields: g})=>t.createElement(J, null, t.createElement(J, {
        m: 1,
        mb: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        mr: 5,
        mb: 2,
        mt: -2,
        sx: {
            display: "flex",
            justifyContent: "end"
        }
    }, t.createElement(R, {
        id: `noneBtn${r}`,
        variant: "outlined",
        size: "small",
        onClick: x=>{
            x.preventDefault(),
            x.stopPropagation();
            let N = document.documentElement.getBoundingClientRect();
            bl(yt, Va, g, h),
            s.categories[r].noneAdded = !0,
            window.scrollTo(0, Math.abs(N.y));
            let T = document.getElementById(`noneBtn${r}`);
            T && (T.disabled = !0,
            T.classList.add("Mui-disabled"))
        }
    }, "Add none")), g.map((x,_)=>t.createElement(n, {
        item: !0,
        container: !0,
        key: _
    }, t.createElement(n, {
        item: !0,
        container: !0,
        spacing: 1,
        pl: 2,
        pr: 2,
        xs: 12,
        sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement("img", {
        src: g.value[_].file.name == Va ? d : g.value[_].file.hasOwnProperty("path") ? URL.createObjectURL(g.value[_].file) : g.value[_].assetUrl,
        alt: "",
        width: 60,
        height: 60,
        style: {
            objectFit: "cover"
        }
    })), t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(I, {
        name: `${x}.traitName`,
        component: ee,
        type: "text",
        placeholder: "Trait Name",
        required: !0
    })), t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(m, {
        variant: "h7"
    }, g.value[_].file.name, " ")), t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(I, {
        name: `${x}.price`,
        component: ee,
        placeholder: "Percentage",
        validate: hl(),
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(gl, {
        name: `${x}.price`
    })))), t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(m, {
        variant: "h7"
    }, " % ")), t.createElement(n, {
        item: !0,
        xs: 1,
        onClick: async()=>{
            let N, T, O, S = !1;
            if (g.value[_].launchId && g.value[_].traitArtworkId && (N = g.value[_].launchId,
            T = g.value[_].traitArtworkId,
            O = g.value[_].traitCategoryId),
            (g.value[_].hasOwnProperty("url") && g.value[_].url == d || g.value[_].hasOwnProperty("assetUrl") && g.value[_].assetUrl == d) && (S = !0),
            g.remove(_),
            S == !0) {
                h(!1),
                s.categories[r].noneAdded = !1;
                let C = document.getElementById(`noneBtn${r}`);
                C && (C.disabled = !1,
                C.classList.remove("Mui-disabled"))
            }
            N && T && await a.deleteTraitArtwork(N, O, T)
        }
    }, t.createElement(R, null, t.createElement(Qe, null)))))), g.length != 0 ? t.createElement(n, {
        item: !0,
        container: !0,
        spacing: 1,
        pl: 1,
        pr: 2,
        xs: 12,
        m: 1,
        sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 2
    }), t.createElement(n, {
        item: !0,
        xs: 3
    }), t.createElement(n, {
        item: !0,
        xs: 3,
        sx: {
            display: "flex",
            justifyContent: "end"
        }
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        }
    }, " ", "Total % for the trait :")), t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        }
    }, _l(g, "price"))), t.createElement(n, {
        item: !0,
        xs: 1
    }), t.createElement(n, {
        item: !0,
        xs: 1,
        mt: 2
    })) : ""), t.createElement(n, {
        container: !0
    }, t.createElement(n, {
        item: !0,
        container: !0,
        xs: 12,
        sx: {
            display: "flex",
            justifyContent: "start"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 4
    }, t.createElement(me, {
        name: `${e}.files`,
        label: "Click to upload",
        hasModal: !0,
        title: "Upload Image Info",
        uploadDone: u,
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure assets are in image or mp4 format.")))),
        onChange: x=>{
            wl(g, x, c);
            let _ = !1;
            x.forEach(N=>{
                N.type.includes("html") && (_ = !0)
            }
            ),
            s.isHtml3 = _ ? "true" : "false",
            y(!0)
        }
    })), t.createElement(n, {
        item: !0
    }, t.createElement(m, null, "Image should be a square"), t.createElement(m, null, ".jpg, .png, .svg, or .gif")))))) : t.createElement("div", {
        onClick: ()=>f(!0)
    }, "closed"))
}
  , Nl = ({name: e, index: r, app: a, fields: l, setLoader: o, values: c})=>{
    const [s,p] = w.exports.useState(!0)
      , [f,i] = w.exports.useState(void 0)
      , h = g=>(x,_)=>{
        p(_ ? g : !1)
    }
      , u = (g,x)=>{
        g ? d(x) : y(x)
    }
      , y = g=>{
        const x = document.querySelector(`input[name='${g}']`);
        x && setTimeout(()=>{
            x.select()
        }
        , 100)
    }
      , d = g=>{
        const x = document.querySelector(`input[name='${g}']`);
        x && x.blur(),
        i(void 0)
    }
    ;
    return w.exports.createElement(Cn, {
        draggableId: e,
        index: r
    }, (g,x)=>{
        var _, N;
        return w.exports.createElement(Pn, Y(U(U({
            ref: g.innerRef
        }, g.draggableProps), g.dragHandleProps), {
            sx: {
                width: "100%"
            }
        }), w.exports.createElement(da, {
            key: r,
            expanded: s === r,
            onChange: h(r),
            style: {
                width: "100%"
            }
        }, w.exports.createElement(pa, {
            id: r,
            expandIcon: w.exports.createElement(ha, {
                sx: {
                    margin: "16px"
                }
            })
        }, w.exports.createElement(J, {
            sx: {
                width: "40%",
                display: "flex"
            }
        }, w.exports.createElement(R, {
            onClick: T=>{
                T.preventDefault(),
                T.stopPropagation(),
                i(f === r ? void 0 : r),
                u(f === r, `${e}.name`)
            }
        }, f === r ? w.exports.createElement(On, null) : w.exports.createElement(fa, null)), w.exports.createElement(I, {
            name: `${e}.name`,
            component: ee,
            type: "text",
            placeholder: "Category Name",
            sx: {
                width: "90%",
                display: "flex"
            },
            disabled: f !== r,
            className: f !== r ? "category-name" : "",
            onClick: T=>{
                T.stopPropagation()
            }
            ,
            onBlur: T=>{
                T.preventDefault(),
                d(`${e}.name`)
            }
        })), w.exports.createElement(J, {
            sx: {
                width: "50%",
                display: "flex",
                alignItems: "center"
            },
            ml: 4
        }, w.exports.createElement(m, null, `${((_ = l.value[r].files) == null ? void 0 : _.length) || 0} trait${((N = l.value[r].files) == null ? void 0 : N.length) > 0 ? "s" : ""}`)), w.exports.createElement(J, {
            sx: {
                width: "10%",
                display: "flex"
            }
        }, w.exports.createElement(R, {
            onClick: async()=>{
                try {
                    let T, O;
                    if (l.value[r].launchId && l.value[r].traitCategoryId && (T = l.value[r].launchId,
                    O = l.value[r].traitCategoryId),
                    l.remove(r),
                    T && O) {
                        const S = await a.deleteTraitCategory(T, O)
                    }
                } catch (T) {
                    console.log(T)
                }
            }
        }, " ", w.exports.createElement(Qe, null)))), w.exports.createElement(ya, null, w.exports.createElement(xl, {
            category: e,
            categoryIndex: r,
            key: e,
            app: a,
            setLoader: o,
            onRemove: ()=>l.remove(r),
            values: c
        }))))
    }
    )
}
  , Tl = w.exports.memo(({fields: e, app: r, setLoader: a, values: l})=>{
    const o = (s,p,f)=>{
        const [i] = s.splice(p, 1);
        return s.splice(f, 0, i),
        s
    }
      , c = ({destination: s, source: p})=>{
        if (!s)
            return;
        const f = o(e.value, p.index, s.index);
        e.value = f;
        let i = document.querySelectorAll("#uploadingTypeRadioBtn");
        i && (i[1].focus(),
        i[1].blur())
    }
    ;
    return w.exports.createElement(kn, {
        onDragEnd: c
    }, w.exports.createElement(n, {
        item: !0,
        xs: 12
    }, w.exports.createElement(Rn, {
        droppableId: "droppable-list"
    }, s=>w.exports.createElement(J, Y(U({
        ref: s.innerRef
    }, s.droppableProps), {
        sx: {
            width: "100%"
        }
    }), e.map((p,f)=>w.exports.createElement(Nl, {
        name: p,
        index: f,
        app: r,
        fields: e,
        setLoader: a,
        key: f,
        values: l
    })), s.placeholder))))
}
)
  , Al = ({name: e})=>t.createElement(I, {
    name: e,
    subscription: {
        touched: !0,
        error: !0
    },
    render: ({meta: {touched: r, error: a}})=>r && a ? t.createElement("span", null, a) : null
})
  , Sl = ({app: e, initialValues: r, setLoader: a, setUploadingImage: l, setProgress: o, allAddresses: c})=>{
    const {values: s} = ut()
      , [p,f] = w.exports.useState(0)
      , [i,h] = w.exports.useState({})
      , [u,y] = w.exports.useState(!1)
      , [d,g] = w.exports.useState([])
      , x = Number(s.hasOwnProperty("priceCreatorShare") ? s.priceCreatorShare.toString() : "0")
      , _ = Number((s.hasOwnProperty("csvAirdropNew") ? s.csvAirdropNew.length + (Object.keys(c).length > 0 ? c.Airdrop.length : 0) : s.hasOwnProperty("csvAirdrop") ? s.csvAirdrop.length + (Object.keys(c).length > 0 ? c.Airdrop.length : 0) : 0).toString());
    Ie();
    const N = (E,b)=>{
        let v = 0;
        return E.forEach((k,q)=>{
            v += parseFloat(E.value[q][b]) || 0
        }
        ),
        v
    }
      , T = ()=>{
        let b = document.documentElement.getBoundingClientRect()
          , v = document.querySelectorAll("#uploadingTypeRadioBtn");
        v && (v[0].focus(),
        v[0].blur()),
        window.scrollTo(0, Math.abs(b.y))
    }
      , O = async(E,b)=>{
        try {
            a(!0),
            l(!0);
            const v = [];
            b.forEach(q=>{
                const F = new mt({
                    publicKey: xe
                });
                v.push(F.uploadFile(q))
            }
            );
            const k = await Promise.all(v);
            b.forEach((q,F)=>{
                E.push({
                    file: q,
                    price: "",
                    other: "",
                    url: k[F].cdnUrl,
                    uuid: k[F].uuid,
                    type: q.type
                })
            }
            )
        } catch {
            W.NotificationManager.error("Some error occurred. Please try again.")
        } finally {
            a(!1),
            l(!1),
            W.NotificationManager.success("Uploaded Successfully")
        }
    }
      , S = async E=>{
        try {
            a(!0);
            let b = []
              , v = []
              , k = !1;
            const q = E.size
              , F = E.type
              , j = new _a;
            if (q > 10 * 1024 * 1024 * 1024) {
                W.NotificationManager.error("Zip file size should be less than 10 GB.");
                return
            }
            if (!["application/zip", "application/x-zip-compressed"].includes(F)) {
                W.NotificationManager.error("Uploaded file is not a zip file");
                return
            }
            await j.loadAsync(E).then(B=>(B.forEach((X,D)=>{
                /__MACOSX/.test(X) && B.remove(X),
                /.DS_Store/.test(X) && B.remove(X)
            }
            ),
            B)).then(async B=>{
                const X = Object.keys(B.files);
                if (b = Object.entries(B.files).filter(([H])=>(H.includes(".html") && (k = !0),
                /^.*\.(jpg|png|mp4|gif|mov|html|svg|)$/.test(H))).sort(([H],[K])=>H.match(/[\w\. ]+(?=[\.])/)[0] - K.match(/[\w\. ]+(?=[\.])/)[0]),
                X.filter(H=>/^[^/]*\/$/.test(H)).length > 1) {
                    W.NotificationManager.error("Make sure a single folder of assets is located at the root of the zip (no other folders)");
                    return
                }
                if (v = X.filter(H=>!/^[^/]*\/$/.test(H)).filter(H=>!/^.*\.(jpg|png|mp4|gif|mov|html|svg|)$/.test(H)),
                b.length > 0) {
                    let H = await Promise.all(b.map(async([K,P],A)=>{
                        const $ = await P.async("blob").then(z=>URL.createObjectURL(z));
                        return {
                            mintNumber: A + 1,
                            url: $,
                            name: K
                        }
                    }
                    ));
                    g(H)
                }
                return v.length && W.NotificationManager.error("Unsupported file type. Accepted assets file types are .png, .mp4, .jpg, .gif, .mov, and .svg only"),
                {
                    mediaFiles: b,
                    unsupportedFileTypes: v
                }
            }
            ).then(async B=>{
                const X = ({value: K})=>{
                    o(K * 100)
                }
                ;
                let D = {}
                  , Q = B.mediaFiles
                  , H = B.unsupportedFileTypes;
                if (Q.length == 0 || Q.length == H.length) {
                    W.NotificationManager.error("Zip file cannot be empty");
                    return
                }
                return q < 10 * 1024 * 1024 ? D = await wa(E, {
                    publicKey: xe,
                    onProgress: X,
                    baseURL: "https://upload.uploadcare.com"
                }) : D = await ba(E, {
                    publicKey: xe,
                    multipartMinFileSize: 10 * 1024 * 1024,
                    onProgress: X,
                    baseURL: "https://upload.uploadcare.com"
                }),
                s.isHtml1 = k ? "true" : "false",
                a(!1),
                o(null),
                W.NotificationManager.success("Zip file added successfully"),
                "https://ucarecdn.com/" + D.uuid + "/"
            }
            ).then(B=>{
                B && (s.zipUrlNew = B)
            }
            )
        } catch (b) {
            console.log(b),
            W.NotificationManager.error("Some error occurred. Please try again.")
        } finally {
            a(!1),
            o(null)
        }
    }
      , C = async E=>{
        try {
            a(!0);
            const b = E.size
              , v = E.type
              , k = new _a;
            if (b > 10 * 1024 * 1024 * 1024) {
                W.NotificationManager.error("Zip file size should be less than 10 GB.");
                return
            }
            if (!["application/zip", "application/x-zip-compressed"].includes(v)) {
                W.NotificationManager.error("Uploaded file is not a zip file");
                return
            }
            k.loadAsync(E).then(j=>(j.forEach((B,X)=>{
                /__MACOSX/.test(B) && j.remove(B),
                /.DS_Store/.test(B) && j.remove(B)
            }
            ),
            j)).then(async j=>{
                const B = Object.keys(j.files)
                  , X = Object.entries(j.files).filter(([P])=>/^.*\.(jpg|png|mp4|gif|mov|svg|)$/.test(P)).sort(([P],[A])=>P.match(/[\w\. ]+(?=[\.])/)[0] - A.match(/[\w\. ]+(?=[\.])/)[0]);
                if (B.filter(P=>/^[^/]*\/$/.test(P)).length > 1) {
                    W.NotificationManager.error("Make sure a single folder of assets is located at the root of the zip (no other folders)");
                    return
                }
                const H = B.filter(P=>!/^[^/]*\/$/.test(P)).filter(P=>!/^.*\.(jpg|png|mp4|gif|mov|svg|)$/.test(P));
                let K = await Promise.all(X.map(async([P,A],$)=>{
                    const z = await A.async("blob").then(Z=>URL.createObjectURL(Z));
                    return {
                        mintNumber: $ + 1,
                        url: z,
                        name: P
                    }
                }
                ));
                if (g(K),
                H.length) {
                    W.NotificationManager.error("Unsupported file type. Accepted assets file types are .png, .mp4, .jpg, .gif, .mov, and .svg only");
                    return
                }
            }
            );
            const q = ({value: j})=>{
                o(j * 100)
            }
            ;
            let F = {};
            return b < 10 * 1024 * 1024 ? F = await wa(E, {
                publicKey: xe,
                onProgress: q,
                baseURL: "https://upload.uploadcare.com"
            }) : F = await ba(E, {
                publicKey: xe,
                multipartMinFileSize: 10 * 1024 * 1024,
                onProgress: q,
                baseURL: "https://upload.uploadcare.com"
            }),
            a(!1),
            o(null),
            W.NotificationManager.success("Zip file added successfully"),
            "https://ucarecdn.com/" + F.uuid + "/"
        } catch (b) {
            console.log(b),
            W.NotificationManager.error("Some error occurred. Please try again.")
        } finally {
            a(!1),
            o(null)
        }
    }
      , M = async E=>{
        try {
            const v = await new mt({
                publicKey: xe
            }).uploadFile(E);
            return W.NotificationManager.success("Metadata information added successfully"),
            v.cdnUrl
        } catch {
            W.NotificationManager.error("Some error occurred. Please try again.")
        }
    }
      , V = E=>E <= x ? "Reserve for Team" : E > x && E <= x + _ ? "Airdrop" : "Sale";
    return t.createElement(n, {
        container: !0,
        spacing: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h5"
    }, "Upload Asset ")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "The maximum collection size we currently support is 10 GB. For collections larger than this, please email us at support@toniqlabs.com."))), (s.launchType === "1" || s.launchType === "2") && t.createElement(t.Fragment, null, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h6"
    }, "Types of Upload"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Ea, {
        name: "uploadingType",
        id: "uploadingTypeRadioBtn",
        required: !0,
        onClick: E=>{
            r.uploadingType !== E.target.value ? (s.categories = [],
            s.files = [],
            s.zip = "1",
            setTimeout(()=>{
                var v = document.querySelector("#add-category");
                v && v.click()
            }
            , 50)) : E.target.value == "1" ? (s.files = r.files,
            s.categories = [],
            s.zip = r.zip) : E.target.value == "2" && (s.categories = r.categories,
            s.files = [],
            s.zip = "1")
        }
        ,
        data: [{
            label: "I'm uploading the final pieces of artwork",
            value: "1"
        }, {
            label: "I'm uploading the asset layers to generate the artwork",
            value: "2"
        }]
    })))), s.uploadingType === "1" && t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h6",
        display: "inline"
    }, " ", "Do you wish to upload more than 50 assets?"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12,
        sm: 5
    }, t.createElement(_e, {
        name: "zip",
        label: "Number of assets",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, "No"), t.createElement(G, {
        value: "2"
    }, "Yes")))), s.uploadingType === "1" && s.zip === "1" && t.createElement(t.Fragment, null, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Xe, {
        name: "files"
    }, ({fields: E})=>t.createElement(J, {
        m: 3
    }, E.length === 0 ? t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "file",
        label: "Click to upload",
        hasModal: !0,
        title: "Upload Image Info",
        uploadDone: i.file,
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure assets are in image or mp4 format.")))),
        onChange: b=>{
            O(E, b);
            let v = !1;
            b.forEach(q=>{
                q.type.includes("html") && (v = !0)
            }
            ),
            s.isHtml2 = v ? "true" : "false";
            const k = i;
            k.file = !0,
            h(k)
        }
    })), t.createElement(n, {
        item: !0
    }, t.createElement(m, null, "Image should be a square"), t.createElement(m, null, ".jpg, .png, .svg, or .gif"))) : t.createElement(n, {
        container: !0
    }, t.createElement(n, {
        item: !0,
        container: !0,
        xs: 12,
        sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    }, t.createElement(n, {
        item: !0
    }, t.createElement(m, null, " Asset ")), t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "files",
        label: "Click to upload",
        hasModal: !0,
        title: "Upload Image Info",
        uploadDone: i.files,
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure assets are in image or mp4 format.")))),
        onChange: b=>{
            O(E, b);
            let v = !1;
            b.forEach(q=>{
                q.type.includes("html") && (v = !0)
            }
            ),
            s.isHtml2 = v ? "true" : "false";
            const k = i;
            k.files = !0,
            h(k)
        }
    })), t.createElement(n, {
        item: !0,
        xs: 12,
        mt: 2
    }, t.createElement(ga, null)))), E.map((b,v)=>t.createElement(n, {
        item: !0,
        container: !0,
        key: v
    }, t.createElement(n, {
        item: !0,
        container: !0,
        spacing: 1,
        xs: 12,
        m: 1,
        sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement("img", {
        src: E.value[v].file.hasOwnProperty("path") ? URL.createObjectURL(E.value[v].file) : E.value[v].assetUrl,
        alt: "",
        width: 60,
        height: 60,
        style: {
            objectFit: "cover"
        }
    })), t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(I, {
        name: `${b}.other`,
        component: ee,
        placeholder: "# Mint",
        validate: ve(),
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Al, {
        name: `${b}.other`
    })))), t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "h7"
    }, E.value[v].file.name, " ")), t.createElement(n, {
        item: !0,
        xs: 1,
        onClick: async()=>{
            try {
                let k, q;
                E.value[v].launchId && E.value[v].artworkId && (k = E.value[v].launchId,
                q = E.value[v].artworkId),
                E.remove(v),
                k && q && await e.deleteArtwork(k, q)
            } catch {}
        }
    }, t.createElement(R, null, t.createElement(Qe, null)))), t.createElement(n, {
        item: !0,
        xs: 12,
        mt: 1
    }, t.createElement(ga, null)))), s.hasOwnProperty("files") && s.files.length > 0 && t.createElement(n, {
        container: !0,
        mt: 4
    }, t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(m, {
        variant: "h7"
    }, " What is the total number of NFTs : ", N(E, "other"))))))))), s.uploadingType === "1" && s.zip === "2" && t.createElement(t.Fragment, null, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2,
        sx: {
            ml: 1,
            mt: 1,
            mb: 2
        }
    }, t.createElement(n, {
        container: !0,
        spacing: 2,
        mb: 1,
        alignItems: "center"
    }, t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "zipfile",
        accept: ".zip",
        label: "Click to upload zip file",
        hasModal: !0,
        title: "Upload ZIP Info",
        sx: {
            mr: 2
        },
        uploadDone: i.hasOwnProperty("zipfile"),
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure a single folder of assets is located at the root of the zip (no other folders).")))),
        onChange: async E=>{
            await S(E[0]),
            f(Math.random()),
            T();
            const b = i;
            b.zipfile = !0,
            h(b),
            y(!0)
        }
    })), s.hasOwnProperty("zipUrlNew") ? t.createElement(Re, {
        title: "Upload Preview",
        message: t.createElement(n, {
            container: !0,
            style: {
                overflowY: "auto",
                height: 400
            }
        }, t.createElement(n, {
            item: !0
        }, t.createElement(Rt, {
            component: dt
        }, t.createElement(Ft, {
            sx: {
                minWidth: 650
            },
            "aria-label": "reserve for team"
        }, t.createElement(Ut, null, t.createElement(ze, null, t.createElement(Ee, null), t.createElement(Ee, null, "Mint #"), t.createElement(Ee, null, "File Name"), t.createElement(Ee, null, "Group"))), t.createElement(Mt, null, d.map((E,b)=>t.createElement(ze, {
            key: E.name,
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, t.createElement(Ee, {
            component: "th",
            scope: "row"
        }, t.createElement("img", {
            key: b,
            src: E.url,
            alt: "preview image",
            style: {
                height: 32,
                width: 32
            }
        })), t.createElement(Ee, null, E.mintNumber), t.createElement(Ee, null, E.name), t.createElement(Ee, null, V(E.mintNumber))))))))),
        onConfirm: ()=>{
            y(!1)
        }
        ,
        isOpen: u,
        width: 650
    }) : "", t.createElement(n, {
        item: !0
    }, s.hasOwnProperty("zipUrlNew") ? t.createElement(R, {
        type: "button",
        variant: "outlined",
        size: "small"
    }, t.createElement("a", {
        href: s.zipUrlNew,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download Zip")) : s.hasOwnProperty("zipUrl") && s.zipUrl != "" ? t.createElement(R, {
        type: "button",
        variant: "outlined",
        size: "small"
    }, t.createElement("a", {
        href: s.zipUrl,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download Zip")) : "", (s.hasOwnProperty("zipUrlNew") || s.hasOwnProperty("zipUrl") && s.zipUrl != "") && t.createElement(R, {
        size: "small",
        variant: "outlined",
        onClick: ()=>{
            delete s.zipUrlNew,
            delete s.zipUrl,
            T()
        }
    }, "Delete")), t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small"
    }, t.createElement("a", {
        href: "https://ucarecdn.com/04bc886b-8afe-40ae-a9b1-a795cee693e3/template_upload.zip",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download ZIP Template")))))), s.uploadingType === "2" && t.createElement(n, {
        container: !0,
        m: 4
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        container: !0,
        spacing: 4
    }, t.createElement(n, {
        item: !0,
        container: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h6"
    }, " Upload Asset Layers ")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, " ", 'We help you upload one layer at a time. For example, one layer could be "hats" and you should upload all of the image assets related to hats.', " "), t.createElement(m, {
        variant: "subtitle2"
    }, "(Please adds trait categories in the order in which they should be displayed. The bottom-most trait category will be the furthest back. The top-most trait category will be furthest forward.)")))), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Xe, {
        name: "categories"
    }, ({fields: E})=>t.createElement(J, {
        sx: {
            width: "100%"
        }
    }, t.createElement(Tl, {
        fields: E,
        app: e,
        setLoader: a,
        values: s
    }), t.createElement(n, {
        item: !0,
        m: 2
    }, t.createElement(R, {
        type: "button",
        variant: "outlined",
        onClick: ()=>E.push({
            name: `Trait Category ${E.length}`,
            traits: 0
        })
    }, "Add Category"))))))), s.uploadingType === "1" && t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        mb: 3
    }, t.createElement(m, {
        variant: "h5"
    }, "Upload Metadata")), t.createElement(n, {
        container: !0,
        spacing: 2,
        mb: 1,
        alignItems: "center"
    }, t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "file",
        accept: ".json",
        label: "Upload Metadata",
        hasModal: !0,
        title: "Upload Metadata Info",
        uploadDone: s.hasOwnProperty("metaDataUrlNew") || s.hasOwnProperty("metaDataUrl") && s.metaDataUrl != "",
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Metadata file must adhere to the example format provided. Then we can create NRI and Filter Data automatically from the metadata file.")), t.createElement(n, {
            item: !0
        }, t.createElement(R, {
            size: "small"
        }, t.createElement("a", {
            href: "https://ucarecdn.com/d2f9334d-b938-435f-bf6d-624f3c3726df/metadata_example.json",
            target: "_blank",
            style: {
                textDecoration: "none",
                color: "#09D8AA"
            }
        }, "Download Metadata Template"))))),
        onChange: async E=>{
            const b = await M(E[0]);
            s.metaDataUrlNew = b,
            T()
        }
    })), s.hasOwnProperty("metaDataUrlNew") && t.createElement(n, {
        item: !0
    }, t.createElement(R, null, t.createElement("a", {
        href: s.metaDataUrlNew,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download"))), !s.hasOwnProperty("metaDataUrlNew") && s.hasOwnProperty("metaDataUrl") && s.metaDataUrl != "" && t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small"
    }, t.createElement("a", {
        href: s.metaDataUrl,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download"))), (s.hasOwnProperty("metaDataUrlNew") || s.hasOwnProperty("metaDataUrl") && s.metaDataUrl != "") && t.createElement(n, {
        item: !0,
        mr: 2
    }, t.createElement(R, {
        size: "small",
        variant: "outlined",
        mr: 2,
        onClick: ()=>{
            delete s.metaDataUrlNew,
            delete s.metaDataUrl,
            T()
        }
    }, "Delete")), t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small",
        variant: "outlined"
    }, t.createElement("a", {
        href: "https://ucarecdn.com/d2f9334d-b938-435f-bf6d-624f3c3726df/metadata_example.json",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download Metadata Template"))))), s.uploadingType === "1" && t.createElement(n, {
        container: !0,
        item: !0,
        spacing: 2,
        mb: 1,
        alignItems: "center"
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        mb: 3
    }, t.createElement(m, {
        variant: "h5"
    }, "Upload Thumbnail")), t.createElement(n, {
        item: !0,
        xs: 12,
        mb: 2
    }, t.createElement(m, null, "Thumbnails are displayed when viewing NFTs on the collection page. Creators are welcome to generate and upload their own thumbnails. For static image collections Toniq Mint will auto-generate thumbnails if no files are uploaded ", t.createElement("i", null, "(most common)"), ". For non-static (mp4, html) collections, creators should upload their own. Thumbnails requirements: 1) Less than 1.9 MB each 2) type: png, jpeg, gif 3) size: 300x300 4) file name exactly matches full asset file name.")), t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "file",
        accept: ".zip",
        label: "Upload Thumbnail zip",
        hasModal: !0,
        title: "Upload Thumbnail Info",
        uploadDone: s.hasOwnProperty("thumbnailZipUrlNew"),
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure files must be in the root of the zipped folder (no folders in the zip).")))),
        onChange: async E=>{
            const b = await C(E[0]);
            b && (s.thumbnailZipUrlNew = b),
            T()
        }
    })), t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small"
    }, t.createElement("a", {
        href: "https://ucarecdn.com/04bc886b-8afe-40ae-a9b1-a795cee693e3/template_upload.zip",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download ZIP Template"))), s.hasOwnProperty("thumbnailZipUrlNew") ? t.createElement(n, {
        item: !0,
        mr: 2
    }, t.createElement(R, {
        size: "small",
        variant: "outlined"
    }, t.createElement("a", {
        href: s.thumbnailZipUrlNew,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download Zip"))) : s.hasOwnProperty("thumbnailZipUrl") && s.thumbnailZipUrl != "" ? t.createElement(n, {
        item: !0,
        mr: 2
    }, t.createElement(R, {
        size: "small",
        variant: "outlined"
    }, t.createElement("a", {
        href: s.thumbnailZipUrl,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download Zip"))) : "", (s.hasOwnProperty("thumbnailZipUrlNew") || s.hasOwnProperty("thumbnailZipUrl") && s.thumbnailZipUrl != "") && t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small",
        variant: "outlined",
        onClick: ()=>{
            delete s.thumbnailZipUrlNew,
            delete s.thumbnailZipUrl,
            T()
        }
    }, "Delete"))), localStorage.getItem("_fromWhichUser") == "user" ? t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        mt: 6
    }, t.createElement(m, null, "I agree that:"), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Se, {
        name: "agreed1",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "I own the Intellectual Property rights to all image assets that I am uploading.",
            value: !0
        },
        required: !0
    })), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Se, {
        name: "agreed2",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: t.createElement("div", null, t.createElement("span", null, "I agree to abide by the"), t.createElement("a", {
                href: "https://docs.google.com/document/d/13aj8of_UXdByGoFdMEbbIyltXMn0TXHiUie2jO-qnNk/edit",
                target: "_blank",
                style: {
                    textDecoration: "none",
                    color: "#09D8AA"
                }
            }, " ", "Entrepot Terms & Conditions")),
            value: !0
        },
        required: !0
    })), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Se, {
        name: "agreed3",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "I will not provide passive income to NFT holders through royalty distributions or any other revenue share arrangements.",
            value: !0
        },
        required: !0
    })), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Se, {
        name: "agreed4",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "I will not market or discuss my NFTs in a way that suggests they are investments, investment contracts, or a way to make money.",
            value: !0
        },
        required: !0
    })), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Se, {
        name: "agreed5",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "I acknowledge that Toniq Labs NFT minting fee is 6% of primary sales.",
            value: !0
        },
        required: !0
    })), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Se, {
        name: "agreed6",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "I acknowledge that once launch details are submitted and reviewed they cannot be changed. This includes images, price, dates, whitelist, etc.",
            value: !0
        },
        required: !0
    }))) : "")
}
  , vl = e=>{
    const {collections: {list: r}, auth: {actor: a, dscvrActor: l}, roles: {allRoles: o, selectedRoles: c, allAddresses: s, dscvrDetailsAirdrop: p}} = e;
    return {
        rows: r,
        allAddresses: s
    }
}
  , Cl = e=>({});
var Pl = pe(vl, Cl)(Sl);
const ja = "COLLECTION::ADD_COLLECTION"
  , Ga = "COLLECTION::UPDATE_COLLECTION"
  , $a = "COLLECTION::SET_COLLECTION"
  , Ya = "COLLECTION::SET_COLLECTION_GLOBAL"
  , Ha = "COLLECTION:SET_CREATOR_NAME"
  , Za = "COLLECTION::ADD_LAUNCH"
  , Ja = "COLLECTION::UPDATE_LAUNCH"
  , Xa = "COLLECTION::DELETE_LAUNCH"
  , Qa = "COLLECTION::SET_CREATOR_NAME_GLOBAL"
  , Ia = "COLLECTION::SET_COLLECTION_NAME_GLOBAL"
  , Ka = "COLLECTION::UPDATE_LAUNCH_STATUS"
  , Ol = "COLLECTION::UPDATE_ARTWORK"
  , Da = "COLLECTION:: RESET_STATE";
BigInt.prototype.toJSON = function() {
    return this.toString()
}
;
const kl = e=>({
    type: ja,
    payload: {
        data: e
    }
})
  , Yt = (e,r)=>({
    type: Ga,
    payload: {
        id: e,
        data: r
    }
})
  , Rl = e=>({
    type: $a,
    payload: {
        data: e
    }
})
  , Fl = e=>({
    type: Ya,
    payload: {
        data: e
    }
})
  , La = e=>({
    type: Ha,
    payload: {
        data: e
    }
})
  , er = e=>({
    type: Qa,
    payload: {
        data: e
    }
})
  , tr = e=>({
    type: Ia,
    payload: {
        data: e
    }
})
  , Ul = (e,r)=>({
    type: Za,
    payload: {
        data: r,
        id: e
    }
})
  , Ht = (e,r,a)=>({
    type: Ja,
    payload: {
        data: a,
        cid: e,
        lid: r
    }
})
  , Ml = (e,r)=>({
    type: Xa,
    payload: {
        cid: e,
        lid: r
    }
})
  , Bl = (e,r,a)=>({
    type: Ka,
    payload: {
        data: a,
        cid: e,
        lid: r
    }
})
  , zl = ()=>({
    type: Da,
    payload: {}
})
  , ar = async(e,r,a)=>{
    const l = {
        telegram: a.telegram || "",
        discord: a.discord || "",
        twitter: a.twitter || "",
        medium: a.medium || "",
        dSCVR: a.dSCVR || "",
        distrikt: a.distrikt || "",
        additional: a.additional || ""
    }
      , o = {
        creator_name: a.creatorName || a.creatorNameNew,
        collection_name: a.collectionName,
        collection_tiny_description: a.collectionTinyDesc,
        collection_brief_description: a.collectionBriefDesc,
        collection_description: a.collectionDesc,
        website_url: a.websiteUrl,
        social_links: l,
        keywords: a.keywords,
        creator_royalty: parseFloat(a.royalty),
        royalty_receive_address: a.royaltyAddress,
        nft_receive_address: a.nftAddress,
        images: {
            avatar_url: a.hasOwnProperty("avatarUrlNew") ? a.avatarUrlNew : a.hasOwnProperty("avatarUrl") ? a.avatarUrl : "",
            collection_banner_url: a.hasOwnProperty("bannerImgUrlNew") ? a.bannerImgUrlNew : a.hasOwnProperty("bannerImgUrl") ? a.bannerImgUrl : "",
            homepage_banner_url: a.hasOwnProperty("homepageImgUrlNew") ? a.homepageImgUrlNew : a.hasOwnProperty("homepageImgUrl") ? a.homepageImgUrl : "",
            collection_page_image_url: a.hasOwnProperty("collectionImgUrlNew") ? a.collectionImgUrlNew : a.hasOwnProperty("collectionImgUrl") ? a.collectionImgUrl : ""
        }
    };
    let c;
    return r ? c = await e.updateCollection(r, o) : c = await e.createCollection(o),
    typeof c != "boolean" && (r = c[0].collection_id),
    r
}
;
async function Zt(e, r) {
    try {
        let a = [];
        for (let l = 0; l < e.length; l++)
            a.push(r(e[l], l, e));
        await Promise.all(a)
    } catch (a) {
        console.log("asyncForEach", a)
    }
}
const Wl = async e=>{
    try {
        const r = await e.getAllCollections()
          , a = []
          , l = [];
        let o = "";
        await Zt(r, async i=>{
            const h = [];
            await Zt(i.launches, async(u,y)=>{
                let d = {}, g = {}, x, _, N;
                if (u.launch_type == "BLIND_SALE")
                    d = await e.getBlindSale(u.launch_id),
                    _ = d.is_open_market_place_after_days_custom,
                    N = d.open_market_place_after_days;
                else if (u.launch_type == "AIRDROP_SALE") {
                    g = await e.getAirDropSale(u.launch_id);
                    let C = new Date().getTimezoneOffset();
                    C = C * 6e10,
                    x = ue(parseInt(g.launch_date_time) + C),
                    _ = g.is_open_market_place_after_days_custom,
                    N = g.number_of_mint
                }
                const T = u.launch_type == "BLIND_SALE" && parseInt(d.type_of_artwork) == 1 || u.launch_type == "AIRDROP_SALE" && parseInt(g.type_of_artwork) == 1 ? "1" : "2"
                  , O = u.launch_type == "BLIND_SALE" ? d.creator_share ? "2" : "1" : g.creator_share ? "2" : "1"
                  , S = u.launch_type == "BLIND_SALE" ? parseInt(d.creator_share_nft_retained).toString() : parseInt(g.creator_share_nft_retained).toString();
                h.push({
                    id: u.created_at,
                    launchId: u.launch_id,
                    launchStatus: u.launch_status,
                    launchType: u.launch_type == "BLIND_SALE" ? "1" : "2",
                    launchDate: u.launch_type == "BLIND_SALE" ? "" : x,
                    launchTime: u.launch_type == "BLIND_SALE" ? "" : x,
                    blindSaleId: u.launch_type == "BLIND_SALE" ? u.launch_id : "",
                    airDropSaleId: u.launch_type == "BLIND_SALE" ? "" : u.launch_id,
                    launchName: u.launch_name,
                    uploadingType: u.launch_type == "BLIND_SALE" ? parseInt(d.type_of_artwork).toString() : "1",
                    collectionSize: u.launch_type == "BLIND_SALE" ? parseInt(d.number_of_mints).toString() : parseInt(g.number_of_mint).toString(),
                    leftOvers: u.launch_type == "BLIND_SALE" ? d.leftovers : "1",
                    creatorShare: O,
                    priceCreatorShare: S,
                    zip: u.is_zip_upload ? "2" : "1",
                    zipUrl: u.zip_url,
                    metaDataUrl: u.metadata_url,
                    thumbnailZipUrl: T == "1" ? u.thumbnail_zip_url : "",
                    airdropNFT: u.is_air_drop_nft_enabled ? "2" : "1",
                    csvAirdrop: u.air_drop_id_list,
                    openMarketPlaceDays: _ ? "4" : parseInt(N).toString(),
                    openMarketPlaceDaysCustom: _ ? parseInt(N).toString() : "",
                    launchPay: u.launch_pay,
                    launchPaySubaccount: u.launch_pay_subaccount,
                    airdropShuffleAddress: u.to_shuffle.length > 0 ? u.to_shuffle[0] : !1
                })
            }
            ),
            l.push(i.creator_name),
            a.push({
                collectionTinyDesc: i.collection_tiny_description,
                collectionBriefDesc: i.collection_brief_description,
                collectionDesc: i.collection_description,
                collectionName: i.collection_name,
                creatorName: i.creator_name,
                id: i.created_at,
                royalty: i.creator_royalty,
                collectionId: i.collection_id,
                launches: h,
                websiteUrl: i.website_url,
                telegram: i.social_links.telegram,
                discord: i.social_links.discord,
                twitter: i.social_links.twitter,
                medium: i.social_links.medium,
                dSCVR: i.social_links.dSCVR,
                distrikt: i.social_links.distrikt,
                additional: i.social_links.additional,
                keywords: i.keywords,
                royaltyAddress: i.royalty_receive_address,
                nftAddress: i.nft_receive_address,
                avatarUrl: i.images.avatar_url,
                bannerImgUrl: i.images.collection_banner_url,
                collectionImgUrl: i.images.collection_page_image_url,
                homepageImgUrl: i.images.homepage_banner_url,
                collectionPay: i.collection_pay,
                collectionPaySubaccount: i.collection_pay_subaccount
            })
        }
        );
        let c = [];
        localStorage.getItem("_isAdmin") == "true" && (c = await e.getAllCollectionIdsGlobal());
        const s = [];
        await Zt(c, async i=>{
            s.push({
                collectionName: i.collection_name,
                creatorName: i.creator_name,
                id: i.created_at,
                collectionId: i.collection_id,
                created_at: i.created_at,
                updated_at: i.updated_at
            })
        }
        );
        const p = await e.getAllCreatorNames()
          , f = await e.getAllCollectionNames();
        return {
            allCollections: a,
            allCreatorNames: l,
            allCreatorNameGlobal: p,
            allCollectionNameGlobal: f,
            allCollectionsGlobal: s
        }
    } catch (r) {
        console.log(r)
    }
}
  , _t = async(e,r)=>{
    try {
        let a = await e.getCollection(r);
        a = a[0];
        const l = []
          , o = [];
        o.push(a.creator_name),
        l.push({
            collectionTinyDesc: a.collection_tiny_description,
            collectionBriefDesc: a.collection_brief_description,
            collectionDesc: a.collection_description,
            collectionName: a.collection_name,
            creatorName: a.creator_name,
            id: a.created_at,
            royalty: a.creator_royalty,
            collectionId: a.collection_id,
            websiteUrl: a.website_url,
            telegram: a.social_links.telegram,
            discord: a.social_links.discord,
            twitter: a.social_links.twitter,
            medium: a.social_links.medium,
            dSCVR: a.social_links.dSCVR,
            distrikt: a.social_links.distrikt,
            additional: a.social_links.additional,
            keywords: a.keywords,
            royaltyAddress: a.royalty_receive_address,
            nftAddress: a.nft_receive_address,
            avatarUrl: a.images.avatar_url,
            bannerImgUrl: a.images.collection_banner_url,
            collectionImgUrl: a.images.collection_page_image_url,
            homepageImgUrl: a.images.homepage_banner_url,
            collectionPay: a.collection_pay,
            collectionPaySubaccount: a.collection_pay_subaccount
        });
        const c = await e.getAllCreatorNames()
          , s = await e.getAllCollectionNames();
        return {
            allCollections: l,
            allCreatorNames: o,
            allCreatorNameGlobal: c,
            allCollectionNameGlobal: s
        }
    } catch {}
}
  , Ue = async(e,r)=>{
    try {
        const a = await e.getLaunchById(r)
          , l = [];
        let o = {}, c = {}, s, p, f;
        if (a.launch_type == "BLIND_SALE")
            o = a.blind_sale[0],
            p = o.is_open_market_place_after_days_custom,
            f = o.open_market_place_after_days;
        else if (a.launch_type == "AIRDROP_SALE") {
            c = a.air_drop_sale[0];
            let E = new Date().getTimezoneOffset();
            E = E * 6e10,
            s = ue(parseInt(c.launch_date_time) + E),
            p = c.is_open_market_place_after_days_custom,
            f = c.number_of_mint
        }
        const i = a.launch_type == "BLIND_SALE" && parseInt(o.type_of_artwork) == 1 || a.launch_type == "AIRDROP_SALE" && parseInt(c.type_of_artwork) == 1 ? "1" : "2"
          , h = a.launch_type == "BLIND_SALE" ? o.creator_share ? "2" : "1" : c.creator_share ? "2" : "1"
          , u = a.launch_type == "BLIND_SALE" ? parseInt(o.creator_share_nft_retained).toString() : parseInt(c.creator_share_nft_retained).toString();
        let y = []
          , d = []
          , g = []
          , x = [];
        i == "1" ? a.artworks.map(E=>{
            y.push({
                file: {
                    name: E.file_name,
                    type: E.file_name
                },
                price: parseFloat(E.price).toString(),
                artworkId: E.artwork_id,
                launchId: a.launch_id,
                other: parseInt(E.number_of_mint).toString() || 0,
                assetUrl: E.asset_url,
                assetUuid: E.asset_id
            }),
            x.push(Et(E.asset_id))
        }
        ) : (a.trait_artwork_categorywise.map(E=>{
            const b = [];
            let v = !1;
            E.trait_artworks.map(k=>{
                b.push({
                    file: {
                        name: k.file_name,
                        type: k.file_name
                    },
                    traitName: k.trait_name,
                    price: (parseInt(k.percentage) / 1e6).toFixed(2).toString(),
                    traitCategoryId: k.trait_category_id,
                    traitArtworkId: k.trait_artwork_id,
                    launchId: k.launch_id,
                    assetUrl: k.asset_url,
                    uuid: k.asset_id
                }),
                x.push(Et(k.asset_id)),
                v == !1 && k.asset_url == `https://ucarecdn.com/${yt}/` && (v = !0)
            }
            ),
            d.push({
                name: E.trait_category_name,
                files: b,
                launchId: E.launch_id,
                traitCategoryId: E.trait_category_id,
                index: parseInt(E.index),
                noneAdded: v
            })
        }
        ),
        d.length > 0 && d.sort(function(E, b) {
            return parseInt(E.index) < parseInt(b.index) ? -1 : parseInt(E.index) > parseInt(b.index) ? 1 : 0
        }));
        let _ = {}
          , N = {}
          , T = {}
          , O = {};
        if (a.launch_type == "BLIND_SALE" && o.price_group.map((E,b)=>{
            const v = `pricingGroup_${b}`;
            let k = new Date().getTimezoneOffset();
            k = k * 6e10;
            const q = ue(parseInt(E.launch_date_time) + k)
              , F = ue(parseInt(E.end_sale_time) + k)
              , j = [];
            E.is_bulk_pricing && E.bulk_pricing.length > 0 && E.bulk_pricing[0].options.map(B=>{
                j.push({
                    number: parseInt(B.quantity),
                    price: B.price.toString()
                })
            }
            ),
            E.hasOwnProperty("dsvr_wallet") && E.dsvr_wallet.length > 0 && (_[v] = E.dsvr_wallet[0].roles,
            N[v] = E.dsvr_wallet[0].wallet_list,
            T[v] = {
                roles: _[v],
                addresses: N[v]
            }),
            g.push({
                launchId: a.launch_id,
                blindSaleId: E.blind_sale_id,
                blindSaleGroupId: E.blind_sale_price_group_id,
                groupName: E.blind_sale_price_group_name,
                launchDate: q,
                launchTime: q,
                endSaleDate: F,
                endSaleTime: F,
                price: E.price,
                groupType: E.type_of_group,
                csvAirdrop: E.wallet_addresses.length > 0 ? E.wallet_addresses[0] : [],
                bulkPricing: E.is_bulk_pricing ? "2" : "1",
                bulkOptions: j,
                walletLimit: parseInt(E.individual_wallet_limit) != 99999 ? parseInt(E.individual_wallet_limit).toString() : "",
                groupLimit: parseInt(E.group_limit) != 99999 ? parseInt(E.group_limit).toString() : "",
                portalName: E.hasOwnProperty("dsvr_wallet") && E.dsvr_wallet.length > 0 ? E.dsvr_wallet[0].portal_name : "",
                dscvrUpdateTime: E.hasOwnProperty("dsvr_wallet") && E.dsvr_wallet.length > 0 ? parseInt(E.dsvr_wallet[0].updated_at) : -1,
                dscvrId: E.hasOwnProperty("dsvr_wallet") && E.dsvr_wallet.length > 0 ? E.dsvr_wallet[0].dscvr_wallet_list_id : ""
            })
        }
        ),
        a.hasOwnProperty("air_drop_dscvr_wallet_list") && a.air_drop_dscvr_wallet_list.length > 0) {
            const E = "Airdrop";
            _[E] = a.air_drop_dscvr_wallet_list[0].roles,
            N[E] = a.air_drop_dscvr_wallet_list[0].wallet_list,
            O[E] = {
                roles: _[E],
                addresses: N[E]
            }
        }
        a.zip_url != "" && x.push(Et(qa(a.zip_url))),
        i == "1" && a.thumbnail_zip_url != "" && x.push(Et(qa(a.thumbnail_zip_url)));
        const S = await Promise.all(x);
        let C = 0;
        S.forEach(E=>{
            C += E
        }
        ),
        C = Math.max(C, 2 * 1024 * 1024);
        const M = El(C)
          , V = yl(M);
        return l.push({
            id: a.created_at,
            launchId: a.launch_id,
            launchStatus: a.launch_status,
            launchType: a.launch_type == "BLIND_SALE" ? "1" : "2",
            launchDate: a.launch_type == "BLIND_SALE" ? "" : s,
            launchTime: a.launch_type == "BLIND_SALE" ? "" : s,
            blindSaleId: a.launch_type == "BLIND_SALE" ? a.launch_id : "",
            airDropSaleId: a.launch_type == "BLIND_SALE" ? "" : a.launch_id,
            launchName: a.launch_name,
            uploadingType: i,
            collectionSize: a.launch_type == "BLIND_SALE" ? parseInt(o.number_of_mints).toString() : parseInt(c.number_of_mint).toString(),
            leftOvers: a.launch_type == "BLIND_SALE" ? o.leftovers : "1",
            creatorShare: h,
            priceCreatorShare: u,
            zip: a.is_zip_upload ? "2" : "1",
            zipUrl: a.zip_url,
            metaDataUrl: a.metadata_url,
            thumbnailZipUrl: i == "1" ? a.thumbnail_zip_url : "",
            airdropNFT: a.is_air_drop_nft_enabled ? "2" : "1",
            csvAirdrop: a.air_drop_id_list,
            openMarketPlaceDays: p ? "4" : parseInt(f).toString(),
            openMarketPlaceDaysCustom: p ? parseInt(f).toString() : "",
            files: y,
            categories: d,
            groups: g,
            portalName: a.hasOwnProperty("air_drop_dscvr_wallet_list") && a.air_drop_dscvr_wallet_list.length > 0 ? a.air_drop_dscvr_wallet_list[0].portal_name : "",
            dscvrUpdateTime: a.hasOwnProperty("air_drop_dscvr_wallet_list") && a.air_drop_dscvr_wallet_list.length > 0 ? a.air_drop_dscvr_wallet_list[0].updated_at : -1,
            dscvrId: a.hasOwnProperty("air_drop_dscvr_wallet_list") && a.air_drop_dscvr_wallet_list.length > 0 ? a.air_drop_dscvr_wallet_list[0].dscvr_wallet_list_id : "",
            launchPay: a.launch_pay,
            launchPaySubaccount: a.launch_pay_subaccount,
            assetsTotalCost: V,
            assetsTotalSizeInMB: M,
            totalAssets: S.length,
            airdropShuffleAddress: a.to_shuffle.length > 0 ? a.to_shuffle[0] : !1
        }),
        {
            launchInfo: l,
            selectedRolesInfo: _,
            allAddressesInfo: N,
            dscvrDetailsInfo: T,
            dscvrDetailsAirdropInfo: O
        }
    } catch {}
}
;
async function wt(e, r) {
    try {
        let a = [];
        for (let l = 0; l < e.length; l++)
            a.push(r(e[l], l, e));
        await Promise.all(a)
    } catch (a) {
        console.log("asyncForEach", a)
    }
}
const rr = e=>{
    let r = !0;
    if (e.launchType == "1" && e.hasOwnProperty("groups") && e.groups.length > 0)
        e.groups.map((a,l)=>{
            if (!a.hasOwnProperty("groupName") || !a.hasOwnProperty("launchDate") || !a.hasOwnProperty("endSaleDate") || !a.hasOwnProperty("price") || !a.hasOwnProperty("groupType"))
                return r = !1,
                r
        }
        );
    else if (e.launchType == "2" && !(e.hasOwnProperty("launchName") && e.hasOwnProperty("launchDate") && e.launchDate != null && e.hasOwnProperty("launchTime") && e.launchTime != null))
        return r = !1,
        r;
    return r
}
  , nr = e=>{
    if (e.uploadingType == "2")
        return !0;
    let r = !1;
    return e.uploadingType == "1" && e.zip == "1" && e.hasOwnProperty("files") && e.files.length > 0 ? e.files.forEach(a=>{
        const l = a.type;
        l && l.includes("html") && (r = !0)
    }
    ) : e.uploadingType == "2" && e.hasOwnProperty("categories") && e.categories.length > 0 ? e.categories.map(a=>{
        a.files.map(l=>{
            if (l.hasOwnProperty("file")) {
                const c = l.file.type;
                c && c.includes("html") && (r = !0)
            }
        }
        )
    }
    ) : e.hasOwnProperty("isHtml1") && (r = e.isHtml1 == "true"),
    !(r && (e.hasOwnProperty("thumbnailZipUrlNew") ? e.thumbnailZipUrlNew : e.hasOwnProperty("thumbnailZipUrl") ? e.thumbnailZipUrl : "").length == 0)
}
  , lr = async(e,r,a,l,o,c)=>{
    if (!rr(a))
        throw "MISSING_DETAILS";
    if (!nr(a))
        throw "MISSING_THUMBNAIL";
    const s = new Date().getTimezoneOffset();
    let p;
    a.hasOwnProperty("airdropShuffleAddress") && a.airdropShuffleAddress == !0 ? p = a.hasOwnProperty("csvAirdropNew") ? gt(a.csvAirdropNew) : a.hasOwnProperty("csvAirdrop") ? gt(a.csvAirdrop) : [] : p = a.hasOwnProperty("csvAirdropNew") ? a.csvAirdropNew : a.hasOwnProperty("csvAirdrop") ? a.csvAirdrop : [];
    const f = {
        collection_id: r,
        launch_name: a.launchName,
        launch_type: a.launchType == "1" ? "BLIND_SALE" : a.launchType == "2" ? "AIRDROP_SALE" : "",
        is_air_drop_nft_enabled: a.hasOwnProperty("airdropNFT") ? a.airdropNFT != "1" : !1,
        air_drop_id_list: p,
        metadata_url: a.hasOwnProperty("metaDataUrlNew") ? a.metaDataUrlNew : a.hasOwnProperty("metaDataUrl") ? a.metaDataUrl : "",
        thumbnail_zip_url: a.hasOwnProperty("thumbnailZipUrlNew") ? a.thumbnailZipUrlNew : a.hasOwnProperty("thumbnailZipUrl") ? a.thumbnailZipUrl : ""
    }
      , i = await e.createLaunch(f);
    if (a.launchType == "1") {
        const h = {
            launch_id: i[0].launch_id,
            number_of_mints: a.hasOwnProperty("collectionSize") ? parseInt(a.collectionSize) : 0,
            leftovers: a.hasOwnProperty("leftOvers") ? a.leftOvers : "",
            creator_share: a.hasOwnProperty("creatorShare") ? a.creatorShare != "1" : !1,
            creator_share_nft_retained: a.hasOwnProperty("creatorShare") ? a.creatorShare == "1" ? 0 : parseInt(a.priceCreatorShare) : 0,
            type_of_artwork: parseInt(a.uploadingType),
            open_market_place_after_days: a.hasOwnProperty("openMarketPlaceDays") && a.openMarketPlaceDays != "" ? a.openMarketPlaceDays == "4" ? parseInt(a.openMarketPlaceDaysCustom) : parseInt(a.openMarketPlaceDays) : 0,
            is_open_market_place_after_days_custom: !!(a.hasOwnProperty("openMarketPlaceDays") && a.openMarketPlaceDays == "4")
        };
        await e.createBlindSale(h)
    } else {
        let h = a.launchDate.toDateString() + " " + a.launchTime.toTimeString()
          , u = Date.parse(h) * 1e6;
        u = u - s * 6e10;
        const y = {
            launch_id: i[0].launch_id,
            launch_date_time: u,
            open_market_place_after_days: a.hasOwnProperty("collectionSize") ? parseInt(a.collectionSize) : 0,
            is_open_market_place_after_days_custom: (a.hasOwnProperty("openMarketPlaceDays") && a.openMarketPlaceDays == "4",
            !0),
            creator_share: a.hasOwnProperty("creatorShare") ? a.creatorShare != "1" : !1,
            creator_share_nft_retained: a.hasOwnProperty("creatorShare") ? a.creatorShare == "1" ? 0 : parseInt(a.priceCreatorShare) : 0,
            type_of_artwork: parseInt(a.uploadingType)
        };
        await e.createAirDropSale(y)
    }
    if (a.launchType == "1" && a.hasOwnProperty("groups") && a.groups.length > 0 && (typeof c == "undefined" || c == 1)) {
        const h = [];
        a.groups.map((u,y)=>{
            let d = u.launchDate.toDateString() + " " + u.launchTime.toTimeString()
              , g = Date.parse(d) * 1e6;
            g = g - s * 6e10;
            let x = g;
            if (u.hasOwnProperty("endSaleDate")) {
                let V = u.endSaleDate.toDateString() + " " + u.endSaleTime.toTimeString();
                x = Date.parse(V) * 1e6,
                x = x - s * 6e10
            }
            let _ = [];
            u.hasOwnProperty("bulkOptions") && u.bulkOptions.map(V=>{
                _.push({
                    quantity: parseInt(V.number),
                    price: V.price.toString()
                })
            }
            );
            const N = `pricingGroup_${y}`;
            let T = []
              , O = [];
            const S = !!l[N];
            if (S && u.groupType == "2") {
                const V = l[N].roles;
                O = l[N].addresses,
                V && V.length > 0 && V.map(E=>{
                    T.push({
                        name: E.name,
                        id: parseInt(E.id)
                    })
                }
                )
            }
            const C = {
                launch_id: i[0].launch_id,
                portal_name: S ? u.portalName.replace(/^[ ]+|[ ]+$/g, "") : "",
                roles: T,
                wallet_list: O,
                wallet_list_type: "PriceGroup"
            }
              , M = {
                blind_sale_id: i[0].launch_id,
                blind_sale_price_group_name: u.groupName || "",
                launch_date_time: g,
                end_sale_time: x,
                price: u.hasOwnProperty("price") ? u.price : "",
                type_of_group: u.groupType,
                wallet_addresses: u.hasOwnProperty("csvAirdropNew") ? [u.csvAirdropNew] : u.hasOwnProperty("csvAirdrop") ? [u.csvAirdrop] : [],
                is_bulk_pricing: u.hasOwnProperty("bulkPricing") ? u.bulkPricing != "1" : !1,
                bulk_pricing: [{
                    number_of_options: u.hasOwnProperty("bulkOptions") ? u.bulkOptions.length : 0,
                    options: _
                }],
                individual_wallet_limit: u.hasOwnProperty("walletLimit") && u.walletLimit != "" ? parseInt(u.walletLimit) : 99999,
                group_limit: u.hasOwnProperty("groupLimit") && u.groupLimit != "" ? parseInt(u.groupLimit) : 99999,
                token_indexes: [],
                dsvr_wallet: S && u.groupType == "2" ? [C] : []
            };
            h.push(M)
        }
        ),
        await e.createBlindSalePriceGroupBulk(i[0].launch_id, h)
    }
    if (Object.keys(o).length > 0) {
        const h = "Airdrop";
        let u = []
          , y = [];
        const d = !!(a.hasOwnProperty("portalName") && a.portalName.replace(/^[ ]+|[ ]+$/g, "").length > 0);
        if (d) {
            const g = o[h].roles;
            y = o[h].addresses,
            g && g.length > 0 && g.map(_=>{
                u.push({
                    name: _.name,
                    id: parseInt(_.id)
                })
            }
            );
            const x = {
                launch_id: i[0].launch_id,
                portal_name: d ? a.portalName.replace(/^[ ]+|[ ]+$/g, "") : "",
                roles: u,
                wallet_list: y,
                wallet_list_type: "AirDrop",
                blind_sale_price_group_id: []
            };
            await e.createDscvrWalletList(x)
        }
    }
    if (a.hasOwnProperty("airdropShuffleAddress") && await e.updateLaunchSuffle(i[0].launch_id, a.airdropShuffleAddress),
    typeof c == "undefined") {
        if (a.zip == "1" && a.hasOwnProperty("files") && a.files.length > 0) {
            const h = [];
            a.files.map(u=>{
                const y = {
                    launch_id: i[0].launch_id,
                    asset_id: u.uuid || "",
                    asset_url: u.url || "",
                    launch_type: a.launchType == "1" ? "BLIND_SALE" : a.launchType == "2" ? "AIRDROP_SALE" : "",
                    number_of_mint: parseInt(u.other) || 0,
                    price: u.hasOwnProperty("price") ? u.price.toString() : "0",
                    file_name: u.file.name
                };
                h.push(y)
            }
            ),
            await e.createArtworkBulk(h)
        }
        if (a.hasOwnProperty("zip") && a.zip == "2") {
            const h = a.hasOwnProperty("zipUrlNew") ? a.zipUrlNew : a.hasOwnProperty("zipUrl") ? a.zipUrl : "";
            await e.saveZipUploadUrl(i[0].launch_id, !0, h)
        } else
            await e.saveZipUploadUrl(i[0].launch_id, !1, "");
        a.hasOwnProperty("categories") && a.categories.length > 0 && await wt(a.categories, async(h,u)=>{
            const y = {
                launch_id: i[0].launch_id,
                trait_category_name: h.name,
                index: u
            }
              , d = await e.createTraitCategory(y)
              , g = [];
            await wt(h.files, async x=>{
                const _ = {
                    trait_category_id: d[0].trait_category_id,
                    launch_id: i[0].launch_id,
                    asset_id: x.uuid || "",
                    asset_url: x.url || "",
                    percentage: x.hasOwnProperty("price") ? parseInt(parseFloat(x.price) * 1e6) : 0,
                    file_name: x.file.name,
                    trait_name: x.traitName || ""
                };
                g.push(_)
            }
            ),
            await e.createTraitArtworkBulk(g)
        }
        )
    }
    return i[0].launch_id
}
  , or = async(e,r,a,l,o,c,s)=>{
    if (!rr(l))
        throw "MISSING_DETAILS";
    if (!nr(l))
        throw "MISSING_THUMBNAIL";
    const p = new Date().getTimezoneOffset();
    let f;
    l.hasOwnProperty("airdropShuffleAddress") && l.airdropShuffleAddress == !0 ? f = l.hasOwnProperty("csvAirdropNew") ? gt(l.csvAirdropNew) : l.hasOwnProperty("csvAirdrop") ? gt(l.csvAirdrop) : [] : f = l.hasOwnProperty("csvAirdropNew") ? l.csvAirdropNew : l.hasOwnProperty("csvAirdrop") ? l.csvAirdrop : [];
    const i = {
        collection_id: r,
        launch_name: l.launchName,
        launch_type: l.launchType == "1" ? "BLIND_SALE" : l.launchType == "2" ? "AIRDROP_SALE" : "",
        is_air_drop_nft_enabled: l.hasOwnProperty("airdropNFT") ? l.airdropNFT != "1" : !1,
        air_drop_id_list: f,
        metadata_url: l.hasOwnProperty("metaDataUrlNew") ? l.metaDataUrlNew : l.hasOwnProperty("metaDataUrl") ? l.metaDataUrl : "",
        thumbnail_zip_url: l.hasOwnProperty("thumbnailZipUrlNew") ? l.thumbnailZipUrlNew : l.hasOwnProperty("thumbnailZipUrl") ? l.thumbnailZipUrl : ""
    };
    if (await e.updateLaunch(a, i),
    l.launchType == "1") {
        const h = {
            launch_id: a,
            number_of_mints: l.hasOwnProperty("collectionSize") ? parseInt(l.collectionSize) : 0,
            leftovers: l.hasOwnProperty("leftOvers") ? l.leftOvers : "",
            creator_share: l.hasOwnProperty("creatorShare") ? l.creatorShare != "1" : !1,
            creator_share_nft_retained: l.hasOwnProperty("creatorShare") ? l.creatorShare == "1" ? 0 : parseInt(l.priceCreatorShare) : 0,
            type_of_artwork: parseInt(l.uploadingType),
            open_market_place_after_days: l.hasOwnProperty("openMarketPlaceDays") && l.openMarketPlaceDays != "" ? l.openMarketPlaceDays == "4" ? parseInt(l.openMarketPlaceDaysCustom) : parseInt(l.openMarketPlaceDays) : 0,
            is_open_market_place_after_days_custom: !!(l.hasOwnProperty("openMarketPlaceDays") && l.openMarketPlaceDays == "4")
        };
        l.blindSaleId != "" ? await e.updateBlindSale(a, h) : await e.createBlindSale(h)
    } else {
        let h = l.launchDate.toDateString() + " " + l.launchTime.toTimeString()
          , u = Date.parse(h) * 1e6;
        u = u - p * 6e10;
        const y = {
            launch_id: a,
            launch_date_time: u,
            open_market_place_after_days: l.hasOwnProperty("collectionSize") ? parseInt(l.collectionSize) : 0,
            is_open_market_place_after_days_custom: (l.hasOwnProperty("openMarketPlaceDays") && l.openMarketPlaceDays == "4",
            !0),
            creator_share: l.hasOwnProperty("creatorShare") ? l.creatorShare != "1" : !1,
            creator_share_nft_retained: l.hasOwnProperty("creatorShare") ? l.creatorShare == "1" ? 0 : parseInt(l.priceCreatorShare) : 0,
            type_of_artwork: parseInt(l.uploadingType)
        };
        l.airDropSaleId != "" ? await e.updateAirDropSale(a, y) : await e.createAirDropSale(y)
    }
    if (l.launchType == "1" && l.hasOwnProperty("groups") && l.groups.length > 0 && (typeof s == "undefined" || s == 1)) {
        const h = []
          , u = [];
        l.groups.map((y,d)=>{
            let g = new Date().getTimezoneOffset()
              , x = y.launchDate.toDateString() + " " + y.launchTime.toTimeString()
              , _ = Date.parse(x) * 1e6;
            _ = _ - g * 6e10;
            let N = _
              , T = y.endSaleDate.toDateString() + " " + y.endSaleTime.toTimeString();
            N = Date.parse(T) * 1e6,
            N = N - g * 6e10;
            let O = [];
            y.hasOwnProperty("bulkOptions") && y.bulkOptions.map(v=>{
                O.push({
                    quantity: parseInt(v.number),
                    price: v.price.toString()
                })
            }
            );
            const S = `pricingGroup_${d}`;
            let C = []
              , M = [];
            const V = !!o[S];
            if (V && y.groupType == "2") {
                const v = o[S].roles;
                M = o[S].addresses,
                v && v.length > 0 && v.map(k=>{
                    C.push({
                        name: k.name,
                        id: parseInt(k.id)
                    })
                }
                )
            }
            const E = {
                launch_id: a,
                portal_name: V ? y.portalName.replace(/^[ ]+|[ ]+$/g, "") : "",
                roles: C,
                wallet_list: M,
                wallet_list_type: "PriceGroup"
            }
              , b = {
                blind_sale_id: a,
                blind_sale_price_group_name: y.groupName || "",
                launch_date_time: _,
                end_sale_time: N,
                price: y.hasOwnProperty("price") ? y.price : "",
                type_of_group: y.groupType,
                wallet_addresses: y.hasOwnProperty("csvAirdropNew") ? [y.csvAirdropNew] : y.hasOwnProperty("csvAirdrop") ? [y.csvAirdrop] : [],
                is_bulk_pricing: y.hasOwnProperty("bulkPricing") ? y.bulkPricing != "1" : !1,
                bulk_pricing: [{
                    number_of_options: y.hasOwnProperty("bulkOptions") ? y.bulkOptions.length : 0,
                    options: O
                }],
                individual_wallet_limit: y.hasOwnProperty("walletLimit") && y.walletLimit != "" ? parseInt(y.walletLimit) : 99999,
                group_limit: y.hasOwnProperty("groupLimit") && y.groupLimit != "" ? parseInt(y.groupLimit) : 99999,
                token_indexes: [],
                dsvr_wallet: V && y.groupType == "2" ? [E] : []
            };
            y.hasOwnProperty("blindSaleGroupId") ? u.push(e.updateBlindSalePriceGroup(y.blindSaleGroupId, b)) : h.push(b)
        }
        ),
        await e.createBlindSalePriceGroupBulk(a, h),
        await Promise.all(u)
    }
    if (Object.keys(c).length > 0) {
        const h = "Airdrop";
        let u = []
          , y = [];
        const d = !!(l.hasOwnProperty("portalName") && l.portalName.replace(/^[ ]+|[ ]+$/g, "").length > 0);
        if (d) {
            const g = c[h].roles;
            y = c[h].addresses,
            g && g.length > 0 && g.map(_=>{
                u.push({
                    name: _.name,
                    id: parseInt(_.id)
                })
            }
            );
            const x = {
                launch_id: a,
                portal_name: d ? l.portalName.replace(/^[ ]+|[ ]+$/g, "") : "",
                roles: u,
                wallet_list: y,
                wallet_list_type: "AirDrop",
                blind_sale_price_group_id: []
            };
            l.hasOwnProperty("dscvrId") && l.dscvrId != "" ? await e.updateDscvrWalletList(l.dscvrId, x) : await e.createDscvrWalletList(x)
        }
    }
    if (l.hasOwnProperty("airdropShuffleAddress") && await e.updateLaunchSuffle(a, l.airdropShuffleAddress),
    typeof s == "undefined") {
        if (l.zip == "1" && l.hasOwnProperty("files") && l.files.length > 0) {
            const h = []
              , u = [];
            l.files.map(y=>{
                const d = {
                    launch_id: a,
                    asset_id: y.uuid || "",
                    asset_url: y.url || "",
                    launch_type: l.launchType == "1" ? "BLIND_SALE" : l.launchType == "2" ? "AIRDROP_SALE" : "",
                    price: y.hasOwnProperty("price") ? y.price.toString() : "0",
                    number_of_mint: parseInt(y.other) || 0,
                    file_name: y.file.name
                };
                y.hasOwnProperty("artworkId") ? h.push(e.updateArtwork(y.artworkId, d)) : u.push(d)
            }
            ),
            await Promise.all(h),
            await e.createArtworkBulk(u)
        }
        if (l.hasOwnProperty("zip") && l.zip == "2") {
            const h = l.hasOwnProperty("zipUrlNew") ? l.zipUrlNew : l.hasOwnProperty("zipUrl") ? l.zipUrl : "";
            await e.saveZipUploadUrl(a, !0, h)
        } else
            await e.saveZipUploadUrl(a, !1, "");
        l.hasOwnProperty("categories") && l.categories.length > 0 && await wt(l.categories, async(h,u)=>{
            const y = {
                launch_id: a,
                trait_category_name: h.name,
                index: u
            };
            let d;
            h.hasOwnProperty("traitCategoryId") ? d = await e.updateTraitCategory(h.traitCategoryId, y) : d = await e.createTraitCategory(y);
            const g = []
              , x = [];
            let _ = !1;
            await wt(h.files, async N=>{
                const T = {
                    trait_category_id: h.hasOwnProperty("traitCategoryId") ? h.traitCategoryId : d[0].trait_category_id,
                    launch_id: a,
                    asset_id: N.uuid || "",
                    asset_url: N.hasOwnProperty("assetUrl") ? N.assetUrl : N.hasOwnProperty("url") ? N.url : "",
                    percentage: N.hasOwnProperty("price") ? parseInt(parseFloat(N.price) * 1e6) : 0,
                    file_name: N.file.name,
                    trait_name: N.traitName || ""
                };
                N.hasOwnProperty("traitArtworkId") ? g.push(e.updateTraitArtwork(N.traitArtworkId, T)) : x.push(T),
                N.uuid == yt && (_ = !0)
            }
            ),
            await Promise.all(g),
            await e.createTraitArtworkBulk(x)
        }
        )
    }
}
  , sr = "ROLE::SET_ROLES"
  , cr = "ROLE::SET_SELECTED_ROLES"
  , ir = "ROLE::REMOVE_ROLE"
  , mr = "ROLE::SET_ADDRESSES"
  , ur = "ROLE::SET_DSCVR_DETAILS"
  , dr = "ROLE::SET_DSCVR_DETAILS_AIRDROP"
  , Jt = (e,r)=>({
    type: sr,
    payload: {
        key: e,
        data: r
    }
})
  , at = (e,r)=>({
    type: cr,
    payload: {
        key: e,
        data: r
    }
})
  , Xt = (e,r)=>({
    type: ir,
    payload: {
        key: e,
        id: r
    }
})
  , rt = (e,r)=>({
    type: mr,
    payload: {
        key: e,
        data: r
    }
})
  , Qt = (e,r)=>({
    type: ur,
    payload: {
        key: e,
        data: r
    }
})
  , bt = (e,r)=>({
    type: dr,
    payload: {
        key: e,
        data: r
    }
})
  , It = async(e,r,a,l,o,c,s)=>{
    if (!r)
        return W.NotificationManager.error("Please enter portal name."),
        !1;
    if (r = r.replace(/^[ ]+|[ ]+$/g, ""),
    o(l, []),
    e && (c(l, []),
    s(l, [])),
    !r)
        return W.NotificationManager.error("Please enter portal name."),
        !1;
    const p = await a.get_portal(r);
    if (p.result.length > 0) {
        const f = parseInt(p.result[0].id)
          , i = await a.get_portal_roles(f);
        return o(l, i),
        !0
    } else
        return o(l, []),
        c(l, []),
        s(l, []),
        W.NotificationManager.info("No roles found. Please enter another portal."),
        !1
}
  , Vl = async(e,r,a,l)=>{
    const o = a[r] || [];
    let c = [];
    for (let f = 0; f < o.length; f++)
        c.push(e.get_role_members(parseInt(o[f].id)));
    const s = await Promise.all(c);
    let p = [];
    s.map(f=>{
        f.map(i=>{
            p.push(i.user.id.toString())
        }
        )
    }
    ),
    l(r, p)
}
  , pr = ({values: e, dscvrActor: r, group: a, groupIndex: l, groupKey: o, setRoles: c, setSelectedRoles: s, setAddresses: p, setLoader: f, setStep: i})=>t.createElement(n, {
    container: !0,
    spacing: 2,
    mt: 1,
    ml: 2,
    mr: 2
}, t.createElement(n, {
    container: !0,
    item: !0,
    xs: 12
}, t.createElement(m, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2",
    sx: {
        fontWeight: "bold"
    }
}, "Enter a portal name")), t.createElement(n, {
    container: !0,
    item: !0,
    xs: 12
}, t.createElement(I, {
    name: o == "Airdrop" ? "portalName" : `${a}.portalName`,
    component: ee,
    label: "Portal Name",
    placeholder: "Portal Name",
    fullWidth: !0,
    size: "small",
    required: !0
})), t.createElement(n, {
    container: !0,
    item: !0,
    xs: 12
}, t.createElement(R, {
    size: "small",
    variant: "contained",
    onClick: async()=>{
        try {
            f(!0);
            const h = o == "Airdrop" ? e.portalName : e.groups[l].portalName;
            await It(1, h, r, o, c, s, p) && i(2),
            f(!1)
        } catch {} finally {
            f(!1)
        }
    }
}, "Import")))
  , hr = ({dscvrActor: e, groupKey: r, allRoles: a, selectedRoles: l, setSelectedRoles: o, setAddresses: c, setLoader: s, setStep: p, removeRole: f})=>{
    const i = (y,d)=>{
        o(r, d)
    }
      , h = t.createElement(Mn, {
        fontSize: "small"
    })
      , u = t.createElement(Bn, {
        fontSize: "small"
    });
    return t.createElement(t.Fragment, null, a[r] && a[r].length > 0 ? t.createElement(n, {
        container: !0,
        spacing: 2,
        mt: 1,
        ml: 2,
        mr: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(m, {
        id: "modal-modal-title",
        variant: "h6",
        component: "h2",
        sx: {
            fontWeight: "bold"
        }
    }, "Select roles")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(Fn, {
        multiple: !0,
        size: "small",
        options: a[r] || [],
        disableCloseOnSelect: !0,
        getOptionLabel: y=>y.name,
        value: l[r] || [],
        renderTags: y=>y.map(d=>t.createElement(xa, {
            key: parseInt(d.id),
            label: d.name,
            onDelete: ()=>{
                f(r, parseInt(d.id))
            }
        })),
        isOptionEqualToValue: (y,d)=>parseInt(y.id) === parseInt(d.id),
        renderOption: (y,d,{selected: g})=>t.createElement("li", U({}, y), t.createElement(Un, {
            icon: h,
            checkedIcon: u,
            style: {
                marginRight: 8
            },
            checked: g
        }), d.name),
        style: {
            width: 500
        },
        onChange: i,
        renderInput: y=>t.createElement(ua, Y(U({}, y), {
            variant: "outlined",
            label: "Roles",
            placeholder: "Add role"
        }))
    }))) : t.createElement(m, {
        sx: {
            ml: 3
        }
    }, "No Roles for entered portal"), t.createElement(fe, {
        direction: "row",
        spacing: 3,
        justifyContent: "center",
        alignItems: "center",
        sx: {
            mt: 3,
            mx: "auto"
        }
    }, t.createElement(R, {
        variant: "outlined",
        onClick: ()=>{
            p(1)
        }
        ,
        size: "small"
    }, "Back"), t.createElement(R, {
        size: "small",
        variant: "contained",
        onClick: async()=>{
            try {
                s(!0),
                await Vl(e, r, l, c),
                p(3),
                s(!1)
            } catch {} finally {
                s(!1)
            }
        }
    }, "Import Addresses")))
}
  , fr = ({groupKey: e, selectedRoles: r, allAddresses: a, setDscvrDetails: l, setDscvrDetailsAirdrop: o, setStep: c, handleClose: s})=>{
    const p = ({index: i, style: h})=>t.createElement("div", {
        className: i % 2 ? "ListItemOdd" : "ListItemEven",
        style: h
    }, a[e][i])
      , f = ()=>{
        const i = {
            roles: r[e] || [],
            addresses: a[e] || []
        };
        e == "Airdrop" ? o(e, i) : l(e, i),
        s()
    }
    ;
    return t.createElement(t.Fragment, null, a[e] && a[e].length > 0 ? t.createElement(n, {
        container: !0,
        spacing: 2,
        ml: 2,
        mt: 1,
        mr: 2,
        mb: 1
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(m, {
        id: "modal-modal-title",
        variant: "h6",
        component: "h2",
        sx: {
            fontWeight: "bold"
        }
    }, "Addresses")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        sx: {
            height: `${Math.min(a[e].length * 30, 300)}px`
        }
    }, t.createElement(zn, null, ({height: i, width: h})=>t.createElement(Wn, {
        className: "List",
        width: h,
        height: parseInt(`${Math.min(a[e].length * 30, 300)}`),
        itemCount: a[e].length,
        itemSize: 30
    }, p)))) : t.createElement(m, {
        variant: "subtitle2",
        sx: {
            ml: 3,
            mt: 1
        }
    }, "No Addresses for selected roles"), t.createElement(fe, {
        direction: "row",
        spacing: 3,
        justifyContent: "center",
        alignItems: "center",
        sx: {
            mt: 3,
            mx: "auto"
        }
    }, a[e] && a[e].length > 0 && t.createElement(m, null, "Total: ", a[e].length), t.createElement(R, {
        variant: "outlined",
        onClick: ()=>{
            c(2)
        }
        ,
        size: "small"
    }, "Back"), t.createElement(R, {
        size: "small",
        variant: "contained",
        onClick: async()=>{
            f()
        }
    }, "Confirm")))
}
  , yr = ({values: e, actor: r, group: a, groupIndex: l, groupKey: o, setRoles: c, selectedRoles: s, setSelectedRoles: p, setAddresses: f, setLoader: i, setStep: h, setDscvrDetails: u, setDscvrDetailsAirdrop: y, handleClose: d})=>{
    const g = async()=>{
        try {
            i(!0),
            e.groups[l].hasOwnProperty("blindSaleGroupId") && await r.deleteDscvrWalletListByBlindSalePriceGroupId(e.groups[l].blindSaleGroupId),
            W.NotificationManager.success("DSCVR wallet deleted successfully"),
            delete e.groups[l].portalName,
            delete e.groups[l].dscvrUpdateTime,
            delete e.groups[l].dscvrId,
            c(o, []),
            p(o, []),
            f(o, []),
            u(o, []),
            d(),
            i(!1)
        } catch {
            W.NotificationManager.error("Some error occurred. Please try again")
        } finally {
            i(!1)
        }
    }
      , x = async()=>{
        try {
            i(!0),
            e.hasOwnProperty("launchId") && await r.deleteDscvrWalletListAirDropBylaunchId(e.launchId),
            W.NotificationManager.success("DSCVR wallet deleted successfully"),
            delete e.portalName,
            delete e.dscvrUpdateTime,
            delete e.dscvrId,
            c(o, []),
            p(o, []),
            f(o, []),
            y(o, []),
            d(),
            i(!1)
        } catch {
            W.NotificationManager.error("Some error occurred. Please try again")
        } finally {
            i(!1)
        }
    }
    ;
    return t.createElement(n, {
        container: !0,
        spacing: 2,
        mt: 1,
        ml: 2,
        mr: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 4
    }, t.createElement(m, {
        id: "modal-modal-title",
        variant: "h6",
        component: "h2",
        sx: {
            fontWeight: "bold"
        }
    }, "Portal Name")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 8
    }, t.createElement(I, {
        name: o == "Airdrop" ? "portalName" : `${a}.portalName`,
        component: ee,
        label: "Portal Name",
        placeholder: "Portal Name",
        disabled: !0,
        fullWidth: !0,
        size: "small"
    })), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 4
    }, t.createElement(m, {
        id: "modal-modal-title",
        variant: "h6",
        component: "h2",
        sx: {
            fontWeight: "bold"
        }
    }, "Selected Roles")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 8
    }, s[o] && s[o].length > 0 ? s[o].map((_,N)=>t.createElement(xa, {
        key: parseInt(_.id),
        label: _.name
    })) : t.createElement(m, {
        variant: "subtitle2",
        sx: {
            mt: .75
        }
    }, "No roles selected")), o == "Airdrop" ? e.hasOwnProperty("dscvrUpdateTime") && e.hasOwnProperty("dscvrId") && e.dscvrId != "" && t.createElement(m, {
        variant: "subtitle2",
        sx: {
            ml: 2,
            mt: 1
        }
    }, "Last Updated: \xA0", ue(e.dscvrUpdateTime).toUTCString().replace("GMT", "UTC")) : e.groups[l].hasOwnProperty("dscvrUpdateTime") && e.hasOwnProperty("dscvrId") && e.dscvrId != "" && t.createElement(m, {
        variant: "subtitle2",
        sx: {
            ml: 2,
            mt: 1
        }
    }, "Last Updated: \xA0", ue(e.groups[l].dscvrUpdateTime).toUTCString().replace("GMT", "UTC")), t.createElement(fe, {
        direction: "row",
        spacing: 3,
        justifyContent: "center",
        alignItems: "center",
        sx: {
            mt: 3,
            mx: "auto"
        }
    }, t.createElement(R, {
        variant: "outlined",
        onClick: ()=>{
            h(1)
        }
        ,
        size: "small",
        disabled: e.hasOwnProperty("launchStatus") && e.launchStatus != "INITIATED" && localStorage.getItem("_fromWhichUser") == "user"
    }, "Edit Portal"), t.createElement(R, {
        variant: "outlined",
        onClick: ()=>{
            o == "Airdrop" ? x() : g()
        }
        ,
        size: "small",
        disabled: e.hasOwnProperty("launchStatus") && e.launchStatus != "INITIATED" && localStorage.getItem("_fromWhichUser") == "user"
    }, "Delete"), t.createElement(R, {
        size: "small",
        variant: "contained",
        onClick: ()=>{
            h(2)
        }
        ,
        disabled: e.hasOwnProperty("launchStatus") && e.launchStatus != "INITIATED" && localStorage.getItem("_fromWhichUser") == "user"
    }, "Update Addresses")))
}
  , Me = ({name: e})=>t.createElement(I, {
    name: e,
    subscription: {
        touched: !0,
        error: !0
    },
    render: ({meta: {touched: r, error: a}})=>r && a ? t.createElement("span", null, a) : null
})
  , ql = (e,r,a)=>{
    e.length > 4 && e.value.splice(4, e.value.length - 4),
    e.length == 0 ? (e.push({
        number: 1,
        canDelete: 0,
        price: r.groups[a].hasOwnProperty("price") ? Number(r.groups[a].price) : ""
    }),
    e.push({
        number: 5,
        canDelete: 0,
        price: r.groups[a].hasOwnProperty("price") ? Number(r.groups[a].price) : ""
    }),
    e.push({
        number: 10,
        canDelete: 0,
        price: r.groups[a].hasOwnProperty("price") ? Number(r.groups[a].price) : ""
    }),
    e.push({
        number: 20,
        canDelete: 0,
        price: r.groups[a].hasOwnProperty("price") ? Number(r.groups[a].price) : ""
    })) : e.length > 0 && (e.value[0].price = r.groups[a].hasOwnProperty("price") && r.groups[a].price != "" ? Number(r.groups[a].price) : Number(e.value[0].price))
}
  , jl = ({isOpen: e, values: r, group: a, groupKey: l, groupIndex: o, setToggleDSCVRUser: c, actor: s, dscvrActor: p, allRoles: f, selectedRoles: i, setRoles: h, setSelectedRoles: u, removeRole: y, allAddresses: d, setAddresses: g, dscvrDetails: x, setDscvrDetails: _})=>{
    const [N,T] = w.exports.useState(!1)
      , [O,S] = w.exports.useState(x[l] ? 0 : 1)
      , C = ()=>c(!1)
      , M = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        bgcolor: "#fff",
        borderRadius: 2,
        borderBottom: "4px solid #0FC89F",
        boxShadow: 24,
        p: 4,
        pt: 2
    };
    return w.exports.useEffect(async()=>{
        try {
            T(!0),
            !!(r.groups[o].hasOwnProperty("portalName") && r.groups[o].portalName.replace(/^[ ]+|[ ]+$/g, "").length > 0) && !f[l] && await It(0, r.groups[o].portalName, p, l, h, u, g),
            T(!1)
        } catch {} finally {
            T(!1)
        }
    }
    , []),
    t.createElement(Ke, {
        open: e,
        onClose: C,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        closeonblur: "true"
    }, N ? t.createElement(Ta, {
        open: N
    }, t.createElement(we, {
        sx: {
            color: "#fff"
        }
    })) : t.createElement(J, {
        sx: M
    }, t.createElement(n, {
        container: !0,
        spacing: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 11
    }, t.createElement(m, {
        variant: "h6"
    }, "Add DSCVR users")), t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(De, {
        size: "small",
        sx: {
            ml: 4,
            mt: -1
        }
    }, t.createElement(Na, {
        className: "action-hover",
        onClick: C
    })))), O == 0 && t.createElement(yr, {
        values: r,
        actor: s,
        dscvrActor: p,
        group: a,
        groupIndex: o,
        groupKey: l,
        allRoles: f,
        setRoles: h,
        selectedRoles: i,
        setSelectedRoles: u,
        setAddresses: g,
        setLoader: T,
        setStep: S,
        removeRole: y,
        setDscvrDetails: _,
        handleClose: C
    }), O == 1 && t.createElement(pr, {
        values: r,
        dscvrActor: p,
        group: a,
        groupIndex: o,
        groupKey: l,
        allRoles: f,
        setRoles: h,
        setSelectedRoles: u,
        setAddresses: g,
        setLoader: T,
        setStep: S,
        handleClose: C
    }), O == 2 && t.createElement(hr, {
        values: r,
        dscvrActor: p,
        group: a,
        groupIndex: o,
        groupKey: l,
        allRoles: f,
        setRoles: h,
        selectedRoles: i,
        setSelectedRoles: u,
        setAddresses: g,
        setLoader: T,
        setStep: S,
        removeRole: y,
        handleClose: C
    }), O == 3 && t.createElement(fr, {
        values: r,
        dscvrActor: p,
        group: a,
        groupIndex: o,
        groupKey: l,
        allRoles: f,
        setRoles: h,
        selectedRoles: i,
        setSelectedRoles: u,
        allAddresses: d,
        setAddresses: g,
        dscvrDetails: x,
        setDscvrDetails: _,
        setLoader: T,
        setStep: S,
        handleClose: C
    }))))
}
  , Gl = ({group: e, groupIndex: r, values: a, actor: l, dscvrActor: o, allRoles: c, selectedRoles: s, setRoles: p, setSelectedRoles: f, removeRole: i, allAddresses: h, setAddresses: u, dscvrDetails: y, setDscvrDetails: d})=>{
    const [g,x] = w.exports.useState(!0)
      , [_,N] = w.exports.useState(!0)
      , [T,O] = w.exports.useState(!1)
      , [S,C] = w.exports.useState(!1)
      , M = `pricingGroup_${r}`
      , V = E=>localStorage.getItem("_isAdmin") === "true" ? !1 : re().diff(re(E), "days") > -2;
    return t.createElement(J, {
        m: 1
    }, g ? t.createElement(n, {
        item: !0,
        container: !0
    }, t.createElement(n, {
        item: !0,
        container: !0,
        spacing: 2,
        xs: 12
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Group Name"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        sm: 6
    }, t.createElement(I, {
        name: `${e}.groupName`,
        component: ee,
        placeholder: "Name of your pricing group",
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: "groupName"
    })))), t.createElement(n, {
        item: !0,
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(m, null, "30 Characters"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Group Start Date"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Group Start Time (UTC)"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(Bt, {
        label: "Launch Date",
        name: `${e}.launchDate`,
        required: !0,
        margin: "normal",
        variant: "inline",
        format: "dd-mm-yyyy",
        shouldDisableDate: V
    })), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(zt, {
        label: "Launch Time",
        name: `${e}.launchTime`
    })))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        container: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Group End Date"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Group End Time (UTC)"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(Bt, {
        label: "End Sale Date",
        name: `${e}.endSaleDate`,
        required: !0,
        minDate: a.groups[r].launchDate,
        margin: "normal",
        variant: "inline",
        format: "dd-mm-yyyy"
    })), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(zt, {
        label: "End Sale Time",
        name: `${e}.endSaleTime`,
        validate: ve()
    })), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: `${e}.endSaleDate`
    })))), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, fl(a.groups[r])))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Price (ICP)"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(I, {
        name: `${e}.price`,
        component: ee,
        validate: Fa(.001),
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: `${e}.price`
    }))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Public/Private"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "Select public if everyone should be included in this pricing group. Select private if you want to grant exclusive access to a list of wallet addresses.")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(_e, {
        name: `${e}.groupType`,
        label: "Group Type",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, "Public"), t.createElement(G, {
        value: "2"
    }, "Private"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2,
        alignItems: "center"
    }, a.groups[r].hasOwnProperty("groupType") && a.groups[r].groupType == "2" && t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: `${e}.airdropNFTFile`,
        label: "Upload .CSV List",
        accept: ".csv",
        size: "small",
        hasModal: !0,
        title: "Upload CSV Info",
        uploadDone: a.groups[r].hasOwnProperty("csvAirdropNew") || a.groups[r].hasOwnProperty("csvAirdrop") && a.groups[r].csvAirdrop.length > 0,
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure the CSV file adheres to the example format provided below. Please download the template below for your reference.")), a.groups[r].hasOwnProperty("groupType") && a.groups[r].groupType == "2" && t.createElement(n, {
            item: !0
        }, t.createElement(R, null, t.createElement("a", {
            href: "https://ucarecdn.com/453b49bc-8f2a-4906-8efd-b8010464a5a2/WalletAddressExample.csv",
            download: "airdropAddress.csv",
            target: "_blank",
            style: {
                textDecoration: "none",
                color: "#09D8AA"
            }
        }, "Download CSV Template"), " ")))),
        onChange: async E=>{
            const b = await Gt(E[0])
              , v = [];
            b.reduce((q,F)=>(F.length !== 63 && F.length !== 64 && v.push(F),
            q && (F.length === 63 || F.length === 64)), !0) ? (a.groups[r].csvAirdropLength = b.length,
            a.groups[r].csvAirdropNew = b,
            delete a.groups[r].invalidAddresses,
            N(Math.random()),
            W.NotificationManager.success("Uploaded Successfully")) : (a.groups[r].invalidAddresses = v,
            C(!0))
        }
    })), a.groups[r].hasOwnProperty("invalidAddresses") ? t.createElement(Re, {
        title: "Contains Invalid Address/es",
        message: t.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 8
            }
        }, t.createElement("span", {
            style: {
                fontWeight: 600,
                marginTop: 8,
                marginBottom: 8
            }
        }, "The following addresses are not valid Internet Computer wallet addresses. Please fix and reupload."), a.groups[r].invalidAddresses.map((E,b)=>t.createElement("span", {
            key: b
        }, E))),
        onConfirm: ()=>{
            C(!1)
        }
        ,
        isOpen: S
    }) : "", a.groups[r].hasOwnProperty("csvAirdropLength") ? t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption"
    }, `Uploaded ${a.groups[r].csvAirdropLength} addresses`)) : "", a.groups[r].hasOwnProperty("groupType") && a.groups[r].groupType == "2" && a.groups[r].hasOwnProperty("csvAirdropNew") ? t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        type: "button",
        size: "small"
    }, t.createElement(We, {
        data: [a.groups[r].csvAirdropNew],
        filename: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download"))) : a.groups[r].hasOwnProperty("groupType") && a.groups[r].groupType == "2" && a.groups[r].hasOwnProperty("csvAirdrop") && a.groups[r].csvAirdrop.length > 0 ? t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        type: "button",
        size: "small"
    }, t.createElement(We, {
        data: [a.groups[r].csvAirdrop],
        filename: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download"))) : "", a.groups[r].hasOwnProperty("groupType") && a.groups[r].groupType == "2" && t.createElement(n, {
        item: !0
    }, t.createElement(R, null, t.createElement("a", {
        href: "https://ucarecdn.com/453b49bc-8f2a-4906-8efd-b8010464a5a2/WalletAddressExample.csv",
        download: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download CSV Template"), " ")))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Bulk Purchases"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "Would you like bulk purchases options? ", t.createElement("i", null, "(recommended to improve code performance)"))), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(_e, {
        name: `${e}.bulkPricing`,
        label: "Bulk Purchases",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, "No"), t.createElement(G, {
        value: "2"
    }, "Yes"))))), a.groups[r].bulkPricing === "2" && t.createElement(t.Fragment, null, t.createElement(n, {
        container: !0,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Xe, {
        name: `${e}.bulkOptions`
    }, ({fields: E})=>t.createElement(J, null, E.length !== 0 ? t.createElement(n, {
        container: !0,
        m: 2
    }, t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        }
    }, "# to buy"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        }
    }, "Price per NFT"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))) : "", E.map((b,v)=>t.createElement(J, {
        key: v,
        ml: 2,
        mr: 2,
        mb: 2
    }, v < 4 ? t.createElement(n, {
        item: !0,
        container: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(I, {
        name: `${b}.number`,
        component: ee,
        validate: ve(),
        placeholder: "# to buy",
        fullWidth: !0,
        disabled: v < 1,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: `${b}.number`
    })))), t.createElement(n, {
        item: !0,
        xs: 3
    }, t.createElement(I, {
        name: `${b}.price`,
        component: ee,
        validate: Fa(.001),
        placeholder: "ICP",
        fullWidth: !0,
        disabled: v < 1,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: `${b}.price`
    })))), t.createElement(n, {
        item: !0,
        xs: 1,
        sx: {
            display: "flex",
            justifyContent: "end",
            alignItems: "center"
        }
    }, v >= 1 ? t.createElement(R, {
        onClick: ()=>{
            E.remove(v)
        }
    }, t.createElement(Qe, null)) : ""), t.createElement(n, {
        item: !0,
        xs: 3,
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, t.createElement(m, {
        variant: "subtitle1"
    }, "Total price for ", E.value[v].number, " NFTs: ", E.value[v].number * E.value[v].price, " ICP"))) : "")), E.length < 4 ? t.createElement(n, {
        item: !0,
        m: 2
    }, t.createElement(R, {
        type: "button",
        variant: "outlined",
        onClick: ()=>E.push({
            number: "",
            canDelete: 1,
            price: ""
        })
    }, "Add Option")) : "", ql(E, a, r))))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Individual wallet limit")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "The maximum number of NFTs a user can purchase from this group. Leave blank for no limit.")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(I, {
        name: `${e}.walletLimit`,
        component: ee,
        validate: Ua(),
        fullWidth: !0,
        placeholder: "Wallet limit"
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: `${e}.walletLimit`
    }))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2,
        mt: .3
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Group limit")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "The maximum number of NFTs that can be purchased by this group. Leave blank for no limit.", " ", t.createElement("i", null, "For Example: A private group of 100 members has an individual wallet limit of 1 and a group limit of 90. Of the 100 members, up to 90 can purchase 1 NFT each."))), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(I, {
        name: `${e}.groupLimit`,
        component: ee,
        validate: Ua(),
        fullWidth: !0,
        placeholder: "Group limit"
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Me, {
        name: `${e}.groupLimit`
    })))))) : "", T ? t.createElement(jl, {
        isOpen: T,
        values: a,
        group: e,
        groupKey: M,
        groupIndex: r,
        setToggleDSCVRUser: O,
        actor: l,
        dscvrActor: o,
        allRoles: c,
        selectedRoles: s,
        setRoles: p,
        setSelectedRoles: f,
        removeRole: i,
        allAddresses: h,
        setAddresses: u,
        dscvrDetails: y,
        setDscvrDetails: d
    }) : "")
}
  , $l = e=>{
    const {collections: {list: r}, auth: {actor: a, dscvrActor: l}, roles: {allRoles: o, selectedRoles: c, allAddresses: s, dscvrDetails: p}} = e;
    return {
        rows: r,
        actor: a,
        dscvrActor: l,
        allRoles: o,
        selectedRoles: c,
        allAddresses: s,
        dscvrDetails: p
    }
}
  , Yl = e=>({
    setRoles: (r,a)=>e(Jt(r, a)),
    setSelectedRoles: (r,a)=>e(at(r, a)),
    removeRole: (r,a)=>e(Xt(r, a)),
    setAddresses: (r,a)=>e(rt(r, a)),
    setDscvrDetails: (r,a)=>e(Qt(r, a))
});
var Hl = pe($l, Yl)(Gl);
const Zl = ({app: e})=>{
    var f;
    const {values: r} = ut()
      , [a,l] = t.useState(!0)
      , [o,c] = w.exports.useState(((f = r.groups) == null ? void 0 : f.length) ? r.groups.length : 0)
      , s = i=>(h,u)=>{
        l(u ? i : !1)
    }
      , p = i=>{
        const h = document.querySelector(`input[name='${i}']`);
        h && h.blur(),
        setEditIndex(void 0)
    }
    ;
    return t.createElement(n, {
        container: !0,
        spacing: 3
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        ml: 1
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h6",
        sx: {
            fontWeight: "bold"
        }
    }, "Pricing Group"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Xe, {
        name: "groups",
        id: "fieldArrayGroups"
    }, ({fields: i})=>t.createElement(J, {
        m: 1
    }, i.map((h,u)=>t.createElement(da, {
        key: u,
        expanded: a === u,
        onChange: s(u),
        style: {
            width: "100%"
        }
    }, t.createElement(pa, {
        id: u,
        expandIcon: t.createElement(ha, {
            sx: {
                margin: "16px"
            }
        })
    }, t.createElement(J, {
        sx: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    }, t.createElement(J, {
        sx: {
            flex: "1"
        }
    }, t.createElement(n, {
        container: !0
    }, t.createElement(n, {
        container: !0,
        spacing: 3,
        sx: {
            color: "gray"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        }
    }, "Name")), r.groups[u].hasOwnProperty("price") ? t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        },
        name: `${h}.price`
    }, "Price")) : "", r.groups[u].hasOwnProperty("launchDate") && r.groups[u].launchDate != null && r.groups[u].hasOwnProperty("launchTime") && r.groups[u].launchTime != null ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        }
    }, "Start")) : "", r.groups[u].hasOwnProperty("endSaleDate") && r.groups[u].endSaleDate != null && r.groups[u].hasOwnProperty("endSaleTime") && r.groups[u].endSaleTime != null ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        }
    }, "End")) : "", r.groups[u].hasOwnProperty("groupType") ? t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        }
    }, "Group Type")) : "", r.groups[u].hasOwnProperty("walletLimit") ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        }
    }, "Individual Limit")) : "", r.groups[u].hasOwnProperty("groupLimit") ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "caption",
        style: {
            textTransform: "uppercase"
        }
    }, "Group Limit")) : ""), t.createElement(n, {
        container: !0,
        spacing: 3
    }, t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        name: `${h}.name`,
        variant: "subtitle1",
        placeholder: "Group Name",
        onClick: y=>{
            y.stopPropagation()
        }
        ,
        onBlur: y=>{
            y.preventDefault(),
            p(`${h}.name`)
        }
    }, `${r.groups[u].groupName}`)), r.groups[u].hasOwnProperty("price") ? t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(m, {
        name: `${h}.price`,
        variant: "subtitle1",
        onClick: y=>{
            y.stopPropagation()
        }
        ,
        onBlur: y=>{
            y.preventDefault(),
            p(`${h}.price`)
        }
    }, `${r.groups[u].price} ICP`)) : "", r.groups[u].hasOwnProperty("launchDate") && r.groups[u].launchDate != null && r.groups[u].hasOwnProperty("launchTime") && r.groups[u].launchTime != null ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        name: `${h}.launchDate`,
        variant: "subtitle1"
    }, Fe(r.groups[u].launchDate)), t.createElement(m, {
        name: `${h}.launchDate`,
        variant: "caption"
    }, Ba(r.groups[u].launchTime))) : "", r.groups[u].hasOwnProperty("endSaleDate") && r.groups[u].endSaleDate != null && r.groups[u].hasOwnProperty("endSaleTime") && r.groups[u].endSaleTime != null ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        name: `${h}.endSaleDate`,
        variant: "subtitle1"
    }, Fe(r.groups[u].endSaleDate)), t.createElement(m, {
        name: `${h}.endSaleDate`,
        variant: "caption"
    }, Ba(r.groups[u].endSaleTime))) : "", r.groups[u].hasOwnProperty("groupType") ? t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(m, {
        variant: "subtitle1",
        name: `${h}.groupType`
    }, r.groups[u].groupType === "1" ? "Public" : "Private")) : "", r.groups[u].hasOwnProperty("walletLimit") ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "subtitle1",
        name: `${h}.walletLimit`
    }, r.groups[u].walletLimit)) : "", r.groups[u].hasOwnProperty("groupLimit") ? t.createElement(n, {
        item: !0,
        xs: 2
    }, t.createElement(m, {
        variant: "subtitle1",
        name: `${h}.groupLimit`
    }, r.groups[u].groupLimit)) : ""))), t.createElement(J, null, t.createElement(R, {
        onClick: async()=>{
            try {
                let y, d;
                i.value[u].launchId && i.value[u].blindSaleGroupId && (y = i.value[u].launchId,
                d = i.value[u].blindSaleGroupId),
                i.remove(u),
                c(o != 0 ? o - 1 : 0),
                y && d && await e.deleteBlindSalePriceGroup(y, d)
            } catch {}
        }
    }, " ", t.createElement(Qe, null))))), t.createElement(ya, null, t.createElement(Hl, {
        group: h,
        groupIndex: u,
        key: h,
        app: e,
        onRemove: ()=>i.remove(u),
        values: r
    })))), t.createElement(n, {
        item: !0,
        container: !0,
        xs: 12,
        justifyContent: "start",
        marginTop: "32px"
    }, t.createElement(n, {
        item: !0,
        mt: 2
    }, t.createElement(R, {
        id: "addGroup",
        type: "button",
        variant: "contained",
        onClick: ()=>{
            i.push({
                groupName: `Pricing Group ${i.length + 1}`
            }),
            c(o + 1)
        }
    }, t.createElement(Vn, null), " \xA0 Add Group"))))))))
}
;
var Er = "/assets/dscvr.6fb7b388.png";
const Kt = ({name: e})=>t.createElement(I, {
    name: e,
    subscription: {
        touched: !0,
        error: !0
    },
    render: ({meta: {touched: r, error: a}})=>r && a ? t.createElement("span", null, a) : null
})
  , gr = ({isOpen: e, values: r, groupKey: a, setToggleDSCVRUser: l, actor: o, dscvrActor: c, allRoles: s, selectedRoles: p, setRoles: f, setSelectedRoles: i, removeRole: h, allAddresses: u, setAddresses: y, dscvrDetailsAirdrop: d, setDscvrDetailsAirdrop: g})=>{
    const [x,_] = w.exports.useState(!1)
      , [N,T] = w.exports.useState(d[a] ? 0 : 1)
      , O = ()=>l(!1)
      , S = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "#fff",
        borderRadius: 2,
        borderBottom: "4px solid #0FC89F",
        boxShadow: 24,
        p: 4,
        pt: 2
    };
    return w.exports.useEffect(async()=>{
        try {
            _(!0),
            !!(r.hasOwnProperty("portalName") && r.portalName.replace(/^[ ]+|[ ]+$/g, "").length > 0) && !s[a] && await It(0, r.portalName, c, a, f, i, y),
            _(!1)
        } catch {} finally {
            _(!1)
        }
    }
    , []),
    t.createElement(Ke, {
        open: e,
        onClose: O,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        closeonblur: "true"
    }, x ? t.createElement(Ta, {
        open: x
    }, t.createElement(we, {
        sx: {
            color: "#fff"
        }
    })) : t.createElement(J, {
        sx: S
    }, t.createElement(n, {
        container: !0,
        spacing: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 11
    }, t.createElement(m, {
        variant: "h6"
    }, "Add DSCVR users")), t.createElement(n, {
        item: !0,
        xs: 1
    }, t.createElement(De, {
        size: "small",
        sx: {
            ml: 4,
            mt: -1
        },
        onClick: O
    }, t.createElement(Na, {
        className: "action-hover"
    })))), N == 0 && t.createElement(yr, {
        values: r,
        actor: o,
        dscvrActor: c,
        groupKey: a,
        allRoles: s,
        setRoles: f,
        selectedRoles: p,
        setSelectedRoles: i,
        setAddresses: y,
        setLoader: _,
        setStep: T,
        removeRole: h,
        setDscvrDetailsAirdrop: g,
        handleClose: O
    }), N == 1 && t.createElement(pr, {
        values: r,
        dscvrActor: c,
        groupKey: a,
        allRoles: s,
        setRoles: f,
        setSelectedRoles: i,
        setAddresses: y,
        setLoader: _,
        setStep: T,
        handleClose: O
    }), N == 2 && t.createElement(hr, {
        values: r,
        dscvrActor: c,
        groupKey: a,
        allRoles: s,
        setRoles: f,
        selectedRoles: p,
        setSelectedRoles: i,
        setAddresses: y,
        setLoader: _,
        setStep: T,
        removeRole: h,
        handleClose: O
    }), N == 3 && t.createElement(fr, {
        values: r,
        dscvrActor: c,
        groupKey: a,
        allRoles: s,
        setRoles: f,
        selectedRoles: p,
        setSelectedRoles: i,
        allAddresses: u,
        setAddresses: y,
        dscvrDetailsAirdrop: d,
        setDscvrDetailsAirdrop: g,
        setLoader: _,
        setStep: T,
        handleClose: O
    }))))
}
  , Jl = ({initialValues: e, app: r, dscvrActor: a, setLoader: l, allRoles: o, selectedRoles: c, setRoles: s, setSelectedRoles: p, removeRole: f, allAddresses: i, setAddresses: h, dscvrDetailsAirdrop: u, setDscvrDetailsAirdrop: y})=>{
    const {values: d} = ut()
      , [g,x] = w.exports.useState(0)
      , [_,N] = w.exports.useState(!1)
      , [T,O] = w.exports.useState(!1)
      , S = "Airdrop";
    return w.exports.useEffect(()=>{
        d.launchType = "2",
        d.airdropNFT = "2"
    }
    ),
    t.createElement(n, {
        container: !0,
        spacing: 3
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        ml: 1
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h6",
        sx: {
            fontWeight: "bold"
        }
    }, "Plan Your Launch"))), t.createElement(n, {
        container: !0,
        spacing: 2,
        mt: 1,
        mb: 1,
        ml: 2,
        mr: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Launch Name"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        sm: 6
    }, t.createElement(I, {
        name: "launchName",
        component: ee,
        placeholder: "Name of your launch",
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Kt, {
        name: "launchName"
    })))), t.createElement(n, {
        item: !0,
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(m, null, "30 Characters"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Airdrop Date"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Airdrop Time (UTC)"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(Bt, {
        label: "Airdrop Date",
        name: "launchDate",
        required: !0,
        margin: "normal",
        variant: "inline",
        format: "dd-mm-yyyy"
    })), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(zt, {
        label: "Airdrop Time",
        name: "launchTime",
        required: !0
    })))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Airdrop NFTs"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2,
        alignItems: "center"
    }, t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "airdropNFTFile",
        label: "Upload .CSV List",
        accept: ".csv",
        size: "small",
        hasModal: !0,
        title: "Upload CSV Info",
        uploadDone: d.hasOwnProperty("csvAirdropNew") || d.hasOwnProperty("csvAirdrop") && d.csvAirdrop.length > 0,
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure the CSV file adheres to the example format provided below. Please download the template below for your reference.")), t.createElement(n, {
            item: !0
        }, t.createElement(R, null, t.createElement("a", {
            href: "https://ucarecdn.com/453b49bc-8f2a-4906-8efd-b8010464a5a2/WalletAddressExample.csv",
            download: "airdropAddress.csv",
            target: "_blank",
            style: {
                textDecoration: "none",
                color: "#09D8AA"
            }
        }, "Download CSV Template"), " ")))),
        onChange: async C=>{
            const M = await Gt(C[0])
              , V = [];
            M.reduce((b,v)=>(v.length !== 63 && v.length !== 64 && V.push(v),
            b && (v.length === 63 || v.length === 64)), !0) && M.length > 0 ? (d.airdropNFTlength = M.length,
            d.csvAirdropNew = M,
            delete d.invalidAddresses,
            delete d.emptyCsvFile,
            x(Math.random()),
            W.NotificationManager.success("Uploaded Successfully")) : M.length == 0 ? (d.emptyCsvFile = "true",
            delete d.invalidAddresses,
            O(!0)) : (d.invalidAddresses = V,
            delete d.emptyCsvFile,
            O(!0))
        }
    })), t.createElement(n, null, d.hasOwnProperty("invalidAddresses") ? t.createElement(Re, {
        title: "Contains Invalid Address/es",
        message: t.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 8
            }
        }, t.createElement("span", {
            style: {
                fontWeight: 600,
                marginTop: 8,
                marginBottom: 8
            }
        }, "The following addresses are not valid Internet Computer wallet addresses. Please fix and reupload."), d.invalidAddresses.map((C,M)=>t.createElement("span", {
            key: M
        }, C))),
        onConfirm: ()=>{
            O(!1)
        }
        ,
        isOpen: T
    }) : "", d.hasOwnProperty("emptyCsvFile") && d.emptyCsvFile == "true" ? t.createElement(Re, {
        title: "Empty CSV File",
        message: t.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 8
            }
        }, t.createElement("span", {
            style: {
                fontWeight: 600,
                marginTop: 8,
                marginBottom: 8
            }
        }, "The uploaded CSV file should atleast have one wallet address. Please fix and reupload.")),
        onConfirm: ()=>{
            O(!1)
        }
        ,
        isOpen: T
    }) : ""), t.createElement(n, {
        item: !0
    }, d.hasOwnProperty("airdropNFTlength") ? t.createElement(m, {
        variant: "caption"
    }, `Uploaded ${d.airdropNFTlength} addresses`) : ""), t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small",
        variant: "contained",
        onClick: ()=>{
            N(!_)
        }
    }, t.createElement("img", {
        src: Er,
        alt: "Add DSCVR users",
        width: 20,
        height: 20,
        style: {
            marginRight: "8px"
        }
    }), t.createElement(m, {
        variant: "caption"
    }, "Add DSCVR Wallets"), c[S] && c[S].length > 0 ? t.createElement(m, {
        className: "icon ico-checkmark",
        style: {
            marginLeft: "8px"
        }
    }) : ""), d.hasOwnProperty("dscvrId") && d.dscvrId != "" ? t.createElement(m, {
        variant: "subtitle2",
        sx: {
            ml: 1
        }
    }, "Last Updated: \xA0", ue(d.dscvrUpdateTime).toUTCString().replace("GMT", "UTC")) : ""), t.createElement(n, {
        item: !0
    }, d.hasOwnProperty("csvAirdropNew") ? t.createElement(R, {
        type: "button",
        size: "small"
    }, t.createElement(We, {
        data: [d.csvAirdropNew],
        filename: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download")) : d.hasOwnProperty("csvAirdrop") && d.csvAirdrop.length > 0 ? t.createElement(R, {
        type: "button",
        size: "small"
    }, t.createElement(We, {
        data: [d.csvAirdrop],
        filename: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download")) : ""), t.createElement(n, {
        item: !0
    }, t.createElement(R, null, t.createElement("a", {
        href: "https://ucarecdn.com/453b49bc-8f2a-4906-8efd-b8010464a5a2/WalletAddressExample.csv",
        download: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download CSV Template"), " ")), t.createElement(n, {
        item: !0
    }, t.createElement(n, {
        container: !0,
        alignItems: "center"
    }, t.createElement(n, {
        item: !0
    }, t.createElement(Se, {
        name: "airdropShuffleAddress",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "Shuffle",
            value: !1
        }
    })), t.createElement(n, {
        item: !0
    }, t.createElement(Le, {
        title: "This will randomly shuffle addresses. By default NFTs are airdrop in the order of the list provided",
        placement: "top",
        style: {
            margin: "auto"
        }
    }, t.createElement("span", {
        className: "icon ico-info"
    }))))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Collection Size"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "How many NFTs (in total) should be minted?")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(I, {
        name: "collectionSize",
        component: ee,
        validate: ve(),
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Kt, {
        name: "collectionSize"
    }))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Creator Share"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "Do you want to retain any NFTs for yourself or your team?")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(_e, {
        name: "creatorShare",
        label: "Creator Share",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, "No"), t.createElement(G, {
        value: "2"
    }, "Yes"))), d.creatorShare === "2" && t.createElement(n, {
        item: !0,
        mt: 2
    }, t.createElement(m, null, "Saved in your wallet, starting with the lowest mint numbers of the collection.")), d.creatorShare === "2" && t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        md: 4
    }, t.createElement(I, {
        name: "priceCreatorShare",
        component: ee,
        validate: ve(),
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(Kt, {
        name: "priceCreatorShare"
    })))), t.createElement(n, {
        item: !0,
        xs: 4,
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(m, null, "NFTs retained for the team"))))), _ ? t.createElement(gr, {
        isOpen: _,
        values: d,
        groupKey: S,
        setToggleDSCVRUser: N,
        actor: r,
        dscvrActor: a,
        allRoles: o,
        selectedRoles: c,
        setRoles: s,
        setSelectedRoles: p,
        removeRole: f,
        allAddresses: i,
        setAddresses: h,
        dscvrDetailsAirdrop: u,
        setDscvrDetailsAirdrop: y
    }) : "")
}
  , Xl = e=>{
    const {collections: {list: r}, auth: {actor: a, dscvrActor: l}, roles: {allRoles: o, selectedRoles: c, allAddresses: s, dscvrDetailsAirdrop: p}} = e;
    return {
        rows: r,
        actor: a,
        dscvrActor: l,
        allRoles: o,
        selectedRoles: c,
        allAddresses: s,
        dscvrDetailsAirdrop: p
    }
}
  , Ql = e=>({
    setRoles: (r,a)=>e(Jt(r, a)),
    setSelectedRoles: (r,a)=>e(at(r, a)),
    removeRole: (r,a)=>e(Xt(r, a)),
    setAddresses: (r,a)=>e(rt(r, a)),
    setDscvrDetailsAirdrop: (r,a)=>e(bt(r, a))
});
var Il = pe(Xl, Ql)(Jl);
const xt = ({name: e})=>t.createElement(I, {
    name: e,
    subscription: {
        touched: !0,
        error: !0
    },
    render: ({meta: {touched: r, error: a}})=>r && a ? t.createElement("span", null, a) : null
})
  , Kl = ({initialValues: e, app: r, setLoader: a, dscvrActor: l, allRoles: o, selectedRoles: c, setRoles: s, setSelectedRoles: p, removeRole: f, allAddresses: i, setAddresses: h, dscvrDetailsAirdrop: u, setDscvrDetailsAirdrop: y})=>{
    var V;
    const {values: d} = ut()
      , [g,x] = w.exports.useState(0)
      , [_,N] = w.exports.useState(((V = d.customers) == null ? void 0 : V.length) ? d.customers.length : 0)
      , [T,O] = w.exports.useState(!1)
      , [S,C] = w.exports.useState(!1)
      , M = "Airdrop";
    return w.exports.useEffect(()=>{
        if (d.whitelistedCustomer === "2") {
            const E = document.querySelector("#addWhitelist");
            E && _ <= 0 && E.click()
        }
    }
    , [d.whitelistedCustomer]),
    w.exports.useEffect(()=>{
        d.launchType = "1"
    }
    ),
    t.createElement(n, {
        container: !0,
        spacing: 3
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        ml: 1
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h6",
        sx: {
            fontWeight: "bold"
        }
    }, "Plan Your Launch"))), t.createElement(n, {
        container: !0,
        spacing: 2,
        mt: 1,
        mb: 1,
        ml: 2,
        mr: 2
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Launch Name"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        sm: 6
    }, t.createElement(I, {
        name: "launchName",
        component: ee,
        placeholder: "Name of your launch",
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(xt, {
        name: "launchName"
    })))), t.createElement(n, {
        item: !0,
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(m, null, "30 Characters"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Airdrop NFTs"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "Would you like to airdrop NFTs to anyone?")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(_e, {
        name: "airdropNFT",
        label: "Airdrop NFT",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, "No"), t.createElement(G, {
        value: "2"
    }, "Yes"))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2,
        alignItems: "center"
    }, d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && t.createElement(n, {
        item: !0
    }, t.createElement(me, {
        name: "airdropNFTFile",
        label: "Upload .CSV List",
        accept: ".csv",
        size: "small",
        hasModal: !0,
        title: "Upload CSV Info",
        uploadDone: d.hasOwnProperty("csvAirdropNew") || d.hasOwnProperty("csvAirdrop") && d.csvAirdrop.length > 0,
        message: t.createElement("div", null, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "subtitle2"
        }, "Make sure the CSV file adheres to the example format provided below. Please download the template below for your reference.")), d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && t.createElement(n, {
            item: !0
        }, t.createElement(R, null, t.createElement("a", {
            href: "https://ucarecdn.com/453b49bc-8f2a-4906-8efd-b8010464a5a2/WalletAddressExample.csv",
            download: "airdropAddress.csv",
            target: "_blank",
            style: {
                textDecoration: "none",
                color: "#09D8AA"
            }
        }, "Download CSV Template"), " ")))),
        onChange: async E=>{
            const b = await Gt(E[0])
              , v = [];
            b.reduce((q,F)=>(F.length !== 63 && F.length !== 64 && v.push(F),
            q && (F.length === 63 || F.length === 64)), !0) && b.length > 0 ? (d.airdropNFTlength = b.length,
            d.csvAirdropNew = b,
            delete d.invalidAddresses,
            delete d.emptyCsvFile,
            x(Math.random()),
            W.NotificationManager.success("Added successfully")) : b.length == 0 ? (d.emptyCsvFile = "true",
            delete d.invalidAddresses,
            C(!0)) : (d.invalidAddresses = v,
            delete d.emptyCsvFile,
            C(!0))
        }
    })), d.hasOwnProperty("invalidAddresses") ? t.createElement(Re, {
        title: "Contains Invalid Address/es",
        message: t.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 8
            }
        }, t.createElement("span", {
            style: {
                fontWeight: 600,
                marginTop: 8,
                marginBottom: 8
            }
        }, "The following addresses are not valid Internet Computer wallet addresses. Please fix and reupload."), d.invalidAddresses.map((E,b)=>t.createElement("span", {
            key: b
        }, E))),
        onConfirm: ()=>{
            C(!1)
        }
        ,
        isOpen: S
    }) : "", d.hasOwnProperty("emptyCsvFile") && d.emptyCsvFile == "true" ? t.createElement(Re, {
        title: "Empty CSV File",
        message: t.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 8
            }
        }, t.createElement("span", {
            style: {
                fontWeight: 600,
                marginTop: 8,
                marginBottom: 8
            }
        }, "The uploaded CSV file should atleast have one wallet address. Please fix and reupload.")),
        onConfirm: ()=>{
            C(!1)
        }
        ,
        isOpen: S
    }) : "", d.hasOwnProperty("airdropNFTlength") ? t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption"
    }, `Uploaded ${d.airdropNFTlength} addresses`)) : "", d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && d.hasOwnProperty("csvAirdropNew") ? t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        type: "button",
        size: "small"
    }, t.createElement(We, {
        data: [d.csvAirdropNew],
        filename: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download"))) : d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && d.hasOwnProperty("csvAirdrop") && d.csvAirdrop.length > 0 ? t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        type: "button",
        size: "small"
    }, t.createElement(We, {
        data: [d.csvAirdrop],
        filename: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download"))) : "", d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        size: "small",
        variant: "contained",
        onClick: ()=>{
            O(!T)
        }
    }, t.createElement("img", {
        src: Er,
        alt: "Add DSCVR users",
        width: 20,
        height: 20,
        style: {
            marginRight: "8px"
        }
    }), t.createElement(m, {
        variant: "caption"
    }, "Add DSCVR Wallets"), c[M] && c[M].length > 0 ? t.createElement(m, {
        className: "icon ico-checkmark",
        style: {
            marginLeft: "8px"
        }
    }) : ""), d.hasOwnProperty("dscvrId") && d.dscvrId != "" ? t.createElement(m, {
        variant: "subtitle2",
        sx: {
            ml: 1
        }
    }, "Last Updated: \xA0", ue(d.dscvrUpdateTime).toUTCString().replace("GMT", "UTC")) : ""), d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && t.createElement(n, {
        item: !0
    }, t.createElement(R, null, t.createElement("a", {
        href: "https://ucarecdn.com/453b49bc-8f2a-4906-8efd-b8010464a5a2/WalletAddressExample.csv",
        download: "airdropAddress.csv",
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "#09D8AA"
        }
    }, "Download CSV Template"), " ")), d.hasOwnProperty("airdropNFT") && d.airdropNFT == "2" && t.createElement(n, {
        item: !0
    }, t.createElement(n, {
        container: !0,
        alignItems: "center"
    }, t.createElement(n, {
        item: !0
    }, t.createElement(Se, {
        name: "airdropShuffleAddress",
        formControlProps: {
            margin: "none"
        },
        data: {
            label: "Shuffle",
            value: !1
        }
    })), t.createElement(n, {
        item: !0
    }, t.createElement(Le, {
        title: "This will randomly shuffle addresses. By default NFTs are airdrop in the order of the list provided",
        placement: "top",
        style: {
            margin: "auto"
        }
    }, t.createElement("span", {
        className: "icon ico-info"
    }))))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Collection Size"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "How many NFTs (in total) should be minted?")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(I, {
        name: "collectionSize",
        component: ee,
        validate: ve(),
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(xt, {
        name: "collectionSize"
    }))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Marketplace Opening"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "When would you like to open the marketplace?")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(Ea, {
        name: "openMarketPlaceDays",
        required: !0,
        data: [{
            label: "Immediately when the launch starts",
            value: "1"
        }, {
            label: "1 day after launch starts (or right when launch sells out)",
            value: "2"
        }, {
            label: "3 days after launch starts (or right when launch sells out)",
            value: "3"
        }, {
            label: "Custom",
            value: "4"
        }]
    }))), d.openMarketPlaceDays === "4" && t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        md: 6
    }, t.createElement(I, {
        name: "openMarketPlaceDaysCustom",
        component: ee,
        validate: ve(),
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(xt, {
        name: "openMarketPlaceDaysCustom"
    })))), t.createElement(n, {
        item: !0,
        xs: 4,
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(m, null, " (in days)")))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Leftovers"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "What would you like to do if there are unsold NFTs after the sale ends?")), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(_e, {
        name: "leftOvers",
        label: "Leftovers",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, " Save in my wallet (", e.walletAddress, ")"), t.createElement(G, {
        value: "2"
    }, "Burn the remaining NFTs (This would destroy unsold NFTs to reduce total supply.)"))))), t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, {
        variant: "h7",
        sx: {
            fontWeight: "bold"
        },
        display: "inline"
    }, "Creator Share"), t.createElement(m, {
        variant: "h5",
        display: "inline",
        color: "#d32f2f"
    }, "*")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(m, null, "Do you want to retain any NFTs for yourself or your team?")), t.createElement(n, {
        item: !0,
        xs: 12
    }, t.createElement(_e, {
        name: "creatorShare",
        label: "Creator Share",
        formControlProps: {
            margin: "normal"
        },
        required: !0
    }, t.createElement(G, {
        value: "1"
    }, "No"), t.createElement(G, {
        value: "2"
    }, "Yes"))), d.creatorShare === "2" && t.createElement(n, {
        item: !0,
        mt: 2
    }, t.createElement(m, null, "Saved in your wallet, starting with the lowest mint numbers of the collection.")), d.creatorShare === "2" && t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12,
        spacing: 2
    }, t.createElement(n, {
        item: !0,
        md: 4
    }, t.createElement(I, {
        name: "priceCreatorShare",
        component: ee,
        validate: ve(),
        fullWidth: !0,
        required: !0
    }), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "caption",
        color: "#d32f2f"
    }, t.createElement(xt, {
        name: "priceCreatorShare"
    })))), t.createElement(n, {
        item: !0,
        xs: 4,
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(m, null, "NFTs retained for the team"))))), T ? t.createElement(gr, {
        isOpen: T,
        values: d,
        groupKey: M,
        setToggleDSCVRUser: O,
        actor: r,
        dscvrActor: l,
        allRoles: o,
        selectedRoles: c,
        setRoles: s,
        setSelectedRoles: p,
        removeRole: f,
        allAddresses: i,
        setAddresses: h,
        dscvrDetailsAirdrop: u,
        setDscvrDetailsAirdrop: y
    }) : "")
}
  , Dl = e=>{
    const {collections: {list: r}, auth: {actor: a, dscvrActor: l}, roles: {allRoles: o, selectedRoles: c, allAddresses: s, dscvrDetailsAirdrop: p}} = e;
    return {
        rows: r,
        actor: a,
        dscvrActor: l,
        allRoles: o,
        selectedRoles: c,
        allAddresses: s,
        dscvrDetailsAirdrop: p
    }
}
  , Ll = e=>({
    setRoles: (r,a)=>e(Jt(r, a)),
    setSelectedRoles: (r,a)=>e(at(r, a)),
    removeRole: (r,a)=>e(Xt(r, a)),
    setAddresses: (r,a)=>e(rt(r, a)),
    setDscvrDetailsAirdrop: (r,a)=>e(bt(r, a))
});
var eo = pe(Dl, Ll)(Kl);
const to = ({addLaunchInCollection: e, updateLaunchInCollection: r, list: a, allRoles: l, dscvrDetails: o, setDscvrDetails: c, dscvrDetailsAirdrop: s, setDscvrDetailsAirdrop: p, allAddresses: f, selectedRoles: i, setSelectedRoles: h, setAddresses: u, app: y, setLoader: d, setUploadingImage: g, setFormSubmitting: x, setProgress: _})=>{
    let N = {
        uploadingType: "1",
        files: [],
        categories: []
    };
    const T = et()
      , {id: O, cid: S, lid: C} = Aa()
      , [M,V] = w.exports.useState(N)
      , [E,b] = w.exports.useState(!0)
      , [v,k] = w.exports.useState(!1)
      , [q,F] = w.exports.useState(0)
      , j = Q=>{
        const H = {}
          , {launchDate: K, launchTime: P, endSaleDate: A, endSaleTime: $} = Q;
        if ($) {
            let z, Z, te, L;
            K && P && (z = K.toDateString() + " " + P.toTimeString()),
            A && $ && (Z = A.toDateString() + " " + $.toTimeString()),
            z && Z && (te = z.indexOf("GMT"),
            L = Z.indexOf("GMT"),
            z = z.slice(0, te + 3),
            Z = Z.slice(0, L + 3),
            Date.parse(z) > Date.parse(Z) && (H.endSaleDate = "End sale date should be greater than the launch date"))
        }
        return Q.hasOwnProperty("launchName") && (za(Q.launchName, 31) || (H.launchName = "Launch name should be of max 30 characters")),
        H
    }
      , B = async Q=>{
        try {
            if (k(!0),
            d(!0),
            x(!0),
            O) {
                const K = await lr(y, O, Q, o, s)
                  , {launchInfo: P, selectedRolesInfo: A, allAddressesInfo: $, dscvrDetailsInfo: z} = await Ue(y, K);
                W.NotificationManager.success("Launch created successfully"),
                e(O, P[0])
            } else {
                await or(y, S, C, Q, o, s);
                const {launchInfo: K, selectedRolesInfo: P, allAddressesInfo: A, dscvrDetailsInfo: $} = await Ue(y, C);
                W.NotificationManager.success("Launch updated successfully"),
                r(S, C, K[0])
            }
            localStorage.getItem("_fromWhichUser") == "admin" ? T("/dashboard/admin") : T("/dashboard/collections"),
            localStorage.removeItem("_fromWhichUser")
        } catch (H) {
            console.log(H),
            H == "MISSING_DETAILS" ? W.NotificationManager.error("Please enter required details") : H == "MISSING_THUMBNAIL" ? W.NotificationManager.error("Assets are uploaded but thumbnails are required and missing for .html files") : W.NotificationManager.error("Some error occurred. Please try again")
        } finally {
            k(!1),
            d(!1),
            x(!1)
        }
    }
      , X = Q=>{
        B(Q)
    }
      , D = async(Q,H,K)=>{
        try {
            if (k(!0),
            d(!0),
            x(!0),
            O) {
                const P = await lr(y, O, Q, o, s, H)
                  , {launchInfo: A, selectedRolesInfo: $, allAddressesInfo: z, dscvrDetailsInfo: Z, dscvrDetailsAirdropInfo: te} = await Ue(y, P);
                W.NotificationManager.success("Launch created successfully"),
                e(O, A[0]),
                T(`/update-launch/${O}/${A[0].launchId}`);
                let L = A[0];
                const ae = (a || []).find(de=>de.collectionId === O);
                ae && (L.walletAddress = ae.nftAddress),
                K(Q),
                d(!1),
                b(!1),
                h(null, $),
                u(null, z),
                c(null, Z),
                p(null, te),
                V(L)
            } else {
                await or(y, S, C, Q, o, s, H);
                const {launchInfo: P, selectedRolesInfo: A, allAddressesInfo: $, dscvrDetailsInfo: z, dscvrDetailsAirdropInfo: Z} = await Ue(y, C);
                W.NotificationManager.success("Launch updated successfully"),
                r(S, C, P[0]);
                let te = P[0];
                const L = (a || []).find(ae=>ae.collectionId === S);
                if (L)
                    te.walletAddress = L.nftAddress;
                else {
                    const ae = await y.getCollection(S);
                    te.walletAddress = ae[0].nft_receive_address
                }
                K(Q),
                d(!1),
                b(!1),
                h(null, A),
                u(null, $),
                c(null, z),
                p(null, Z),
                V(te)
            }
        } catch (P) {
            console.log(P),
            P == "MISSING_DETAILS" ? W.NotificationManager.error("Please enter required details") : P == "MISSING_THUMBNAIL" ? W.NotificationManager.error("Assets are uploaded but thumbnails are required and missing for .html files") : W.NotificationManager.error("Some error occurred. Please try again")
        } finally {
            k(!1),
            d(!1),
            x(!1)
        }
    }
    ;
    return w.exports.useEffect(async()=>{
        try {
            if (d(!0),
            S && C && !v) {
                const {launchInfo: Q, selectedRolesInfo: H, allAddressesInfo: K, dscvrDetailsInfo: P, dscvrDetailsAirdropInfo: A} = await Ue(y, C);
                if (Q) {
                    let $ = Q[0];
                    const z = (a || []).find(Z=>Z.collectionId === S);
                    if (z)
                        $.walletAddress = z.nftAddress;
                    else {
                        const Z = await y.getCollection(S);
                        $.walletAddress = Z[0].nft_receive_address
                    }
                    b(!1),
                    h(null, H),
                    u(null, K),
                    c(null, P),
                    p(null, A),
                    V($),
                    d(!1)
                }
            } else if (O && !v) {
                const Q = (a || []).find(H=>H.collectionId === O);
                Q && (M.walletAddress = Q.nftAddress,
                V(M)),
                d(!1)
            }
        } catch {}
    }
    , [a]),
    w.exports.useEffect(()=>{
        S && C && d(!0)
    }
    , []),
    t.createElement(Wt, {
        maxWidth: "lg",
        sx: {
            paddingLeft: {
                xs: "0",
                sm: "24px"
            },
            paddingRight: {
                xs: "0",
                sm: "24px"
            }
        }
    }, t.createElement(ml, {
        initialValues: M,
        app: y,
        setLoader: d,
        setReload: F
    }), M.hasOwnProperty("launchType") ? t.createElement(Ge, {
        initialValues: M,
        onSubmit: B,
        onSaveAndExit: X,
        onSaveAndContinue: D,
        isSubmitting: v,
        isNew: E
    }, t.createElement(Ge.Page, {
        title: "Plan Your Launch",
        validate: j
    }, M.launchType == "1" ? t.createElement(eo, {
        initialValues: M,
        app: y,
        setLoader: d
    }) : t.createElement(Il, {
        initialValues: M,
        app: y,
        setLoader: d
    })), M.launchType == "1" && t.createElement(Ge.Page, {
        title: "Pricing Group"
    }, t.createElement(Zl, {
        app: y
    })), t.createElement(Ge.Page, {
        title: "Upload & Finalize"
    }, t.createElement(Pl, {
        initialValues: M,
        app: y,
        setLoader: d,
        setUploadingImage: g,
        setProgress: _
    }))) : "")
}
  , ao = e=>{
    const {collections: {list: r}, roles: {allRoles: a, selectedRoles: l, allAddresses: o, dscvrDetails: c, dscvrDetailsAirdrop: s}} = e;
    return {
        list: r,
        allRoles: a,
        selectedRoles: l,
        allAddresses: o,
        dscvrDetails: c,
        dscvrDetailsAirdrop: s
    }
}
  , ro = e=>({
    addLaunchInCollection: (r,a)=>e(Ul(r, a)),
    updateLaunchInCollection: (r,a,l)=>e(Ht(r, a, l)),
    updateDataInCollection: (r,a)=>e(Yt(r, a)),
    setSelectedRoles: (r,a)=>e(at(r, a)),
    setAddresses: (r,a)=>e(rt(r, a)),
    setDscvrDetails: (r,a)=>e(Qt(r, a)),
    setDscvrDetailsAirdrop: (r,a)=>e(bt(r, a))
});
var _r = pe(ao, ro)(to);
const Nt = async e=>{
    try {
        const a = await new mt({
            publicKey: xe
        }).uploadFile(e);
        return W.NotificationManager.success("Uploaded successfully"),
        a.cdnUrl
    } catch {
        W.NotificationManager.error("Some error occurred. Please try again.")
    }
}
  , $e = ({name: e})=>t.createElement(I, {
    name: e,
    subscription: {
        touched: !0,
        error: !0
    },
    render: ({meta: {touched: r, error: a}})=>r && a ? t.createElement("span", null, a) : null
})
  , no = ({list: e, creatorName: r=[], creatorNameGlobal: a=[], collectionNameGlobal: l, addCollection: o, updateDataInCollection: c, updateCreatorNameSelf: s, updateCreatorNameGlobal: p, updateCollectionNameGlobal: f, app: i, setLoader: h, setFormSubmitting: u})=>{
    const y = et()
      , {id: d} = Aa()
      , [g,x] = w.exports.useState(0)
      , [_,N] = w.exports.useState({})
      , T = S=>{
        const C = {};
        !S.hasOwnProperty("creatorName") && !S.hasOwnProperty("creatorNameNew") && (C.creatorName = "Creator name required"),
        S.hasOwnProperty("creatorName") && S.hasOwnProperty("creatorNameNew") && (C.creatorName = "Cannnot select both"),
        !d && S.hasOwnProperty("creatorNameNew") && a && a.forEach(E=>{
            E.toString() == S.creatorNameNew.toString() && (C.creatorNameNew = "Creator Name already exists")
        }
        ),
        !d && S.hasOwnProperty("collectionName") && l && l.forEach(E=>{
            E.toString() == S.collectionName.toString() && (C.collectionName = "Collection Name already exists")
        }
        ),
        S.hasOwnProperty("collectionName") && (za(S.collectionName, 21) || (C.collectionName = "Collection name should have less than 20 characters")),
        S.hasOwnProperty("collectionTinyDesc") && (jt(S.collectionTinyDesc, 7) || (C.collectionTinyDesc = "Description should be less than 7 words")),
        S.hasOwnProperty("collectionBriefDesc") && (jt(S.collectionBriefDesc, 30) || (C.collectionBriefDesc = "Description should be less than 30 words")),
        S.hasOwnProperty("collectionDesc") && (jt(S.collectionDesc, 500) || (C.collectionDesc = "Description should be less than 500 words"));
        const M = S.hasOwnProperty("avatar") || S.hasOwnProperty("avatarUrl") && S.avatarUrl != ""
          , V = S.hasOwnProperty("collectionImg") || S.hasOwnProperty("collectionImgUrl") && S.collectionImgUrl != "";
        return M && V || (C.avatar = "Image required"),
        C
    }
      , O = async(S,C)=>{
        try {
            if (h(!0),
            u(!0),
            d) {
                await ar(i, d, S);
                const {allCollections: V, allCreatorNames: E, allCreatorNameGlobal: b, allCollectionNameGlobal: v} = await _t(i, d);
                W.NotificationManager.success("Collection updated successfully"),
                c(d, V[0]),
                s([...new Set(E)]),
                p([...new Set(b)]),
                f([...new Set(v)])
            } else {
                const V = await ar(i, d, S)
                  , {allCollections: E, allCreatorNames: b, allCreatorNameGlobal: v, allCollectionNameGlobal: k} = await _t(i, V);
                W.NotificationManager.success("Collection created successfully"),
                o(E[0]),
                s([...new Set(b)]),
                p([...new Set(v)]),
                f([...new Set(k)])
            }
            localStorage.getItem("_fromWhichUserCollection") == "admin" ? y("/dashboard/admin") : y("/dashboard/collections"),
            localStorage.removeItem("_fromWhichUserCollection")
        } catch (M) {
            console.log(M),
            W.NotificationManager.error("Some error occurred. Please try again")
        } finally {
            h(!1),
            u(!1)
        }
    }
    ;
    return w.exports.useEffect(async()=>{
        try {
            if (d && (h(!0),
            i)) {
                const {allCollections: S, allCreatorNames: C, allCreatorNameGlobal: M, allCollectionNameGlobal: V} = await _t(i, d);
                N(S[0]),
                s([...new Set(C)]),
                p([...new Set(M)]),
                f([...new Set(V)])
            }
        } catch {} finally {
            h(!1)
        }
    }
    , [e]),
    w.exports.useEffect(()=>{
        d && h(!0)
    }
    , []),
    w.exports.useEffect(()=>{
        _ && Object.keys(_).length !== 0 && h(!1)
    }
    , [_]),
    t.createElement(Wt, {
        maxWidth: "md",
        sx: {
            paddingLeft: {
                xs: "0",
                sm: "24px"
            },
            paddingRight: {
                xs: "0",
                sm: "24px"
            }
        }
    }, t.createElement(Sa, {
        sx: {
            overflow: "hidden",
            marginTop: {
                xs: "0",
                sm: "48px"
            },
            marginBottom: {
                xs: "0",
                sm: "48px"
            },
            outline: {
                xs: "none",
                sm: "1px solid #0FC89F"
            },
            borderRadius: {
                xs: "0px",
                sm: "25px"
            },
            backgroundColor: {
                xs: "transparent",
                sm: "#FEFEFE"
            }
        }
    }, t.createElement(n, {
        container: !0,
        pt: 3,
        pb: 3,
        sx: {
            backgroundColor: "#0FC89F"
        }
    }, t.createElement(m, {
        variant: "h5",
        ml: 4,
        sx: {
            color: "#ffffff"
        }
    }, "Create Collection")), t.createElement(Sa, {
        mt: {
            xs: 1,
            sm: 2
        },
        mb: {
            xs: 1,
            sm: 2
        },
        ml: {
            xs: 2,
            sm: 4
        },
        mr: {
            xs: 2,
            sm: 4
        }
    }, t.createElement(ma, {
        initialValues: _,
        onSubmit: O,
        validate: T,
        render: ({handleSubmit: S, form: C, submitting: M, invalid: V, pristine: E, values: b, errors: v})=>t.createElement("form", {
            onSubmit: S
        }, t.createElement(n, {
            container: !0,
            spacing: 2
        }, t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            ml: 1
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h6"
        }, "Metadata"))), t.createElement(n, {
            container: !0,
            spacing: 2,
            mt: 1,
            mb: 1,
            ml: 2,
            mr: 2
        }, t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Creator Name"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"))), t.createElement(n, {
            container: !0,
            item: !0,
            columns: 13,
            spacing: {
                xs: 1,
                sm: 2
            }
        }, r && Object.keys(r).length !== 0 ? t.createElement(t.Fragment, null, t.createElement(n, {
            item: !0,
            xs: 13,
            sm: 6
        }, t.createElement(_e, {
            name: "creatorName",
            label: "Select Creator Name",
            formControlProps: {
                margin: "none"
            },
            disabled: !(_ && Object.keys(_).length === 0)
        }, t.createElement(G, {
            value: ""
        }, "Select Creator Name"), r ? r.map((k,q)=>t.createElement(G, {
            key: q,
            value: `${k}`
        }, k)) : "")), t.createElement(n, {
            item: !0,
            xs: 13,
            sm: 1,
            sx: {
                marginTop: "16px"
            }
        }, t.createElement(m, {
            align: "center"
        }, "or"))) : "", t.createElement(n, {
            item: !0,
            xs: 13,
            sm: r && Object.keys(r).length !== 0 ? 6 : 13
        }, t.createElement(I, {
            name: "creatorNameNew",
            component: ee,
            label: "Create New",
            placeholder: "Create New",
            fullWidth: !0,
            disabled: !(_ && Object.keys(_).length === 0)
        }), t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "caption",
            color: "#d32f2f"
        }, t.createElement($e, {
            name: "creatorNameNew"
        }))))), t.createElement(n, {
            container: !0,
            item: !0
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Collection Name")), t.createElement(n, {
            container: !0,
            item: !0,
            columns: 12,
            spacing: 2
        }, t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "collectionName",
            component: ee,
            placeholder: "Name of your collection",
            fullWidth: !0,
            required: !0,
            disabled: !(_ && Object.keys(_).length === 0)
        }), t.createElement(n, {
            container: !0,
            item: !0
        }, t.createElement(m, {
            variant: "caption",
            color: "#d32f2f"
        }, t.createElement($e, {
            name: "collectionName"
        })))), t.createElement(m, {
            variant: "subtitle2",
            sx: {
                fontStyle: "italic",
                alignSelf: "center",
                justifyItems: "center",
                textAlign: "right",
                width: "100%"
            }
        }, "30 Characters")), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Tiny Description"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2",
            mt: 1
        }, "Less than 7 words"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "collectionTinyDesc",
            component: ee,
            multiline: !0,
            rows: 1,
            fullWidth: !0,
            required: !0,
            placeholder: "10,000 Haunted and spooky Hamsters"
        }), t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "caption",
            color: "#d32f2f"
        }, t.createElement($e, {
            name: "collectionTinyDesc"
        }))))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Brief Description"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "Less than 30 words"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "collectionBriefDesc",
            component: ee,
            multiline: !0,
            rows: 3,
            fullWidth: !0,
            required: !0,
            placeholder: "Make your friends smile with these unique NFTs or collect them all! Plans are being developed to make ICmojis even more fun to use so stay tuned for future updates!"
        }), t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "caption",
            color: "#d32f2f"
        }, t.createElement($e, {
            name: "collectionBriefDesc"
        }))))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Collection Description"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "Less than 500 words, 2-3 paragraphs"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "collectionDesc",
            component: ee,
            multiline: !0,
            rows: 6,
            fullWidth: !0,
            required: !0,
            placeholder: "Wild and West: The Journey Begins. We're excited to have you! Here are some of the amazing perks you get for participating in our pre-sale: access to the Maverick role in Discord along with its very own exclusive channel, daily NFT updates, and the chance to help us decide rarity. You will also be granted access to Keak the moment it launches, the chance to learn how genesis works, and any first glimpses at all future projects (collaborations and other). For more information click here. We can't thank you enough for all of your support. Welcome to the Wild and West!"
        }), t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "caption",
            color: "#d32f2f"
        }, t.createElement($e, {
            name: "collectionDesc"
        }))))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Keywords"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "A space separated list of relevant keywords. Non-relevant keywords will be removed. Too many non-relevant keywords and we will reject your entry"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "keywords",
            component: ee,
            fullWidth: !0,
            required: !0,
            placeholder: "GameFi Utility Photography"
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Website URL"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "websiteUrl",
            component: ee,
            fullWidth: !0,
            required: !0,
            placeholder: ""
        })))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            ml: 1,
            mt: 1
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h6"
        }, "Social Links"))), t.createElement(n, {
            container: !0,
            spacing: 2,
            mt: 1,
            mb: 1,
            ml: 2,
            mr: 2
        }, t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Telegram"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "telegram",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Discord"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "discord",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Twitter"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "twitter",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Medium"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "medium",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "DSCVR"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "dSCVR",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Distrikt"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "distrikt",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7"
        }, "If you have additional please provide and we will add to Entrepot in future. "))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "additional",
            component: ee,
            placeholder: "",
            size: "small",
            fullWidth: !0
        })))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            ml: 1,
            mt: 1
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h6"
        }, "Images"))), t.createElement(n, {
            container: !0,
            spacing: 2,
            mt: 1,
            mb: 1,
            ml: 2,
            mr: 2
        }, t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Avatar - square image (which will be cropped to a circle)."), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "Please provide at 150x150 as a JPG or PNG"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, b.hasOwnProperty("avatar") ? t.createElement(n, {
            item: !0
        }, t.createElement(va, {
            src: URL.createObjectURL(b.avatar[0]),
            alt: "Avatar",
            width: 55,
            height: 55
        })) : b.hasOwnProperty("avatarUrl") && b.avatarUrl != "" ? t.createElement(n, {
            item: !0
        }, t.createElement(va, {
            src: b.avatarUrl,
            alt: "",
            width: 55,
            height: 55
        })) : "", t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(me, {
            name: "avatar",
            size: "large",
            className: "large-button",
            required: !0,
            hasModal: !0,
            title: "Upload Image Info",
            uploadDone: b.hasOwnProperty("avatarUrlNew"),
            message: t.createElement("div", null, t.createElement(n, {
                container: !0,
                spacing: 2
            }, t.createElement(n, {
                item: !0
            }, t.createElement(m, {
                variant: "subtitle2"
            }, "Make sure assets are in image format.")))),
            onChange: async k=>{
                b.avatar = k,
                x(Math.random());
                const q = await Nt(k[0]);
                b.avatarUrlNew = q
            }
        }), t.createElement(n, {
            item: !0
        }, t.createElement(m, {
            variant: "caption",
            color: "#d32f2f"
        }, t.createElement($e, {
            name: "avatar"
        })))), t.createElement(m, {
            ml: 2,
            variant: "subtitle2"
        }, "Image should be a square .jpg, .png, .svg, or .gif")), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Collection Banner"), t.createElement(m, {
            variant: "subtitle2"
        }, "Images should be 1200px wide and 200px high. (If larger will be cropped around to fit)."))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, b.hasOwnProperty("bannerImg") ? t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement("img", {
            className: "large-image",
            src: URL.createObjectURL(b.bannerImg[0]),
            alt: "Banner",
            width: 55,
            height: 55
        })) : b.hasOwnProperty("bannerImgUrl") && b.bannerImgUrl != "" ? t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement("img", {
            className: "large-image",
            src: b.bannerImgUrl,
            alt: "",
            width: 55,
            height: 55
        })) : "", t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(me, {
            name: "bannerImg",
            size: "large",
            className: "large-button",
            hasModal: !0,
            title: "Upload Image Info",
            uploadDone: b.hasOwnProperty("bannerImgUrlNew"),
            message: t.createElement("div", null, t.createElement(n, {
                container: !0,
                spacing: 2
            }, t.createElement(n, {
                item: !0
            }, t.createElement(m, {
                variant: "subtitle2"
            }, "Make sure assets are in image format.")))),
            onChange: async k=>{
                b.bannerImg = k,
                x(Math.random());
                const q = await Nt(k[0]);
                b.bannerImgUrlNew = q
            }
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Collection Image"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "Please provide at 350x200 as a JPG"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, b.hasOwnProperty("collectionImg") ? t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement("img", {
            className: "large-image",
            src: URL.createObjectURL(b.collectionImg[0]),
            alt: "Image",
            width: 55,
            height: 55
        })) : b.hasOwnProperty("collectionImgUrl") && b.collectionImgUrl != "" ? t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement("img", {
            className: "large-image",
            src: b.collectionImgUrl,
            alt: "",
            width: 55,
            height: 55
        })) : "", t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(me, {
            name: "collectionImg",
            size: "large",
            className: "large-button",
            required: !0,
            hasModal: !0,
            title: "Upload Image Info",
            uploadDone: b.hasOwnProperty("collectionImgUrlNew"),
            message: t.createElement("div", null, t.createElement(n, {
                container: !0,
                spacing: 2
            }, t.createElement(n, {
                item: !0
            }, t.createElement(m, {
                variant: "subtitle2"
            }, "Make sure assets are in image format.")))),
            onChange: async k=>{
                b.collectionImg = k,
                x(Math.random());
                const q = await Nt(k[0]);
                b.collectionImgUrlNew = q
            }
        })), t.createElement(m, {
            ml: 2,
            variant: "subtitle2"
        }, "Image should be a square .jpg, .png, or .svg")), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(n, {
            container: !0
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Homepage banner")), t.createElement(m, {
            variant: "subtitle2"
        }, "Please provide at 1200x485"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, b.hasOwnProperty("homepageImg") ? t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement("img", {
            className: "large-image",
            src: URL.createObjectURL(b.homepageImg[0]),
            alt: "Homepage",
            width: 55,
            height: 55
        })) : b.hasOwnProperty("homepageImgUrl") && b.homepageImgUrl != "" ? t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement("img", {
            className: "large-image",
            src: b.homepageImgUrl,
            alt: "",
            width: 55,
            height: 55
        })) : "", t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(me, {
            name: "homepageImg",
            size: "large",
            className: "large-button",
            hasModal: !0,
            title: "Upload Image Info",
            uploadDone: b.hasOwnProperty("homepageImgUrlNew"),
            message: t.createElement("div", null, t.createElement(n, {
                container: !0,
                spacing: 2
            }, t.createElement(n, {
                item: !0
            }, t.createElement(m, {
                variant: "subtitle2"
            }, "Make sure assets are in image or gif format.")))),
            onChange: async k=>{
                b.homepageImg = k,
                x(Math.random());
                const q = await Nt(k[0]);
                b.homepageImgUrlNew = q
            }
        })), t.createElement(m, {
            ml: 2,
            variant: "subtitle2"
        }, "Image should be a square .jpg, .png, .svg, or .gif"))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            ml: 1,
            mt: 1
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h6"
        }, "Payment Information"))), t.createElement(n, {
            container: !0,
            spacing: 2,
            mt: 1,
            mb: 1,
            ml: 2,
            mr: 2
        }, t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Creator fee (% royalty on secondary sales)"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "The Creator Royalty is the percentage royalty you will take from secondary sales in the market. We recommend 2.5% or less for most projects."))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(_e, {
            name: "royalty",
            label: "Select Royalty",
            formControlProps: {
                margin: "normal"
            },
            required: !0
        }, t.createElement(G, {
            value: "1"
        }, "0%"), t.createElement(G, {
            value: "2"
        }, "0.5%"), t.createElement(G, {
            value: "3"
        }, "1%"), t.createElement(G, {
            value: "4"
        }, "1.5%"), t.createElement(G, {
            value: "5"
        }, "2%"), t.createElement(G, {
            value: "6"
        }, "2.5%"), t.createElement(G, {
            value: "7"
        }, "3%"), t.createElement(G, {
            value: "8"
        }, "3.5%"), t.createElement(G, {
            value: "9"
        }, "4%"), t.createElement(G, {
            value: "10"
        }, "4.5%"), t.createElement(G, {
            value: "11"
        }, "5%"), t.createElement(G, {
            value: "12"
        }, "5.5%"), t.createElement(G, {
            value: "13"
        }, "6%"), t.createElement(G, {
            value: "14"
        }, "6.5%"), t.createElement(G, {
            value: "15"
        }, "7%"), t.createElement(G, {
            value: "16"
        }, "7.5%"), t.createElement(G, {
            value: "17"
        }, "8%"), t.createElement(G, {
            value: "18"
        }, "8.5%"), t.createElement(G, {
            value: "19"
        }, "9%"), t.createElement(G, {
            value: "20"
        }, "9.5%"), t.createElement(G, {
            value: "21"
        }, "10%")))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Wallet address to receive ICP"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "This must be a wallet address, not principal ID. This is where you will receive primary sale proceeds (ICP), and secondary market royalties (ICP)."))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "royaltyAddress",
            component: ee,
            placeholder: "",
            fullWidth: !0,
            required: !0
        }))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(m, {
            variant: "h7",
            sx: {
                fontWeight: "bold"
            }
        }, "Wallet address to receive NFTs"), t.createElement(m, {
            variant: "h5",
            display: "inline",
            color: "#d32f2f"
        }, "*"), t.createElement(m, {
            variant: "subtitle2"
        }, "This must be a wallet address, not principal ID. This is where you will receive team NFTs and surplus NFTs from your launch."))), t.createElement(n, {
            container: !0,
            item: !0,
            xs: 12,
            spacing: 2
        }, t.createElement(n, {
            item: !0,
            xs: 12
        }, t.createElement(I, {
            name: "nftAddress",
            component: ee,
            placeholder: "",
            fullWidth: !0,
            required: !0
        }))))), t.createElement(n, {
            item: !0,
            container: !0,
            sx: {
                display: "flex",
                p: 2,
                justifyContent: "flex-end"
            },
            spacing: 3
        }, t.createElement(n, {
            item: !0
        }, t.createElement(R, {
            variant: "outlined",
            component: ye,
            to: localStorage.getItem("_fromWhichUserCollection") == "admin" ? "/dashboard/admin" : "/dashboard/collections"
        }, "Cancel")), t.createElement(n, {
            item: !0
        }, t.createElement(R, {
            variant: "contained",
            type: "submit",
            disabled: M || V
        }, "Save & Exit"))))
    }))))
}
  , lo = e=>{
    const {collections: {list: r, creatorName: a, creatorNameGlobal: l, collectionNameGlobal: o}} = e;
    return {
        list: r,
        creatorName: a,
        creatorNameGlobal: l,
        collectionNameGlobal: o
    }
}
  , oo = e=>({
    addCollection: r=>e(kl(r)),
    updateDataInCollection: (r,a)=>e(Yt(r, a)),
    updateCreatorNameSelf: r=>e(La(r)),
    updateCreatorNameGlobal: r=>e(er(r)),
    updateCollectionNameGlobal: r=>e(tr(r))
});
var wr = pe(lo, oo)(no);
var so = "/assets/entrepot.e5156fe7.png";
const co = ({login: e, connectingUsing: r})=>t.createElement("div", {
    className: "login-wrapper"
}, t.createElement("div", {
    className: "login-container"
}, t.createElement("img", {
    src: so
}), t.createElement("div", null, t.createElement("span", {
    className: "title"
}, "Mint your NFT"), t.createElement("span", {
    className: "subtitle"
}, "Create, Launch, and Manage your NFT collection")), t.createElement(fe, {
    justifyContent: "center",
    alignItems: "center",
    spacing: 2
}, t.createElement(R, {
    onClick: ()=>{
        e("plug")
    }
    ,
    variant: "contained"
}, "Connect to Plug", r == "plug" && t.createElement(we, {
    size: 16,
    sx: {
        marginLeft: "12px",
        color: "#fff"
    }
})), t.createElement(R, {
    onClick: ()=>{
        e("stoic")
    }
    ,
    variant: "contained"
}, "Connect to Stoic", r == "stoic" && t.createElement(we, {
    size: 16,
    sx: {
        marginLeft: "12px",
        color: "#fff"
    }
})))));
const io = ()=>{
    const [e,r] = w.exports.useState(window.innerWidth);
    w.exports.useEffect(()=>(window.addEventListener("resize", a),
    a(),
    ()=>window.removeEventListener("resize", a)), []);
    const a = ()=>{
        r(window.innerWidth)
    }
      , l = ()=>{
        const {pathname: s} = Gn()
          , p = s.split("/");
        return p.shift(),
        p
    }
      , o = s=>{
        const p = [...l()];
        return p.splice(s + 1, p.length),
        `/${p.join("/")}`
    }
      , c = ()=>e > 600 ? 5 : 3;
    return t.createElement(qn, {
        maxItems: c(),
        separator: t.createElement(jn, {
            fontSize: "small"
        }),
        "aria-label": "breadcrumb"
    }, l().map((s,p)=>t.createElement(ye, {
        key: p,
        className: `breadcrumb ${p + 1 === l().length ? "active" : ""}`,
        to: o(p)
    }, s)))
}
  , mo = e=>`${e.substr(0, 8)}...${e.substr(-4)}`;
const br = ({principalId: e, fetchingUser: r, isMobile: a})=>t.createElement("div", {
    className: "connection-badge"
}, t.createElement("div", {
    className: "connection-row"
}, r ? t.createElement(we, {
    size: 16
}) : t.createElement("div", {
    className: `principal-badge ${a ? "is-mobile" : ""}`
}, t.createElement("div", {
    className: "connection-dot"
}), mo(e))));
var uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAAxCAYAAADeMZvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzMSURBVHgB7VwLlFZVFd4DQxEEAj5JEJV8BBJoiJgoWJamGauyliiihvlILTRby7ByqeUrgwShXJlkurACtZRUkHgs8IFgiAYpkCAveSiDPGQEZk7fx96XOXPm/P9/Z+ZHZsb7rfWt///vPefcc+/Zd5+999nnF9kLcM61Ae8Dy8Ad4MvgxWCJZMiQFhCYQ8EXXRyflgxNFqVSD0A4DsHHYJBCMgM8AfwJyOMLwflgF/AU8N2SkpKtkiGDDwhRM/AY8AywPzgWXAsuB38H9g7KdwH/LBkyhDBhahUc4/S2f47yJeDtkqFJo1mhAhCC5uBFYDewJY9huqoEP/DL4fdq8L0czXQA35cMTRoFhQloAQ4BXwVnQ6B+CfappTHdHXxTMmSA4LQHx3teWQX4X3AEeArYLp/bj3PXgEdLhgwEhOEAcGHE3adgvWGG91nggbSpgrqjOF1KhgwJTFi2uPxYA04GrwV7gp8CH5AMGXyYYDzr0mMjONt4ErifZMiQAAIxFKx0tcdW8CXwFqexqYMkQ5NCrdfKIAQ98DENPEDqjs3gYvB5cLKop7gWoQUnGRot6iJMFKLp4HFSHGwHnwJXgP8EZ2ZC1ThRl7W5LcZiYQf4rKim6igZGi3qIkzUGpVSPNAo7wZtNE4yNGqkiYCHYOS7lRQXXSVDo0ddhIk2U3spLuqVCpOhYaAuwnSEaL5SMfGeZGj0qIswnQm2lOJisWRo9KjV9IKwwGH4+JIUF/QMXy5UiNF3fPQC2Ye/w2D/MDjPjM4TpTC2gTNQf7tk2HfAgF3ndINAPnBtjjngFRbx3lqg/PPO8qQi1+sEXg0+Ci4Bp4DnukiGgtMNCztTcKXLMhj2ClJrJnvzrxXNb/LBONFU8DFwCrgaPAO8DW9/X9T7JL5/HbwJPD5S97coV27XYH+YR36OkZqombV/hahGyRWWKEl5P6VSt+l9D9DPfvj4rHeI2u6xPH1r9MA984PP7ptga+/UK7jv1yUtnGZb3u9qrrXda0IWlmdO+M+DY81sXW6X18ZMp7lSA8FxptUSULPNAE92KbZIocwlLh3eAY+VegD1/xS0ydz3T0gTBoXJ6Ra2ld59c432xqRMWs30HdFsS4K2ynhRzbMsclFqogHghf5xvrU4dyu+rgJHgyx3KLhSqkt6BfgceCc4q55v+0Jr30eZqCbJUGTkFSZTbdQ8I0QHnwuzN2CAX8pT7TRWRZn5Vr/EyCluoDF5i/1gJae8SeBd4Nwirc+NRjv3x05Y31IBbaSql+8c2wjP52g3OegKlMt5Kb++XzdPf8NCBevG2iktUIC7TR4WjXj/GBwbelGROheBT9sh2hbUaGeLaiGXo/PUFEPR9l+lyIg9fHtIPUU3OiRYB74BHgl+BTxY1NOkgzBH9AVhuVPtnA86EAPAneBysDPoZ5byxeKGimPAk0VXESZyyk26BPYVfRE72bG1oi8vr7/Ta4sxvs95v3eJZl1wXfN88CjRF5N2zN9oOnj3HD6TZBY51eszy1NZTEW5zcF1T7A64vWbz+t08YS/Gmx+7AL+y2li2+elAKxOd6f7506336u8+fURsAd4Hrg0sDlm1dfmyGEz3e00d8pnNyv/TFB2EngXWB5ph8/hSLunMpcf3HDhZ6Nyeh8E/tGpN5kc6+/UjjwTnJ+jLZZ7HTwbLLXrXxqU4bX+AG6L1N8MXu88b9naYJLjFeBbLjfWgb8A2+a4bo2++hfweZzT/we406XcheJ0b9xopw+G+eKtwA/sQtudxomSsj8KOjJF6gmX3gCfnkOYPnTVnYMQr4AtXO2FiVjsqicUJsI0yK7ro9zq++XfdzqYuQa1ULLiSKfjkzhTv3HpExynOXWSCgpT4iJTKxxspEs+QXR6u1dS5Dw5VZtUvd8C/yG6PPJ9MBEgttHKbka84w0JfAY0/hna4PQTqm2q+D6iGRMxlV5p9WPnOPWUWJnEoThQ1BHxNTKnU05VdL/pgCSpPm1BesftJA62zalwo2h+WAiGdE6z7xzfYRI3NWKpRZzC7pDc2SI8XrGbNsBXgW+DK5xqkW32m7xGCsCpuh4DbnC6iYBvXPh2Pg4eD57v1D1PwBDAJFdTO0pt4OqvmTgFDQc7gh2chipC8BqcpqcFx5nrPgS8wO4vvHdqAZoL3GQxGLzVqdb3QS3Oja77GandH/DO77JrxzQEzQluJ+vlVOM9EynD589xmhccZ7sPg/3AL4C/dlXTcYJN4Ing9+y7DwaUed+D+FDbuuq2TQg2Hg5cyAFOH+hcpzGYQlHvpIPPgfeAt4FXOn1Q/P+CQ5zeeH2FiVPSWwEfzyFMnNbbe+31jbR3pZ2LxpnsWfChh8L0AvgZr21OOWOCMnyJ5wQMbZoxrqYwcUXicmexOOsDp6UFQTk+iy6uJp5yGs5J6nIaHBGU4cvwNZciznSW1PROfFAt3sHOeMeomunh0Z6ie081yIHobcwHeoP/Axn15tT4ZampcnktDvrNuO7qtC5qBDfmCg1EwJiZr+bXSnHAN2I8+rEmOB4Ge2kk9ynQDtcl5wXH3wVfSEIpFoLg83sC9B0nJiH2DOpyepqYeOhWl8do5lwl1Rf0Oc6zJQ8oTHTj+cYNFXVbQ3DAuYHgSdFB39/YyS5wkKTPJWdHKURHS/4YV3uvP1+tj0C59NqNLvbeWg6JbY2vCH4nLnk+LIwco1ahNvHd/902aqRsLKzTLqhLtI2U2ykFUGr/mUS3lcLCt7N1pFxPqSnVdQHjGLG9c7niT3TjaSz+TOIPohAYRzoqOEahWSUfLXZEjoVpN9SE54nFs+wl4Dqo/9Kx74ODeh3sGMMtNKL5DLluOCQox3ueZ31JjP7mVo4xpYVWl8rhh1JdK7Ez/5EC8DtKdZnvzdwgGpBbL/pW8SYYiOwsdc+UpPfBaWimqHfDmwjTSLiUQ69nhdQe14M/CI5tsDb3JTg4vOcbvGOckujFPWlTDYOQI0WntgQjc7THRXBq8+lW72qpabrQy+bz5tayc73jXEx/BJwI8p9tKNB9g7rLRf+4Le8Wf18IKJFtImXoajJEwOj00uTf35wGGTnv8wFcLrXP414KDkJ7e2wAtPma6HanTl45XoNR1roIU2xvH++5hex7cOCpDbrbb/ZrnGh4gM+YoQjfruJALwC/GGmL4zbUGANtqFGiQnyz6MpE4mwwPNTLGANnhPvs+m0kD/xUjJgRTm31bfAmDPqr/t8I4vsOcAl4t6hGWSbpwfA/Df95gU1DVfpipHwnaUIw+4RT0qVSfcqlrcKlHL6gviBxemOcKZaRWmnnc4FjNszGir+pYTheaVKlqUjGis4eubBnAH3NFNorNJQHowOTq9WMr3U9jeO84C1Sfe0mhhngBajzjmm3I/D5ptexikidXVIYtAXKUpTjGhkHYGtQfotUDzhWRtpL7Lby4FyZV5d93SRVBquTiPFqdtFc0XVL/qseg4p88/2FWpIC9CvwLxIPiPI+HhRNp6Zj09yruwQcLurZ+Zhg90t7lN536+C67O8iUfPiUWal2rg7q+ffe/mee0q+OE3JfdsrxKntOn/13hpkOIB/eMppjdPSHJRhkOtwfJ8l+bUIjfyLUX6TtccHyLfkp6K22ADRt8DXkhzU3sxCyNMu26INd5gUBh8Up1jae77Xso4C7rVHQe8W1F3Jf8fDORq4/jLTNmuTD4heFM/7Wn8RNbnE+80PvoDcId3b+sXffB6c1v6Nuhu9stRmD3pNcGAZXuGg0tbhuFCgOYXORN31ea5LM4DTLO21jtZnluci8QK/rpWnoPYImlpT4xpO152SyCeT1LqGF3e62MnU2WQxlMHJC+0cA3GzXByMcjM4Gf4PJqPljMByQXK1i/9dDxPoir2BoVHCxdfmGCzuJQ0N6NQy6yBdxZLgXLJkUhHczARXFf2dGhEGLs0MA1tErtcSnO5yg1Hy/pJhNxq6MIW50K/Z55JIchq9vX5Wh2o9sW2Y80K1StV8eFCH08YgcBSnwuCcWO433VjOz8n1kvmeaprT7EzJ0CgQxocYDf+G5I5oJ6v9dGvp0jMAycxI2jXcRNDZK8to7mUQhoWSBzi/yKntRO8uSexK/pD+ow4uZqgvXNWCLbcWrXf673BhmVJvSqInxkQ4hvFpKx3rqv7vkguPvwfbSYaiwsboEqcLrAkbzDRXarYRFxhppTPG85Do1ERh2JQUhAahocwI7EmiKZz03KjJqN3oTXC9jq4og2ITY9NahqKAqbzDvd8MVzSM7fUQkNs9Y445NZc5TZkY4iIxJad5Lwz5l9mbUW4a67sxIzvDxwiuKrWWSU73mGAwbfcJlydl16Y35hJn/2CSQeF0K/dDJhzkQLOFuoLnSIYMKfF/dk+O0y7hrvYAAAAASUVORK5CYII=";
const xr = ({app: e, toggleSideMenu: r})=>{
    const a = et()
      , l = o=>{
        a(o),
        r && r()
    }
    ;
    return w.exports.useEffect(async()=>{
        if (e) {
            const o = await e.isAdminUser();
            localStorage.setItem("_isAdmin", o)
        }
    }
    , [e]),
    t.createElement("div", {
        className: "menu"
    }, t.createElement("img", {
        src: uo,
        className: "entrepot"
    }), t.createElement("span", {
        className: "menu-wrapper",
        onClick: o=>{
            o.stopPropagation(),
            l("/dashboard")
        }
    }, t.createElement("span", {
        className: "icon ico-home"
    }), t.createElement("span", null, "Dashboard")), t.createElement("span", {
        className: "menu-wrapper",
        onClick: o=>{
            o.stopPropagation(),
            l("/dashboard/collections")
        }
    }, t.createElement("span", {
        className: "icon ico-collection"
    }), t.createElement("span", null, "Collections")), localStorage.getItem("_isAdmin") == "true" ? t.createElement("span", {
        className: "menu-wrapper",
        onClick: o=>{
            o.stopPropagation(),
            l("/dashboard/admin")
        }
    }, t.createElement("span", {
        className: "icon ico-home"
    }), t.createElement("span", null, "Admin")) : "")
}
  , Nr = ({app: e, mobile: r, principalId: a, fetchingUser: l, logout: o})=>{
    const [c,s] = w.exports.useState(!1)
      , p = ()=>{
        s(!c)
    }
      , f = ()=>{
        document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`)
    }
    ;
    return w.exports.useEffect(()=>{
        window.addEventListener("scroll", f.bind(globalThis))
    }
    , []),
    w.exports.useEffect(()=>()=>{
        window.removeEventListener("scroll", f.bind(globalThis))
    }
    , []),
    w.exports.useEffect(()=>{
        if (c) {
            const i = document.documentElement.style.getPropertyValue("--scroll-y")
              , h = document.body;
            h.style.position = "fixed",
            h.style.left = "0",
            h.style.right = "0",
            h.style.top = `-${i}`
        } else {
            const i = document.body
              , h = i.style.top === "" | i.style.top === "0px" ? document.documentElement.style.getPropertyValue("--scroll-y") : i.style.top;
            document.body.removeAttribute("style");
            const u = parseInt(h || "0");
            window.scrollTo(0, u < 0 ? u * -1 : u)
        }
    }
    , [c]),
    t.createElement(t.Fragment, null, r ? t.createElement("div", {
        className: "menu-mobile"
    }, t.createElement("span", {
        className: "icon ico-menu",
        onClick: i=>{
            i.stopPropagation(),
            p()
        }
    }), t.createElement("div", {
        className: `sidemenu-wrapper ${c ? "open" : ""}`,
        onClick: i=>{
            i.stopPropagation(),
            p()
        }
    }, t.createElement("div", {
        className: "sidemenu-container"
    }, t.createElement("div", {
        className: "sidemenu",
        onClick: i=>{
            i.stopPropagation()
        }
    }, t.createElement(xr, {
        app: e,
        toggleSideMenu: p
    }), t.createElement(J, {
        sx: {
            display: {
                xs: "block",
                sm: "none"
            }
        }
    }, t.createElement(n, {
        container: !0,
        spacing: 1
    }, t.createElement(n, {
        item: !0
    }, t.createElement(br, {
        principalId: a,
        fetchingUser: l,
        isMobile: !0
    })), t.createElement(n, {
        item: !0
    }, t.createElement(R, {
        onClick: o,
        className: "logout",
        sx: {
            color: "white",
            fontWeight: "700"
        }
    }, "Logout")))))))) : t.createElement(xr, null))
}
;
const po = ({app: e, principalId: r, fetchingUser: a, logout: l})=>t.createElement("div", {
    className: "dashboard-main"
}, t.createElement("div", {
    className: "dashboard-wrapper"
}, t.createElement("div", {
    className: "dashboard-container"
}, t.createElement("div", {
    className: "dashboard menu"
}, t.createElement(Nr, {
    app: e
})), t.createElement("div", {
    className: "dashboard details"
}, t.createElement("div", {
    className: "dashboard-content-container"
}, t.createElement("div", {
    className: "header"
}, t.createElement(n, {
    container: !0,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
}, t.createElement("div", {
    className: "header-wrapper"
}, t.createElement(Nr, {
    app: e,
    mobile: "true",
    principalId: r,
    fetchingUser: a,
    logout: l
}), t.createElement(io, null)), t.createElement(n, {
    item: !0
}, t.createElement(n, {
    container: !0,
    item: !0,
    spacing: 2
}, t.createElement(n, {
    item: !0,
    sx: {
        display: {
            xs: "none",
            sm: "block"
        }
    }
}, t.createElement(br, {
    principalId: r,
    fetchingUser: a
})), t.createElement(n, {
    item: !0,
    className: "logout-desktop"
}, t.createElement("a", {
    onClick: l,
    className: "logout"
}, "LOGOUT")))))), t.createElement("div", {
    className: "dashboard-content"
}, t.createElement($n, null)))))))
  , ho = ()=>{
    const e = et();
    return w.exports.useEffect(()=>{
        e("/dashboard/collections")
    }
    ),
    t.createElement("div", null)
}
;
var fo = "/assets/favicon.b744a239.png";
const Tr = ["Five years after the introduction of Bitcoin, the minting and selling of NFTs began.", "The first NFT was created by Kevin McCoy in May of 2014.", "McCoy minted Quantum, which raked in $1.4 million at a Sotheby auction in November 2021.", "Smart contracts mean anything digital can become an NFT.", "In the first six months of 2020, the NFT market generated an impressive $13.7 million in sales.", "Each and every NFT minted is a verifiably unique asset that is worth as much as someone\u2019s willing to pay for it.", "A 17 year-old female artist created an uncompromising collection of art that consists of 11,111 creative NFT\u2019s.", "The first NFT projects to find mainstream success was CryptoPunks and CryptoKitties, released in June 2017 and November 2017.", "Minting is the way your artwork, collectible, song, video, domain, or other asset becomes part of the blockchain.", "Minting is named after the conventional method of producing coinage.", "When the CryptoPunks project was launched, the 10,000 digital tokens were given away for free with some of those now worth millions of dollars.", "Through dApps like NFTfi, NFTs can now be used as collateral."]
  , Dt = ({isOpen: e, uploadingImage: r, formSubmitting: a, progress: l})=>{
    const [o,c] = w.exports.useState(e);
    let s;
    const p = ()=>Tr[Math.floor(Math.random() * (Tr.length - 1) + 1)]
      , [f,i] = w.exports.useState(p());
    return w.exports.useEffect(()=>{
        c(e),
        e || clearInterval(s)
    }
    , [e]),
    w.exports.useEffect(()=>{
        o ? (document.body.style.overflow = "hidden",
        document.body.style.position = "fixed") : document.body.removeAttribute("style")
    }
    , [o]),
    w.exports.useEffect(()=>{
        setInterval(()=>{
            o && (s = i(p()))
        }
        , 1e4)
    }
    , []),
    t.createElement("div", {
        className: `pageloader-wrapper ${o ? "open" : ""}`
    }, t.createElement("div", {
        className: "pageloader-container"
    }, t.createElement("img", {
        height: "74px",
        width: "74px",
        src: fo,
        alt: "entrepot logo",
        className: "entrepot-loader"
    }), t.createElement("span", {
        className: "fun-fact"
    }, "FUN FACT"), t.createElement("span", {
        className: "fact"
    }, f), l != null && l > 0 && l < 101 ? t.createElement(J, {
        sx: {
            width: "75%",
            mt: 2,
            mb: 1
        }
    }, t.createElement(Yn, {
        variant: "determinate",
        value: l
    })) : "", t.createElement("div", {
        className: "other-wrapper"
    }, r && t.createElement("span", {
        className: "other-info"
    }, "Uploading Assets. This may take up to 5 minutes to upload everything. Please do not refresh or go back or you may lose your changes."), a && t.createElement("span", {
        className: "other-info"
    }, "Thank you for using our NFT minting tool. Your collection and launch details are being saved on the Internet Computer blockchain. This may take up to 5 minutes depending on the size of data being uploaded. Please do not refresh or go back or you may lose your changes."))))
}
;
/**
 * @file RosettaApi
 * @copyright Copyright (c) 2018-2021 Dylan Miller and dfinityexplorer contributors
 * @license MIT License
 */
const Ar = Hn({
    strict: !0
})
  , Lt = Object.freeze({
    NotFound: 0,
    Timeout: 1,
    NetworkError: 2
});
class Ye extends Error {
    constructor(r, a) {
        super(r);
        switch (a) {
        case 408:
            this.errorType = Lt.Timeout;
            break;
        case 500:
            this.errorType = Lt.NotFound;
            break;
        default:
            this.errorType = Lt.NetworkError;
            break
        }
    }
}
class ea {
    constructor(r, a) {
        this.blockIndex = a,
        this.hash = r.transaction_identifier.hash;
        const l = r.metadata.timestamp.div(1e6).toNumber();
        this.timestamp = new Date(l);
        const o = r.operations;
        o.length >= 1 ? (this.type = o[0].type,
        this.status = o[0].status,
        this.account1Address = o[0].account.address,
        this.amount = new qe(o[0].amount.value),
        (o[0].type === "TRANSACTION" || o[0].type === "BURN") && !this.amount.isZero() && (this.amount = this.amount.negated())) : (this.type = "",
        this.status = "",
        this.account1Address = "",
        this.amount = new qe(0)),
        o.length >= 2 && o[1].type === "TRANSACTION" ? this.account2Address = o[1].account.address : this.account2Address = "",
        o.length >= 3 && o[2].type === "FEE" ? this.fee = new qe(-o[2].amount.value) : this.fee = new qe(0),
        this.memo = new qe(r.metadata.memo)
    }
}
class yo {
    constructor() {
        this.axios = Ve.create({
            baseURL: "https://rosetta-api.internetcomputer.org/",
            method: "post",
            transformRequest: r=>Ar.stringify(r),
            transformResponse: r=>Ar.parse(r),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }),
        this.networkIdentifier = this.networksList().then(r=>r.network_identifiers.find(a=>a.blockchain === "Internet Computer"))
    }
    async getAccountBalance(r) {
        var a;
        try {
            const l = await this.accountBalanceByAddress(r);
            return new qe(l.balances[0].value)
        } catch (l) {
            return new Ye(l.message,Ve.isAxiosError(l) ? (a = l == null ? void 0 : l.response) == null ? void 0 : a.status : void 0)
        }
    }
    async getLastBlockIndex() {
        var r;
        try {
            return (await this.networkStatus()).current_block_identifier.index
        } catch (a) {
            return new Ye(a.message,Ve.isAxiosError(a) ? (r = a == null ? void 0 : a.response) == null ? void 0 : r.status : void 0)
        }
    }
    async getTransaction(r) {
        var a;
        try {
            const l = await this.transactionsByHash(r);
            return l.transactions.length === 0 ? new Ye("Transaction not found.",500) : new ea(l.transactions[0].transaction,l.transactions[0].block_identifier.index)
        } catch (l) {
            return new Ye(l.message,Ve.isAxiosError(l) ? (a = l == null ? void 0 : l.response) == null ? void 0 : a.status : void 0)
        }
    }
    async getTransactions(r, a, l) {
        var o;
        try {
            let c;
            a ? c = a : c = (await this.networkStatus()).current_block_identifier.index,
            l && (c = Math.max(c - l, -1));
            const s = Math.min(r, c + 1)
              , p = [];
            for (let f = 0; f < s; f++)
                p.push(await this.getTransactionByBlock(c - f));
            return p
        } catch (c) {
            return new Ye(c.message,Ve.isAxiosError(c) ? (o = c == null ? void 0 : c.response) == null ? void 0 : o.status : void 0)
        }
    }
    async getTransactionsByAccount(r) {
        var a;
        try {
            const l = await this.transactionsByAccount(r);
            return (await Promise.all(l.transactions.map(c=>new ea(c.transaction,c.block_identifier.index)))).reverse()
        } catch (l) {
            return new Ye(l.message,Ve.isAxiosError(l) ? (a = l == null ? void 0 : l.response) == null ? void 0 : a.status : void 0)
        }
    }
    async getTransactionByBlock(r) {
        const a = await this.blockByIndex(r);
        return new ea(a.block.transactions[0],r)
    }
    async request(r, a) {
        return (await this.axios.request({
            url: r,
            data: a
        })).data
    }
    networksList() {
        return this.request("/network/list", {})
    }
    async networkStatus() {
        const r = await this.networkIdentifier;
        return this.request("/network/status", {
            network_identifier: r
        })
    }
    async accountBalanceByAddress(r) {
        const a = await this.networkIdentifier;
        return this.request("/account/balance", {
            network_identifier: a,
            account_identifier: {
                address: r
            }
        })
    }
    async blockByIndex(r) {
        const a = await this.networkIdentifier;
        return this.request("/block", {
            network_identifier: a,
            block_identifier: {
                index: r
            }
        })
    }
    async transactionsByAccount(r) {
        const a = await this.networkIdentifier;
        return this.request("/search/transactions", {
            network_identifier: a,
            account_identifier: {
                address: r
            }
        })
    }
    async transactionsByHash(r) {
        const a = await this.networkIdentifier;
        return this.request("/search/transactions", {
            network_identifier: a,
            transaction_identifier: {
                hash: r
            }
        })
    }
}
const Ce = "ryjl3-tyaaa-aaaaa-aaaba-cai"
  , Sr = new yo
  , vr = (e,r)=>{
    const a = Buffer(`
account-id`)
      , l = new Uint8Array([...a, ...je.fromText(e).toBlob(), ...nt(r)])
      , o = Zn(l)
      , c = ta(Jn(o))
      , s = new Uint8Array([...c, ...o]);
    return aa(s)
}
  , nt = e=>Array.isArray(e) ? e.concat(Array(32 - e.length).fill(0)) : Array(28).fill(0).concat(ta(e || 0))
  , Eo = e=>{
    for (var r, a = 0; a < 4; a++)
        r = r << 8 | e[a];
    return r
}
  , ta = e=>{
    let r = new ArrayBuffer(4);
    return new DataView(r).setUint32(0, e),
    Array.from(new Uint8Array(r))
}
  , aa = e=>Array.from(e, function(r) {
    return ("0" + (r & 255).toString(16)).slice(-2)
}).join("")
  , Cr = e=>{
    e.substr(0, 2) === "0x" && (e = e.substr(2));
    for (var r = [], a = 0; a < e.length; a += 2)
        r.push(parseInt(e.substr(a, 2), 16));
    return r
}
  , go = e=>{
    var r = /^[0-9a-fA-F]+$/;
    return r.test(e)
}
;
var _o = ({IDL: e})=>{
    const r = e.Text
      , a = e.Record({
        secs: e.Nat64,
        nanos: e.Nat32
    })
      , l = e.Record({
        max_message_size_bytes: e.Opt(e.Nat32),
        node_max_memory_size_bytes: e.Opt(e.Nat32),
        controller_id: e.Principal
    })
      , o = e.Record({
        e8s: e.Nat64
    });
    e.Record({
        send_whitelist: e.Vec(e.Tuple(e.Principal)),
        minting_account: r,
        transaction_window: e.Opt(a),
        max_message_size_bytes: e.Opt(e.Nat32),
        archive_options: e.Opt(l),
        initial_values: e.Vec(e.Tuple(r, o))
    });
    const c = e.Record({
        account: r
    })
      , s = e.Vec(e.Nat8)
      , p = e.Nat64
      , f = e.Record({
        to_subaccount: e.Opt(s),
        from_subaccount: e.Opt(s),
        to_canister: e.Principal,
        max_fee: o,
        block_height: p
    })
      , i = e.Nat64
      , h = e.Record({
        timestamp_nanos: e.Nat64
    })
      , u = e.Record({
        to: r,
        fee: o,
        memo: i,
        from_subaccount: e.Opt(s),
        created_at_time: e.Opt(h),
        amount: o
    });
    return e.Service({
        account_balance_dfx: e.Func([c], [o], ["query"]),
        notify_dfx: e.Func([f], [], []),
        send_dfx: e.Func([u], [p], [])
    })
}
  , Pr = ({IDL: e})=>{
    const a = e.Vec(e.Nat8)
      , l = a
      , c = e.Nat32
      , p = e.Text
      , f = p
      , i = e.Record({
        subaccount: l,
        seller: e.Principal,
        buyer: f,
        price: e.Nat64
    })
      , u = e.Variant({
        fungible: e.Record({
            decimals: e.Nat8,
            metadata: e.Opt(e.Vec(e.Nat8)),
            name: e.Text,
            symbol: e.Text
        }),
        nonfungible: e.Record({
            metadata: e.Opt(e.Vec(e.Nat8))
        })
    })
      , y = e.Text
      , d = e.Variant({
        principal: e.Principal,
        address: p
    })
      , x = e.Record({
        token: y,
        user: d
    })
      , _ = e.Nat
      , N = e.Variant({
        InvalidToken: y,
        Other: e.Text
    })
      , S = e.Variant({
        ok: _,
        err: N
    })
      , C = y
      , M = N
      , V = e.Variant({
        ok: f,
        err: M
    })
      , b = e.Int
      , v = e.Record({
        locked: e.Opt(b),
        seller: e.Principal,
        price: e.Nat64
    })
      , k = e.Variant({
        ok: e.Tuple(f, e.Opt(v)),
        err: M
    })
      , q = d
      , j = e.Text
      , X = e.Record({
        hat: e.Opt(e.Tuple(e.Nat32, e.Nat32)),
        pet: e.Opt(e.Tuple(e.Nat32, e.Nat32)),
        accessory: e.Opt(e.Tuple(e.Nat32, e.Nat32)),
        eyewear: e.Opt(e.Tuple(e.Nat32, e.Nat32))
    })
      , D = e.Tuple(e.Text, e.Text)
      , Q = e.Record({
        url: e.Text,
        method: e.Text,
        body: e.Vec(e.Nat8),
        headers: e.Vec(D)
    })
      , H = e.Record({
        body: e.Vec(e.Nat8),
        headers: e.Vec(D),
        status_code: e.Nat16
    })
      , K = e.Variant({
        ok: c,
        err: M
    })
      , P = e.Record({
        token: C,
        from_subaccount: e.Opt(l),
        price: e.Opt(e.Nat64)
    })
      , A = e.Variant({
        ok: e.Null,
        err: M
    })
      , $ = e.Variant({
        ok: u,
        err: M
    })
      , Z = e.Record({
        to: d,
        metadata: e.Opt(e.Vec(e.Nat8))
    })
      , te = _
      , L = e.Variant({
        ok: te,
        err: M
    })
      , ae = e.Variant({
        ok: e.Vec(c),
        err: M
    })
      , de = e.Variant({
        ok: e.Vec(e.Tuple(c, e.Opt(v), e.Opt(e.Vec(e.Nat8)))),
        err: M
    })
      , se = e.Record({
        token: C,
        time: b,
        seller: e.Principal,
        buyer: f,
        price: e.Nat64
    })
      , ie = e.Vec(e.Nat8)
      , ce = e.Record({
        to: d,
        token: y,
        notify: e.Bool,
        from: d,
        memo: ie,
        subaccount: e.Opt(a),
        amount: _
    })
      , Te = e.Variant({
        ok: _,
        err: e.Variant({
            CannotNotify: p,
            InsufficientBalance: e.Null,
            InvalidToken: y,
            Rejected: e.Null,
            Unauthorized: p,
            Other: e.Text
        })
    });
    return e.Service({
        acceptCycles: e.Func([], [], []),
        addRefund: e.Func([e.Text, e.Principal, l], [], ["oneway"]),
        availableCycles: e.Func([], [e.Nat], ["query"]),
        backendRefundSettlement: e.Func([e.Text], [e.Vec(e.Tuple(c, i)), e.Vec(e.Tuple(f, e.Principal, l)), e.Vec(e.Tuple(e.Principal, e.Vec(l))), e.Vec(e.Tuple(e.Principal, e.Vec(l)))], ["query"]),
        backup: e.Func([], [e.Vec(e.Tuple(c, f)), e.Vec(e.Tuple(f, e.Vec(c))), e.Vec(e.Tuple(c, u))], ["query"]),
        balance: e.Func([x], [S], ["query"]),
        bearer: e.Func([C], [V], ["query"]),
        details: e.Func([C], [k], ["query"]),
        disribute: e.Func([q], [], []),
        extensions: e.Func([], [e.Vec(j)], ["query"]),
        freeGift: e.Func([f], [e.Opt(c)], []),
        getAllPayments: e.Func([], [e.Vec(e.Tuple(e.Principal, e.Vec(l)))], ["query"]),
        getAllWearables: e.Func([], [e.Vec(e.Tuple(c, X))], ["query"]),
        getBuyers: e.Func([], [e.Vec(e.Tuple(f, e.Vec(c)))], ["query"]),
        getMinted: e.Func([], [c], ["query"]),
        getMinter: e.Func([], [e.Principal], ["query"]),
        getRegistry: e.Func([], [e.Vec(e.Tuple(c, f))], ["query"]),
        getSold: e.Func([], [c], ["query"]),
        getTokens: e.Func([], [e.Vec(e.Tuple(c, u))], ["query"]),
        http_request: e.Func([Q], [H], ["query"]),
        index: e.Func([C], [K], ["query"]),
        list: e.Func([P], [A], []),
        listings: e.Func([], [e.Vec(e.Tuple(c, v, u))], ["query"]),
        lock: e.Func([C, e.Nat64, f, l], [V], []),
        metadata: e.Func([C], [$], ["query"]),
        mintNFT: e.Func([Z], [c], []),
        payments: e.Func([], [e.Opt(e.Vec(l))], ["query"]),
        receiveWearable: e.Func([c, c, e.Vec(e.Nat8), f], [e.Variant({
            replaced: c,
            success: e.Null,
            failed: e.Null
        })], []),
        refunds: e.Func([], [e.Opt(e.Vec(l))], ["query"]),
        removePayments: e.Func([e.Vec(l)], [], []),
        removeRefunds: e.Func([e.Vec(l)], [], []),
        retreiveSnapshot: e.Func([e.Text], [e.Vec(f)], []),
        setMinter: e.Func([e.Principal], [], []),
        settle: e.Func([C], [A], []),
        settle_force: e.Func([e.Text, C], [], ["oneway"]),
        settlements: e.Func([], [e.Vec(e.Tuple(c, f, e.Nat64))], ["query"]),
        salesStats: e.Func([], [e.Bool, e.Nat32, e.Nat32, e.Nat, e.Tuple(e.Nat64, c)], ["query"]),
        supply: e.Func([C], [L], ["query"]),
        takeSnapshot: e.Func([e.Text], [e.Nat], []),
        tokens: e.Func([f], [ae], ["query"]),
        tokens_ext: e.Func([f], [de], ["query"]),
        transactions: e.Func([], [e.Vec(se)], ["query"]),
        transfer: e.Func([ce], [Te], [])
    })
}
;
const Or = e=>go(e) && e.length === 64 ? {
    address: e
} : {
    principal: je.fromText(e)
}
  , kr = (e,r)=>{
    const a = Buffer(`
tid`)
      , l = new Uint8Array([...a, ...je.fromText(e).toBlob(), ...ta(r)]);
    return je.fromBlob(l).toText()
}
  , wo = e=>{
    var r = [...je.fromText(e).toBlob()]
      , a = r.splice(0, 4);
    return aa(a) !== aa(Buffer(`
tid`)) ? {
        index: 0,
        canister: e,
        token: kr(e, 0)
    } : {
        index: Eo(r.splice(-4)),
        canister: je.fromBlob(r).toText(),
        token: e
    }
}
  , Tt = {
    ledger: _o,
    ext: Pr,
    default: Pr
};
class bo {
    constructor(r, a) {
        le(this, "_mapIdls", {
            [Ce]: Tt.ledger
        });
        le(this, "_metadata", {
            [Ce]: {
                name: "ICP",
                symbol: "ICP",
                decimals: 8,
                type: "fungible"
            }
        });
        le(this, "_identity", !1);
        le(this, "_host", !1);
        le(this, "_agent", !1);
        le(this, "_canisters", {});
        a && (this._identity = a),
        r && (this._host = r),
        this._makeAgent()
    }
    idl(r, a) {
        this._mapIdls[r] = a
    }
    setIdentity(r) {
        return r ? this._identity = r : this._identity = !1,
        this._makeAgent(),
        this
    }
    setHost(r) {
        return r ? this._host = r : this._host = !1,
        this._makeAgent(),
        this
    }
    canister(r, a) {
        if (!a)
            this._mapIdls.hasOwnProperty(r) ? a = this._mapIdls[r] : a = Tt.default;
        else if (typeof a == "string")
            if (Tt.hasOwnProperty(a))
                a = Tt[a];
            else
                throw new Error(a + " is not a preloaded IDL");
        return this._canisters.hasOwnProperty(r) || (this._canisters[r] = pt.createActor(a, {
            agent: this._agent,
            canisterId: r
        })),
        this._canisters[r]
    }
    token(r, a) {
        r = Ce;
        var l = {
            canister: r
        }
          , o = this.canister(r, a);
        return {
            call: o,
            fee: ()=>new Promise((c,s)=>{
                switch (l.canister) {
                case Ce:
                    c(1e4);
                    break;
                default:
                    c(0);
                    break
                }
            }
            ),
            getBalance: (c,s)=>new Promise((p,f)=>{
                var i;
                switch (l.canister) {
                case Ce:
                    Sr.getAccountBalance(c).then(h=>{
                        p(h)
                    }
                    );
                    break;
                default:
                    i = {
                        user: Or(c),
                        token: l.token
                    },
                    o.balance(i).then(h=>{
                        typeof h.ok != "undefined" ? p(h.ok) : typeof h.err != "undefined" ? f(h.err) : f(h)
                    }
                    ).catch(f);
                    break
                }
            }
            ),
            getTransactions: (c,s)=>new Promise((p,f)=>{
                switch (l.canister) {
                case Ce:
                    Sr.getTransactionsByAccount(c).then(i=>{
                        Array.isArray(i) || p([]);
                        var h = [];
                        i.map(u=>u.type !== "TRANSACTION" || u.status !== "COMPLETED" ? !1 : (h.push({
                            from: u.account1Address,
                            to: u.account2Address,
                            amount: Number(u.amount / 1e8),
                            fee: Number(u.fee / 1e8),
                            hash: u.hash,
                            timestamp: u.timestamp,
                            memo: Number(u.memo)
                        }),
                        !0)),
                        h.reverse(),
                        p(h)
                    }
                    ).catch(f);
                    break;
                case "qz7gu-giaaa-aaaaf-qaaka-cai":
                default:
                    p([]);
                    break
                }
            }
            ),
            list: (c,s)=>new Promise((p,f)=>{
                var i;
                switch (l.canister) {
                case Ce:
                default:
                    i = {
                        token: r,
                        from_subaccount: [nt(c != null ? c : 0)],
                        price: s === 0 ? [] : [s]
                    },
                    o.list(i).then(h=>{
                        typeof h.ok != "undefined" ? p(!0) : f(JSON.stringify(h.err))
                    }
                    ).catch(f);
                    break
                }
            }
            ),
            transfer: (c,s,p,f,i,h,u)=>new Promise((y,d)=>{
                var g;
                switch (l.canister) {
                case Ce:
                    g = {
                        from_subaccount: [nt(s != null ? s : 0)],
                        to: p,
                        amount: {
                            e8s: f
                        },
                        fee: {
                            e8s: i
                        },
                        memo: h ? Number(BigInt(h)) : 0,
                        created_at_time: []
                    },
                    o.send_dfx(g).then(x=>{
                        y(x)
                    }
                    ).catch(d);
                    break;
                default:
                    g = {
                        token: r,
                        from: {
                            address: vr(c, s != null ? s : 0)
                        },
                        subaccount: [nt(s != null ? s : 0)],
                        to: Or(p),
                        amount: f,
                        fee: i,
                        memo: Cr(h),
                        notify: u
                    },
                    o.transfer(g).then(x=>{
                        typeof x.ok != "undefined" ? y(x.ok) : d(JSON.stringify(x.err))
                    }
                    ).catch(d);
                    break
                }
            }
            )
        }
    }
    _makeAgent() {
        var r = {};
        this._identity && (r.identity = this._identity),
        this._host && (r.host = this._host),
        this._agent = new ht(r)
    }
}
const He = {
    connect: (e,r)=>new bo(e != null ? e : "https://boundary.ic0.app/",r),
    decodeTokenId: wo,
    encodeTokenId: kr,
    toSubaccount: nt,
    toAddress: vr,
    fromHexString: Cr
};
window.extjs = He;
const Rr = async(e,r=1e4,a)=>{
    try {
        let l = BigInt(e)
          , o = 0
          , c = BigInt(Math.round(r * 10 ** 8))
          , s = ""
          , p = !0;
        const f = await ke.load()
          , i = f._principal;
        if (!f)
            throw "WALLET_ERROR";
        if (!await He.connect("https://boundary.ic0.app/", f).token().transfer(i, o, a, l, c, s, p))
            throw "PAY_ERROR"
    } catch (l) {
        throw console.log("transferUsingStoic ", l),
        l
    }
}
  , Fr = async(e,r)=>{
    try {
        if (!await window.ic.plug.isConnected())
            throw "WALLET_ERROR";
        const l = {
            to: r,
            amount: e
        };
        if (!await window.ic.plug.requestTransfer(l))
            throw "PAY_ERROR"
    } catch (a) {
        throw console.log("transferUsingPlug ", a),
        a
    }
}
  , At = async(e,r)=>{
    try {
        let a = 0;
        switch (e) {
        case "plug":
            const {accountId: l} = await window.ic.plug.sessionManager.sessionData;
            if (a = BigInt(await He.connect("https://ic0.app/").token().getBalance(l)),
            parseInt(a) < r)
                throw "BALANCE_ERROR";
            break;
        case "stoic":
            const c = await (await ke.load()).accounts()
              , p = JSON.parse(c)[0].address;
            if (a = BigInt(await He.connect("https://ic0.app/").token().getBalance(p)),
            parseInt(a) < r)
                throw "BALANCE_ERROR";
            break;
        default:
            break
        }
    } catch (a) {
        throw a
    }
}
  , xo = ({app: e, collection: r, statuses: a, collectionStatus: l, setCollectionStatus: o, launchStatus: c, step: s, setStep: p, setReviewLoader: f, handleClose: i, updateDataInCollection: h})=>{
    const u = async()=>{
        try {
            const d = await e.verifyCollectionPayTransaction(r.collectionId);
            if (e && d && d[0].status != "pending") {
                const {allCollections: g} = await _t(e, r.collectionId);
                h(r.collectionId, g[0]),
                W.NotificationManager.success("Collection Fee paid successfully")
            } else
                throw "VERIFY_ERROR"
        } catch (d) {
            throw d
        }
    }
      , y = async()=>{
        try {
            o(1);
            const g = await e.getOrCreateCollectionPay(r.collectionId);
            if (g && g[0].collectionPay.status == "pending") {
                await new Promise(_=>setTimeout(_, 3e3));
                var d = localStorage.getItem("_loginType");
                const x = parseInt(g[0].collectionPay.collection_fee_in_e8sICP);
                switch (d) {
                case "plug":
                    await At(d, x),
                    await Fr(x, g[0].subaccount.account_id_hex),
                    o(2),
                    await u(),
                    o(3);
                    break;
                case "stoic":
                    await At(d, x),
                    await Rr(x, 1e-4, g[0].subaccount.account_id_hex),
                    o(2),
                    await u(),
                    o(3);
                    break;
                default:
                    break
                }
                return g
            }
        } catch (g) {
            console.log(g),
            g == "WALLET_ERROR" ? W.NotificationManager.error("Something wrong with your wallet, try logging in again.") : g == "PAY_ERROR" ? W.NotificationManager.error("Some error occurred while processing your payment. Please refresh and try again.") : g == "VERIFY_ERROR" ? W.NotificationManager.error("Some error occurred while verifying your payment. Please refresh and try again.") : g == "BALANCE_ERROR" ? W.NotificationManager.error("Your balance is insufficient to complete this transaction.") : W.NotificationManager.error("Some error occurred. Please refresh and try again."),
            o(0)
        } finally {}
    }
    ;
    return t.createElement(n, {
        container: !0,
        item: !0,
        spacing: 2,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "space-between",
            height: "104.5%"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, t.createElement(m, {
        variant: "h6",
        style: {
            fontWeight: "bold"
        }
    }, "Collection Pay")), t.createElement(n, {
        item: !0,
        xs: 6,
        style: {
            display: "flex",
            justifyContent: "flex-end"
        }
    }, t.createElement(m, {
        variant: "h6",
        style: {
            fontWeight: "bold"
        }
    }, "Flat Fee")), t.createElement(n, {
        item: !0,
        xs: 6,
        style: {
            display: "flex",
            justifyContent: "flex-start"
        }
    }, t.createElement(m, null, "10 ICP")), t.createElement(n, {
        item: !0,
        xs: 12,
        mt: 2
    }, t.createElement(m, {
        variant: "subtitle1"
    }, "*Once you pay the collection fee, you can pay for the launch and submit launch for review.")), t.createElement(fe, {
        direction: "row",
        spacing: 7,
        mt: 3,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, t.createElement(R, {
        variant: "outlined",
        onClick: i,
        size: "small",
        disabled: s == 2 || l != 0
    }, "Cancel"), t.createElement(R, {
        variant: "contained",
        onClick: async()=>{
            try {
                await y() && p(2)
            } catch (d) {
                console.log("payCollectionFee button onClick", d)
            }
        }
        ,
        size: "small",
        disabled: s == 2 || l != 0
    }, a[l].value, (l == 1 || l == 2) && t.createElement(we, {
        size: 16,
        sx: {
            marginLeft: "12px",
            color: "#09D8AA"
        }
    }))))
}
  , No = e=>{
    const {collections: {list: r}} = e;
    return {
        list: r
    }
}
  , To = e=>({
    updateDataInCollection: (r,a)=>e(Yt(r, a))
});
var Ao = pe(No, To)(xo);
const So = ({app: e, collection: r, launch: a, statuses: l, launchStatus: o, setLaunchStatus: c, collectionStatus: s, step: p, setReviewLoader: f, handleClose: i, updateLaunchInCollection: h, launchInvalidForReview: u})=>{
    const y = [{
        key: "1",
        value: "Pricing group missing"
    }, {
        key: "2",
        value: "Private group addresses missing"
    }, {
        key: "3",
        value: "Assets missing"
    }, {
        key: "4",
        value: "Thumbnail files missing"
    }, {
        key: "5",
        value: "Airdrop addresses missing"
    }]
      , d = async()=>{
        try {
            const x = await e.verifyLaunchPayTransaction(a.launchId);
            if (e && x && x[0].status != "pending") {
                const {launchInfo: _} = await Ue(e, a.launchId);
                h(r.collectionId, a.launchId, _[0]),
                W.NotificationManager.success("Launch Fee paid successfully")
            } else
                throw "VERIFY_ERROR"
        } catch (x) {
            throw x
        }
    }
      , g = async()=>{
        try {
            c(1);
            const _ = {
                launchId: a.launchId,
                total_assets: a.totalAssets,
                total_assets_size_in_mb: parseFloat(a.assetsTotalSizeInMB)
            }
              , N = await e.getOrCreateLaunchPay(_);
            if (N && N[0].launchPay.status == "pending") {
                var x = localStorage.getItem("_loginType");
                const T = parseInt(N[0].launchPay.asset_cost_in_e8sICP);
                switch (x) {
                case "plug":
                    await At(x, T),
                    await Fr(T, N[0].subaccount.account_id_hex),
                    c(2),
                    await d(),
                    c(3);
                    break;
                case "stoic":
                    await At(x, T),
                    await Rr(T, 1e-4, N[0].subaccount.account_id_hex),
                    c(2),
                    await d(),
                    c(3);
                    break;
                default:
                    break
                }
                return N
            }
        } catch (_) {
            _ == "WALLET_ERROR" ? W.NotificationManager.error("Something wrong with your wallet, try logging in again.") : _ == "PAY_ERROR" ? W.NotificationManager.error("Some error occurred while processing your payment. Please refresh and try again.") : _ == "VERIFY_ERROR" ? W.NotificationManager.error("Some error occurred while verifying your payment. Please refresh and try again.") : _ == "BALANCE_ERROR" ? W.NotificationManager.error("Your balance is insufficient to complete this transaction.") : W.NotificationManager.error("Some error occurred. Please refresh and try again."),
            c(0)
        } finally {}
    }
    ;
    return t.createElement(n, {
        container: !0,
        item: !0,
        spacing: 2,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "space-between"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 12,
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, t.createElement(m, {
        variant: "h6",
        style: {
            fontWeight: "bold"
        }
    }, "Launch Pay")), u.length > 0 && t.createElement(n, {
        item: !0,
        spacing: 0
    }, t.createElement(n, {
        container: !0,
        item: !0,
        mt: 0,
        style: {
            display: "flex",
            justifyContent: "start"
        }
    }, t.createElement(m, {
        variant: "subtitle1",
        style: {
            fontWeight: "bold"
        }
    }, "Users cannot submit a launch for review when:")), t.createElement(n, {
        container: !0,
        spacing: 0,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            direction: "row"
        }
    }, u.map(x=>t.createElement(n, {
        container: !0,
        item: !0,
        mt: 0,
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 2,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }, t.createElement(Xn, {
        sx: {
            color: "red"
        }
    })), t.createElement(n, {
        item: !0,
        xs: 10
    }, t.createElement(m, {
        variant: "subtitle2"
    }, y[x - 1].value)))))), t.createElement(n, {
        item: !0,
        xs: 8,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
        }
    }, t.createElement(m, {
        variant: "h6",
        style: {
            fontWeight: "bold",
            display: "inline-block"
        }
    }, "Launch Assets \xA0"), t.createElement(m, {
        variant: "subtitle2",
        style: {
            display: "inline-block"
        }
    }, "(5 ICP/GB)")), t.createElement(n, {
        item: !0,
        xs: 4,
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, t.createElement(m, null, a.assetsTotalCost, " ICP")), t.createElement(n, {
        container: !0,
        item: !0,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 8
    }, t.createElement(m, {
        variant: "h6",
        style: {
            fontWeight: "bold"
        }
    }, "Total Assets Size")), t.createElement(n, {
        item: !0,
        xs: 4,
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, t.createElement(m, null, Math.round(parseFloat(a.assetsTotalSizeInMB / 1024) * 100) / 100, " GB")), p != 3 && u.length == 0 && t.createElement(n, {
        item: !0,
        xs: 12,
        mt: 0
    }, t.createElement(m, {
        variant: "subtitle1"
    }, "\xA0"), t.createElement(m, {
        variant: "subtitle1"
    }, "\xA0"))), t.createElement(fe, {
        direction: "row",
        spacing: 7,
        mt: 3,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, t.createElement(R, {
        variant: "outlined",
        onClick: i,
        size: "small",
        disabled: p == 1 || o != 0 && o != 3
    }, "Cancel"), t.createElement(R, {
        variant: "contained",
        onClick: async()=>{
            try {
                await g() && i()
            } catch (x) {
                console.log("payLaunchFee button onClick", x)
            }
        }
        ,
        size: "small",
        disabled: p == 1 || o != 0 || u.length > 0
    }, l[o].value, (o == 1 || o == 2) && t.createElement(we, {
        size: 16,
        sx: {
            marginLeft: "12px",
            color: "#09D8AA"
        }
    }))))
}
  , vo = e=>{
    const {collections: {list: r}} = e;
    return {
        list: r
    }
}
  , Co = e=>({
    updateLaunchInCollection: (r,a,l)=>e(Ht(r, a, l))
});
var Ur = pe(vo, Co)(So);
const Mr = ({app: e, isOpen: r, launchId: a, launchName: l, collectionId: o, setToggleDelete: c, setDeleteLoader: s, setLaunchToDelete: p, setCollectionIdForDeleteLaunch: f, fetchLaunchByStatus: i})=>{
    const h = ()=>c(!1)
      , u = Ie()
      , y = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "#fff",
        borderRadius: 2,
        borderBottom: "4px solid #0FC89F",
        boxShadow: 24,
        p: 4,
        pt: 2
    }
      , d = async g=>{
        try {
            s(!0);
            const x = await e.deleteLaunch(g);
            if (u(Ml(o, g)),
            i) {
                const _ = localStorage.getItem("_fromWhichStatus");
                await i(_ != null ? _ : 0)
            }
            W.NotificationManager.success("Launch Deleted successfully")
        } catch {
            W.NotificationManager.error("Some error occurred. Please refresh and try again")
        } finally {
            s(!1),
            p(""),
            f(""),
            h()
        }
    }
    ;
    return t.createElement(Ke, {
        open: r,
        closeOnBlur: !0,
        onClose: h,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description"
    }, t.createElement(J, {
        sx: y
    }, t.createElement(m, {
        id: "modal-modal-title",
        variant: "h6",
        component: "h2",
        mb: 2,
        sx: {
            fontWeight: "bold"
        }
    }, "Are you sure you want to delete ", l, "?"), t.createElement(fe, {
        direction: "row",
        spacing: 7,
        justifyContent: "center",
        alignItems: "center"
    }, t.createElement(R, {
        variant: "outlined",
        onClick: h,
        size: "small"
    }, "Cancel"), t.createElement(R, {
        variant: "contained",
        onClick: ()=>{
            d(a)
        }
        ,
        size: "small"
    }, "Delete"))))
}
  , ra = [{
    key: "PAY_AND_REVIEW",
    value: "Pay and Review"
}, {
    key: "TRANSFERRING",
    value: "Transferring"
}, {
    key: "VERIFYING",
    value: "Verifying"
}, {
    key: "COMPLETED",
    value: "Completed"
}]
  , Po = ({app: e, list: r, isOpen: a, launch: l, collection: o, setToggleReview: c, setReviewLoader: s, setLaunchToReview: p, setCollectionIdForLaunchReview: f, launchInvalidForReview: i})=>{
    const [h,u] = w.exports.useState(o.hasOwnProperty("collectionPay") && o.collectionPay.length > 0 && o.collectionPay[0].status != "pending" ? 3 : 1)
      , [y,d] = w.exports.useState(o.hasOwnProperty("collectionPay") && o.collectionPay.length > 0 && o.collectionPay[0].status != "pending" ? 3 : 0)
      , [g,x] = w.exports.useState(l.hasOwnProperty("launchPay") && l.launchPay.length > 0 && l.launchPay[0].status != "pending" ? 3 : 0)
      , _ = (T,O)=>{
        O && (O == "backdropClick" || O == "escapeKeyDown") || c(!1)
    }
      , N = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: h == 3 ? "35%" : "60%",
        bgcolor: "#fff",
        borderRadius: 2,
        borderBottom: "4px solid #0FC89F",
        boxShadow: 24,
        p: 4,
        pt: 2
    };
    return t.createElement(Ke, {
        open: a,
        closeOnBlur: !0,
        onClose: _,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description"
    }, t.createElement(J, {
        sx: N
    }, t.createElement(n, {
        container: !0,
        spacing: 2,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, t.createElement(n, {
        container: !0,
        item: !0,
        mt: 2,
        mb: 2,
        style: {
            display: "flex",
            justifyContent: "flex-end"
        }
    }, t.createElement(R, {
        variant: "contained",
        size: "small",
        style: {
            cursor: "default"
        }
    }, "Wallet Balance: ", l.balance, " ICP")), (h == 1 || h == 2) && t.createElement(n, {
        container: !0,
        spacing: 2,
        style: {
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            direction: "row"
        }
    }, t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(Ao, {
        app: e,
        collection: o,
        statuses: ra,
        collectionStatus: y,
        setCollectionStatus: d,
        launchStatus: g,
        step: h,
        setStep: u,
        setReviewLoader: s,
        handleClose: _
    })), t.createElement(n, {
        item: !0,
        xs: 6
    }, t.createElement(Ur, {
        app: e,
        collection: o,
        launch: l,
        statuses: ra,
        launchStatus: g,
        setLaunchStatus: x,
        collectionStatus: y,
        step: h,
        setReviewLoader: s,
        launchInvalidForReview: i,
        handleClose: _
    }))), h == 3 && t.createElement(Ur, {
        app: e,
        collection: o,
        launch: l,
        statuses: ra,
        launchStatus: g,
        setLaunchStatus: x,
        collectionStatus: y,
        step: h,
        setReviewLoader: s,
        launchInvalidForReview: i,
        handleClose: _
    }))))
}
  , Br = ({setToggleDelete: e, setLaunchToDelete: r, setCollectionIdForDeleteLaunch: a, collection: l, launch: o, storeLocal: c, toggleDelete: s})=>{
    const [p,f] = t.useState(null)
      , i = Boolean(p)
      , h = y=>{
        f(y.currentTarget)
    }
      , u = ()=>{
        f(null)
    }
    ;
    return t.createElement("div", null, t.createElement("span", {
        className: "icon ico-dots-vertical",
        id: "basic-button",
        "aria-controls": i ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": i ? "true" : void 0,
        onClick: h
    }), t.createElement(Vt, {
        id: "basic-menu",
        anchorEl: p,
        open: i,
        onClose: u,
        MenuListProps: {
            "aria-labelledby": "basic-button"
        }
    }, t.createElement(G, {
        to: `/update-launch/${l.collectionId}/${o.launchId}`,
        component: ye,
        onClick: ()=>{
            c(),
            u()
        }
        ,
        style: {
            textDecoration: "none",
            color: "#000000"
        }
    }, "Edit"), t.createElement(G, {
        onClick: ()=>{
            e(!s),
            r(o),
            a(l.collectionId),
            u()
        }
    }, "Delete")))
}
  , Oo = ({collection: e, app: r, updateLaunchInCollection: a, list: l, setSelectedRoles: o, setAddresses: c, setDscvrDetails: s, setDscvrDetailsAirdrop: p})=>{
    var H, K, P;
    const [f,i] = w.exports.useState(!1)
      , [h,u] = w.exports.useState(!1)
      , [y,d] = w.exports.useState("")
      , [g,x] = w.exports.useState("")
      , [_,N] = w.exports.useState(!1)
      , [T,O] = w.exports.useState(!1)
      , [S,C] = w.exports.useState("")
      , [M,V] = w.exports.useState("")
      , [E,b] = w.exports.useState(!1)
      , [v,k] = w.exports.useState([]);
    w.exports.useState(0),
    Ie();
    const q = (A,$=!1)=>{
        const z = document.querySelector(`#${A}`);
        if (z)
            if (z.classList.contains("open"))
                if ($) {
                    const Z = z.querySelectorAll(".open");
                    z.classList.remove("open"),
                    setTimeout(()=>{
                        Z && Z.forEach(te=>{
                            te.classList.remove("open")
                        }
                        )
                    }
                    , 300)
                } else
                    z.classList.remove("open");
            else {
                if ($) {
                    const Z = document.querySelectorAll(".collection-card-wrapper.open");
                    Z.length && Z.forEach(te=>{
                        te.classList.remove("open");
                        const L = te.querySelectorAll(".open");
                        setTimeout(()=>{
                            L && L.forEach(ae=>{
                                ae.classList.remove("open")
                            }
                            )
                        }
                        , 300)
                    }
                    )
                }
                z.classList.add("open")
            }
    }
      , F = ()=>{
        const A = document.querySelector(".collection-card-wrapper.open");
        if ((A == null ? void 0 : A.id) === `accordion-${e.collectionId}`) {
            A.classList.remove("open");
            const $ = A.querySelectorAll(".open");
            setTimeout(()=>{
                $ && $.forEach(z=>{
                    z.classList.remove("open")
                }
                )
            }
            , 300)
        }
    }
      , j = A=>(A = A.replace(/_/g, " ").toLowerCase().replace(/\b(\w)/g, $=>$.toUpperCase()),
    A)
      , B = (A,$)=>{
        let z = [];
        A.launchType == "1" && A.hasOwnProperty("groups") && A.groups.length == 0 && z.push(1),
        A.launchType == "1" && A.hasOwnProperty("groups") && A.groups.length > 0 && A.groups.map(L=>{
            L.hasOwnProperty("groupType") && L.groupType == "2" && (L.hasOwnProperty("csvAirdropNew") && L.csvAirdropNew.length > 0 || L.hasOwnProperty("csvAirdrop") && L.csvAirdrop.length > 0 || z.push(2))
        }
        );
        let Z = !0;
        A.uploadingType == "1" && (A.zip == "1" && (!A.hasOwnProperty("files") || A.files.length == 0) || A.zip == "2" && A.zipUrl == "") && (Z = !1),
        A.uploadingType == "2" && A.hasOwnProperty("categories") && A.categories.map(L=>{
            L.files.length == 0 && (Z = !1)
        }
        ),
        Z == !1 && z.push(3);
        const te = "Airdrop";
        return (A.launchType == "1" && A.hasOwnProperty("airdropNFT") && A.airdropNFT == "2" || A.launchType == "2") && (A.hasOwnProperty("csvAirdropNew") && A.csvAirdropNew.length > 0 || A.hasOwnProperty("csvAirdrop") && A.csvAirdrop.length > 0 || $ && Object.keys($).length > 0 && $[te].addresses.length > 0 || z.push(5)),
        z
    }
      , X = Qn({
        onTriggered: F
    })
      , D = ()=>{
        localStorage.setItem("_fromWhichUser", "user")
    }
      , Q = ()=>{
        localStorage.setItem("_fromWhichUserCollection", "user")
    }
    ;
    return t.createElement(t.Fragment, null, e ? t.createElement("div", {
        ref: X,
        className: "collection-card-wrapper",
        id: `accordion-${e.collectionId}`
    }, t.createElement("div", {
        className: "collection-card"
    }, t.createElement("div", {
        className: "metadata"
    }, t.createElement("div", {
        className: "metadata-image-container"
    }, t.createElement("div", {
        className: "metadata-image",
        style: {
            backgroundImage: `url(${e.avatarUrl})`
        }
    })), t.createElement("div", {
        className: "metadata-info"
    }, t.createElement(J, {
        pr: 3
    }, t.createElement("span", {
        className: "name ellipsis"
    }, e.collectionName), t.createElement("span", {
        className: "creator ellipsis"
    }, e.creatorName)), t.createElement(n, {
        container: !0,
        p: 1,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            top: "0",
            right: "0"
        }
    }, e.collectionPay.length > 0 && e.collectionPay[0].status != "pending" && t.createElement(n, {
        item: !0,
        mr: 1
    }, t.createElement(R, {
        className: "paid",
        variant: "contained",
        size: "small",
        style: {
            cursor: "default"
        }
    }, "Paid")), t.createElement(n, {
        item: !0
    }, t.createElement(m, {
        variant: "string",
        to: `/collection-setup/${e.collectionId}`,
        component: ye,
        className: "edit primary clickable",
        onClick: Q
    }, "Edit"))))), t.createElement("div", {
        className: `launch-container ${e.hasOwnProperty("launches") && e.launches.length ? "has-launch" : ""}`
    }, ((H = e.launches) == null ? void 0 : H.length) ? t.createElement("div", {
        className: "launch",
        onClick: ()=>{
            q(`accordion-${e.collectionId}`, !0)
        }
    }, t.createElement("span", {
        className: "info"
    }, `${e.launches.length} Launch${e.launches.length > 1 ? "es" : ""} Created`), t.createElement("em", {
        className: "icon ico-accordion-down"
    })) : t.createElement("div", {
        className: "launch"
    }, t.createElement("span", {
        className: "info no-launch"
    }, "No Launch Created"), t.createElement(m, {
        variant: "string",
        to: `/setup-launch/${e.collectionId}`,
        component: ye,
        className: "create primary clickable"
    }, "Create")))), t.createElement("div", {
        className: "collection-launch-container"
    }, t.createElement("div", {
        className: "collection-launch-wrapper"
    }, ((K = e.launches) == null ? void 0 : K.length) > 0 && ((P = e.launches) == null ? void 0 : P.map((A,$)=>t.createElement("div", {
        key: $,
        className: "collection-launch",
        id: `accordion-${A.launchId}`,
        onClick: z=>{
            z.stopPropagation(),
            q(`accordion-${A.launchId}`)
        }
    }, t.createElement("div", {
        className: "launch-basic-info"
    }, t.createElement("div", {
        className: "launch-name-wrapper"
    }, t.createElement(Le, {
        title: A.launchName,
        placement: "top"
    }, t.createElement("span", {
        className: "launch-name ellipsis"
    }, A.launchName))), A.launchStatus === "INITIATED" && t.createElement(t.Fragment, null, f ? t.createElement(we, {
        size: 16,
        sx: {
            justifySelf: "end"
        }
    }) : t.createElement("div", {
        className: "launch-status-wrapper"
    }, t.createElement(Le, {
        title: "Pay and Review",
        placement: "top"
    }, t.createElement("span", {
        className: "launch-review ellipsis",
        onClick: async z=>{
            try {
                z.stopPropagation(),
                b(!0);
                const te = l.filter(ce=>ce.collectionId == e.collectionId)
                  , L = te[0].launches.filter(ce=>ce.launchId == A.launchId);
                let ae = A
                  , de = {};
                if (r && te && L && !L[0].hasOwnProperty("assetsTotalCost")) {
                    const {launchInfo: ce, selectedRolesInfo: Ne, allAddressesInfo: ge, dscvrDetailsInfo: Te, dscvrDetailsAirdropInfo: Ae} = await Ue(r, L[0].launchId);
                    ae = ce[0],
                    de = Ae,
                    a(te[0].collectionId, L[0].launchId, ce[0]),
                    o(null, Ne),
                    c(null, ge),
                    s(null, Te),
                    p(null, Ae)
                }
                var Z = localStorage.getItem("_loginType");
                let se, ie;
                switch (Z) {
                case "plug":
                    const {principalId: ce, accountId: Ne} = await window.ic.plug.sessionManager.sessionData;
                    se = BigInt(await He.connect("https://ic0.app/").token().getBalance(Ne)),
                    ie = Math.round(parseFloat(parseInt(se) / Math.pow(10, 8)) * 100) / 100,
                    ae.balance = ie;
                    break;
                case "stoic":
                    const ge = await ke.load()
                      , Te = ge._principal.toText()
                      , Ae = await ge.accounts()
                      , Ze = JSON.parse(Ae)[0].address;
                    se = BigInt(await He.connect("https://ic0.app/").token().getBalance(Ze)),
                    ie = Math.round(parseFloat(parseInt(se) / Math.pow(10, 8)) * 100) / 100,
                    ae.balance = ie;
                    break;
                default:
                    break
                }
                const he = B(ae, de);
                k(he),
                O(!T),
                C(ae),
                V(e)
            } catch (te) {
                console.log(te),
                W.NotificationManager.error("Some error occurred. Please refresh and try again")
            } finally {
                b(!1)
            }
        }
    }, e.collectionPay.length > 0 && e.collectionPay[0].status != "pending" ? "Paid " : "Pay ", " and Review")), t.createElement(Br, {
        setToggleDelete: u,
        setLaunchToDelete: d,
        setCollectionIdForDeleteLaunch: x,
        collection: e,
        launch: A,
        storeLocal: D,
        toggleDelete: h
    }))), A.launchStatus !== "INITIATED" && t.createElement(t.Fragment, null, t.createElement("div", {
        className: "launch-status-wrapper"
    }, t.createElement(Le, {
        title: j(A.launchStatus),
        placement: "top"
    }, t.createElement("span", {
        className: "launch-status ellipsis"
    }, e.collectionPay.length > 0 && e.collectionPay[0].status != "pending" ? "Paid " : "Pay ", " and", " ", j(A.launchStatus))), t.createElement(Br, {
        setToggleDelete: u,
        setLaunchToDelete: d,
        setCollectionIdForDeleteLaunch: x,
        collection: e,
        launch: A,
        storeLocal: D,
        toggleDelete: h
    })))))))), t.createElement("div", {
        className: "create-wrapper"
    }, t.createElement("a", {
        className: "create primary clickable",
        href: `/setup-launch/${e.collectionId}`
    }, "Create")))) : t.createElement("div", {
        className: "collection-card-wrapper preloader"
    }, t.createElement("div", {
        className: "collection-card"
    }, t.createElement("div", {
        className: "metadata"
    }, t.createElement("div", {
        className: "metadata-image-container"
    }, t.createElement("div", {
        className: "metadata-image",
        style: {
            background: "#edeef1"
        }
    })), t.createElement("div", {
        className: "metadata-info"
    }, t.createElement("span", {
        className: "preloader-name"
    }), t.createElement("span", {
        className: "preloader-author"
    }), t.createElement("span", {
        className: "preloader-edit"
    }))), t.createElement("div", {
        className: "launch-container"
    }, t.createElement("div", {
        className: "launch"
    }, t.createElement("span", {
        className: "preloader-launch"
    }), t.createElement("span", {
        className: "preloader-create"
    }))))), h && !_ ? t.createElement(Mr, {
        app: r,
        isOpen: h,
        launchId: y.launchId,
        launchName: y.launchName,
        collectionId: g,
        setToggleDelete: u,
        setDeleteLoader: N,
        setLaunchToDelete: d,
        setCollectionIdForDeleteLaunch: x
    }) : "", T && !E ? t.createElement(Po, {
        app: r,
        list: l,
        isOpen: T,
        launch: S,
        collection: M,
        setToggleReview: O,
        setReviewLoader: b,
        setLaunchToReview: C,
        setCollectionForLaunchReview: V,
        launchInvalidForReview: v
    }) : "", t.createElement(Dt, {
        isOpen: _ || E
    }))
}
  , ko = e=>{
    const {collections: {list: r}} = e;
    return {
        list: r
    }
}
  , Ro = e=>({
    updateLaunchInCollection: (r,a,l)=>e(Ht(r, a, l)),
    setSelectedRoles: (r,a)=>e(at(r, a)),
    setAddresses: (r,a)=>e(rt(r, a)),
    setDscvrDetails: (r,a)=>e(Qt(r, a)),
    setDscvrDetailsAirdrop: (r,a)=>e(bt(r, a))
});
var zr = pe(ko, Ro)(Oo);
var Fo = "/assets/empty-state-collections.745ab0b4.png";
const Uo = ({collections: e, app: r, isFetching: a})=>{
    const l = new Array(Math.floor(Math.random() * (8 - 3) + 3)).fill(0);
    return t.createElement("div", {
        className: "collections-wrapper"
    }, t.createElement("div", {
        className: "collections-header"
    }, t.createElement(m, {
        variant: "h6",
        sx: {
            fontWeight: "bold"
        }
    }, "Collections"), (e == null ? void 0 : e.length) ? t.createElement(m, {
        variant: "string",
        className: "create-new",
        to: "/collection-setup",
        component: ye
    }, "CREATE NEW") : ""), !a && !(e == null ? void 0 : e.length) ? t.createElement("div", {
        className: "empty-state"
    }, t.createElement("img", {
        src: Fo,
        alt: "collections empty state",
        className: "empty-state-image"
    }), t.createElement("span", {
        className: "title"
    }, "You don't have a collection"), t.createElement("span", {
        className: "subtitle"
    }, "Well this is awkward, create some collections to make this page lively."), t.createElement(m, {
        variant: "string",
        className: "create-new",
        to: "/collection-setup",
        component: ye,
        mt: 5
    }, "CREATE NEW")) : t.createElement("div", {
        className: "collections"
    }, !a && (e == null ? void 0 : e.length) > 0 && e.map((o,c)=>t.createElement(zr, {
        key: c,
        collection: o,
        app: r
    })), a && l.map((o,c)=>t.createElement(zr, {
        key: c,
        app: r
    }))))
}
  , Mo = e=>{
    const {collections: {list: r}} = e;
    return {
        collections: r
    }
}
;
var Bo = pe(Mo, null)(Uo);
const St = ({IDL: e})=>{
    const r = e.Text
      , a = e.Int
      , l = e.Text
      , o = e.Record({
        creator_share: e.Bool,
        creator_share_nft_retained: e.Nat,
        open_market_place_after_days: e.Nat,
        is_open_market_place_after_days_custom: e.Bool,
        launch_date_time: a,
        type_of_artwork: e.Int,
        launch_id: l
    })
      , c = e.Text
      , s = e.Record({
        air_drop_sale_id: c,
        updated_at: a,
        creator_share: e.Bool,
        created_at: a,
        creator_share_nft_retained: e.Nat,
        number_of_mint: e.Nat,
        is_open_market_place_after_days_custom: e.Bool,
        launch_date_time: a,
        type_of_artwork: e.Int,
        launch_id: l
    })
      , p = e.Text
      , f = e.Int
      , i = e.Text
      , h = e.Text
      , u = e.Text
      , y = e.Text
      , d = e.Record({
        file_name: p,
        number_of_mint: f,
        asset_url: i,
        price: h,
        asset_id: u,
        launch_type: e.Text,
        launch_id: y
    })
      , g = e.Int
      , x = e.Text
      , _ = e.Record({
        updated_at: g,
        artwork_id: x,
        created_at: g,
        file_name: p,
        number_of_mint: f,
        asset_url: i,
        price: h,
        asset_id: u,
        launch_type: e.Text
    })
      , N = e.Int
      , T = e.Record({
        creator_share: e.Bool,
        creator_share_nft_retained: e.Nat,
        open_market_place_after_days: e.Nat,
        is_open_market_place_after_days_custom: e.Bool,
        leftovers: e.Text,
        type_of_artwork: N,
        launch_id: y,
        number_of_mints: e.Nat
    })
      , O = e.Text
      , S = e.Record({
        updated_at: g,
        creator_share: e.Bool,
        created_at: g,
        creator_share_nft_retained: e.Nat,
        blind_sale_id: O,
        open_market_place_after_days: e.Nat,
        is_open_market_place_after_days_custom: e.Bool,
        leftovers: e.Text,
        type_of_artwork: N,
        launch_id: y,
        number_of_mints: e.Nat
    })
      , C = e.Text
      , M = e.Record({
        number_of_options: e.Nat,
        options: e.Vec(e.Record({
            quantity: e.Nat,
            price: h
        }))
    })
      , V = e.Text
      , E = e.Text
      , b = e.Text
      , v = e.Record({
        id: e.Nat,
        name: e.Text
    })
      , k = e.Record({
        portal_name: e.Text,
        wallet_list: e.Vec(b),
        wallet_list_type: e.Text,
        launch_id: l,
        roles: e.Vec(v)
    })
      , q = e.Text
      , F = e.Text
      , j = e.Record({
        bulk_pricing: e.Opt(M),
        blind_sale_price_group_name: V,
        type_of_group: e.Text,
        individual_wallet_limit: e.Int,
        blind_sale_id: E,
        is_bulk_pricing: e.Bool,
        dsvr_wallet: e.Opt(k),
        token_indexes: e.Opt(e.Vec(e.Text)),
        group_limit: e.Int,
        price: q,
        end_sale_time: a,
        wallet_addresses: e.Opt(e.Vec(F)),
        launch_date_time: a
    })
      , B = e.Text
      , X = e.Text
      , D = e.Record({
        updated_at: a,
        created_at: a,
        dscvr_wallet_list_id: X,
        portal_name: e.Text,
        blind_sale_price_group_id: e.Opt(B),
        wallet_list: e.Vec(b),
        wallet_list_type: e.Text,
        launch_id: l,
        roles: e.Vec(v)
    })
      , Q = e.Record({
        updated_at: g,
        bulk_pricing: e.Opt(M),
        blind_sale_price_group_name: V,
        type_of_group: e.Text,
        individual_wallet_limit: e.Int,
        created_at: g,
        blind_sale_id: E,
        is_bulk_pricing: e.Bool,
        blind_sale_price_group_id: B,
        dsvr_wallet: e.Opt(D),
        token_indexes: e.Opt(e.Vec(e.Text)),
        group_limit: e.Int,
        price: q,
        end_sale_time: a,
        wallet_addresses: e.Opt(e.Vec(F)),
        launch_date_time: a
    })
      , H = e.Record({
        website_url: i,
        creator_name: p,
        nft_receive_address: e.Text,
        collection_name: p,
        creator_royalty: e.Float64,
        keywords: e.Text,
        collection_description: e.Text,
        collection_brief_description: e.Text,
        collection_tiny_description: e.Text,
        royalty_receive_address: e.Text,
        social_links: e.Record({
            twitter: i,
            distrikt: i,
            discord: i,
            additional: e.Text,
            dSCVR: i,
            telegram: i,
            medium: i
        }),
        images: e.Record({
            collection_banner_url: i,
            collection_page_image_url: i,
            avatar_url: i,
            homepage_banner_url: i
        })
    })
      , K = e.Record({
        subaccount_balance_in_e8sICP: e.Nat64,
        status: e.Text,
        collection_id: e.Text,
        collection_fee_in_e8sICP: e.Nat64,
        created_at: e.Int,
        verified_at: e.Opt(e.Int),
        subaccount_index: e.Nat32
    })
      , P = e.Text
      , A = e.Text
      , $ = e.Text
      , z = e.Record({
        account_id: e.Vec(e.Nat8),
        subaccount_id_hex: e.Text,
        subaccount_index: e.Nat32,
        subaccount_id: e.Vec(e.Nat8),
        account_id_hex: e.Text
    })
      , Z = e.Record({
        subaccount_balance_in_e8sICP: e.Nat64,
        status: e.Text,
        total_assets_size_in_mb: e.Nat64,
        updated_at: e.Int,
        cost_in_ICP_per_mb: e.Float64,
        created_at: e.Int,
        total_assets: e.Nat64,
        verified_at: e.Opt(e.Int),
        subaccount_index: e.Nat32,
        asset_cost_in_e8sICP: e.Nat64,
        launch_id: e.Text
    })
      , te = e.Record({
        updated_at: g,
        is_air_drop_nft_enabled: e.Bool,
        launch_status: e.Text,
        is_zip_upload: e.Bool,
        air_drop_id_list: e.Vec(A),
        collection_id: $,
        created_at: g,
        metadata_url: i,
        zip_url: i,
        launch_pay_subaccount: e.Opt(z),
        thumbnail_zip_url: i,
        to_shuffle: e.Opt(e.Bool),
        launch_pay: e.Opt(Z),
        launch_name: p,
        launch_type: e.Text,
        launch_id: y
    })
      , L = e.Text
      , ae = e.Record({
        collection_pay: e.Opt(K),
        website_url: i,
        updated_at: g,
        creator_name: p,
        creator_id: P,
        launches: e.Vec(te),
        collection_id: $,
        nft_receive_address: e.Text,
        created_at: g,
        collection_name: p,
        creator_royalty: e.Float64,
        keywords: e.Text,
        collection_pay_subaccount: e.Opt(z),
        collection_description: e.Text,
        collection_brief_description: e.Text,
        principal_id: L,
        collection_tiny_description: e.Text,
        royalty_receive_address: e.Text,
        social_links: e.Record({
            twitter: i,
            distrikt: i,
            discord: i,
            additional: e.Text,
            dSCVR: i,
            telegram: i,
            medium: i
        }),
        images: e.Record({
            collection_banner_url: i,
            collection_page_image_url: i,
            avatar_url: i,
            homepage_banner_url: i
        })
    })
      , de = e.Record({
        portal_name: e.Text,
        blind_sale_price_group_id: e.Opt(B),
        wallet_list: e.Vec(b),
        wallet_list_type: e.Text,
        launch_id: l,
        roles: e.Vec(v)
    })
      , se = e.Record({
        is_air_drop_nft_enabled: e.Bool,
        air_drop_id_list: e.Vec(A),
        collection_id: $,
        metadata_url: i,
        thumbnail_zip_url: i,
        launch_name: p,
        launch_type: e.Text
    })
      , ie = e.Record({
        updated_at: g,
        is_air_drop_nft_enabled: e.Bool,
        launch_status: e.Text,
        is_zip_upload: e.Bool,
        air_drop_id_list: e.Vec(A),
        collection_id: $,
        created_at: g,
        metadata_url: i,
        zip_url: i,
        launch_pay_subaccount: e.Opt(z),
        thumbnail_zip_url: i,
        to_shuffle: e.Opt(e.Bool),
        launch_pay: e.Opt(Z),
        launch_name: p,
        launch_type: e.Text,
        launch_id: y
    })
      , he = e.Text
      , ce = e.Text
      , Ne = e.Text
      , ge = e.Int
      , Te = e.Record({
        trait_name: he,
        trait_category_id: ce,
        file_name: Ne,
        asset_url: i,
        asset_id: u,
        percentage: ge,
        launch_id: y
    })
      , Ae = e.Text
      , lt = e.Record({
        updated_at: g,
        trait_name: he,
        trait_category_id: ce,
        created_at: g,
        file_name: Ne,
        asset_url: i,
        asset_id: u,
        percentage: ge,
        launch_id: y,
        trait_artwork_id: Ae
    })
      , Ze = e.Text
      , la = e.Record({
        trait_category_name: Ze,
        index: e.Int,
        launch_id: y
    })
      , vt = e.Record({
        updated_at: g,
        trait_category_name: Ze,
        trait_category_id: ce,
        created_at: g,
        index: e.Int,
        launch_id: y
    })
      , ne = e.Text
      , Ct = e.Text
      , ot = e.Text
      , $r = e.Text
      , st = e.Text
      , Oe = e.Text
      , oa = e.Record({
        analyzeCount: e.Nat32,
        messageRegex: e.Opt(e.Text),
        messageContains: e.Opt(e.Text)
    })
      , Be = e.Nat64
      , Yr = e.Record({
        count: e.Nat32,
        filter: e.Opt(oa),
        fromTimeNanos: e.Opt(Be)
    })
      , Hr = e.Record({
        upToTimeNanos: e.Opt(Be),
        count: e.Nat32,
        filter: e.Opt(oa)
    })
      , Zr = e.Variant({
        getMessagesInfo: e.Null,
        getMessages: Yr,
        getLatestMessages: Hr
    })
      , Jr = e.Variant({
        filterMessageByContains: e.Null,
        filterMessageByRegex: e.Null
    })
      , Xr = e.Record({
        features: e.Vec(e.Opt(Jr)),
        lastTimeNanos: e.Opt(Be),
        count: e.Nat32,
        firstTimeNanos: e.Opt(Be)
    })
      , Qr = e.Record({
        timeNanos: Be,
        message: e.Text
    })
      , Ir = e.Record({
        data: e.Vec(Qr),
        lastAnalyzedMessageTimeNanos: e.Opt(Be)
    })
      , Kr = e.Variant({
        messagesInfo: Xr,
        messages: Ir
    })
      , Dr = e.Variant({
        hourly: e.Null,
        daily: e.Null
    })
      , Lr = e.Record({
        dateToMillis: e.Nat,
        granularity: Dr,
        dateFromMillis: e.Nat
    })
      , en = e.Vec(e.Nat64)
      , tn = e.Vec(e.Nat64)
      , an = e.Vec(e.Nat64)
      , rn = e.Vec(e.Nat64)
      , nn = e.Record({
        updateCalls: en,
        canisterHeapMemorySize: tn,
        canisterCycles: an,
        canisterMemorySize: rn,
        timeMillis: e.Int
    })
      , Pt = e.Record({
        avg: e.Nat64,
        max: e.Nat64,
        min: e.Nat64,
        first: e.Nat64,
        last: e.Nat64
    })
      , ln = e.Record({
        updateCalls: e.Nat64,
        canisterHeapMemorySize: Pt,
        canisterCycles: Pt,
        canisterMemorySize: Pt,
        timeMillis: e.Int
    })
      , on = e.Variant({
        hourly: e.Vec(nn),
        daily: e.Vec(ln)
    })
      , sn = e.Record({
        data: on
    })
      , cn = e.Record({
        updated_at: g,
        artwork_id: x,
        created_at: g,
        file_name: p,
        number_of_mint: f,
        asset_url: i,
        price: h,
        asset_id: u,
        launch_type: e.Text
    })
      , mn = e.Record({
        updated_at: g,
        creator_share: e.Bool,
        created_at: g,
        creator_share_nft_retained: e.Nat,
        blind_sale_id: O,
        open_market_place_after_days: e.Nat,
        price_group: e.Vec(Q),
        is_open_market_place_after_days_custom: e.Bool,
        leftovers: e.Text,
        type_of_artwork: N,
        launch_id: y,
        number_of_mints: e.Nat
    })
      , un = e.Record({
        updated_at: g,
        trait_name: he,
        trait_category_id: ce,
        created_at: g,
        file_name: Ne,
        asset_url: i,
        asset_id: u,
        percentage: ge,
        launch_id: y,
        trait_artwork_id: Ae
    })
      , dn = e.Record({
        updated_at: g,
        trait_category_name: Ze,
        trait_category_id: ce,
        created_at: g,
        index: e.Int,
        trait_artworks: e.Vec(un),
        launch_id: y
    })
      , pn = e.Record({
        collection_pay: e.Opt(K),
        updated_at: g,
        is_air_drop_nft_enabled: e.Bool,
        launch_status: e.Text,
        is_zip_upload: e.Bool,
        air_drop_id_list: e.Vec(A),
        air_drop_dscvr_wallet_list: e.Opt(D),
        collection_id: $,
        artworks: e.Vec(cn),
        created_at: g,
        metadata_url: i,
        zip_url: i,
        collection_pay_subaccount: e.Opt(z),
        launch_pay_subaccount: e.Opt(z),
        thumbnail_zip_url: i,
        to_shuffle: e.Opt(e.Bool),
        launch_pay: e.Opt(Z),
        air_drop_sale: e.Opt(s),
        launch_name: p,
        launch_type: e.Text,
        blind_sale: e.Opt(mn),
        launch_id: y,
        trait_artwork_categorywise: e.Vec(dn)
    })
      , hn = e.Record({
        subaccount_balance_in_e8sICP: e.Nat64,
        status: e.Text,
        total_assets_size_in_mb: e.Nat64,
        updated_at: e.Int,
        cost_in_ICP_per_mb: e.Float64,
        created_at: e.Int,
        total_assets: e.Nat64,
        verified_at: e.Opt(e.Int),
        actual_balance_e8sICP: e.Nat64,
        subaccount_index: e.Nat32,
        asset_cost_in_e8sICP: e.Nat64,
        launch_id: e.Text
    })
      , fn = e.Record({
        creator_name: p,
        creator_id: P,
        collection_id: $,
        collection_name: p,
        earliest_launch_date_time: e.Opt(g),
        earliest_end_sale_time: e.Opt(g),
        launch_name: p,
        launch_type: e.Text,
        launch_id: y
    })
      , Ot = e.Record({
        e8s: e.Nat64
    })
      , yn = e.Text
      , En = e.Record({
        balance: e.Nat64,
        subaccount_index: e.Nat32,
        account_id_hex: e.Text
    })
      , sa = e.Nat64
      , gn = e.Variant({
        TxTooOld: e.Record({
            allowed_window_nanos: e.Nat64
        }),
        BadFee: e.Record({
            expected_fee: Ot
        }),
        TxDuplicate: e.Record({
            duplicate_of: sa
        }),
        TxCreatedInFuture: e.Null,
        InsufficientFunds: e.Record({
            balance: Ot
        })
    })
      , _n = e.Variant({
        Ok: sa,
        Err: gn
    });
    return e.Service({
        addNewAdmin: e.Func([e.Text, r], [e.Bool], []),
        addNewWhitelistUser: e.Func([e.Text, r], [e.Bool], []),
        collectCanisterMetrics: e.Func([], [], []),
        countSubaccounts: e.Func([], [e.Nat], []),
        createAirDropSale: e.Func([o], [e.Opt(s)], []),
        createArtwork: e.Func([d], [e.Opt(_)], []),
        createArtworkBulk: e.Func([e.Vec(d)], [e.Vec(e.Opt(_))], []),
        createBlindSale: e.Func([T], [e.Opt(S)], []),
        createBlindSalePriceGroupBulk: e.Func([C, e.Vec(j)], [e.Vec(e.Opt(Q))], []),
        createCollection: e.Func([H], [e.Opt(ae)], []),
        createDscvrWalletList: e.Func([de], [e.Opt(D)], []),
        createLaunch: e.Func([se], [e.Opt(ie)], []),
        createTraitArtwork: e.Func([Te], [e.Opt(lt)], []),
        createTraitArtworkBulk: e.Func([e.Vec(Te)], [e.Vec(e.Opt(lt))], []),
        createTraitCategory: e.Func([la], [e.Opt(vt)], []),
        deleteArtwork: e.Func([ne, Ct], [e.Bool], []),
        deleteBlindSalePriceGroup: e.Func([ne, B], [e.Bool], []),
        deleteDscvrWalletListAirDropBylaunchId: e.Func([l], [e.Bool], []),
        deleteDscvrWalletListByBlindSalePriceGroupId: e.Func([B], [e.Bool], []),
        deleteLaunch: e.Func([ne], [e.Bool], []),
        deleteTraitArtwork: e.Func([ne, ot, $r], [e.Bool], []),
        deleteTraitCategory: e.Func([ne, ot], [e.Bool], []),
        getAirDropSale: e.Func([c], [s], ["query"]),
        getAllAdmin: e.Func([e.Text], [e.Vec(r)], ["query"]),
        getAllArtworks: e.Func([ne], [e.Vec(_)], ["query"]),
        getAllCollectionIdsGlobal: e.Func([], [e.Vec(e.Record({
            updated_at: a,
            creator_name: st,
            collection_id: Oe,
            created_at: a,
            collection_name: st,
            principal_id: r
        }))], ["query"]),
        getAllCollectionNames: e.Func([], [e.Vec(st)], ["query"]),
        getAllCollections: e.Func([], [e.Vec(ae)], ["query"]),
        getAllCreatorNames: e.Func([], [e.Vec(st)], ["query"]),
        getAllLaunchIdsGlobal: e.Func([], [e.Vec(e.Record({
            updated_at: a,
            launch_status: e.Text,
            created_at: a,
            launch_id: ne
        }))], ["query"]),
        getAllLaunches: e.Func([Oe], [e.Vec(ie)], ["query"]),
        getAllTraitArtworks: e.Func([ne, ot], [e.Vec(lt)], ["query"]),
        getArtworkInformation: e.Func([ne], [e.Record({
            final_artworks: e.Vec(_),
            trait_categories: e.Vec(vt),
            type_of_artwork: e.Nat
        })], ["query"]),
        getBalanceByNNSLedger: e.Func([e.Vec(e.Nat8)], [e.Nat64], []),
        getBlindSale: e.Func([C], [S], ["query"]),
        getBlindSalePriceGroupBulk: e.Func([C], [e.Vec(Q)], ["query"]),
        getCanisterLog: e.Func([e.Opt(Zr)], [e.Opt(Kr)], ["query"]),
        getCanisterMetrics: e.Func([Lr], [e.Opt(sn)], ["query"]),
        getCollection: e.Func([Oe], [e.Opt(ae)], ["query"]),
        getCollectionById: e.Func([Oe], [ae], ["query"]),
        getCollectionDump: e.Func([], [e.Opt(e.Vec(e.Tuple(r, e.Vec(ae))))], ["query"]),
        getLaunchById: e.Func([ne], [pn], ["query"]),
        getLaunchPayWithBalance: e.Func([e.Text, ne], [e.Opt(hn)], []),
        getLaunchesByStatus: e.Func([e.Text], [e.Vec(fn)], []),
        getNextLaunchAndChangeStatus: e.Func([], [e.Opt(ne)], []),
        getOrCreateCollectionPay: e.Func([Oe], [e.Opt(e.Record({
            subaccount: z,
            collectionPay: K
        }))], []),
        getOrCreateLaunchPay: e.Func([e.Record({
            total_assets_size_in_mb: e.Nat64,
            launchId: ne,
            total_assets: e.Nat64
        })], [e.Opt(e.Record({
            subaccount: z,
            launchPay: Z
        }))], []),
        getTraitCategories: e.Func([ne], [e.Vec(vt)], ["query"]),
        getTransferFeeImposedByNNSLedger: e.Func([], [Ot], []),
        isAdminUser: e.Func([], [e.Bool], ["query"]),
        isWhitelistedUser: e.Func([], [e.Bool], ["query"]),
        saveZipUploadUrl: e.Func([ne, e.Bool, yn], [e.Bool], []),
        updateAirDropSale: e.Func([c, o], [e.Bool], []),
        updateArtwork: e.Func([Ct, d], [e.Bool], []),
        updateBlindSale: e.Func([C, T], [e.Bool], []),
        updateBlindSalePriceGroup: e.Func([B, j], [e.Bool], []),
        updateCollection: e.Func([Oe, H], [e.Bool], []),
        updateDscvrWalletList: e.Func([X, de], [e.Bool], []),
        updateLaunch: e.Func([ne, se], [e.Bool], []),
        updateLaunchStatus: e.Func([ne, e.Text], [e.Bool], []),
        updateLaunchSuffle: e.Func([ne, e.Bool], [e.Record({
            to_shuffle: e.Bool
        })], []),
        updateTraitArtwork: e.Func([Ct, Te], [e.Bool], []),
        updateTraitCategory: e.Func([ot, la], [e.Bool], []),
        useIndexToCheckBalance: e.Func([e.Text, e.Nat32, e.Nat32], [e.Vec(En)], []),
        useIndexToTransferBalance: e.Func([e.Text, e.Nat32, e.Nat32], [e.Vec(_n)], []),
        verifyCollectionPayTransaction: e.Func([Oe], [e.Opt(K)], []),
        verifyLaunchPayTransaction: e.Func([ne], [e.Opt(Z)], []),
        wallet_balance: e.Func([], [e.Nat], []),
        wallet_receive: e.Func([], [e.Record({
            accepted: e.Nat64
        })], [])
    })
}
  , zo = "zggm4-5qaaa-aaaai-qmjea-cai"
  , Wo = (e,r)=>{
    const a = new ht(U({}, r == null ? void 0 : r.agentOptions));
    return pt.createActor(St, U({
        agent: a,
        canisterId: e
    }, r == null ? void 0 : r.actorOptions))
}
  , Wr = Wo(zo)
  , Vo = "AUTH::SET_PRINCIPAL_ID"
  , Vr = "AUTH::SET_ACTOR"
  , qo = "AUTH::SET_WHITELIST"
  , qr = "AUTH:: RESET_STATE"
  , na = (e,r)=>({
    type: Vr,
    payload: {
        app: e,
        dscvrActor: r
    }
})
  , jo = ()=>({
    type: qr,
    payload: {}
});
const Pe = tt(Ee)(({theme: e})=>({
    [`&.${Ca.head}`]: {
        backgroundColor: "#09D8AA",
        color: e.palette.common.black
    }
}))
  , Go = tt(ze)(({theme: e})=>({
    "&:nth-of-type(odd)": {
        backgroundColor: e.palette.action.hover
    },
    "&:last-child td, &:last-child th": {
        border: 0
    }
}))
  , $o = tt(dt)(({theme: e})=>Y(U({}, e.typography.body2), {
    textAlign: "center",
    color: e.palette.text.primary,
    height: 60
}))
  , jr = (e,r)=>{
    const a = re().format("YYYY-MM-DD");
    let l;
    switch (e) {
    case "1d":
        l = re().format("YYYY-MM-DD");
        break;
    case "1w":
        l = re().subtract(1, "week").format("YYYY-MM-DD");
        break;
    case "1m":
        l = re().subtract(1, "month").format("YYYY-MM-DD");
        break;
    case "1y":
        l = re().subtract(1, "year").format("YYYY-MM-DD");
        break;
    default:
        l = null;
        break
    }
    let o;
    return l ? o = r.filter(c=>{
        const s = Math.round(parseInt(c.created_at) / 1e6);
        return re(re(s).format("YYYY-MM-DD")).isBetween(l, a, null, [])
    }
    ) : o = r,
    o
}
  , Yo = ()=>{
    localStorage.setItem("_fromWhichUserCollection", "admin")
}
  , Ho = ({app: e, collections: r, loading: a, setLoading: l, fetchingUser: o, isFetching: c, fetchCollections: s})=>{
    const [p,f] = w.exports.useState("ALL LAUNCHES")
      , [i,h] = w.exports.useState([])
      , [u,y] = w.exports.useState([])
      , d = N=>{
        l(!0),
        f(N.value);
        const T = jr(N.value, r);
        h(T),
        l(!1)
    }
      , g = N=>{
        const T = N.target;
        d(T)
    }
      , x = N=>(r == null ? void 0 : r.length) ? jr(N.value, r).length : 0;
    let _ = new Date().getTimezoneOffset();
    return _ = _ * 6e10,
    w.exports.useEffect(()=>{
        try {
            if (l(!0),
            e && r && $t) {
                h(r);
                const N = $t.map(T=>Y(U({}, T), {
                    count: x(T)
                }));
                y(N)
            }
        } catch {} finally {
            l(!1)
        }
    }
    , [e, r, $t]),
    t.createElement("div", null, a || o || c ? t.createElement(J, {
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }) : t.createElement(t.Fragment, null, t.createElement(J, {
        sx: {
            display: {
                xs: "block",
                sm: "none"
            },
            my: 1
        }
    }, t.createElement(qt, {
        value: p,
        size: "small",
        sx: {
            my: 1,
            width: "100%"
        },
        onChange: g
    }, u.map(N=>t.createElement(G, {
        value: N.value,
        key: N.value
    }, t.createElement(J, {
        sx: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement("span", {
        style: {
            marginRight: "1.5rem"
        }
    }, N.key), t.createElement("div", {
        style: {
            display: "flex",
            alignItems: "center"
        }
    }, t.createElement(ft, {
        badgeContent: N.count,
        color: "primary",
        showZero: !0
    }))))))), t.createElement(J, {
        sx: {
            display: {
                xs: "none",
                sm: "flex"
            },
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,
                mb: 2,
                width: "8rem",
                height: "6rem"
            }
        }
    }, u.map(N=>t.createElement($o, {
        key: N.key,
        elevation: 4
    }, t.createElement(J, {
        sx: {
            fontSize: "3rem"
        }
    }, t.createElement(ft, {
        badgeContent: N.count,
        max: 99999,
        color: "primary",
        showZero: !0,
        className: "collectionBadge MuiBadge-badge"
    })), t.createElement(J, null, t.createElement(m, {
        variant: "subtitle2",
        display: "block",
        gutterBottom: !0,
        style: {
            color: p == N.value ? "#09D8AA" : null,
            cursor: "pointer"
        },
        onClick: ()=>d(N)
    }, N.key))))), i.length > 0 ? t.createElement(Rt, {
        component: dt
    }, t.createElement(Ft, {
        sx: {
            minWidth: 700
        },
        "aria-label": "dense table"
    }, t.createElement(Ut, null, t.createElement(ze, null, t.createElement(Pe, {
        align: "left"
    }, "Collection Name"), t.createElement(Pe, {
        align: "left"
    }, "Creator Name"), t.createElement(Pe, {
        align: "left"
    }, "Collection Date"), t.createElement(Pe, {
        align: "left"
    }))), t.createElement(Mt, null, i.map(N=>t.createElement(Go, {
        key: N.collectionId
    }, t.createElement(Pe, {
        align: "left"
    }, N.collectionName), t.createElement(Pe, {
        align: "left",
        component: "th",
        scope: "row"
    }, N.creatorName), t.createElement(Pe, {
        align: "left"
    }, Fe(ue(parseInt(N.id) + _))), t.createElement(Pe, {
        align: "left"
    }, t.createElement(De, {
        size: "small",
        to: `/collection-setup/${N.collectionId}`,
        component: ye,
        onClick: Yo
    }, t.createElement(fa, {
        className: "action-hover",
        sx: {
            width: "18px",
            height: "18px"
        }
    })))))))) : t.createElement(m, {
        variant: "h6",
        sx: {
            display: "flex",
            justifyContent: "center",
            padding: "35% 0 35% 0"
        }
    }, "No Collections")))
}
  , Zo = e=>{
    const {collections: {globalList: r}} = e;
    return {
        collections: r
    }
}
;
var Jo = pe(Zo, null)(Ho);
const Xo = ()=>{
    localStorage.setItem("_fromWhichUser", "admin")
}
  , Qo = async(e,r,a)=>{
    const l = await e.getLaunchById(r)
      , o = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(l))}`
      , c = document.createElement("a");
    c.href = o,
    c.download = `${a}Metadata.json`,
    c.click()
}
  , oe = tt(Ee)(({theme: e})=>({
    [`&.${Ca.head}`]: {
        backgroundColor: "#09D8AA",
        color: e.palette.common.black
    }
}))
  , Io = tt(ze)(({theme: e})=>({
    "&:nth-of-type(odd)": {
        backgroundColor: e.palette.action.hover
    },
    "&:last-child td, &:last-child th": {
        border: 0
    }
}))
  , Ko = ({row: e, storeLocal: r, app: a, fetchLaunchByStatus: l, forceUpdate: o})=>{
    const [c,s] = t.useState(null)
      , p = Boolean(c)
      , f = q=>{
        s(q.currentTarget)
    }
      , i = ()=>{
        s(null)
    }
      , h = Ie()
      , [u,y] = w.exports.useState(!1)
      , [d,g] = w.exports.useState("")
      , [x,_] = w.exports.useState("")
      , [N,T] = w.exports.useState(!1)
      , [O,S] = w.exports.useState(!1)
      , [C,M] = w.exports.useState("")
      , [V,E] = w.exports.useState("")
      , [b,v] = w.exports.useState(!1)
      , k = ({isOpen: q, launch: F, collectionId: j})=>{
        const B = ()=>y(!1)
          , [X,D] = w.exports.useState("INITIATED")
          , Q = P=>{
            D(P.target.value)
        }
          , H = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            borderRadius: 2,
            borderBottom: "4px solid #0FC89F",
            boxShadow: 24,
            textAlign: "center",
            p: 4,
            pt: 2
        }
          , K = async P=>{
            try {
                T(!0),
                await a.updateLaunchStatus(P, X) && (h(Bl(j, P, X)),
                o(),
                W.NotificationManager.success("Launch Status updated successfully"))
            } catch (A) {
                console.log(A),
                W.NotificationManager.error("Some error occurred. Please refresh and try again")
            } finally {
                T(!1),
                g(""),
                _(""),
                B()
            }
        }
        ;
        return t.createElement(Ke, {
            open: q,
            onClose: B,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description"
        }, t.createElement(J, {
            sx: H
        }, t.createElement(m, {
            id: "modal-modal-title",
            variant: "h6",
            component: "h2",
            mb: 2,
            sx: {
                fontWeight: "bold"
            }
        }, "Update status for ", F.launch_name), t.createElement(qt, {
            value: X,
            onChange: Q,
            size: "small",
            sx: {
                mb: 3
            }
        }, t.createElement(G, {
            value: "INITIATED"
        }, "Initiated"), t.createElement(G, {
            value: "READY_FOR_REVIEW"
        }, "Ready For Review"), t.createElement(G, {
            value: "IN_REVIEW"
        }, "In Review"), t.createElement(G, {
            value: "COMPLETED"
        }, "Completed"), t.createElement(G, {
            value: "MINTING"
        }, "Minting"), t.createElement(G, {
            value: "MINTING_ERROR"
        }, "Minting Error"), t.createElement(G, {
            value: "LAUNCHED"
        }, "Launched"), t.createElement(G, {
            value: "CANCELLED"
        }, "Cancelled")), t.createElement(fe, {
            direction: "row",
            spacing: 7,
            justifyContent: "center",
            alignItems: "center"
        }, t.createElement(R, {
            variant: "outlined",
            onClick: B,
            size: "small"
        }, "Cancel"), t.createElement(R, {
            variant: "contained",
            onClick: ()=>{
                K(F.launch_id)
            }
            ,
            size: "small"
        }, "Update"))))
    }
    ;
    return t.createElement("div", null, t.createElement("span", {
        className: "icon ico-dots-vertical",
        id: "basic-button",
        "aria-controls": p ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": p ? "true" : void 0,
        onClick: f
    }), t.createElement(Vt, {
        id: "basic-menu",
        anchorEl: c,
        open: p,
        onClose: i,
        MenuListProps: {
            "aria-labelledby": "basic-button"
        }
    }, t.createElement(G, {
        to: `/update-launch/${e.collection_id}/${e.launch_id}`,
        component: ye,
        onClick: ()=>{
            r(),
            i()
        }
        ,
        style: {
            textDecoration: "none",
            color: "#000000"
        }
    }, "Edit Launch"), t.createElement(G, {
        onClick: ()=>{
            y(!u),
            g(e),
            _(e.collection_id),
            i()
        }
    }, "Edit Status"), t.createElement(G, {
        onClick: ()=>{
            S(!O),
            M(e),
            E(e.collection_id),
            i()
        }
    }, "Delete")), u && !N ? t.createElement(k, {
        isOpen: u,
        launch: d,
        collectionId: x
    }) : "", O && !b ? t.createElement(Mr, {
        app: a,
        isOpen: O,
        launchId: C.launch_id,
        launchName: C.launch_name,
        collectionId: V,
        setToggleDelete: S,
        setDeleteLoader: v,
        setLaunchToDelete: M,
        setCollectionIdForDeleteLaunch: E,
        fetchLaunchByStatus: l
    }) : "", t.createElement(Dt, {
        isOpen: N || b
    }))
}
  , Do = ({app: e, loading: r, rows: a, statusIndex: l, fetchLaunchByStatus: o, forceUpdate: c})=>{
    let s = new Date().getTimezoneOffset();
    return s = s * 6e10,
    t.createElement(t.Fragment, null, a.length > 0 ? t.createElement(Rt, {
        component: dt
    }, t.createElement(Ft, {
        sx: {
            minWidth: 700
        },
        "aria-label": "dense table"
    }, t.createElement(Ut, null, t.createElement(ze, null, t.createElement(oe, {
        align: "left"
    }, "Collection Name"), t.createElement(oe, {
        align: "left"
    }, "Launch Name"), t.createElement(oe, {
        align: "left"
    }, "Launch Type"), t.createElement(oe, {
        align: "left"
    }, "Start Date"), t.createElement(oe, {
        align: "left"
    }, "End Date"), l == 1 || l == 2 ? t.createElement(oe, {
        align: "left"
    }, "Metadata") : "", t.createElement(oe, {
        align: "left"
    }))), t.createElement(Mt, null, a.map(p=>t.createElement(Io, {
        key: p.launch_id
    }, t.createElement(oe, {
        align: "left"
    }, p.collection_name), t.createElement(oe, {
        align: "left",
        component: "th",
        scope: "row"
    }, p.launch_name), t.createElement(oe, {
        align: "left"
    }, p.launch_type == "BLIND_SALE" ? "Entrepot" : "Airdrop"), p.earliest_launch_date_time.length != 0 ? t.createElement(oe, {
        align: "left"
    }, Fe(ue(parseInt(p.earliest_launch_date_time[0]) + s))) : t.createElement(oe, {
        align: "left"
    }, "\xA0"), p.launch_type == "BLIND_SALE" && p.earliest_end_sale_time.length != 0 ? t.createElement(oe, {
        align: "left"
    }, Fe(ue(parseInt(p.earliest_end_sale_time[0]) + s))) : t.createElement(oe, {
        align: "left"
    }, "\xA0"), l == 1 || l == 2 ? t.createElement(oe, {
        align: "left"
    }, t.createElement(De, {
        size: "small"
    }, t.createElement(In, {
        className: "action-hover",
        sx: {
            width: "20px",
            height: "20px"
        },
        onClick: ()=>Qo(e, p.launch_id, p.launch_name)
    }))) : "", t.createElement(oe, {
        align: "left"
    }, t.createElement(Ko, {
        row: p,
        storeLocal: Xo,
        app: e,
        fetchLaunchByStatus: o,
        forceUpdate: c
    }))))))) : t.createElement(m, {
        variant: "h6",
        sx: {
            display: "flex",
            justifyContent: "center",
            padding: "35% 0 35% 0"
        }
    }, "No Launches"))
}
  , Gr = [{
    key: "INITIATED",
    value: "INITIATED"
}, {
    key: "READY_FOR_REVIEW",
    value: "READY FOR REVIEW"
}, {
    key: "IN_REVIEW",
    value: "IN REVIEW"
}, {
    key: "COMPLETED",
    value: "COMPLETED"
}, {
    key: "MINTING",
    value: "MINTING"
}, {
    key: "MINTING_ERROR",
    value: "MINTING ERROR"
}, {
    key: "LAUNCHED",
    value: "LAUNCHED"
}, {
    key: "CANCELLED",
    value: "CANCELLED"
}]
  , Lo = [{
    key: "All",
    value: "ALL LAUNCHES"
}, {
    key: "1 Day",
    value: "1d"
}, {
    key: "1 Week",
    value: "1w"
}, {
    key: "1 Month",
    value: "1m"
}, {
    key: "1 Year",
    value: "1y"
}]
  , es = ({app: e, loading: r, setLoading: a, setLoader: l, fetchingUser: o, isFetching: c})=>{
    const [s,p] = t.useState(null)
      , [f,i] = t.useState(null)
      , [h,u] = w.exports.useState(-1)
      , [y,d] = w.exports.useState([])
      , [g,x] = w.exports.useState([])
      , [_,N] = w.exports.useState("ALL LAUNCHES")
      , [T,O] = w.exports.useState([])
      , [S,C] = w.exports.useState([])
      , [M,V] = w.exports.useState(!0)
      , [E,b] = w.exports.useReducer(P=>P + 1, 0)
      , v = Pa({
        breakpoints: {
            values: {
                xs: 0,
                sm: 350,
                md: 550,
                lg: 900,
                xl: 1200
            }
        },
        palette: {
            primary: {
                main: "#09D8AA",
                contrastText: "black"
            },
            secondary: {
                main: "#3d5450",
                contrastText: "#ffffff"
            }
        }
    })
      , k = P=>{
        p(P.currentTarget)
    }
      , q = ()=>{
        p(null)
    }
      , F = ()=>{
        i(null)
    }
      , j = async P=>{
        try {
            let A = [];
            return a(!0),
            u(P),
            d(A),
            localStorage.setItem("_fromWhichStatus", P),
            e && (A = await e.getLaunchesByStatus(Gr[P].key)),
            d(A),
            F(),
            M || H(_, A),
            A
        } catch (A) {
            console.log(A)
        } finally {
            a(!1)
        }
    }
      , B = async(P,A)=>{
        try {
            if (e) {
                const $ = await e.getAllLaunchIdsGlobal()
                  , z = X($);
                x(z);
                const Z = Wa(z, "launch_status");
                K(P, Z, A)
            }
            F()
        } catch ($) {
            console.log($)
        }
    }
      , X = P=>P.map(A=>{
        const $ = Math.round(parseInt(A.updated_at) / 1e6);
        return Y(U({}, A), {
            created_at: re($).format("YYYY-MM-DD")
        })
    }
    )
      , D = (P,A,$,z,Z)=>{
        let te = 0
          , L = [];
        if (z) {
            const ae = z[P.key];
            if (te = ae ? ae.length : 0,
            A == $) {
                if (ae) {
                    const de = ae.reduce((se,ie)=>se.concat(ie.launch_id), []);
                    L = Z.filter(se=>de.includes(se.launch_id)),
                    L.sort((se,ie)=>{
                        let he = new Date().getTimezoneOffset();
                        return he = he * 6e10,
                        new Date(Fe(ue(parseInt(ie.earliest_launch_date_time[0]) + he))) - new Date(Fe(ue(parseInt(se.earliest_launch_date_time[0]) + he)))
                    }
                    ),
                    O(L)
                } else
                    O([]);
                M && V(!1)
            }
        }
        return te
    }
      , Q = P=>{
        a(!0),
        H(P.target.value, y),
        a(!1)
    }
      , H = (P,A)=>{
        N(P);
        const $ = re().format("YYYY-MM-DD");
        let z;
        switch (P) {
        case "1d":
            z = re().format("YYYY-MM-DD");
            break;
        case "1w":
            z = re().subtract(1, "week").format("YYYY-MM-DD");
            break;
        case "1m":
            z = re().subtract(1, "month").format("YYYY-MM-DD");
            break;
        case "1y":
            z = re().subtract(1, "year").format("YYYY-MM-DD");
            break;
        default:
            z = null;
            break
        }
        let Z = [];
        z ? Z = g.filter(ae=>re(ae.created_at).isBetween(z, $, null, [])) : Z = g;
        const te = Wa(Z, "launch_status")
          , L = localStorage.getItem("_fromWhichStatus");
        K(L, te, A)
    }
      , K = (P,A,$)=>{
        C(Gr.map((z,Z)=>Y(U({}, z), {
            count: D(z, Z, P, A, $)
        })))
    }
    ;
    return w.exports.useEffect(async()=>{
        try {
            if (e) {
                const P = localStorage.getItem("_fromWhichStatus");
                u(P != null ? P : 0);
                const A = await j(P != null ? P : 0);
                B(P != null ? P : 0, A)
            }
        } catch {}
    }
    , [E]),
    t.createElement("div", null, r || o || c ? t.createElement(J, {
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }) : t.createElement(Oa, {
        theme: v
    }, t.createElement(Kn, {
        position: "static",
        sx: {
            backgroundColor: "#ffffff"
        }
    }, t.createElement(n, {
        container: !0,
        item: !0,
        xs: 12
    }, t.createElement(n, {
        item: !0,
        xs: 0,
        md: 9
    }), t.createElement(n, {
        item: !0,
        xs: 12,
        md: 3,
        container: !0,
        justifyContent: "flex-end"
    }, t.createElement(Dn, {
        sx: {
            m: 1,
            width: "100%"
        }
    }, t.createElement(qt, {
        value: _,
        size: "small",
        sx: {
            mt: 1
        },
        onChange: Q
    }, Lo.map(P=>t.createElement(G, {
        value: P.value,
        key: P.value
    }, P.key)))))), t.createElement(Wt, {
        maxWidth: "xl"
    }, t.createElement(Ln, {
        disableGutters: !0,
        sx: {
            justifyContent: {
                xs: "",
                md: "center"
            }
        }
    }, t.createElement(J, {
        sx: {
            display: {
                xs: "flex",
                md: "none"
            }
        }
    }, t.createElement(De, {
        size: "large",
        "aria-label": "account of current user",
        "aria-controls": "menu-appbar",
        "aria-haspopup": "true",
        onClick: k,
        color: "inherit"
    }, t.createElement(el, null)), t.createElement(Vt, {
        id: "menu-appbar",
        anchorEl: s,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        keepMounted: !0,
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        open: Boolean(s),
        onClose: q,
        sx: {
            display: {
                xs: "block",
                md: "none"
            }
        }
    }, S.map((P,A)=>t.createElement(G, {
        key: P.key,
        onClick: ()=>{
            u(A),
            j(A)
        }
        ,
        sx: {
            fontSize: "0.3rem"
        }
    }, t.createElement(m, {
        textAlign: "center",
        component: "div"
    }, P.value, t.createElement(J, {
        sx: {
            display: "inline",
            ml: 2
        }
    }, t.createElement(ft, {
        badgeContent: P.count,
        color: "primary",
        showZero: !0,
        className: "launchBadge MuiBadge-badge"
    }))))))), t.createElement(J, {
        sx: {
            display: {
                xs: "none",
                md: "flex"
            },
            maxWidth: "xl"
        }
    }, t.createElement(fe, {
        direction: "row",
        spacing: 1,
        justifyContent: "center",
        alignItems: "center"
    }, S.map((P,A)=>t.createElement("div", {
        key: P.key,
        style: {
            borderRight: A !== S.length - 1 ? "1px solid gray" : "none",
            paddingRight: A !== S.length - 1 ? "8px" : "0"
        }
    }, t.createElement(m, {
        variant: "caption",
        onClick: ()=>{
            j(A)
        }
        ,
        style: {
            color: A == h ? "#09D8AA" : "black",
            cursor: "pointer"
        },
        component: "div"
    }, P.value), t.createElement(J, {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            m: 1.5
        }
    }, t.createElement(ft, {
        badgeContent: P.count,
        color: "primary",
        showZero: !0,
        className: "launchBadge MuiBadge-badge"
    }))))))))), h != -1 && !o ? t.createElement(Do, {
        key: E,
        app: e,
        rows: T,
        statusIndex: h,
        fetchLaunchByStatus: j,
        forceUpdate: b
    }) : ""))
}
  , ts = ({app: e, setLoader: r, fetchingUser: a, isFetching: l, fetchCollections: o})=>{
    const [c,s] = w.exports.useState(!1)
      , [p,f] = w.exports.useState(-1);
    return w.exports.useEffect(()=>{
        try {
            if (e) {
                const i = localStorage.getItem("_option");
                f(i != null ? i : "1"),
                localStorage.setItem("_option", i != null ? i : "1")
            }
        } catch {} finally {
            localStorage.removeItem("_fromWhichUser"),
            localStorage.removeItem("_fromWhichUserCollection")
        }
    }
    , [e]),
    t.createElement("div", {
        className: "admin-container"
    }, c || a || l ? t.createElement(J, {
        className: "loader",
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, t.createElement(we, null)) : t.createElement(fe, {
        direction: "row",
        spacing: 7,
        justifyContent: "center",
        alignItems: "center",
        mb: 2
    }, t.createElement(R, {
        variant: p == "1" ? "contained" : "outlined",
        onClick: ()=>{
            f("1"),
            localStorage.setItem("_option", "1")
        }
    }, "Launches"), t.createElement(R, {
        variant: p == "2" ? "contained" : "outlined",
        onClick: ()=>{
            f("2"),
            localStorage.setItem("_option", "2")
        }
    }, "Collections")), p == "1" && t.createElement(es, {
        app: e,
        loading: c,
        setLoading: s,
        setLoader: r,
        fetchingUser: a,
        isFetching: l
    }), p == "2" && t.createElement(Jo, {
        app: e,
        loading: c,
        setLoading: s,
        fetchingUser: a,
        isFetching: l,
        fetchCollections: o
    }))
}
;
var as = ({IDL: e})=>{
    const r = e.Record({
        field: e.Text,
        errors: e.Vec(e.Text)
    })
      , a = e.Record({
        is_owner: e.Bool,
        meta: e.Text
    })
      , l = e.Record({
        id: e.Principal,
        username: e.Text,
        created_at: e.Nat64,
        icon_url: e.Text,
        user_type: e.Nat64,
        rights: e.Nat64,
        display_nft: e.Opt(a),
        bio: e.Text,
        followers: e.Nat64,
        following: e.Nat64
    })
      , o = e.Record({
        id: e.Nat64,
        owner_id: e.Principal,
        owner: l,
        slug: e.Text,
        name: e.Text,
        description: e.Text,
        created_at: e.Nat64,
        icon_url: e.Text,
        is_nsfw: e.Bool,
        is_highlighted: e.Bool,
        is_mod: e.Bool,
        perm: e.Nat64,
        is_following: e.Bool,
        member_count: e.Nat64,
        content_count: e.Nat64
    })
      , c = e.Record({
        status: e.Text,
        message: e.Text,
        errors: e.Opt(e.Vec(r)),
        result: e.Opt(o)
    })
      , s = e.Variant({
        Custom: e.Null,
        Default: e.Null,
        Everyone: e.Null
    })
      , p = e.Record({
        id: e.Nat64,
        name: e.Text,
        ordinal: e.Nat64,
        color: e.Nat32,
        kind: s
    })
      , f = e.Record({
        id: e.Nat64,
        name: e.Text,
        permissions: e.Nat64,
        ordinal: e.Nat64,
        color: e.Nat32,
        icon_url: e.Text,
        kind: s,
        member_count: e.Nat64,
        is_locked: e.Bool
    })
      , i = e.Variant({
        Approved: e.Null,
        Pending: e.Null,
        Banned: e.Null,
        Kicked: e.Null,
        Left: e.Null
    })
      , h = e.Record({
        id: e.Nat64,
        name: e.Text
    })
      , u = e.Variant({
        Stoic: e.Null,
        Plug: e.Null,
        Earth: e.Null,
        Origyn: e.Null
    })
      , y = e.Record({
        kind: u,
        wallet_id: e.Principal,
        is_paired: e.Bool,
        created_at: e.Nat64
    })
      , d = e.Record({
        id: e.Principal,
        username: e.Text,
        user_type: e.Nat64,
        wallets: e.Vec(y)
    })
      , g = e.Record({
        id: e.Nat64,
        user_id: e.Principal,
        user: d,
        status: i,
        created_at: e.Nat64,
        roles: e.Vec(h)
    })
      , x = e.Record({
        id: e.Principal,
        username: e.Text,
        created_at: e.Nat64,
        user_type: e.Nat64,
        rights: e.Nat64,
        display_nft: e.Opt(a)
    })
      , _ = e.Record({
        id: e.Nat64,
        user_id: e.Principal,
        user: x,
        status: i,
        created_at: e.Nat64,
        roles: e.Vec(p)
    });
    return e.Service({
        list_portals: e.Func([e.Bool], [e.Vec(o)], ["query"]),
        get_portal: e.Func([e.Text], [c], ["query"]),
        get_portal_roles: e.Func([e.Nat64], [e.Vec(f)], ["query"]),
        get_role_members: e.Func([e.Nat64], [e.Vec(_)], ["query"]),
        get_portal_members: e.Func([e.Nat64], [e.Vec(_)], ["query"]),
        get_portal_member_wallets: e.Func([e.Nat64], [e.Vec(g)], ["query"]),
        get_portal_members_by_status: e.Func([e.Nat64, i], [e.Vec(_)], ["query"])
    })
}
;
const rs = ({actor: e})=>{
    const [r,a] = w.exports.useState("")
      , [l,o] = w.exports.useState(!1)
      , [c,s] = w.exports.useState("");
    w.exports.useState(!1);
    const [p,f] = w.exports.useState(!1)
      , [i,h] = w.exports.useState(!1)
      , [u,y] = w.exports.useState(!1)
      , [d,g] = w.exports.useState(!0)
      , [x,_] = w.exports.useState(null)
      , N = et()
      , T = Ie()
      , O = ["zggm4-5qaaa-aaaai-qmjea-cai"];
    let S = {};
    const C = ()=>{
        switch (localStorage.getItem("_loginType")) {
        case "plug":
            window.ic.plug.disconnect();
            break;
        case "stoic":
            ke.disconnect();
            break;
        default:
            console.error("No login method found");
            break
        }
        localStorage.removeItem("_loginType"),
        localStorage.removeItem("_fromWhichUser"),
        localStorage.removeItem("_fromWhichUserCollection"),
        localStorage.removeItem("_option"),
        localStorage.removeItem("_isAdmin"),
        T(zl()),
        T(jo()),
        N("/"),
        s("")
    }
    ;
    function M(F, j) {
        const B = Object.keys(F)
          , X = Object.keys(j);
        if (B.sort(),
        X.sort(),
        B.length !== X.length)
            return !1;
        for (let D = 0; D < B.length; D++)
            if (B[D] !== X[D])
                return !1;
        return !0
    }
    const V = async F=>{
        var j;
        try {
            switch (s(F),
            o(!0),
            F) {
            case "plug":
                if (!((j = window.ic) == null ? void 0 : j.plug)) {
                    window.open("https://plugwallet.ooo/", "_blank");
                    return
                }
                if (await window.ic.plug.requestConnect({
                    whitelist: O
                })) {
                    window.ic.plug.agent || await window.ic.plug.createAgent({
                        whitelist: O
                    });
                    const Q = await window.ic.plug.agent.getPrincipal();
                    Q && a(Q.toText()),
                    S = await window.ic.plug.createActor({
                        canisterId: "zggm4-5qaaa-aaaai-qmjea-cai",
                        interfaceFactory: St
                    }),
                    E(F, S),
                    N("/dashboard/collections")
                } else
                    console.error("Failed to connect to your wallet");
                break;
            case "stoic":
                let X = await ke.load();
                X || (X = await ke.connect());
                const D = X._principal.toText();
                D && a(D),
                S = b(X),
                E(F, S),
                N("/dashboard/collections");
                break;
            default:
                break
            }
        } catch {
            o(!1)
        }
    }
      , E = async(F,j)=>{
        o(!1),
        localStorage.setItem("_loginType", F);
        let B = await k();
        T(na(j, B))
    }
      , b = F=>{
        const j = "https://raw.ic0.app"
          , B = new ht({
            host: j,
            identity: F
        });
        return pt.createActor(St, {
            agent: B,
            canisterId: "zggm4-5qaaa-aaaai-qmjea-cai"
        })
    }
      , v = async F=>{
        try {
            if (localStorage.getItem("_isAdmin") == null) {
                const H = await F.isAdminUser();
                localStorage.setItem("_isAdmin", H)
            }
            const {allCollections: j, allCreatorNames: B, allCreatorNameGlobal: X, allCollectionNameGlobal: D, allCollectionsGlobal: Q} = await Wl(F);
            j.sort(function(H, K) {
                return parseInt(H.id) - parseInt(K.id)
            }),
            Q.sort(function(H, K) {
                return parseInt(K.created_at) - parseInt(H.created_at)
            }),
            T(Rl(j)),
            T(Fl(Q)),
            T(La([...new Set(B)])),
            T(er([...new Set(X)])),
            T(tr([...new Set(D)]))
        } catch {}
    }
      , k = async()=>{
        try {
            let F = {};
            F.identity = !1,
            F.host = "https://raw.ic0.app";
            let j = new ht(F);
            return pt.createActor(as, {
                agent: j,
                canisterId: "h2bch-3yaaa-aaaab-qaama-cai"
            })
        } catch {}
    }
    ;
    w.exports.useEffect(async()=>{
        e && (g(!0),
        await v(e),
        g(!1))
    }
    , [e]),
    w.exports.useEffect(async()=>{
        var F = localStorage.getItem("_loginType");
        if (F) {
            s(F);
            try {
                switch (F) {
                case "plug":
                    if (o(!0),
                    await window.ic.plug.isConnected()) {
                        window.ic.plug.agent || await window.ic.plug.createAgent({
                            whitelist: O
                        });
                        const D = await window.ic.plug.agent.getPrincipal();
                        q(F, D, e)
                    }
                    break;
                case "stoic":
                    o(!0);
                    let B = await ke.load();
                    const X = B._principal;
                    q(F, X, e, B);
                    break;
                default:
                    break
                }
            } catch {
                o(!1)
            }
        } else
            window.location.pathname !== "/" && (window.location.href = "/")
    }
    , [e]);
    const q = async(F,j,B,X)=>{
        j && a(j.toText());
        let D = await k();
        switch (F) {
        case "plug":
            S = await window.ic.plug.createActor({
                canisterId: "zggm4-5qaaa-aaaai-qmjea-cai",
                interfaceFactory: St
            }),
            M(B, S) || T(na(S, D)),
            window.location.pathname == "/" && N("/dashboard/collections");
            break;
        case "stoic":
            Object.entries(B).length == 0 && (S = b(X),
            T(na(S, D))),
            window.location.pathname == "/" && N("/dashboard/collections");
            break
        }
        localStorage.setItem("_loginType", F),
        o(!1)
    }
    ;
    return w.exports.useEffect(async()=>{
        if (window.location.pathname == "/dashboard/admin" && Wr) {
            let j = await Wr.isAdminUser();
            if (j = j || localStorage.getItem("_isAdmin") == "true",
            !j) {
                N("/dashboard/collections");
                return
            }
        }
        var F = localStorage.getItem("_loginType");
        if (!F && window.location.pathname !== "/") {
            console.log("INN"),
            C();
            return
        }
    }
    , [window.location.pathname]),
    t.createElement("main", null, t.createElement(tl, null, t.createElement(be, {
        exact: !0,
        path: "/",
        element: t.createElement(co, {
            login: V,
            connectingUsing: c
        })
    }), t.createElement(be, {
        exact: !0,
        path: "/dashboard",
        element: t.createElement(po, {
            app: e,
            principalId: r,
            fetchingUser: l,
            logout: C
        })
    }, t.createElement(be, {
        index: !0,
        element: t.createElement(ho, null)
    }), t.createElement(be, {
        exact: !0,
        path: "collections",
        element: t.createElement(Bo, {
            app: e,
            isFetching: d
        })
    }), t.createElement(be, {
        exact: !0,
        path: "admin",
        element: t.createElement(ts, {
            app: e,
            setLoader: f,
            fetchingUser: l,
            isFetching: d,
            fetchCollections: v
        })
    })), t.createElement(be, {
        path: "/collection-setup",
        element: t.createElement(wr, {
            app: e,
            setLoader: f,
            setFormSubmitting: y
        })
    }), t.createElement(be, {
        path: "/collection-setup/:id",
        element: t.createElement(wr, {
            app: e,
            setLoader: f,
            setFormSubmitting: y
        })
    }), t.createElement(be, {
        path: "/setup-launch/:id",
        element: t.createElement(_r, {
            app: e,
            setLoader: f,
            setUploadingImage: h,
            setFormSubmitting: y
        }),
        setProgress: _
    }), t.createElement(be, {
        path: "/update-launch/:cid/:lid",
        element: t.createElement(_r, {
            app: e,
            setLoader: f,
            setUploadingImage: h,
            setFormSubmitting: y,
            setProgress: _
        })
    })), t.createElement(Dt, {
        isOpen: p,
        uploadingImage: i,
        formSubmitting: u,
        progress: x
    }), t.createElement(W.NotificationContainer, null))
}
  , ns = e=>{
    const {collections: {list: r}, auth: {actor: a, dscvrActor: l}, roles: {allRoles: o, selectedRoles: c}} = e;
    return {
        rows: r,
        actor: a,
        dscvrActor: l
    }
}
;
var ls = pe(ns, null)(rs);
const os = {
    pid: "",
    isLoggedIn: !1,
    actor: "",
    isWhitelisted: -1
}
  , ss = (e=os,r)=>{
    const {type: a, payload: l} = r;
    switch (a) {
    case Vo:
        {
            const {pid: o} = l;
            return Y(U({}, e), {
                pid: o
            })
        }
    case qo:
        {
            const {isWhitelisted: o} = l;
            return Y(U({}, e), {
                isWhitelisted: o
            })
        }
    case Vr:
        {
            const {app: o, dscvrActor: c} = l;
            return Y(U({}, e), {
                actor: o,
                dscvrActor: c
            })
        }
    case qr:
        return Y(U({}, e), {
            actor: {},
            isWhitelisted: -1,
            dscvrActor: {}
        });
    default:
        return U({}, e)
    }
}
  , cs = {
    list: [],
    globalList: []
}
  , is = (e=cs,r)=>{
    const {type: a, payload: l} = r;
    switch (a) {
    case ja:
        {
            const {data: o} = l
              , c = e.list || [];
            return c.push(U({
                id: Ma()
            }, o)),
            Y(U({}, e), {
                list: c
            })
        }
    case Ga:
        {
            const {data: o, id: c} = l;
            let s = e.list || [];
            return s = s.map(p=>c === p.collectionId ? U(U({}, p), o) : p),
            Y(U({}, e), {
                list: s
            })
        }
    case $a:
        {
            const {data: o} = l;
            return e.list,
            Y(U({}, e), {
                list: o
            })
        }
    case Ya:
        {
            const {data: o} = l;
            return e.globalList,
            Y(U({}, e), {
                globalList: o
            })
        }
    case Ha:
        {
            const {data: o} = l;
            return e.list,
            Y(U({}, e), {
                creatorName: o
            })
        }
    case Qa:
        {
            const {data: o} = l;
            return e.list,
            Y(U({}, e), {
                creatorNameGlobal: o
            })
        }
    case Ia:
        {
            const {data: o} = l;
            return e.list,
            Y(U({}, e), {
                collectionNameGlobal: o
            })
        }
    case Za:
        {
            const {data: o, id: c} = l
              , s = e.list.map(p=>{
                let f = p.launches || [];
                return p.collectionId === c && (f = [...f, U({
                    id: Ma()
                }, o)]),
                Y(U({}, p), {
                    launches: f
                })
            }
            );
            return Y(U({}, e), {
                list: s
            })
        }
    case Ja:
        {
            const {data: o, cid: c, lid: s} = l
              , p = e.list.map(f=>{
                let i = f.launches || [];
                return f.collectionId === c ? Y(U({}, f), {
                    launches: i.map(h=>h.launchId === s ? o : h)
                }) : f
            }
            );
            return Y(U({}, e), {
                list: p
            })
        }
    case Xa:
        {
            const {cid: o, lid: c} = l
              , s = e.list.map(p=>{
                let f = p.launches || [];
                return p.collectionId === o ? Y(U({}, p), {
                    launches: f.filter(i=>i.launchId !== c)
                }) : p
            }
            );
            return Y(U({}, e), {
                list: s
            })
        }
    case Ka:
        {
            const {data: o, cid: c, lid: s} = l
              , p = e.list.map(f=>{
                let i = f.launches || [];
                return f.collectionId === c ? Y(U({}, f), {
                    launches: i.map(h=>h.launchId === s ? Y(U({}, h), {
                        launchStatus: o
                    }) : h)
                }) : f
            }
            );
            return Y(U({}, e), {
                list: p
            })
        }
    case Ol:
        {
            const {data: o, cid: c, lid: s} = l
              , p = e.list.map(f=>{
                let i = f.launches || [];
                return f.collectionId === c ? Y(U({}, f), {
                    launches: i.map(h=>h.launchId === s ? Y(U({}, h), {
                        files: o.allArtworks,
                        categories: o.allTraitArtworks,
                        groups: o.allPricingGroups
                    }) : h)
                }) : f
            }
            );
            return Y(U({}, e), {
                list: p
            })
        }
    case Da:
        return Y(U({}, e), {
            list: []
        });
    default:
        return U({}, e)
    }
}
  , ms = {
    allRoles: {},
    selectedRoles: {},
    allAddresses: {},
    dscvrDetails: {},
    dscvrDetailsAirdrop: {}
}
  , us = (e=ms,r)=>{
    const {type: a, payload: l} = r;
    switch (a) {
    case sr:
        {
            const {key: o, data: c} = l;
            return Y(U({}, e), {
                allRoles: Y(U({}, e.allRoles), {
                    [o]: c
                })
            })
        }
    case cr:
        {
            const {key: o, data: c} = l;
            return o != null ? Y(U({}, e), {
                selectedRoles: Y(U({}, e.selectedRoles), {
                    [o]: c
                })
            }) : Y(U({}, e), {
                selectedRoles: c
            })
        }
    case ir:
        {
            const {key: o, id: c} = l;
            let s = e.selectedRoles || {};
            return s = s[o] || [],
            s = s.filter(p=>parseInt(p.id) !== c),
            Y(U({}, e), {
                selectedRoles: Y(U({}, e.selectedRoles), {
                    [o]: s
                })
            })
        }
    case mr:
        {
            const {key: o, data: c} = l;
            return o != null ? Y(U({}, e), {
                allAddresses: Y(U({}, e.allAddresses), {
                    [o]: c
                })
            }) : Y(U({}, e), {
                allAddresses: c
            })
        }
    case ur:
        {
            const {key: o, data: c} = l;
            return o != null ? c.length == 0 ? (delete e.dscvrDetails[o],
            U({}, e)) : Y(U({}, e), {
                dscvrDetails: Y(U({}, e.dscvrDetails), {
                    [o]: c
                })
            }) : Y(U({}, e), {
                dscvrDetails: c
            })
        }
    case dr:
        {
            const {key: o, data: c} = l;
            return o != null ? c.length == 0 ? (delete e.dscvrDetailsAirdrop[o],
            U({}, e)) : Y(U({}, e), {
                dscvrDetailsAirdrop: Y(U({}, e.dscvrDetailsAirdrop), {
                    [o]: c
                })
            }) : Y(U({}, e), {
                dscvrDetailsAirdrop: c
            })
        }
    default:
        return U({}, e)
    }
}
  , ds = {}
  , ps = al({
    collections: is,
    auth: ss,
    roles: us
})
  , hs = rl(ps, ds, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  , fs = Pa({
    palette: {
        primary: {
            main: "#09D8AA",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#3d5450",
            contrastText: "#ffffff"
        }
    }
})
  , ys = ()=>t.createElement(nl, {
    store: hs
}, t.createElement(Oa, {
    theme: fs
}, t.createElement(ll, null, t.createElement(ls, null))));
ol({
    dsn: "https://7151b41a8b3541c0a20f01ceba98a967@o1135944.ingest.sentry.io/6187936",
    integrations: [new sl]
});
cl.render(t.createElement(t.StrictMode, null, t.createElement(ys, null)), document.getElementById("root"));
