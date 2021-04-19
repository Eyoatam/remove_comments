export function removeComments(str: string): string {
	const commentRegexp = /\/\*[\s\S]*?\*\/|\/\/.*\s/g;
	return str.replace(commentRegexp, "").trim();
}
