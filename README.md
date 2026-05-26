# Rapid Reload 🔄

Tired of hunting through menus just to reload your VS Code window? This extension adds a one-click **Reload** button right to your status bar — with a confirmation prompt so you never reload by accident.

---

## Features

- 🖱️ **One-click reload** from the status bar — always visible, always one click away.
- 🛡️ **Accidental reload protection** — a confirmation dialog is shown by default before anything happens. You won't lose work from a stray click.
- 🔕 **Skip the dialog if you're confident** — choose *Don't ask again* and reloads happen immediately.
- ↩️ **Changed your mind?** Restore the confirmation dialog anytime with *Undo*.

---

## How to Use

**Option 1 — Status bar button** *(easiest)*
Click the `$(sync) Reload` button on the bottom-right of your screen.

**Option 2 — Command Palette**
Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac), type `Reload Window`, and hit Enter.

> 🛡️ **A confirmation dialog will appear before the window reloads.** Click **Yes** to proceed or **No** to cancel — no accidental reloads.

---

## Settings

You can tweak the behavior under **Settings → Extensions → Reload**.

| Setting | Default | What it does |
|---|---|---|
| `reload.confirmReload` | `true` | ✅ **Enabled by default.** Shows a confirmation dialog before reloading to prevent accidental reloads. Disable only if you're sure you won't misclick. |

---

## Requirements

VS Code `1.120.0` or newer.

---

## Release Notes

### 0.0.1 — Initial Release
- Reload Window command and status bar button.
- Confirmation dialog before reloading (enabled by default).
- *Don't ask again* toggle with *Undo* support.