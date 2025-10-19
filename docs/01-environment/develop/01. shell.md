---
title: shell的选择
---

## 安装zsh

默认情况下MacOS是默认安装zsh的，但Ubuntu并没有默认安装，因此需要手动安装

```bash
# 更新软件源
sudo apt update && sudo apt upgrade
# 安装 zsh git curl unzip
sudo apt install zsh git curl unzip file
```

安装完毕后设置为默认终端

```bash
chsh -s /bin/zsh
```

## 插件与主题

先来说说主题，对于主题我个人的需求是花里胡哨但又简洁，最好还是跨平台开箱即用的那种。

对于这个需求其实[starship](https://starship.rs)和[powerlevel10k](https://github.com/romkatv/powerlevel10k)都能满足需求，但后者不能很轻松的自定义显示的样式和风格（因为它只能从预设中选择）。

因此我最终选择了前者，一般情况下可以在[预设](https://starship.rs/zh-CN/presets/)中找到自己喜欢的主题风格，即使没有也可以自行编辑配置文件来控制显示哪些内容以及在哪显示

再来聊聊插件，关于插件我起初是使用[oh my zsh](https://ohmyz.sh)（后续简称omz）进行管理的（即万物omz，包括主题），但后来发现其实使用omz的只有插件系统，并且一些其他工具（例如zoxide、atuin等）都需要在各自系统中手动安装。这样其实会对迁移造成一定的不必要的心智负担，因此我决定换一款专门用于zsh的插件管理器———[zinit](https://github.com/zdharma-continuum/zinit)

使用该管理器后除了[mise](https://mise.jdx.dev)我没有进行管理（选择了手动安装），其余的一切插件均由该插件来安装（依赖除外）。也就是说**只需要安装一些基本依赖**就可以直接把配置文件粘贴到对应的地方即可自动完成所有配置。

> 1. 我认为包管理器不应该属于shell中管理，而是单独由用户来选择安装的
> 2. 基本依赖指`zsh git curl unzip file`,其中前三个是必须的，后两个是因为部分插件依赖所以需要安装

### 额外的一些配置

为了方便日常使用，其实还是需要在配置中定义一些`alias`、`function`等内容的。因此我选择将这部分单独作为一个文件进行编写，并在入口引入。但这些都不是必须的，需要使用者根据自己的喜好及习惯进行自定义的编辑。

## 如何配置

为了减少在用户home目录添加大量文件，我选择将zsh相关配置移动到了`~/.config/zsh`文件夹中，但是这不是必须的。

我的配置参考：[zsh](https://github.com/dev-config/zsh)中的readme进行配置即可

## 预览

![20251018012232QAs5SldE003534](https://file2.antmoe.com/image/2/2025/10/18/68f27c8b67fef.png)

![20251018013046mthEYMGA003535](https://file2.antmoe.com/image/2/2025/10/18/68f27d5293891.png)
