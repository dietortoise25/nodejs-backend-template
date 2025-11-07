- express+cors 配置

  1. 安装 express 相关依赖

  ```bash
  pnpm add express
  pnpm add @types/express -D
  pnpm add cors
  pnpm add @types/cors -D
  ```

  2. 配置 express 服务器

  - 创建 src/app.ts

    - 创建 app 实例 `const app = express()`
    - 配置 express 中间件 `app.use(express.json())`
    - 配置 express 中间件 `app.use(cors())`
    - 导出 app 实例 `export default app`

  - 创建 src/server.ts
    - 导入 app 实例 `import app from "./app"`
    - 启动服务器 `app.listen(3000, () => {
  console.log("Server is running on port 3000")
})`
