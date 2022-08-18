# TODO

(obs: all changes have to occur inside the media query)

- Add margin top to the `div.grid-container`

  Reason: Implementing the design.

  Code: `margin-top: 72px`

- Add width min(500px, 100vw) to the images containers.

  Reason: following the design, on mobile viewport, the images occupy full width. Although the images should not be much larger than 375px not only because they will become to streched and lose quality, but because in the tablet viewport the max-width of the container is 500px (this is why the 500px).

  Code: Since both image container have the class `.grid-item` and they are the only ones to have
  this class, `grid-item: {width: min(500px, 100vw)}`;

- Add overflow hidden to `div.grid-container`:

  Reason: when you have a element with size 100vw, especially, on Windows browsers, the element becomes larger than the viewport (it's weird, I think it's is a browser bug, but happens). Because of that we have to use overflow hidden to avoid the browser creating an horizontal scrollbar.

  Code: `.grid-container { overflow: hidden }`

- Change the unit used in the `grid-template-columns` from 1fr to 100%;

  Reason: Most of the time 1fr is identical to 100%, but since we are creating a grid-item larger than its parent 1fr will be equal to 100vw not 100%.

  Code: `.grid-container { grid-template-columns: 100% }`

- And add justify-content center to `div.grid-container`

  Reason: Since the images are bigger than its parents, they should be centered.

  Code: `.grid-container { justify-content: center }`

- Ajust the padding in the `div.text-container`

  Reason: The text container has no padding on mobile and tablet viewport

  Code: `.text-container {padding: 0}`
