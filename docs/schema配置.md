我们是一个博客的后端，最基础的表应该有两个：`用户表`和`文章表`。

- 用户表
  - id: 主键，自增
  - name: 用户名，字符串，必填
  - age: 年龄，整数，必填
  - email: 邮箱，字符串，必填，唯一

```ts
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
```

- 文章表
  - id: 主键，自增
  - title: 标题，字符串，必填
  - content: 内容，字符串，必填
  - userId: 外键，用户表的 id，必填

```ts
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const articlesTable = pgTable("articles", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  userId: integer()
    .references(() => usersTable.id)
    .notNull(),
});
```
