- 官网：(https://orm.drizzle.team/docs/get-started)

  - 选择 supabase

- [schema 配置.md](schema配置.md)

- 配置 seed 命令
  `"seed": "drizzle-kit push"`
- 执行 seed 命令
  `pnpm seed`
- 创建 utils/db.helper.ts

  ```ts
  import { drizzle } from "drizzle-orm/postgres-js";
  import postgres from "postgres";

  const client = postgres(process.env.DATABASE_URL!, { prepare: false });
  const db = drizzle({ client });

  export default db;
  ```
