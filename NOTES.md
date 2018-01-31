# NOTES

An account of everything I learned about Babel.

## A little background on ECMAScript and JavaScript engines

JavaScript is one of the core technologies of the World Wide Web. All of the modern browsers support it through JavaScript engines (Chromes runs V8, Firefox runs SpiderMonkey, Edge runs Chakra). JavaScript engines take JavaScript code and convert it to fast, optimized code that can be interpreted by the browser.

These engines have different implementation of JavaScript, but they all base it on the ECMAScript Specification (ECMA-262) which is standardized by Ecma International, a global standards organization.

Each engine's goal is to generate the most optimized code in the shortest possible time. They constantly evolve.

But so does the ES Specification. One of the recent versions is ES6 a.k.a. ES2015 which significantly added new syntax for writing complex applications.

### How are new features added to ECMAScript Specification?

The ECMA Technical Committee 39 (TC39) is responsible for evolving ECMAScript and authoring the specifications. It operates by consensus. Proposing changes to the language undergoes a maturity process. Evolving an idea to an approved feature is defined by guidelines. Here are the 5 maturity stages:

<table>
  <tbody>
    <tr>
      <th colspan="2">Stage</th>
      <th>Description</th>
      <th>Entrance Criteria</th>
      <th>What's next?</th>
    </tr>
    <tr>
      <td style="vertical-align:top;">0</td>
      <td style="vertical-align:top;">Strawman</td>
      <td style="vertical-align:top;">Free-form proposal made by TC39 member<br>or registered TC39 contributor</td>
      <td style="vertical-align:top;"></td>
      <td style="vertical-align:top;">The proposal will be added to the page with stage 0 proposals.</td>
    </tr>
    <tr>
      <td style="vertical-align:top;">1</td>
      <td style="vertical-align:top;">Proposal</td>
      <td style="vertical-align:top;">Formal proposal with case for addition, shape of solution, and potential changes</td>
      <td style="vertical-align:top;">
        <ul>
          <li>A champion who will advance the proposal (must be a TC39 member)</li>
          <li>The problem solved by the proposal must be described in prose</li>
          <li>Illustrative usage examples</li>
          <li>High-level API</li>
          <li>Discussion of key algorithms, abstractions, and semantics</li>
          <li>Identify potential concerns and implementation challenges</li>
        </ul>
      </td style="vertical-align:top;">
      <td style="vertical-align:top;">Committee expects to devote time to examining problem space, solutions and cross-cutting concerns.</td>
    </tr>
    <tr>
      <td style="vertical-align:top;">2</td>
      <td style="vertical-align:top;">Draft</td>
      <td style="vertical-align:top;">Precise description of syntax and semantics using formal spec language.</td>
      <td style="vertical-align:top;">
        <ul>
          <li>Initial specification text</li>
        </ul>
      </td>
      <td style="vertical-align:top;">Comittee expects the feature to be developed and eventually included in the standard.</td>
    </tr>
    <tr>
      <td style="vertical-align:top;">3</td>
      <td style="vertical-align:top;">Candidate</td>
      <td style="vertical-align:top;">Further refinement will require feedback from implementations and users.</td>
      <td style="vertical-align:top;">
        <ul>
          <li>Complete specification text</li>
          <li>Designated reviewers have signed off on the current specification text</li>
          <li>ECMAScript editor have signed off on the current specification text</li>
        </ul>
      </td>
      <td style="vertical-align:top;">No further work is possible without implementation, significant usage, and external feedback</td>
    </tr>
    <tr>
      <td style="vertical-align:top;">4</td>
      <td style="vertical-align:top;">Finished</td>
      <td style="vertical-align:top;">Addition is ready for inclusion in the formal ECMAScript standard.</td>
      <td style="vertical-align:top;">
        <ul>
          <li>Acceptance tests have been written</li>
          <li>Two implementations should pass acceptance tests</li>
          <li>Significant in-the-field experience</li>
          <li>Pull request with the integrated specification text has been sent to <a href="https://github.com/tc39/ecma262">tc39/ecma262</a></li>
          <li>ECMAScript editor has signed off on the pull request</li>
        </ul>
      </td>
      <td style="vertical-align:top;">Addition will be added in the soonest practical version of the standard.</td>
    </tr>
  </tbody>
</table>

Source: [The TC39 Process](https://tc39.github.io/process-document/).

## What is Babel for, then?

JavaScript engines have differing pace in terms of compliance with specification changes as there are many factors to be considered, including optimization.  The [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/) shows what features are currently supported in major browsers.

As a result, we can't always use cutting-edge JavaScript in writing our applications.

This is where Babel comes in. It allows developers to write next generation JavaScript which will work on all browsers.

It achieves this by transpiling ES6 code to ES5 which has more consistent support across browsers.

## How does Babel work?

Babel is a compiler for writing next-gen JavaScript.

Babel is also a community.

## Compiler vs Transpiler

Compilers = one language -> another language

Transpiler = source code -> source code (another language or different version of same language, same level)

### An XML-like expression in JSX...
```html
<div id="one">
  Hello
</div>
```

### ...compiled to a function call
```javascript
React.createElement(
  "div",
  { id: "one" },
  "Hello"
);
```

Try it out at [Babel REPL](https://babeljs.io/repl).

## So what's Babel?

Essentially a tool to help manipulate an AST.

Babel is to JavaScript :: jQuery is to HTML.

Babel manipulates the AST :: jQuery manipulates the DOM.

## So what's AST?

**AST** is the Abstract Syntax Tree. Widely used in compilers, it is the result of it represents the *logical structure* of the program through a tree.

It serves as the representation of a program throughout the several stages of compilation.

An *AST* is already stripped with punctuation, delimiter, braces, semicolons that is found. It may contain extra info like line number and position of elements.

Design of an *AST* depends on the design of the compiler.

## 3 stages of compilation

1. **Parsing**
    - Code to AST
    - `babylon`
2. **Transforming**
    - AST to AST
    - plugins and presets like `babel-preset-env`
    - see more at [Babel Transform Plugins](https://babeljs.io/docs/plugins/#transform-plugins)
3. **Generation**
    - AST to Code
    - `babel-generator`, `prettier`

Try it out at [AST Explorer](https://astexplorer.net/).

## Babel as a community

Babel bridges the gap between developers and TC39 (Ecma International, Technical Committee 39 - ECMAScript). It glues what the developers want and what TC39 members want.

**Before**, TC39 comes up with proposals, implements them in browsers, spending a lot of resources only to receive bad feedback from developers.

**Now**, developers get to try the proposals and gives feedback on what works and what doesn't. TC39 hears the community out.


## Useful Links

- Henry Zhu. _So how does Babel even work?_ React Rally 2017. 
  - [GitHub](https://github.com/hzoo/so-how-does-babel-even-work)
  - [YouTube](https://www.youtube.com/watch?v=fntd0sPMOtQ)
- [The TC39 Process](https://tc39.github.io/process-document/)
- [TC39 Meetings](http://www.ecma-international.org/memento/TC39-M.htm)
- [AST Explorer](https://astexplorer.net/)


## Shout-outs

- [Henry Zhu](https://github.com/hzoo)
- [Felix Kling](https://github.com/fkling)