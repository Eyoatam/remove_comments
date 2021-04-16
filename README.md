# remove-comments

> remove comments from `JavaScript` and `TypeScript` files

## Installation

```
deno install -f --allow-read --allow-write -n clearcomments https://deno.land/x/remove_comments@1.0.0/src/cli.ts
```

## Usage

```
clearcomments -i [inputFile] -o [outputFile]
```

```ts
import { removeComments } from "https://deno.land/x/remove_comments@1.0.0/mod.ts";
const commentedCode = `
/*
 * some block comment
 */
function greet(name: string) {
  console.log(`Hello ${name}`);
}
// single line comment
greet("John");
`;
console.log(removeComments(commentedCode));
```

```
deno run https://deno.land/x/remove_comments@1.0.0/example.ts
```

# License

[MIT](https://github.com/Eyoatam/remove_comments/blob/main/LICENSE)
