[_metadata_:title]: - 'Designing A Dead Simple Blog (Sorta)'
[_metadata_:author]: - 'BeckR'
[_metadata_:date]: - '2022/09/04'
[_metadata_:tags]: - 'init,example,markdown,metadata'

# Designing a Dead Simple Blog (Sorta)

Like many of my other projects this one started out with me being bored one day.
I decided that the next project I needed to design a website to record all of my ~~shenanigans~~
endeavors. Sorta of like a mix between a blog to share whatever I'm interested in at the time, and a
place to show off all of the cool projects I work on. This article will cover my design philosophies and
the process that goes into making something like this.

# The Design and Build Process

Before I get too in depth about the design of this portfolio here is a brief overview of the tech stack
that went into this project

- Svelte/SvelteKit
- TailwindCSS
- Docker
- Nginx

As you can see not a whole lot went into this. This is very intentional. My goal in making this wasn't
to use all the coolest new frameworks and over engineer the hell out of it, but simply to make an easy
to tinker with and functional blog. It greatly infuriates me how now a days nearly every website you go
to is slow, bloated, ad-filled, and flat out dumb. I wanted to avoid that as much as possible. I don't
even use Google Analytics to see if people actually read my articles, at least not yet. The only area
where I think I could do better is getting rid of Tailwind. I barely use it and it is not the most
lightweight CSS "library". I plan to get rid of it in the near future. As for Docker and Nginx they're
pretty self explanatory.

## Making It Look Pretty

Now a days whenever I need to design a website the first thing I always do is design it in Figma. I
can't describe in words how useful Figma is whenever I am designing something. If you are designing a
webpage as you are building it you are doing it entirely wrong. Creating a design in Figma first, and
then actually building it saves **SO MUCH TIME**, and it eliminates a lot of the stress when figuring
out how to implement the thing your making. I don't really have a specific reason as to why I made it
look the way it does, I just think it looks pretty neat. Overall I think I did a pretty good job with
styling, although the way I style articles could use some improvement I think.

![The Figma Design](http://127.0.0.1:5173/resources/DesigningADeadSimpleBlog/FigmaDesign.png)
_Figma prototype of the blog_

## Why I Chose Svelte

The reason I chose Svelte is pretty simple, React is a bloated fat piece of shit, and Svelte is not. Now
after completing this project I can say that I have used both React and Svelte. Svelte Is so... so much
better. As I've said previously my main goal for this project was to create a lightweight and simple
blog. If I were to use React I would've fell short of that goal by a mile. Luckily for me I knew that
from the beginning so I went with Svelte and I am so glad I did. Svelte is so easy to use and so
lightweight. I've preemptively decided that from now on all my future frontend projects will be using
Svelte. I highly encourage you to do the same.

## Implementing Articles

Before I started building this blog I wanted to make sure I didn't over complicate things. Because of
this I don't use any databases, but rather just the file system. Articles are written in Markdown and
stored in folder in the root of the project folder. If I want to upload a new article all I have to do
is type it up and put it in that `articles` folder. One kinda important thing I did was implementing
article metadata. Basically at the beginning of every article there are these lines of invisible
markdown that contain info like the date, the author, tags, etc. I'm pretty proud of myself for figuring
out how to do that. After uploading a new article the next time someone wants to view it, my server
creates a page with the markdown contents of an article parsed into HTML. I use the `svelte-markdown`
package for this. It works pretty well but as I previously mentioned the styling isn't great and certain
markdown elements just don't work.

**(NOTE: While writing this article I found a different Markdown parser and it looks way better)**

> [https://www.npmjs.com/package/markdown-it](https://www.npmjs.com/package/markdown-it)

## Resources Page

I think my favorite part of this project was creating the resources page. It is pretty much an in
browser file explorer. All it does is it looks through the `resources` folder in the root of the project
and displays the contents on the resources page. You can even traverse into nested folders and then back
out. This is great for sharing things I find interesting that don't warrant a full article. It's also a
great place to put files used in the making of articles so they are publicly accessible. Other than
technical details there isn't much else to it.

## Creating a Contact Form

The contact form Is also pretty damn simple. All that happens is that when someone submit their info my
server just appends that data to a `contacts.json` file. That file isn't display anywhere **(yet)**, so
every once in a while I just look through that file to see if anyone wants to talk to me. This is really
the only area where I sorta sacrificed functionality for simplicity, but its not that bad so whatever.
Originally I had the data being sent to an Airtable for me to later view but I had some issues with that
so that's not what I ended up doing. I plan on making some sorta admin page so maybe I can look at
analytics and properly see if anybody contacted me.

# Conclusion

Overall I really enjoyed making this, and I intend on actually using this as a kind of online portfolio.
If there is anything I want you to take away from this its that you don't need to over engineer
something for it to be super functional and cool. Actually usually its the opposite. Also whenever you
are making something put at least a little effort into making not slow and bloated. Computers have
gotten faster, but the programs that a they run have gotten slower. Just because we aren't really
constrained by the speed of processors now doesn't mean you shouldn't make blazingly fast programs.

## Side Note

You may have noticed that there are two crypto wallet addresses to donate to. You absolutely are not
obligated to donate, but it would be nice if this website could at least pay for itself. **Also I want to stress that I HATE Crypto**. It is a decent idea in theory but its utility does not justify the
problems it creates for the environment. The only reason I am not using something like PayPal is that:

1. I dislike Elon Musk
2. It's more convenient for me to use a crypto wallet.
