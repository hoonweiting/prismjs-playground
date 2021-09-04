# prismjs-playground

A sandbox for me to develop and test new themes for [prism.js](https://github.com/PrismJS/prism)!

I'm using the [Sergey static site generator](https://sergey.cool/) to help me generate the HTML output from Markdown files, so I can focus on writing the CSS instead of HTML. And also so I can stop piggybacking on [my personal website's development repository](https://github.com/hoonweiting/personal-11ty-site) where I am using a static site generator (Eleventy!) to similarly generate HTML files from Markdown files.

I doubt I will be storing the actual themes here, but you can keep an eye on [my fork of prism-themes](https://github.com/hoonweiting/prism-themes) to see what I've been up to!

## How to use

1.  When first setting up, run `npm install --dev` to install the devDependencies
2.  Modify the files in `/src` as you see fit. That could be adding more code in `_imports/main.md` to test for, removing some plugins from `index.html`, or modifying `prism-test.css`.
3.  When satisfied, run `npm run build` to generate the built site
    -   This will also run stylelint to ensure that your CSS file conforms to the code style guidelines of prism.js (but you'll have to fix any issues yourself)
    -   While I have set up the script `npm run watch` which starts a development server at http://localhost:8080, I do not recommend using that as [there is a report on `sergey --watch` compiling continuously instead of just on save](https://github.com/trys/sergey/issues/61). Not ideal, but hopefully it gets fixed in a future update of Sergey so we can actually use it!
4.  Go to `D:/path/to/your/repository/build/index.html` on your browser to test things out! Again, not ideal...

### The easy/lazy way

Since I deployed this on GitHub Pages, you can just go to [hoonweiting.github.io/prismjs-playground](https://hoonweiting.github.io/prismjs-playground), open your developer tools, and modify the source code there.

Alternatively, you can download the files from the [gh-pages branch of this repository](https://github.com/hoonweiting/prismjs-playground/tree/gh-pages) and modify them locally (though you might want to prettify the HTML files first!).

Writing new code snippets in `index.html` to test would be a little more difficult though, and that was why I used Sergey in the first place. But maybe those few seconds of writing the HTML `<pre class="language-xxxx">` and `<code class="language-xxxx">` tags myself would have been less time-consuming than wrestling with this whole set-up for a day... What have I done...

## Deploying to GitHub Pages (mostly notes for myself)

This was a huge pain. I refuse to publish the site from the `/docs` folder because it's not a semantic name (set custom folder as publishing source when??), so that leaves me with no choice other than using the `gh-pages` branch. Not sure if this was worth the headache, but I guess I learned a lot for that trouble.

### First time setup

Run `git worktree list` in the project's root directory first. If there's only one item listed, then follow these steps. Else, go to the next subsection.

1.  Run `npm run build` to build the output in `/build`
2.  Enter `git worktree add deploy -b gh-pages` in the command line, which:
    1.  Creates a new worktree called `gh-pages`,
    2.  Creates a folder called `/deploy`, with most of the files from the root directory, and finally
    3.  Switches you to a new branch called `gh-pages` (only in the `/deploy` folder, not the root folder!)
3.  Run `npm run deploy` to:
    1.  Delete all the files in `/deploy` except for `.git`, and
    2.  Copy the generated files from `/build` to `/deploy`, minifying the HTML files in the process
4.  Enter `cd deploy` in the command line
    -   You can enter `git branch` here to confirm that you're on the `gh-pages` branch
5.  Enter `git add --all`, followed by `git commit -m "Your message here"`
    -   I used `git commit -m "Build output as of $(git log '--format=format:%H' main -1)"` on the first deployment to get the commit hash!
6.  Enter `git push origin gh-pages`

You might need to run `npm install gulp-cli --global` if `npm run deploy` doesn't work. The official quick start guide says gulp-cli should be installed globally, and only upon further googling did I learn that it was so we can run `gulp` commands from other directories (as installing it globally will put it on your PATH). I'm hoping including `npx` in front of `gulp deploy` in the `deploy` script helps to avoid this issue.

### Subsequent deployments

1.  Run `npm run build` (this is to ensure that you check the output first, but you can always make this a pre-deploy hook after the first time setup)
2.  Run `npm run deploy`
3.  Enter `cd deploy` in the command line
    -   Again, you can enter `git branch` here to confirm that you're on the `gh-pages` branch
4.  Enter `git add --all`, followed by `git commit -m "Your message here"`
5.  Enter `git push origin gh-pages`

### Why is there `/build` and `/deploy`?

Sergey deletes the contents of the output folder before generating the static files. This worktree method requires the `.git` file in the folder to be deployed, and I can't figure out how to get Sergey to not remove `.git` when it does its thing.

## References

-   [A comment on `cobyism / gh-pages-deploy.md`](https://gist.github.com/cobyism/4730490#gistcomment-2337463)
-   [Another comment on `cobyism / gh-pages-deploy.md`](https://gist.github.com/cobyism/4730490#gistcomment-2375522)
-   [Git Tutorial => Moving a worktree](https://riptutorial.com/git/example/27069/moving-a-worktree)
-   [Prism](https://prismjs.com/)
-   [Quick Start | gulp.js](https://gulpjs.com/docs/en/getting-started/quick-start)
-   [Sergey | the little static site generator](https://sergey.cool/)
