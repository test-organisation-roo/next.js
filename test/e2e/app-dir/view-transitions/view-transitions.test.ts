import { nextTestSetup } from 'e2e-utils'
import { BrowserInterface } from 'next-webdriver'

async function assertNoConsoleErrors(browser: BrowserInterface) {
  const logs = await browser.log()
  const warningsAndErrors = logs.filter((log) => {
    return log.source === 'warning' || log.source === 'error'
  })

  expect(warningsAndErrors).toEqual([])
}

describe('view-transitions', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('smoketest', async () => {
    const browser = await next.browser('/basic')

    await assertNoConsoleErrors(browser)
  })
})
