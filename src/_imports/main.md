## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>I can haz embedded CSS and JS</title>
    <style>
      body {
        background: url('foo.png');
        color: #EEE;
        height: calc(100vw - 10px);
      }

      @media screen and (min-width: 100px) {
        p {
          color: rgb(12, 12, 12) !important;
        }
      }
    </style>
  </head>

  <body>
    <h1>I can haz embedded CSS and JS</h1>
    <script>
      if (true) {
        console.log('foo');
      }
    </script>
    <h2 class="cheezborger" style="color: pink">CHEEZBORGER</h2>
  </body>
  <!-- KTHXBAI -->
</html>
```

## CSS

```css
/* selector, punctuation, property, url, function, string */
body {
  background: url('foo bar.png');
  color: #EEE;
  height: calc(100vw - 10px);
  content: 'foo';
}

/* atrule, important */
@media screen and (min-width: 100px) {
  p {
    background: url(bar.png);
    color: rgb(12, 12, 12) !important;
  }
}
```

Maybe I'll work on the CSS preprocessors someday :")

## JavaScript

```javascript
// keyword, operator, string, punctuation, number
var foo = 'bar', baz = 5;

// boolean, function, template-string
if (true) {
  console.log(`foo ${foo}`);
  doSomething('silly');
}

// regex
let regex = /\/\*[\w\W]*?\*\//g;
```

## JSON

```json
{
  "data": {
    "labels": [
      "foo",
      "bar"
    ],
    "series": [
      [ 0, 1, 2, 3 ],
      [ 0, -4, -8, -12 ]
    ]
  },
  // comments aren't actually a thing
  "error": null,
  "status": "Ok"
}
```

## Markdown

````markdown
---
front: matter
number: 5
boolean: true
---
# This is a heading

This is some text,
1. *italics*,
2. **bold**,
3. ~~strike~~,
4. ***italics and bold***,
5. *~~italics and strike~~*,
6. ~~*strike and italics*~~,
7. **~~bold and strike~~**,
8. ~~**strike and bold**~~,
9. ***~~italics and bold and strike~~***
10. ~~***strike and italics and bold***~~,
11. `inline code`,
12. [a link](https://www.markdownguide.org/cheat-sheet/),
13. ![an image](image.jpg)

+ Here is an unordered list
+ Here is another item on the list
    - Here is an indented item

> This is a quote!
>> This is a nested quote
> Back to the parent quote

Term
: Its definition and a footnote [^1]

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

- [x] Atom One Dark
- [ ] Atom One Light
- [ ] Maybe more to come?

[^1]: The footnote

---

## Let's take a look at a code block {#code-block}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Testing testing 1 2 3</title>
  </head>
  <body>
    <main>
      <h1>Baa baa black sheep</h1>
    </main>
  </body>
</html>
```
````
