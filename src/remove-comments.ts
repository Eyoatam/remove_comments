export function removeComments(string: string): string {
  const commentRegexp = new RegExp(/\/\*[\s\S]*?\*\/|\/\/.*\s/g);
  return string.replace(commentRegexp, "").trim();
}
