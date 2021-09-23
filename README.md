# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./manage-screenshot-desktop.png)

![](./manage-screenshot-mobile.png)

![](./manage-screenshot-mobile-nav.png)

### Links

- Live Site URL: [Github Pages](https://jdegand.github.io/manage-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- For the shape background, I originally put it as a before on the first section and uses negative absolute positioning to position it in the upper right corner.  This prevented the nav 'x' from being clickable as the background overlaps the 'x'.  Needed to use pointer-events: none on container.
- Better to use before/after on the same level of html.  

### Continued development

- Mobile nav background is off.
- Footer is messy.
- Placeholder text has to be red when error message is displayed.  
- Fonts / Colors

### Useful resources

- [W3 Schools](https://www.w3schools.com/html/html_quotation_elements.asp) - Quotation elements
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Client-side validation
- [YouTube](https://www.youtube.com/watch?v=fzgLWi40-2g) - Testimonial Slider Tutorial
- [CSS Tricks](https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/)
- [Stack Overflow](https://stackoverflow.com/questions/17756649/disable-the-horizontal-scroll)
- [Smashing Magazine](https://www.smashingmagazine.com/2021/04/css-overflow-issues/) - Overflow issues
- [Stack Overflow](https://stackoverflow.com/questions/36531708/why-can-absolutely-positioned-elements-make-areas-scrollable) - Overflow left vs right differences
- [Stack Overflow](https://stackoverflow.com/questions/3680429/click-through-div-to-underlying-elements) - Pointer events
