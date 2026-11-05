import { core } from "ext:core/mod.js";
const url = core.loadExtScript("ext:deno_web/00_url.js");
const urlPattern = core.loadExtScript("ext:deno_web/01_urlpattern.js");

import { applyToGlobal, nonEnumerable } from 'ext:rustyscript/rustyscript.js';
applyToGlobal({
    URL: nonEnumerable(url.URL),
    URLPattern: nonEnumerable(urlPattern.URLPattern),
    URLSearchParams: nonEnumerable(url.URLSearchParams),
});