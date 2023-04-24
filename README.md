This is an app built to showcase the capabilities of [Next.js 13](https://beta.nextjs.org/docs).

Live demo is up at [nextjs13.app](https://www.nextjs13.app)

> **Warning**
> This app is a work in progress. Site may be unstable.

![Home and Feed pages](https://user-images.githubusercontent.com/26501999/223235925-b2b6c599-cc43-436c-9cd1-f05cfcc454f2.jpg)

## Features

- Using new **Next.js 13 Beta**
- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Uses client and server components from **React 18**
- API Routes
- Live social media feed with likes, comments, and profanity filter
- Enhance social media posts using **OpenAI API** with **GPT-3.5-Turbo** model
- OAuth 2.0 Authentication through Google, GitHub, and Discord using **NextAuth.js**
- ORM using **Prisma**
- PostgreSQL Database on **Railway**
- UI Components built using **NextUI** (**TailwindCSS** integration in progress)
- Dark mode using **next-themes**
- Payments using **Stripe**
- Written in **TypeScript**

## Run locally
1. Install dependencies

```bash
npm install
```
2. Copy `.env.example` to `.env.local` and update variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Licensed under the [GNU Affero General Public License v3.0](https://github.com/yaseenmustapha/nextjs13-app/blob/main/LICENSE).
