/* Problem 4: Resolve Path
Problem Statement: Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path using the path module. The function should print the resolved path to the console. */

const { resolve } = require("path");

function resolvePath(relativePath) {
	// Implementation
	const absPath = resolve(relativePath);
	console.log(absPath);
}

resolvePath("../project/folder/file.txt"); // Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath("nonexistent-folder/file.txt"); // Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt