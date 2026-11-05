import { core } from "ext:core/mod.js";
const { initializeDebugEnv } = core.loadExtScript("ext:deno_node/internal/util/debuglog.ts");
initializeDebugEnv("rustyscript");