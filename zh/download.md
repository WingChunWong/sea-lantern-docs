<script setup>
import { VERSION, RELEASE_BASE } from '../.vitepress/version'
</script>

# 下载安装

## 最新版本

当前最新版本：**v{{ VERSION }}**

## Windows

| 格式 | 说明 |
|------|------|
| [EXE 安装包]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64-setup.exe) | 推荐，双击安装 |
| [MSI 安装包]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64_zh-CN.msi) | Windows Installer 格式 |

## macOS

| 格式 | 说明 |
|------|------|
| [DMG (Apple Silicon)]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_aarch64.dmg) | M1 / M2 / M3 / M4 |
| [DMG (Intel)]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64.dmg) | x64 架构 |

## Linux

| 格式 | 说明 |
|------|------|
| [DEB]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_amd64.deb) | Debian / Ubuntu |
| [RPM]({{ RELEASE_BASE }}/Sea.Lantern-{{ VERSION }}-1.x86_64.rpm) | Fedora / RHEL |
| [AppImage]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_amd64.AppImage) | 通用格式 |

Arch Linux 用户可通过 AUR 安装。

## 系统要求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+（用于运行 Minecraft 服务端）
