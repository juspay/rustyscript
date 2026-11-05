import { core } from "ext:core/mod.js";
const crypto = core.loadExtScript("ext:deno_crypto/00_crypto.js");

import { applyToGlobal, getterOnly, nonEnumerable } from 'ext:rustyscript/rustyscript.js';
applyToGlobal({
    CryptoKey: nonEnumerable(crypto.CryptoKey),
    // `crypto.crypto` mints a cppgc object on first access, so defer it (as Deno does);
    // reading it eagerly crashes snapshot creation, where no C++ heap exists yet
    crypto: getterOnly(() => crypto.crypto),
    Crypto: nonEnumerable(crypto.Crypto),
    SubtleCrypto: nonEnumerable(crypto.SubtleCrypto),
});
