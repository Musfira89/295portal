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

CREATE TABLE users (
"id" SERIAL PRIMARY KEY,
"firstName" VARCHAR(300) NOT NULL,
"lastName" VARCHAR(300) NOT NULL,
"email" VARCHAR(300) NOT NULL,
"password" VARCHAR(300) NOT NULL,
"phoneNumber" INTEGER NOT NULL,
"companyName" VARCHAR(300) NOT NULL,
"skypeHandle" VARCHAR(300) NOT NULL,
"address" VARCHAR(300) NOT NULL,
"city" VARCHAR(300) NOT NULL,
"state" VARCHAR(300) NOT NULL,
"zipCode" INTEGER NOT NULL,
"country" VARCHAR NOT NULL,
"verticals" JSON NOT NULL,
"userVerified" BOOLEAN NOT NULL
);

INSERT INTO users (
"firstName",
"lastName",
"email",
"password",
"phoneNumber",
"companyName",
"skypeHandle",
"address",
"city",
"state",
"zipCode",
"country",
"verticals",
"userVerified"
) VALUES
('John', 'Doe', 'john.doe@example.com','hira34', '1234567890', 'Acme Inc.', 'john.skype', '123 Main St', 'New York', 'NY', '12345', 'USA', '["IT", "Finance"]', true),
('Jane', 'Smith', 'jane.smith@example.com','4321', '9876543210', 'TechCorp', 'jane.skype', '456 Elm St', 'San Francisco', 'CA', '54321', 'USA', '["Technology", "Engineering"]', false);

// create Earnings table
CREATE TABLE earnings (
id SERIAL PRIMARY KEY,
userid INTEGER NOT NULL ,
calltoday INTEGER NOT NULL,
billablestoday INTEGER NOT NULL,
earningtoday INTEGER NOT NULL,
totalearning INTEGER NOT NULL,
totalbillables INTEGER NOT NULL,
totalcalls INTEGER NOT NULL
);

CREATE TABLE chartdata (
id SERIAL PRIMARY KEY,
userid INTEGER NOT NULL ,
date VARCHAR(255) NOT NULL,
earnings INTEGER NOT NULL
);

CREATE TABLE availability (
id serial PRIMARY KEY,
userid integer NOT NULL,
payout integer NOT NULL,
online boolean NOT NULL,
campid integer NOT NULL,
);
