import { removeComments } from "https://deno.land/x/remove_comments@1.0.0/mod.ts";
const commentedCode = `
/*
 * some block comment
 */
function greet(name: string) {
  console.log("Hello " + name);
}
// single line comment
greet("John");
`;
console.log(removeComments(commentedCode));
