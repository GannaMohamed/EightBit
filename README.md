### Responsive Notes
- Responsive Breakpoints:
  1200px | 920px | 768px | 600px
- Use class "noMob" to hide on mobile display "min-width 768px" (Except Contact Page, use the css file as BP is 920px)
- Page Height is 90vh in Web and 100vh in Mobile
- Fullscreen scroll is disabled in mobile (to prevent navigation issues)
- For responsive font-sizes stick to the default ones in fonts.css

### Cube Properties
`<Cube property={value} />`
- Width: "Usually in vw for responsive reasons" (DO NOT Use width css property)
- move: Boolean, Opens the cube (moves all small cubes outwards)
- moveElement: Int from 0-5 (moves a specific cube outwards)
- hoverOneElement: Boolean (moves any small cube ON MOUSE HOVER)

## Cube Classes
- noShadow: removes the blue shadow

### Files Strcuture (from src)
- Assets (images & fonts)
- Components (Sections with numeric order, Folders for Big Comopnents (Cube/Navbar/..), general folder for reusable components)
- Models (Components that render API calls)
- Utils (Libraries, png Assets variables, general css)
- Other files
