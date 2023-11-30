# Layout and Paging

Next.js use file-system router, folder to create nested router.

## File-System Router

Routers are based on folder structure

```
acme.com/dashbaord/invoice
acem.com/login
```

- dashboard
- login

both folders are under app folder, and separate each ui with:

1. Layout.tsx
2. Page.tsx

## Create Dashboard Page

- dashboard/page.tsx

```typescript
export default function DashBoardPage() {
    return (
        <p>Dashboard</p>
    )
}
```

- customer and invoice page

visit path:

- /dashboard/invoice
- /dashboard/customer
