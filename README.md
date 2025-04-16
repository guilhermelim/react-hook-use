# React Hook use() with Error Boundary and Suspense

![FROM THIS](https://github.com/user-attachments/assets/ed8f9816-c225-4cb8-b52a-91307f52a0c7)

This project demonstrates the use of the new React `use()` hook in combination with `Error Boundary` and `Suspense`. It also includes a traditional approach using `useState`, `useEffect`, and `useCallback` for comparison.

## Features

- **React Hook `use()`**: Demonstrates how to use the `use()` hook to handle asynchronous operations directly in React components.
- **Error Boundary**: Implemented to catch errors during component rendering.
- **Suspense**: Used to handle asynchronous data loading with a fallback UI.
- **Traditional Approach**: Includes a page that uses `useState`, `useEffect`, and `useCallback` to fetch data.

## Project Structure

```
src/
  app/
    products-with-use/       # Page using the use() hook
      error.tsx              # Error component for Error Boundary
      loading.tsx            # Loading component for Suspense
      page.tsx               # Main page
    products-with-hooks/     # Page using traditional hooks
      page.tsx               # Main page
    page.tsx                 # Home page with links to both approaches
  services/
    products.ts              # Service to simulate product fetching
```

## How It Works

### Error Boundary

The `Error Boundary` is used to catch errors that occur during rendering, lifecycle methods, or in child components. In Next.js, you can create an `error.tsx` file inside a route folder to handle errors specific to that route.

### Suspense

`Suspense` is used to handle asynchronous data loading. It allows you to show a loading state while the data is being fetched. In this project, the `loading.tsx` file is used to display a loading indicator.

### Current Issue with the `use()` Hook

Currently, the page using the `use()` hook does not properly display the error component (`error.tsx`) when an error occurs. Instead, the error is shown directly in the browser console. This is a known limitation and might be related to the integration of the `use()` hook with `Error Boundary`.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![image](https://github.com/user-attachments/assets/3244daf4-517d-4d26-9636-61b7df54a177)

![image](https://github.com/user-attachments/assets/1ab8c38e-7850-404c-bfca-fa0d819aa569)


## Pages

- **Home Page**: Contains links to both approaches:
  - [http://localhost:3000/products-with-use](http://localhost:3000/products-with-use): Demonstrates the `use()` hook.
  - [http://localhost:3000/products-with-hooks](http://localhost:3000/products-with-hooks): Demonstrates the traditional approach with hooks.

## Known Issues

- The error component (`error.tsx`) is not being displayed correctly on the page using the `use()` hook. This might be a limitation of React or Next.js at the moment.

## Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out the [Next.js GitHub repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

This project was created for learning and demonstration purposes. If you have any questions or suggestions, feel free to reach out!
