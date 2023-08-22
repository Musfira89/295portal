This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

campaign table :
CREATE TABLE campaign (
id SERIAL PRIMARY KEY,
campaign VARCHAR(255) NOT NULL,
ddv VARCHAR(255) NOT NULL,
payout INTEGER NOT NULL,
net INTEGER NOT NULL,
states VARCHAR NOT NULL,
didnumber INTEGER NOT NULL,
timings VARCHAR(255) NOT NULL,
form VARCHAR(255) NOT NULL
);
