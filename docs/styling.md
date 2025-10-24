# Styling

This document captures the styling decisions in the Paper Plane frontend project to ensure consistency throughout the application.

## General Styling

- Tailwind CSS is used as the primary styling framework.
- The global CSS imports Tailwind CSS via `@import "tailwindcss";` in `frontend/src/index.css`.
- No additional CSS files or preprocessors are used.

## Layout and Spacing

- Padding of `p-4` (1rem) is used for consistent spacing.
- Horizontal spacing between elements is managed with `space-x-4`.

## Colors

- Background color is `bg-gray-200`.
- Text colors:
  - Uses default text color with `font-bold` and `text-lg` for emphasis.
  - Uses `text-gray-600` for a muted appearance.

## Typography

- Title uses `font-bold` and `text-lg` for prominence.
- Text uses `text-sm` for smaller font size.

## Consistency Notes

- Both header and footer use the same background color `bg-gray-200` and padding `p-4` for visual consistency.
- Text colors and font sizes are chosen to create a clear hierarchy and readability.
- Tailwind utility classes are used consistently without custom CSS overrides.

---

This document should be updated whenever new styling decisions are made or existing ones are modified to maintain consistency across the frontend.
