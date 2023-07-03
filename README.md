## Lazy Loading in React

This repository shows the code used in the “Lazy Loading” lessons of [The Joy of React](https://joyofreact.com/).

The relevant files are:

- The root `page.js`, which shows a conditionally-rendered math equation
- the `latex-editor/page.js`, which shows an immediately-rendered and editable math equation

Note that both of these examples use `React.lazy()` instead of Next's `dynamic()` function because we haven't yet covered `dynamic()`. In a real application, I recommend using `dynamic()` instead.
