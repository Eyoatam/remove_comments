#!/usr/bin/env -S deno run --allow-read --allow-write

import { parse } from "https://deno.land/std@0.92.0/flags/mod.ts";
import { removeComments } from "./remove-comments.ts";

const parsedArgs = parse(Deno.args);

if (parsedArgs.help) {
  console.log("usage: clear -i [file] -o [file]");
}

if (parsedArgs.version) {
  console.log("v1.0.0");
}

if (!parsedArgs.i && !parsedArgs.o && !parsedArgs.help && !parsedArgs.version) {
  console.log("usage: clear --i [file] -o [file]");
}

if (parsedArgs.i && !parsedArgs.o) {
  const inputFile = await Deno.readFile(parsedArgs.i);
  const decoder = new TextDecoder();
  const decodedString = decoder.decode(inputFile);
  const clearedString = removeComments(decodedString);
  Deno.stdout.write(new TextEncoder().encode(clearedString));
}

if (parsedArgs.o) {
  const inputFile = await Deno.readFile(parsedArgs.i);
  const decoder = new TextDecoder();
  const decodedString = decoder.decode(inputFile);
  const clearedString = removeComments(decodedString);
  const outputFileName = parsedArgs.o;
  Deno.writeFile(outputFileName, new TextEncoder().encode(clearedString));
}
