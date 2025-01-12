# Deno Server (deno 2.1.5)

A Deno project built to replicate the functionality of a Node.js Express server, featuring CRUD APIs and an industry-standard folder structure for streamlined development.

## Installation

### Prerequisites

- Ubuntu system
- Curl installed

### Install Deno

To install Deno on an Ubuntu system, follow these steps:

1. Open your terminal.
2. Run the following command to install Deno using curl:

   ```sh
   curl -fsSL https://deno.land/x/install/install.sh | sh
   ```

3. After the installation is complete, add Deno to your system's PATH. You can do this by adding the following line to your `.bashrc` or `.zshrc` file:

   ```sh
   export DENO_INSTALL="/home/$USER/.deno"
   export PATH="$DENO_INSTALL/bin:$PATH"
   ```

4. Apply the changes by running:

   ```sh
   source ~/.bashrc
   ```

5. Verify the installation by running:

   ```sh
   deno --version
   ```

### Run the Project

To run the project, use the following command:

```sh
deno run --allow-net --import-map=imports_map.json index.ts
```

#### Explanation of Flags

- `--allow-net`: This flag grants the Deno application permission to access the network. Without this flag, the application would not be able to make network requests, which is essential for a web server.

- `--import-map=imports_map.json`: This flag specifies an import map file that helps in aliasing module imports. It allows you to map module specifiers to specific URLs or paths, making it easier to manage dependencies.

For example, your

imports_map.json

might look like this:

```json
{
  "imports": {
    "oak": "https://deno.land/x/oak@v10.5.1/mod.ts"
    // Other dependencies
  }
}
```

This import map allows you to use `import { Application, Router } from "oak";` in your code instead of specifying the full URL every time.

#### Tired of running `deno run --allow-net --import-map=imports_map.json index.ts` after every change? Hold on, I've got some Deno magic for you—just like `nodemon` in Node.js!

Don't worry we will not install any library, just add a flag -`--watch` in command like this and see the magic:

```sh
deno run --allow-net --import-map=imports_map.json --watch index.ts
```
