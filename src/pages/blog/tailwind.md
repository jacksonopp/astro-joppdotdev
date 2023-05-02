---
title: Tailwind is verbose, but it's also scalable
summary: How does incorporating humor in UX design enhance user engagement?
date:
  published: 05/02/2023
  updated:
image:
  path: portfolio/images/humor_g0ptb9
  alt: A statue with an ice cream cone stuck to its face
  credit: Photo by <a href="https://unsplash.com/@theblowup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">the blowup</a> on <a href="https://unsplash.com/photos/swDEADSet6Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  origin: https://unsplash.com/photos/swDEADSet6Y
layout: ../../layouts/BlogPost.astro
---

## Tailwind is verbose, but it's also scalable

When it comes to writing scalable UIs, choosing the right CSS framework can make all the difference. Enter Tailwindcss: a utility-first framework that aims to speed up development by providing a set of pre-defined classes. Although it may seem tedious to type out all those class names, Tailwind's approach to _functional CSS_ offers several advantages over other paradigms like BEM CSS. By focusing on utility classes rather than semantic class names, developers can build out UIs with ease while maintaining consistency and scalability. In this blog post, we'll dive deeper into why Tailwindcss is a great choice for building scalable UIs and how it's functional CSS approach differs from other paradigms.

### Functional CSS vs BEM

One key difference between functional CSS and BEM CSS is the level of abstraction. BEM CSS uses verbose, descriptive class names to create reusable and modular components. This can result in longer class names, which can be harder to read and write. In contrast, functional CSS uses more concise class names based on the properties they set, which makes it easier to remember and write. Additionally, because functional CSS class names are tied to specific properties, it makes it easier to make changes to individual properties without affecting other parts of the UI.

One drawback of BEM is that the class names tend to be more verbose and not as reusable. Since each block and element gets its own unique class name, there can be a lot of repetition and redundancy in your stylesheets. This can lead to larger file sizes and a more cluttered stylesheet. Additionally, since the class names are often not reused across different blocks, the potential for creating truly modular and reusable components is limited. In contrast, functional CSS like Tailwind emphasizes reusable utility classes, which can result in more efficient and maintainable code. One additional benefit of this is when it comes time to compile your stylesheet, only the utility classes you choose get put into your application's stylesheet, resulting in significantly smaller files.

### Why does verbosity scale?

The main idea is that each class name represents a single, atomic style rule. This means that when you're building a component, you can mix and match different classes to achieve the exact styling you need, without having to write custom CSS for every variation. Plus, because Tailwind's class names are so explicit, it's much easier to read and understand the styles being applied.

Another big benefit of Tailwind is that it provides a set of pre-defined utility classes that cover a huge range of styles, from margins and padding to typography and colors. This means that you don't have to reinvent the wheel every time you want to apply a basic style, like adding some top margin to a button. Instead, you can use one of Tailwind's pre-made classes, and move on to more important things.

### But I don't wan't to rewrite the class names over and over!

If you were using traditional css, you might not rewrite the class names over and over, but within the css file themselves, you _would_ be rewriting the styles. Separation of concerns is great and all, but having the rewriting be alongside the actual markup actually results in fewer lines of css being generated, which can sometimes save a significant amount of bandwidth. As web developers, we frequently live with very fast internet speeds, but many of our users may live in areas with less coverage, or areas where high-speed internet isn't as readily available.

Additionally when it comes to reusing styles, we're often using modern frameworks that use components. Using a framework's component system is the preferred way to reuse styles. Components already encapsulate functionality, so it makes sense to include styles as well. By doing this, you keep everything related to a component together and minimize the need for duplicative code. Additionally, many frameworks offer ways to extend and customize components, making it easy to create variations that use the same underlying styles. This approach can lead to more modular and maintainable code, as well as more efficient development.

## In conclusion

Of course, with all this typing, it's important to have good tooling to help you out. Tailwind's IntelliSense support for editors like VS Code makes it easy to quickly find the class you need, without having to remember the exact name. So while it might feel tedious at first, once you get used to it, Tailwind's approach to styling can be a huge productivity boost. You'll spend less time writing custom CSS, and more time building out your application's functionality.

Don't let the initial typing required by Tailwind CSS discourage you from using it. By practicing functional css, providing explicit class names and a comprehensive set of pre-made styles, Tailwind makes building scalable user interfaces a breeze.
