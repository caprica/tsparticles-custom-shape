# tsparticles-custom-shape

This is a minimal React application created with "create-react-app --template typescript".

To run the application:

```shell
npm start
```

## Custom shape

See '/particles/bubble-text-shape.ts'.

## Config

See '/particles/particles-config.ts'.

## The problem

We want a semi-transparent circle, with a solid colour (100% white) text label overlaid on top.

The overlaid text does *not* render as 100% white.

## The other problem

If you set in the particles config to use "opacity: 1", the overlaid text is not visible at all.
