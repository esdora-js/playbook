---
title: shell和开发工具链工具
---

## 安装oh-my-zsh

> 默认情况下Ubuntu和macOS是默认安装zsh的，如果没有安装需要安装一下。

参考：[how-to-install-zsh-on-many-platforms](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)

选择对应的操作系统进行安装即可

## 主题

主题方面我个人更倾向于[Starship](https://starship.rs/zh-CN/guide/)，安装并在终端启用 [Nerd Font](https://www.nerdfonts.com/) 字体（如 [Fira Code Nerd Font](https://www.nerdfonts.com/font-downloads) ）

然后参考文档安装

```zsh
## Linux
curl -sS https://starship.rs/install.sh | sh

## macos
# curl -sS https://starship.rs/install.sh | sh
```

安装完毕后在`~/.zshrc`配置中添加启动配置即可

```zsh
eval "$(starship init zsh)"
```

如果你觉得默认配置不是很漂亮，可以参考社区配置（https://starship.rs/zh-CN/presets/）或者参考官方文档进行自定义进行修改

## 插件

默认情况下oh-my-zsh已经集成了`git z extract web-search`这些插件，因此你可以直接启用这些插件（同时也建议启用这些插件）
所有插件可以在`~/.oh-my-zsh/plugins`目录查看

但为了更好的体验建议安装`zsh-autosuggestions`和`zsh-syntax-highlighting`插件

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

然后配置文件中启用这些插件即可

```zsh
plugins=(git zsh-autosuggestions zsh-syntax-highlighting z extract web-search)
```

## atuin

这个插件用于扩展搜索，参考文档：https://docs.atuin.sh/guide/installation/

```bash
# 参考命令
curl --proto '=https' --tlsv1.2 -LsSf https://setup.atuin.sh | sh
```

最后在`~/.zshrc`配置中添加启动配置即可

```bash
# 上面的安装脚本会把atuin安装到 ~/.atuin/bin 目录，但同样会在配置文件中添加一行 . "$HOME/.atuin/bin/env" 来增加环境变量
eval "$(atuin init zsh)"
```

## mise

这款工具主要用于管理开发工具的版本（你可以理解为nvm），但(mise)[https://mise.jdx.dev]不仅能管理node，还可以其他开发语言例如：`rust`、`go`等。

zsh的安装并添加环境变量的命令如下：

```zsh
curl https://mise.run/zsh | sh
```

运行完毕后会在`~/.zshrc`文件中添加如下配置

```zsh
eval "$(~/.local/bin/mise activate zsh)"
```

常用命令如下

```zsh
# 安装开发语言
mise install node@lts #安装node工具（lts）版本，也可以指定具体版本号

# 安装全局工具
mise use -g npm:serve # 相当于npm i serve -g
```

另外也可以备份`~/.config/mise/config.toml`文件，然后迁移到新环境时只需要运行`mise install`即可下载所有环境。
