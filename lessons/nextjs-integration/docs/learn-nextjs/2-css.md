# Adding CSS Style

## Global CSS

- app/ui, global.css or in the app root
- imported by layout.tsx
- global.css

```shell
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## Tailwind or CSS Module

- tailwind, add css className as css style

```html
<h1 className="text-blue-500">I'm blue!</h1>
```

-

## clsx utility package to conditional add class name

**_clsx_** add css style conditional

```typescript
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}
```

- Sass which allows you to import .css and .scss files.
- CSS-in-JS libraries such as styled-jsx, styled-components, and emotion.
