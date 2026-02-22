<script setup>
import { VERSION, RELEASE_BASE } from '../.vitepress/version'
</script>

# Download

## Latest Version

Current latest version: **v{{ VERSION }}**

## Windows

| Format | Description |
|--------|-------------|
| [EXE Installer]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64-setup.exe) | Recommended, double-click to install |
| [MSI Installer]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64_zh-CN.msi) | Windows Installer format |

## macOS

| Format | Description |
|--------|-------------|
| [DMG (Apple Silicon)]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_aarch64.dmg) | M1 / M2 / M3 / M4 |
| [DMG (Intel)]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_x64.dmg) | x64 architecture |

## Linux

| Format | Description |
|--------|-------------|
| [DEB]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_amd64.deb) | Debian / Ubuntu |
| [RPM]({{ RELEASE_BASE }}/Sea.Lantern-{{ VERSION }}-1.x86_64.rpm) | Fedora / RHEL |
| [AppImage]({{ RELEASE_BASE }}/Sea.Lantern_{{ VERSION }}_amd64.AppImage) | Universal format |

Arch Linux users can install via AUR.

## System Requirements

- Windows 10+ / macOS 10.15+ / Linux (glibc 2.31+)
- Java 8+ (for running Minecraft server)
