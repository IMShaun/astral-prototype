/* Deck helpers: on-screen zoom, and screenshot crops with numbered highlight boxes. */
(function (root) {
  function fit() {
    document.documentElement.style.setProperty("--z", Math.min(1, (innerWidth - 48) / 1920));
  }
  addEventListener("resize", fit);
  fit();

  /* shot({ src, crop:{x,y,w,h} in source px, box:{left,top,width,height} on slide,
            highlights:[{ n, sev, x, y, w, h, at:"right"|"below" } in source px], fit:"width"|"height" })
     Scales the crop to fill the box width (or height) and places highlights over it. */
  function shot(o) {
    const c = o.crop, b = o.box;
    const s = o.fit === "height" ? b.height / c.h : b.width / c.w;
    const height = o.fit === "height" ? b.height : Math.round(c.h * s);
    const width = o.fit === "height" ? Math.round(c.w * s) : b.width;
    const img = `<img src="${o.src}" style="left:${-c.x * s}px;top:${-c.y * s}px;width:${(o.srcW || 1600) * s}px">`;
    const hl = (o.highlights || []).map(h => `<div class="hl${h.at ? " at-" + h.at : ""}" style="--c:var(--sev-${h.sev});left:${(h.x - c.x) * s}px;top:${(h.y - c.y) * s}px;width:${h.w * s}px;height:${h.h * s}px">${badge(h.sev, h.n)}</div>`).join("");
    return `<div class="shot" style="left:${b.left}px;top:${b.top}px;width:${width}px;height:${height}px"><div class="clip">${img}</div>${hl}</div>`;
  }

  const badge = (sev, n, size = "") => `<span class="sev ${sev} ${size}"><i>${n == null ? "" : n}</i></span>`;

  root.Deck = { shot, badge, fit };
})(window);
