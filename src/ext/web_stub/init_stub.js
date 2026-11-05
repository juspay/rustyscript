import { core } from "ext:core/mod.js";
const DOMException = core.loadExtScript("ext:deno_web/01_dom_exception.js");
const timers = core.loadExtScript("ext:deno_web/02_timers.js");
const base64 = core.loadExtScript("ext:deno_web/05_base64.js");

import { applyToGlobal, nonEnumerable, writeable } from 'ext:rustyscript/rustyscript.js';
applyToGlobal({
    DOMException: nonEnumerable(DOMException),

    setImmediate: writeable(timers.setImmediate),
    clearInterval: writeable(timers.clearInterval),
    clearTimeout: writeable(timers.clearTimeout),
    setInterval: writeable(timers.setInterval),
    setTimeout: writeable(timers.setTimeout),
    refTimer: writeable(timers.refTimer),
    unrefTimer: writeable(timers.unrefTimer),

    atob: writeable(base64.atob),
    btoa: writeable(base64.btoa),
});

