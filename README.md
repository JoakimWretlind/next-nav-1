## About
This piece is just a draft of how it could be done. There are still things that has to be done that is not working smoothly.

## Problems
Just to test, I put the models-page at the very end of the navbar, outside of the Nav element. It felt weird to put a page there and the url routing didn't really behave as I would like. The upsides were that it was easy to pass props and the animations worked smooth.

## Solution
I put the models-page in the pages folder, where it should be. And to avoid passing props up and down, I went for the context api solution.
Since I am trying things out with this one, I have also added the useMemo hook. Even though this small app probably won't need it.
useReducer might be implemented.

To easily pass information to the animations-folder I'm using useRef.

## Todo
The enter of the models-page animation works fine, but the exit is interrupted by the next page's enter. I have a few ways to try to delay the next page's enter though. I just have to decide how I want it to look and feel, and if I should keep the custom version or go with framer-motion, animejs or such.

## Getting Started
First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

