# Vote your meta!
> Simple Vue.js project for up- and down voting simple pieces of content.

## Getting Started
* Start a web server (e.g. `python -m SimpleHTTPServer`).
* Open `index.html`.
* Enjoy.

NOTE: Ensure you are using a modern browser (see [Troubleshooting](#Troubleshooting) underneath).

## Design
This is my first-ever project using Vue.js. To keep things simple, I decided to use plain HTML / CSS / JS (no pre/postprocessors), and leave out an actual API. Instead, there is a mock API response (in `./api/response.json`). This allows a clear separation of concerns (i.e. data vs presentation).

The Vue.js components are pretty straightforward, and only the top-level app component (in `main.js`) is allowed to update any data. Using [vue-bus](https://www.npmjs.com/package/vue-bus), child components can initiate events to the top-level app, which manipulates the votes. When the app scales, this would make it very easy to adopt proper state management, for example through [vuex](https://vuejs.org/v2/guide/state-management.html).

The design of the app is very simple, a list of meta items, and simple error / loading element fallback. It uses Flexbox, and although browser support is excellent, a simple fallback for older browsers should be implemented in future iterations.

## Improvements
This app is very simple, with plenty of room for improvement:
* Wrap this app into a build process (e.g. using webpack, with Babel as transpiler, plus optimization / minification).
* Add tests for Vue.js components.
* A better UI - currently there is only support for text, links, YouTube videos, and images.

## Troubleshooting
### Error: failed to fetch
Ensure you have started a web server, otherwise the browsers' **fetch** API will fail (it does not work properly with `file://` protocol).

### The app is not working
Ensure you are trying in a modern browser - the code uses ES6 features like `const`, arrow functions, template literals, etc. This app was developed using Chrome 61.

## License
    The MIT License (MIT)

    Copyright (c) 2017 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.