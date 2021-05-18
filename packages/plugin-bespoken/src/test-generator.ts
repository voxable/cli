function renderTests(blocks: Record<string, any>): Array<string> {
  const result: Array<any> = []

  function iterate(object: Record<string, any>, path: Record<string, any>) {
    const keys = Object.keys(object)
    console.log('keys', keys)
    console.log('object', object)
    console.log('path', path)

    if (keys.length > 0) {
      return keys.forEach(function (k: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        iterate(object[k], path.concat(k))
      })
    }
    result.push(path)
  }

  iterate(blocks, [])
  return result
}

export default function generate(project: Record<string, any>): string {
  // Add test configuration.
  let tests = '---\nconfiguration:\nlocales: en-US\n\n---'

  // For each script in the project...
  for (const script of project.scripts) {
    tests += '\n- test: ' + script.title
    console.log(renderTests(script))
  }

  return tests
}
