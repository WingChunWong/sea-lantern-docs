<script setup>
import { VERSION, RELEASE_BASE } from '../.vitepress/version'
</script>

# 下載安裝

## 最新版本

當前最新版本：**v{{ VERSION }}**

## Windows

| 格式 | 說明 |
|------|------|
| [EXE 安裝包]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64-setup.exe) | 推薦，雙擊安裝 |
| [MSI 安裝包]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64_zh-CN.msi) | Windows Installer 格式 |

## macOS

| 格式 | 說明 |
|------|------|
| [DMG (Apple Silicon)]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_aarch64.dmg) | M1 / M2 / M3 / M4 |
| [DMG (Intel)]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64.dmg) | x64 架構 |

## Linux

| 格式 | 說明 |
|------|------|
| [DEB]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_amd64.deb) | Debian / Ubuntu |
| [RPM]({{ RELEASE_BASE }}/Sea.Lantern-{{ VERSION }}-1.x86_64.rpm) | Fedora / RHEL |
| [AppImage]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_amd64.AppImage) | 通用格式 |

Arch Linux 使用者可透過 AUR 安裝。

## 系統需求

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+（用於執行 Minecraft 伺服端）
