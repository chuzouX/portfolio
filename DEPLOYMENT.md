# 部署到 EdgeOne Pages

## 🚀 快速部署指南

### 方法一：通过 GitHub 自动部署（推荐）

#### 1. 推送代码到 GitHub
```bash
git add .
git commit -m "Ready for EdgeOne Pages deployment"
git push origin main
```

#### 2. 在 EdgeOne 控制台创建项目
1. 访问 [EdgeOne 控制台](https://console.cloud.tencent.com/edgeone)
2. 进入 **EdgeOne Pages** 服务
3. 点击「新建项目」
4. 选择「连接 Git 仓库」
5. 授权并选择此仓库

#### 3. 配置构建设置

| 配置项 | 值 |
|--------|-----|
| 框架预设 | `Next.js` |
| 构建命令 | `npm run build` |
| 输出目录 | `.next` |
| Node 版本 | `18.x` 或 `20.x` |
| 安装命令 | `npm install` |

#### 4. 环境变量（可选）
如果需要，可以添加以下环境变量：
```
NODE_ENV=production
```

#### 5. 部署
点击「部署」按钮，等待构建完成（首次约 3-5 分钟）

---

### 方法二：使用 Wrangler CLI 手动部署

#### 1. 安装 Wrangler
```bash
npm install -g wrangler
# 或
pnpm add -g wrangler
```

#### 2. 登录
```bash
wrangler login
```

#### 3. 构建项目
```bash
npm run build
```

#### 4. 部署
```bash
wrangler pages deploy .next
```

按照提示选择项目或创建新项目。

---

## 🔧 自定义域名配置

部署成功后，您可以绑定自定义域名：

1. 在 EdgeOne Pages 控制台进入项目设置
2. 点击「自定义域名」
3. 添加域名 `space.chuzoux.top`
4. 按照提示配置 DNS 记录（CNAME）
5. 等待 SSL 证书自动签发

---

## 📝 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面链接正常工作
- [ ] RSS 订阅源加载正常
- [ ] GitHub 项目展示正常
- [ ] 联系方式链接可用
- [ ] 统计脚本（Umami）正常加载
- [ ] 自定义域名已绑定
- [ ] SSL 证书已激活

---

## 🐛 常见问题

### 构建失败
- 检查 Node 版本是否为 18.x 或 20.x
- 确认所有依赖已正确安装
- 查看构建日志中的错误信息

### 部署成功但页面空白
- 检查浏览器控制台是否有错误
- 确认静态资源路径正确
- 检查 CSP（内容安全策略）配置

### RSS 加载失败
- 确认 RSS 源 URL 可访问
- 检查 CORS 配置
- 查看网络请求是否被拦截

---

## 📚 相关文档

- [EdgeOne Pages 官方文档](https://cloud.tencent.com/document/product/1552)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)

---

## 🎉 部署成功

部署完成后，您的网站将在以下地址可访问：
- EdgeOne 默认域名：`https://your-project.edgeone.app`
- 自定义域名：`https://space.chuzoux.top`

记得在 Google Search Console 提交新的站点地图！
