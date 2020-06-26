---
path: '/perf'
date: '2020-06-26'
title: 'Performance Optimization Tips & Tricks'
tags: ['nunjucks', '11ty', 'mozilla']
excerpt: 'From a Twitter thread by Ivan Akulov'
link: 'https://twitter.com/iamakulov/status/1275771832386441216'
---

Note: I'm not a very familiar with `webpack`, so I skipped most of the tips concering `webpack` configuration.

## React

### Debugging:

- In Performance, once you've recorded a profile, go to **Timings** too see which components were rendered and when (good for debugging) - unfortunately this will be removed from React [link](https://github.com/facebook/react/pull/18417).

- Component renders: Go to React DevTools settings and check "**Highlight updates...**". Now, whenever you do something, every component that re-renders will flash for a bit.

- Another way to figure out why a component re-renders is to use [`why-did-you-render`](https://github.com/welldone-software/why-did-you-render) .

### Preact

- Replace it with `preact` + `preact-compat` (`react-dom` is the single largest dependency. Just by removing it, you can reduce your load time quite significantly).

## Images

- Compress them using Cloudflare (\$20/month), use **Polish** option.

- Optimize image sizes with `<img srcset>` (don't serve gigantic images for tiny screens).

## Fonts

- Subset fonts for loading the fonts faster with [subfont](https://www.npmjs.com/package/subfont) or [glyphhanger](https://github.com/filamentgroup/glyphhanger).

- If you’re preloading fonts, make sure you use the `crossorigin="anonymous"` attribute (without that attribute, preloaded fonts will be ignored).

- A great way to speed up custom fonts is to use `font-display`([more details](https://font-display.glitch.me/)).

- For older websites add `&display=swap` (or another value) parameter to get `font-display` benefits.

## Other DevTools Magic

### Debugging

- If your app is lagging, that might be due to "repainting too much on the screen": **Dev tools → More tools → Rendering → Paint Flashing**

### Code splitting

- To see how much of your CSS and JS has been used to render a page: **DevTools → Ctrl/⌘+P → Coverage → "Start instrumenting...".**

- [bundle buddy](https://www.npmjs.com/package/bundle-buddy) shows duplicated modules

- also [bundle wizard](https://www.npmjs.com/package/bundle-wizard)

## Libraries

- Moments.js: [day.js](https://github.com/iamkun/dayjs) is similar but smaller.

- `lodash`: babel-plugin-lodash transforms your Lodash imports to make sure you’re only bundling methods that you actually use (= 10-20 functions instead of 300).

- Try aliasing `lodash-es` to `lodash` (to avoid lodash being bundled multiple times).

- Check how much they are affecting your loading speed: **Network → Sort by domain → Right-click each third-party → Select "Block request domain"**. Then run lighthouse audit to compare.

### Defer 3rd parties:

- More details [here](https://3perf.com/blog/notion/#defer-third-parties), or just wrap your third party loading code with `setTimeout`.

## Critical CSS

- more [here](https://github.com/addyosmani/critical) and [here](https://3perf.com/talks/web-perf-101/#critical-css)

## Speed tests

- [Lighthosue from CLI](https://www.npmjs.com/package/lighthouse)

- [webpage test](https://webpagetest.org/)

## Misc Optimizations

- Type `-has-response-header: Content-Encoding` into the filter in the Network panel to see if resources are missing gzip/Brotli compression.

- Speedier navigation: [getquick](https://getquick.link/) (preloads links when the visitor hovers them. this gives a 100-300 ms head start), [instantclick](http://instantclick.io/) (goes further and preloads all links within the viewport).

- To check whether all requests use a single HTTP/2 connection, or something’s misconfigured, enable the **"Connection ID"** column in **DevTools → Network**.

- Use [polyfill.io](https://polyfill.io/v3/) to reduce the amount of polyfills.

- If you have any `scroll` or `touch*` listeners, make sure to pass `passive: true` to addEventListener, more [here](https://developers.google.com/web/updates/2016/06/passive-event-listeners).
