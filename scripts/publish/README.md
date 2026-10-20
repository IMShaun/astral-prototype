# Publishing the IMSERV site

These scripts publish the prototype and the Library to <https://imserv-astral-prototype.pages.imserv.ghe.com/>.
Anyone with write access to `imserv/astral-prototype` and the site password can run them.

## Once per computer

1. Get write access to <https://imserv.ghe.com/imserv/astral-prototype> and the site password.
2. Run `save-password.ps1` in its own window and type the password. It is saved, encrypted, for your Windows account only.

   ```powershell
   Start-Process powershell -ArgumentList '-ExecutionPolicy', 'Bypass', '-File', 'scripts\publish\save-password.ps1'
   ```

## Each time you publish

1. Commit your changes.
2. Bring in the latest `main` from `https://imserv.ghe.com/imserv/astral-prototype.git`.
3. Run:

   ```powershell
   powershell -ExecutionPolicy Bypass -File scripts\publish\publish.ps1
   ```

The script stops without publishing if:

- there are uncommitted changes
- someone else has published since you last updated
- the saved password does not open the live pages

Add `-Check` to build and test everything without publishing.

The first run installs `staticrypt` and `sharp` into `%LOCALAPPDATA%\astral-publish-tools`.

## What it does

1. Checks the saved password against the live pages.
2. Builds the single-file prototype page with `bundle-desk.js`.
3. Builds the single-file Library page with `bundle-library.js`. It shrinks the story screenshots and puts them inside the page.
4. Encrypts both pages with the same password, so returning visitors stay signed in.
5. Pushes `main`, then commits and pushes the pages to `gh-pages`.
6. Waits for the site to rebuild, if the `gh` command is signed in to `imserv.ghe.com`.
