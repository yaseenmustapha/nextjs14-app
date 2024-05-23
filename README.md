This is an app built to showcase the capabilities of [Next.js 14](https://nextjs.org/docs).

Live demo is up at [nextjs14-showcase.vercel.app](https://nextjs14-showcase.vercel.app)

> **Warning**
> This app is a work in progress. Site may be unstable.
> 
Home Page (Desktop)         |  Social Media Feed (Mobile)
:-------------------------:|:-------------------------:
<img alt="Screenshot 2024-05-22 at 10 10 41 PM" src="https://github.com/yaseenmustapha/nextjs14-app/assets/26501999/5e418f1a-d0a4-4aed-8d00-a873f7d4f73b"> |  ![IMG_0675](https://github.com/yaseenmustapha/nextjs14-app/assets/26501999/8fdb90fb-ceb8-40f5-9730-ac154edbb7d1)

## Features

- Using new **Next.js 14**
- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Uses client and server components from **React 18**
- API Routes
- Live social media feed with likes, comments, and profanity filter
- Enhance social media posts using **OpenAI API** with **GPT-3.5-Turbo** model
- OAuth 2.0 Authentication through Google, GitHub, and Discord using **NextAuth.js**
- ORM using **Prisma**
- PostgreSQL Database on **Supabase**
- UI Components built using **NextUI v2.0**
- Styled using **Tailwind CSS**
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

## Database setup

1. Setup a PostgreSQL database. I recommend using [Supabase](https://supabase.com) as they have a great free tier and is easy to setup.

2. Put your database URL in the `.env.local` file under the `DATABASE_URL` key.

3. Run the Prisma migrate script to initialize the schema:

```bash
npm run migrate:dev
```
## License

Licensed under the [GNU Affero General Public License v3.0](https://github.com/yaseenmustapha/nextjs14-app/blob/main/LICENSE).
