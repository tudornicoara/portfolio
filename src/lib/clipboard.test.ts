import { copyText } from './clipboard'

test('returns true when clipboard write succeeds', async () => {
  Object.assign(navigator, { clipboard: { writeText: () => Promise.resolve() } })
  expect(await copyText('hi')).toBe(true)
})

test('returns false when clipboard unavailable', async () => {
  Object.assign(navigator, { clipboard: { writeText: () => Promise.reject(new Error('no')) } })
  expect(await copyText('hi')).toBe(false)
})
