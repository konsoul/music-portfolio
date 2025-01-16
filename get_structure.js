import { readdir, writeFile, stat } from 'fs/promises'
import { join } from 'path'

async function getFileStructure(startPath, indent = '') {
  let structure = ''
  const files = await readdir(startPath)

  for (const file of files) {
    if (file.startsWith('.') || file === 'node_modules') continue

    const filePath = join(startPath, file)
    const stats = await stat(filePath)

    if (stats.isDirectory()) {
      structure += `${indent}${file}/\n`
      structure += await getFileStructure(filePath, indent + '  ')
    } else {
      structure += `${indent}${file}\n`
    }
  }

  return structure
}

try {
  const projectStructure = await getFileStructure('./src')
  await writeFile('project-structure.txt', projectStructure)
  console.log('File structure has been written to project-structure.txt')
} catch (error) {
  console.error('Error:', error)
}
