# /commit — 產生 Conventional Commits 訊息

根據目前的 git 變更，產生符合 Conventional Commits 規範的 commit message。

## 執行步驟

### Step 1：讀取變更內容
執行以下指令取得完整 diff：
```bash
git diff HEAD
git status
```

### Step 2：分析變更
理解這次變更的：
- **類型**：是新功能、修復、重構、文件，還是設定變更？
- **影響範圍**：哪個模組或功能受影響？（frontend、backend、db、config 等）
- **核心變更**：用一句話描述做了什麼

### Step 3：產生 Commit Message

遵守 Conventional Commits 格式：
```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Type 選項：**
| Type | 用途 |
|------|------|
| `feat` | 新增功能 |
| `fix` | 修復 bug |
| `refactor` | 重構（不影響功能） |
| `docs` | 文件變更 |
| `style` | 格式調整（不影響邏輯） |
| `test` | 新增或修改測試 |
| `chore` | 建置工具、依賴套件更新 |
| `perf` | 效能改善 |

**Scope 範例：** `frontend`、`backend`、`db`、`auth`、`notes`、`config`

**規則：**
- subject 使用英文小寫，不加句點
- body 解釋「為什麼」而非「做了什麼」（用中文或英文皆可）
- breaking change 加上 `BREAKING CHANGE:` footer

### Step 4：輸出結果

輸出完整的 commit message，並詢問是否要直接執行：
```bash
git add -A
git commit -m "<generated message>"
```
