---
layout: post
---

This weekend, I have decided to take on a different approach to how web applications are usually pieced together. Normally, the architecture would generally sound like the following:

- On one end, you have a server in the back spitting out data in RESTful format, preferably from some sort of database.
- And at the front, you have some sort of massive Javascript framework whose main job is to query the data from the server, storing it in a centralised state and directing both data flow and user interactions in a timely matter. All without refreshing or redirecting.
- This approach is called Single Page Application architecture.

This, without doubt, has come very far since the days where each web page is static and coded out by hand. The approach revolutionised how we build web applications and thus was praised as the new golden standard.

That is until we fast forward to 2019, static sites are making a come back via static site generators. But first, we need to know what exactly is a static site generator.

### What are static site generators?

To put it in simple terms, static site generators are applications that take in your source files (articles, posts, product pages, etc.), usually in Markdown format, applying it against a layout and "generate" a complete website, entirely static with each content having its own HTML file. No databases, no JS SPA, no nuts, no bolts, just regular HTML, CSS and JS!

### Why are these "generators" making headlines?

Traditionally, the pros and cons of static websites are as follows:

#### Pros

- Very fast as users are basically just reading HTML files (no databases or server-side rendering involved)
- Cheap, you can host static sites basically for free with tools like [GitHub Pages](https://pages.github.com/), or with minimal prices on [Amazon S3](https://aws.amazon.com/s3/) file storage.
- Very strong SEO footprint as static sites allow web crawlers like Google to freely and easily access its contents - these crawlers much prefer dealing with plain HTML.

#### Cons

- You have to manually manage all your HTML and CSS files. If these files are interconnected or dependent on each other, it would be a nightmare to manage and update.
- Constant page refreshing is also nightmare material 😱.

Static site generators keep all of the pros while eliminating the need to manually manage all statics assets.

### Back to the subject

So that is exactly what I did for this weekend's project, a throwback to the old days of making static websites, which coincidentally is the very page where you are reading this post from (or at [tien.github.io](https://tien.github.io/) if I do decide to share the post elsewhere). This website is powered by [Jekyll](https://jekyllrb.com/) and is hosted on [GitHub](https://github.com/tien/tien.github.io) as an open-source project.

Keeping in spirit with the topic of static websites, the website is designed in a way to capture the feeling and aesthetic of the old web as close as possible:

- Simple colour palette with black and white as the only two tones.
- Every URL path ending with the .html suffix.
- Zero animations.
- The huge obnoxious copyright notice at the bottom of the page.
- The only thing missing is the occasional random 3D dancing baby or some other crap (I just couldn't bring myself to do it 😂).

### To sum up

As this is an open-source project, feels free to re-use any of the styling or scripts that come with this website, giving credit or shoutout to the original page/author would be highly appreciated but is not required. If you have any questions or feedback related to this post or website, please direct them to my [LinkedIn]({{site.linkedin.url}}). I would love to have a chat about it. Thanks for reading!
