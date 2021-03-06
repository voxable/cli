/**
 * Render each path through the script starting at root as
 * an array of plaintext message strings.
 *
 * @param root -
 *   The root message.
 *
 * @return -
 *   An array of arrays of message strings of each linear
 *   path through the script.
 */
function renderTests(root: Record<string, any>): Array<any> {
  const result: Array<any> = []

  function iterate(object: Record<string, any>, path: Array<any>)  {
    if (object.children) {
      return object.children.forEach((child: Record<string, any>) => {
        iterate(child, path.concat(transformMessage(child)))
      })
    }

    result.push(path)
  }

  iterate(root, [transformMessage(root)])

  return result
}

function transformMessage(message: Record<string, any>): Record<string, any> {
  return {
    type: message.type,
    text: message.text.replace(/:/g, '').replace(/"/g, '\\"'),
  }
}

/**
 * Simplify a message to replicate TTS -> STT transformation
 * from Bespoken virtual device (remove most punctuation,
 * make lower-case).
 *
 * @param text -
 *   The text to simplify.
 *
 * @return
 *   The simplified text.
 */
function simplify(text: string): string {
  // TODO: These replacements are language-specific. ~i18n
  return text.replace(/[^\w\s]/gi, '')
    .toLowerCase()
    // Replace lower-case "I"
    .replace(/\si\s/g, ' I ')
    .replace(/\sim\s/g, " I'm ")
}

/**
 * Output Bespoken tests for this Voxable project.
 *
 * @param projectExport -
 *   The JSON string export of a Voxable project.
 *
 * @return [void]
 */
export default function generate(projectExport: string): string {
  const project = JSON.parse(projectExport)

  // Add test configuration.
  let tests = '---\nconfiguration:\n  locales: en-US\n  voiceId: Joey'

  // For each script in the project...
  for (const script of project.scripts) {

    // Generate each linear path.
    const paths = renderTests(script.blocks)

    for (const path of paths) {
      tests += '\n\n---\n- test: ' + script.title

      for (const message of path) {
        if (message.type === 'UserMessage') {
          tests += '\n- "' + message.text + '": '
        } else {
          tests += simplify(message.text)
        }
      }
    }
  }

  return tests
}
