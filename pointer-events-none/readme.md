# disabling hover effects as the user scrolls

It is just make the mouse pass through the element that has the pointer-events: none property set. 

## Usage

Add the ```.disable-hover``` class to the body when the user begins to scroll(see js file)

```css
.disable-hover, .disable-hover * {
  pointer-events: none !important;
}
```