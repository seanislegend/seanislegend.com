# seanislegend.com

This is the source code for my portfolio website for my photography. It is built and designed to my style and how I want to present my work, but it can be easily modified to support more layout styles and information.

The website features:

-   Photo collections
-   Photo carousels
-   Editorial pages
-   Dark mode
-   More

The website is built with [Next.js](https://nextjs.org/) and uses the new app directory. Per the [roadmap](https://beta.nextjs.org/docs/app-directory-roadmap) for the app directory there are a few things that are not working as expected and I have to use a workaround for.

[Tailwind](https://tailwindcss.com/) is used for styling, with [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) for better typography defaults.

[Framer Motion](https://www.framer.com/motion/) is used for animations.

[Contentful](https://www.contentful.com/) is used for content management. The content is fetched at build time and is statically generated.

[Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) is used for generating Open Graph images for collections.

Analytics and tracking is done with [Splitbee](https://splitbee.io/). NB: I'm currently testing [Vercel Analytics](https://vercel.com/blog/vercel-acquires-splitbee).

## Next

Currently used features from the current version of Next and what's on the [roadmap](https://beta.nextjs.org/docs/app-directory-roadmap):

-   [x] [App directory](https://beta.nextjs.org/docs/upgrade-guide)
-   [x] [Image](https://beta.nextjs.org/docs/api-reference/components/image)
-   [x] [Improved SEO](https://beta.nextjs.org/docs/api-reference/metadata)
-   [x] [OG image generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
-   [x] [Turbopack](https://beta.nextjs.org/docs/configuring/turbopack)
-   [ ] Deferred async fetch in client components
-   [ ] Next Font (not currently supported by Turbopack)
-   [ ] Preview mode
-   [ ] Router shallow updates
-   [ ] Shared components
