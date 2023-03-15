import { computed as g, openBlock as o, createElementBlock as d, normalizeClass as w, unref as s, createElementVNode as k, renderSlot as D, ref as y, resolveComponent as E, createVNode as C, createCommentVNode as r, createBlock as c, resolveDynamicComponent as P, normalizeStyle as p, withDirectives as A, toDisplayString as H, vShow as L, onMounted as R, watch as W, Transition as j, withCtx as O, render as I } from "vue";
import { CircleCheckFilled as U, InfoFilled as q, WarningFilled as G, CircleCloseFilled as J, Close as K } from "@element-plus/icons-vue";
const b = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Q = ["disabled"], X = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, n = g(() => [
      "a-button a-cursor",
      `a-button-${t.type}`,
      t.disabled ? "a-disabled" : "",
      t.size === "small" ? "a-button-small" : ""
    ]);
    return (a, l) => (o(), d("button", {
      class: w(s(n)),
      disabled: e.disabled
    }, [
      k("span", null, [
        D(a.$slots, "default", {}, void 0, !0)
      ])
    ], 10, Q));
  }
}, N = /* @__PURE__ */ b(X, [["__scopeId", "data-v-12976a1b"]]);
N.install = (e) => {
  e.component("aButton", N);
};
const Y = () => {
  const e = y(!1);
  return {
    mouse_is: e,
    enter: () => {
      e.value = !0;
    },
    leave: () => {
      e.value = !1;
    }
  };
}, Z = (e) => () => {
  e("update:modelValue", ""), e("change", ""), e("clear"), e("input", "");
}, ee = () => {
  const e = y(!1);
  return {
    passwordVisible: e,
    changePasswordShow: () => {
      e.value = !e.value;
    }
  };
};
const te = ["disabled", "type", "value", "placeholder"], ne = {
  key: 0,
  class: "a-right-suffix"
}, se = {
  key: 1,
  class: "a-right-suffix"
}, ae = {
  __name: "index",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator: (e) => ["text", "password", "textarea"].includes(e)
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    showPassword: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "input"],
  setup(e, { emit: t }) {
    const { mouse_is: n, enter: a, leave: l } = Y(), u = Z(t), v = (S) => {
      let i = S.target.value;
      t("update:modelValue", i);
    }, { passwordVisible: f, changePasswordShow: $ } = ee();
    return (S, i) => {
      const M = E("a-icon");
      return o(), d("div", {
        class: "a-input-wrap",
        onMouseenter: i[1] || (i[1] = (...h) => s(a) && s(a)(...h)),
        onMouseleave: i[2] || (i[2] = (...h) => s(l) && s(l)(...h))
      }, [
        k("input", {
          class: w(e.disabled ? "a-disabled" : ""),
          disabled: e.disabled,
          type: e.showPassword ? s(f) ? "text" : "password" : e.type,
          value: e.modelValue,
          placeholder: e.placeholder,
          onInput: v,
          onChange: i[0] || (i[0] = (h) => t("change"))
        }, null, 42, te),
        e.clearable && e.modelValue && s(n) ? (o(), d("span", ne, [
          C(M, {
            name: "CircleClose",
            size: "16",
            onClick: s(u)
          }, null, 8, ["onClick"])
        ])) : r("", !0),
        e.showPassword && e.modelValue ? (o(), d("span", se, [
          C(M, {
            name: s(f) ? "hide" : "view",
            size: "16",
            onClick: s($)
          }, null, 8, ["name", "onClick"])
        ])) : r("", !0)
      ], 32);
    };
  }
}, F = /* @__PURE__ */ b(ae, [["__scopeId", "data-v-b2cba215"]]);
F.install = (e) => {
  e.component("aInput", F);
};
const V = {
  __name: "index",
  props: {
    name: {
      type: String
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  setup(e) {
    const t = e, n = g(() => {
      let a = "";
      return typeof t.size == "number" ? a = t.size + "px" : a = t.size, {
        height: a,
        width: a
      };
    });
    return (a, l) => (o(), c(P(e.name), {
      style: p({ ...s(n), color: e.color }),
      class: "inline"
    }, null, 8, ["style"]));
  }
};
V.install = (e) => {
  e.component("aIcon", V);
};
const le = { class: "a-badge relative inline-block align-middle" }, oe = ["textContent"], re = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "danger",
      validator: (e) => ["primary", "success", "info", "warning", "danger"].includes(e)
    },
    value: {
      type: [Number, String]
    },
    max: {
      type: Number,
      default: 99
    },
    hidden: {
      type: Boolean,
      default: !1
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = g(() => t.isDot ? "" : typeof t.value == "number" && typeof t.max == "number" ? t.max < t.value ? `${t.max}+` : `${t.value}` : `${t.value}`), a = g(() => {
      const l = t.isDot ? "a-badge__dot" : "a-badge__content", u = t.type ? `a-badge__type--${t.type}` : "";
      return [l, u];
    });
    return (l, u) => (o(), d("div", le, [
      D(l.$slots, "default", {}, void 0, !0),
      A(k("sub", {
        class: w(["a-sup__base", ...s(a)]),
        textContent: H(s(n))
      }, null, 10, oe), [
        [L, !e.hidden && (s(n) || s(n) === "0" || e.isDot)]
      ])
    ]));
  }
}, x = /* @__PURE__ */ b(re, [["__scopeId", "data-v-ed9f24d7"]]);
x.install = (e) => {
  e.component("ABadge", x);
};
const m = {
  warning: {
    icon: "WarningFilled",
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)"
  },
  danger: {
    icon: "CircleCloseFilled",
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)"
  },
  success: {
    icon: "CircleCheckFilled",
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)"
  },
  info: {
    icon: "InfoFilled",
    color: "#909399",
    backgroundColor: "#F4F4F5"
  }
};
const ie = {
  __name: "message-icon",
  props: {
    type: {
      type: String,
      default: "success"
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  setup(e) {
    const t = e, n = (l) => t.type === l, a = g(() => {
      let l = "";
      return typeof t.size == "number" ? l = t.size + "px" : l = t.size, {
        height: l,
        width: l,
        "vertical-align": "sub"
      };
    });
    return (l, u) => (o(), d("span", null, [
      n("success") ? (o(), c(s(U), {
        key: 0,
        style: p({ color: s(m)[e.type].color, ...s(a) })
      }, null, 8, ["style"])) : r("", !0),
      n("info") ? (o(), c(s(q), {
        key: 1,
        style: p({ color: s(m)[e.type].color, ...s(a) })
      }, null, 8, ["style"])) : r("", !0),
      n("warning") ? (o(), c(s(G), {
        key: 2,
        style: p({ color: s(m)[e.type].color, ...s(a) })
      }, null, 8, ["style"])) : r("", !0),
      n("danger") ? (o(), c(s(J), {
        key: 3,
        style: p({ color: s(m)[e.type].color, ...s(a) })
      }, null, 8, ["style"])) : r("", !0)
    ]));
  }
}, ce = /* @__PURE__ */ b(ie, [["__scopeId", "data-v-dcde36cb"]]);
const ue = ["innerHTML"], de = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "info",
      validator: (e) => ["success", "info", "warning", "danger"].includes(e)
    },
    message: {
      type: String
    },
    duration: {
      type: Number,
      default: 3e3
    },
    showClose: {
      type: Boolean,
      default: !1
    },
    center: {
      type: Boolean,
      default: !1
    },
    onClose: {
      type: Function
    },
    grouping: {
      type: Boolean,
      default: !1
    },
    repeatNum: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    const t = e, n = y(!1), a = y();
    function l() {
      n.value = !1, t.onClose && t.onClose(a);
    }
    function u() {
      clearTimeout(v.value);
    }
    const v = y();
    function f() {
      t.duration > 0 && (v.value = setTimeout(() => {
        n.value && l();
      }, t.duration));
    }
    return R(() => {
      f(), n.value = !0;
    }), W(
      () => t.repeatNum,
      () => {
        u(), f();
      }
    ), ($, S) => (o(), c(j, { name: "message" }, {
      default: O(() => [
        n.value ? (o(), d("div", {
          key: 0,
          ref_key: "messageRef",
          ref: a,
          style: p(s(m)[e.type]),
          class: w(["a-message flex items-center p-lr-18 md-12", { "justify-center": e.center }])
        }, [
          e.repeatNum > 1 ? (o(), c(x, {
            key: 0,
            value: e.repeatNum,
            type: e.type,
            class: "a-message__badge"
          }, null, 8, ["value", "type"])) : r("", !0),
          C(ce, { type: e.type }, null, 8, ["type"]),
          k("span", {
            class: "pl-12 txt-hide",
            innerHTML: e.message
          }, null, 8, ue),
          e.showClose ? (o(), c(s(K), {
            key: 1,
            class: "close-btn a-cursor",
            onClick: l
          })) : r("", !0)
        ], 6)) : r("", !0)
      ]),
      _: 1
    }));
  }
}, pe = /* @__PURE__ */ b(de, [["__scopeId", "data-v-9695ef66"]]), fe = "a-message__function", _ = document.createElement("div");
document.body.appendChild(_);
_.id = fe;
let z, B = 0;
const me = ["success", "info", "warning", "danger"], T = (e) => {
  B++;
  const t = document.createElement("div");
  let n = {
    message: "",
    duration: 3e3,
    grouping: !1
  };
  typeof e == "string" ? n.message = e : (n = { ...n, ...e }, e.grouping && (n.repeatNum = B));
  const a = C(pe, n);
  return ye(a, t, n), z && clearTimeout(z), n.duration > 0 && (z = setTimeout(() => {
    B = 0, I(null, _);
  }, n.duration + 50)), {
    close: () => {
      a.component.proxy.visible = !1;
    }
  };
}, ye = (e, t, n) => {
  n.grouping ? I(e, _) : (I(e, t), _.appendChild(t));
}, ge = (e, t) => {
  let n = {};
  return typeof e == "string" ? (n.message = e, n.type = t) : n = { ...e, type: t }, n;
};
me.forEach((e) => {
  T[e] = (t) => T(ge(t, e));
});
const _e = [N, F, V, x], be = (e) => {
  _e.map((t) => {
    e.use(t);
  });
}, Ce = {
  install: be
};
export {
  T as AMessageFn,
  Ce as default
};
