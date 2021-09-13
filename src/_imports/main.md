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

/* For the fun of Previewers */
.example-gradient {
  background: -webkit-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
  background:    -moz-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */
  background:     -ms-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
  background:      -o-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */
  background:         linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
}

.example-angle {
  transform: rotate(10deg);
}

.example-color {
  color: rgba(255, 0, 0, 0.2);
  background: purple;
  border: 1px solid hsl(100, 70%, 40%);
}

.example-easing {
  transition-timing-function: linear;
}

.example-time {
  transition-duration: 3s;
}
```

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

## Less

TODO

```less
// For the fun of previewers
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
  background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
  background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
  background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
  background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
  background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
}

@angle: 3rad;
.example-angle {
  transform: rotate(.4turn)
}

@nice-blue: #5B83AD;
.example-color {
  color: hsla(102, 53%, 42%, 0.4);
}

@easing: cubic-bezier(0.1, 0.3, 1, .4);
.example-easing {
  transition-timing-function: ease;
}

@time: 1s;
.example-time {
  transition-duration: 2s;
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

## Sass

TODO

```sass
// For the fun of Previewers
$gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)
@mixin example-gradient
  background: -moz-radial-gradient(center, ellipse cover, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%)
  background: radial-gradient(ellipse at center, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%)

$angle: 380grad
@mixin example-angle
  transform: rotate(-120deg)
.example-angle
  transform: rotate(18rad)

$color: blue
@mixin example-color
  color: rgba(147, 32, 34, 0.8)
.example-color
  color: pink

$easing: ease-out
.example-easing
  transition-timing-function: ease-in-out

$time: 3s
@mixin example-time
  transition-duration: 800ms
.example-time
  transition-duration: 0.8s
```

## Scss

TODO

```scss
// For the fun of Previewers
$gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);

$attr: background
.example-gradient {
  #{$attr}-image: repeating-linear-gradient(10deg, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 10px, rgba(255, 0, 0, 0) 20px);
}

$angle: 1.8turn;
.example-angle {
  transform: rotate(-3rad)
}

$color: blue;
.example-color {
  #{$attr}-color: rgba(255, 255, 0, 0.75);
}

$easing: linear;
.example-easing {
  transition-timing-function: cubic-bezier(0.9, 0.1, .2, .4);
}

$time: 1s;
.example-time {
  transition-duration: 10s
}
```

## Stylus

TODO

```stylus
// For the fun of Previewers
gradient = linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)
.example-gradient
  background-image: repeating-radial-gradient(circle, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 10px, rgba(255, 0, 0, 0) 20px)

angle = 357deg
.example-angle
  transform: rotate(100grad)

color = olive
.example-color
  color: #000

easing = ease-in
.example-easing
  transition-timing-function: ease-out

time = 3s
.example-time
  transition-duration: 0.5s
```
