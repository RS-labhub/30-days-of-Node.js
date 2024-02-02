// Problem 2: File Writer
// Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. The function should write the content to the specified file using the fs module.

const fs = require('fs')
const path = require('path')

function writeToFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content)
        console.log(`Data written to ${path.basename(filePath)}`)
    } catch (err) {
        console.log(`Error writing to file: ${err.message}`)
    }
}

writeToFile('Day 2/test-files/output1.txt', 'Rohan Sharma');
// Expected Output: Data written to output1.txt

writeToFile('Day 2/test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');