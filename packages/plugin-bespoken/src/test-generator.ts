function renderTests(root: Record<string, any>): Array<string> {
  const result: Array<any> = []

  function iterate(object: Record<string, any>, path: Array<any>)  {
    if (object.children) {
      return object.children.forEach((child: Record<string, any>) => {
        iterate(child, path.concat(child.text))
      })
    }

    result.push(path)
  }

  iterate(root, [root.text])

  return result
}

export default function generate(projectExport: string): string {
  const project = JSON.parse(projectExport)

  // Add test configuration.
  let tests = '---\nconfiguration:\nlocales: en-US\n\n---'

  // For each script in the project...
  for (const script of project.scripts) {
    tests += '\n- test: ' + script.title
    console.log(renderTests(script.blocks))
  }

  return tests
}
