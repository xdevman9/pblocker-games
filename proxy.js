"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

document.addEventListener("libcurl_load", function () {
    libcurl.set_websocket(`wss://wisp.mercurywork.shop/`);
    console.log("libcurl.js ready!");
})

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  var cloak = "https://"+window.location.hostname + __uv$config.prefix + __uv$config.encodeUrl(url);
  let r = await libcurl.fetch(cloak);
  let op = await r.text();
    console.log(op)
  location.href = op
});
