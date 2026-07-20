## DAY 0 - Instlling Next.js APP

## DAY 1 - Learning Basic React
- in jsx, use className, instead of class in html alone
- always return one block, ex <section><div></div></section>, not <section></section><div></div>
- learning hero section structure:
    - main: is a whole page (entire homepage)
    - header: top navigations (menus)
    - section: is the hero area or hero container, container means alignment 
    - inner div: inner block / one row of the section
    - two child div / three child div (depends): two columns or three columns, depends how many columns 
- className sample: className="mx-auto max-w[1400px] px-6 py-6">
    - mx-auto: center horizontally
    - px-6: padding left and right
    - py-6: padding top and bottom
    - max-w[1400px]: maximum width 1400px, this is a screen/desktop dimensions **standard px**
    - means, "make this container centered horizontally, with padding top, right, bottom, left"
- Image package of Next.js helps with:
    - optimization
    - performance
    - responsive loading
    - no need for "public/image.jpg" -> go to "/image.jpg", because anything with public accessable of the root
- **PERFECT STRUCTURE / PROFESSIONAL STRUCTURE**
    - header > hero section > left side column & right side column
    - flex & grid: layout system best fits
    - relative & absolute: help with layerd designs
    - reusable / global sections: think of it and do it in one file