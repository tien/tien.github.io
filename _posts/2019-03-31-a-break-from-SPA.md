---
layout: post
---

This weekend, I decided to take a different approach to how a usual web application is propped up. Normally the general architecture would be as follow:

- On one end, you got a server in the back ditching out data in RESTful format, preferably from some sort of database.
- And at the front, you got this massive Javascript framework whose main job is to query the data from the server, storing it in a centralised state and directing both data flow and user interactions in a timely matter. All without refreshing or redirecting.
- This approach is called Single Page Application architecture.

This, without doubt, has come far since the days where each and every page are static and have to be coded out by hand. The approach revolutionized how we build web applications and thus was praised as the new golden standard for building web applications.

That is until we fast forward to 2019, static sites are making a come back via static site generators. But first, we need to know what exactly is a static site generator.

### What are static site generators?

To put it in a simple term: static site generators are applications that take in your source files (articles, posts, product pages, etc), usually in a markdown format, applying it against a layout and "generate" a complete website, entirely static with each contents having its own HTML file. No databases, no Js SPA, no nuts, no bolts, just your regulars HTML, CSS and JS.

### Why are these "generators" making headlines

Traditionally, the pros and cons of static websites are as follow:

#### Pros

- Very fast as users are basically just reading HTML files (no databases or server-side rendering involve)
- Cheap, you can host static sites for basically free with tools like [GitHub Page](https://pages.github.com/), or with minimal prices on [Amazon S3](https://aws.amazon.com/s3/) file storage.
- Very strong SEO footprint as static sites allows web crawler like Google to freely and easily access its content. These crawlers just have to deal with plain HTML after all.

#### Cons

- You have to manually manage all your HTML files and CSS. And if these files are interconnected or are dependent on each other, it would be a nightmare to manage and update.
- The constant refresh of pages is pretty bad too.

Static site generator keeps all of the pros while eliminating the needs to manually manage all statics assets.

### Back to the subject

So that is exactly what I did for this weekend project, a throwback to the old day: the making of a static website. Which coincidentally is the very page where you are reading this post from (or at [tien.github.io](https://tien.github.io/) if I do decide to share the post elsewhere). This website is powered by Jekyll and is hosted on GitHub as an open-source project.

Keeping in spirit with the theme, the website is designed in a way to capture the feels and aesthetic of the old web as close as possible:

- Simple colour palette with black and white as the only two tones
- Every URL path ending with the .html suffix
- Zero animations
- The huge obnoxious copyright notice at the bottom of the page
- The only thing missing is the occasional random 3D dancing baby or some other craps (but just I couldn't bring my self to do it 😂)

### To sum up

As this is an open-source project, feels free to re-use any of the stylings or scripts that come with the website, giving credit or shoutout to the original page/author would be highly appreciated but is not required. If you have any questions or feedback related to this post or the website, please direct them to my [LinkedIn]({{site.linkedin.url}}) and I would love to have a chat about it. Thanks for reading.
