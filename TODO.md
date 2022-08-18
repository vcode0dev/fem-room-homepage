# TODO

- Remove the attribute `grid-column` from the `.grid-container` class:
    
    Reason: The attribute `grid-column` has no effect on the element `.grid-container` since it is not a grid-item.
    
- Remove the fourth `auto` from the attribute `grid-template-colums` of the `div.grid-container`:

    Reason: Since there are only three grid-items children, the fourth `auto` is not necessary.
    
    Code: Maybe it's worth to know that `grid-template-columns: auto auto auto` or `grid-template-columns: repeat(3, auto)` are equivalent.
        
- Add the utility class `.container` to the `div.grid-container`:

    Reason: the class `.container` is necessary since without it the `div.grid-container` gets bigger than the sections before it (`nav.nav-bar` and `section.hero-section`) on large viewports, e.g. 1920px;
    
- Create and add a class `.text-container` to the second grid-item of the `div.grid-container` and add padding and margin inside to position the text. 

    Reason. Just implementing the design.
    
    Code: Something like `.text-container { padding: 61px 48px 0px` } should work.
    

- Add `margin-top` to the text inside `div.text-container`.

    Reason. Just implementing the design.
    
    Code: something like `.text-container .text-md { margin-top: 15px }` should work.
   