<pre class="language-css"><code>/* selector, punctuation, property, url, function, string */
body &#123;
  background: url('foo bar.png');
  color: #EEE;
  height: calc(100vw - 10px);
  content: 'foo';
&#125;

/* atrule, important */
@media screen and (min-width: 100px) &#123;
  p &#123;
    background: url(bar.png);
    color: rgb(12, 12, 12) !important;
  &#125;
&#125;

/* For the fun of Previewers */
.example-gradient &#123;
  background: -webkit-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
  background:    -moz-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */
  background:     -ms-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
  background:      -o-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */
  background:         linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
&#125;

.example-angle &#123;
  transform: rotate(10deg);
&#125;

.example-color &#123;
  color: rgba(255, 0, 0, 0.2);
  background: purple;
  border: 1px solid hsl(100, 70%, 40%);
&#125;

.example-easing &#123;
  transition-timing-function: linear;
&#125;

.example-time &#123;
  transition-duration: 3s;
&#125;</code></pre>
