---
title: 包管理器的选择
---

## 为什么使用mise

如果只是前端，那么其实选择工具很多，例如nvm、volta等，但是如果有第二种语言则就需要在添加一个包管理器，例如gvm来管理go。因此我期望一个工具就能实现任意开发语言的版本管理，同时能够自动切换环境。

1. mise可以管理多语言例如go、node、rust等
2. 可以通过备份配置文件来实现迁移，而不需要每次都自己想需要哪些包

## 安装mise

zsh的安装并添加环境变量的命令如下：

对于macos

```zsh
curl https://mise.run/zsh | sh
```

对于Ubuntu

```bash
sudo apt update -y && sudo apt install -y gpg sudo wget curl
sudo install -dm 755 /etc/apt/keyrings
wget -qO - https://mise.jdx.dev/gpg-key.pub | gpg --dearmor | sudo tee /etc/apt/keyrings/mise-archive-keyring.gpg 1> /dev/null
echo "deb [signed-by=/etc/apt/keyrings/mise-archive-keyring.gpg arch=amd64] https://mise.jdx.dev/deb stable main" | sudo tee /etc/apt/sources.list.d/mise.list
sudo apt update
sudo apt install -y mise
```

如果以上命令遇到问题请前往官网查找最新的安装方式：[installing-mise-cli](https://mise.jdx.dev/getting-started.html#installing-mise-cli)

如果你使用了我的配置，在我的配置中会有一段代码来激活mise，否则你需要自行在配置文件中激活mise

```zsh
eval "$(~/.local/bin/mise activate zsh)"
```

## 常用的使用方式

常用命令如下

```zsh
# 安装开发语言
mise install node@lts #安装node工具（lts）版本，也可以指定具体版本号

# 安装全局工具
mise use -g npm:serve # 相当于npm i serve -g
```

另外也可以备份`~/.config/mise/config.toml`文件，然后迁移到新环境时只需要运行`mise install`即可下载所有环境。

## 常见问题

### 安装低版本的工具

在`arm`机器上安装一些低版本的工具例如`node@14`时会遇到错误，此时可以使用`mise-x64`进行安装。例如`mise-x64 install node@14`

```
❯ mise install node@12
Traceback (most recent call last):
  File "/private/var/folders/73/11_254mj653dw784783kj4l40000gn/T/mise/node-v12.22.12/./configure", line 15, in <module>
    from distutils.spawn import find_executable as which
ModuleNotFoundError: No module named 'distutils'
mise ERROR sh failed
Traceback (most recent call last):
  File "/private/var/folders/73/11_254mj653dw784783kj4l40000gn/T/mise/node-v12.22.12/./configure", line 15, in <module>
    from distutils.spawn import find_executable as which
ModuleNotFoundError: No module named 'distutils'
mise ERROR Failed to install core:node@12:
   0: sh exited with non-zero status: exit code 1

Location:
   src/cmd.rs:479

Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.
Run with RUST_BACKTRACE=full to include source snippets.
mise ERROR Run with --verbose or MISE_VERBOSE=1 for more information
mise mise 2025.9.10 by @jdx – install
```
