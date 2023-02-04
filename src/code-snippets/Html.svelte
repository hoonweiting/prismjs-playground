<pre class="language-html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;I can haz embedded CSS and JS&lt;/title&gt;
    &lt;style&gt;
      body &#123;
        background: url('foo.png');
        color: #EEE;
        height: calc(100vh - 10px);
      &#125;

      @media screen and (min-width: 100px) &#123;
        p &#123;
          color: rgb(12, 12, 12) !important;
        &#125;
      &#125;
    &lt;/style&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;I can haz embedded CSS and JS&lt;/h1&gt;
    &lt;script&gt;
      if (true) &#123;
        console.log('foo');
      &#125;
    &lt;/script&gt;
    &lt;h2 class="cheezborger" style="color: pink;"&gt;CHEEZBORGER&lt;/h2&gt;
  &lt;/body&gt;
  &lt;!-- KTHXBAI --&gt;
&lt;/html&gt;</code></pre>
