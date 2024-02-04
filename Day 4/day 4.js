/* Problem 4: Resolve Path
Problem Statement: Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path using the path module. The function should print the resolved path to the console. */

const fs = require("fs");

function writeToFile(filePath, content) {
	fs.writeFile(filePath, content, (err) => {
		if (err) {
			return console.log(`Error writing to file: ${err.message}`);
		}
		return console.log(`Data written to ${filePath}`);
	});
}

writeToFile("Day 4/test-files/sample.txt", "Sample content.");
// Expected Output: Data written to output1.txt

writeToFile(
	"test-files/nonexistent-folder/output.txt",
	"Content in a non-existent folder."
);