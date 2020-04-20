# webpack: The Core Concepts

This is my repo for [Sean Larkin's course 'Core Concepts' course on Teachable.](https://webpack-academy.teachable.com/courses/104961)

As some students pointed out in the comments section, this course is for a previous version - to be clear, _core concepts_ are _core concepts._ Nevertheless, I cross-referenced this course with [webpack docs (very well written! 🤓)](https://webpack.js.org/) and tried to step through per `commit` with some additional commenting.

So, kindly consider this is as a **supplement** to the course itself in case you care to see a _slightly_ more updated implementation.

Thanks to [Mr. Sean Larkin](@TheLarkInn) for taking the time to create this **free** course.

## Things I Added

1. I used [this](https://www.npmjs.com/package/image-webpack-loader) is an example to 'upgrade' the robustness of our image optimization.

## Things I Omitted

1. I didn't bother with `output` - default was fine.
2. I didn't bother with writing ✍️ a plugin. [This](https://webpack.js.org/contribute/writing-a-plugin/) provides enuff documentation - NS that I would really need to do this, especially being newer to webpack.
