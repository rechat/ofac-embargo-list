import { isIPAddress, check } from './index'

describe('isIPAddress function', () => {
  it('should returns true when input is 192.168.0.1', () => {
    const input = '192.168.0.1'
    const expected = true

    expect(isIPAddress(input)).toBe(expected)
  })

  it('should returns true when input is 173.214.24.191', () => {
    const input = '173.214.24.191'
    const expected = true

    expect(isIPAddress(input)).toBe(expected)
  })
  it('should returns true when input is 17321424191', () => {
    const input = '17321424191'
    const expected = false

    expect(isIPAddress(input)).toBe(expected)
  })

  it('should returns false when input is 173.214.00.1911', () => {
    const input = '173.214.00.1911'
    const expected = false

    expect(isIPAddress(input)).toBe(expected)
  })

  it('should returns true when input is 0.0.0.0', () => {
    const input = '0.0.0.0'
    const expected = true

    expect(isIPAddress(input)).toBe(expected)
  })

  it('should returns true when input is some string', () => {
    const input = 'some string'
    const expected = false

    expect(isIPAddress(input)).toBe(expected)
  })
})

describe('check function', () => {
  it('should returns false when the IP is in the list', () => {
    const ip = '206.71.50.230'
    const countries = ['UK', 'US', 'NL', 'PH']
    const expected = false

    expect(check(ip, countries)).toBe(expected)
  })

  it('should returns true when the IP is not in the list', () => {
    const ip = '192.168.0.1'
    const countries = ['UK', 'US', 'NL', 'PH']
    const expected = true

    expect(check(ip, countries)).toBe(expected)
  })

  it('should returns false when the IP is in the list', () => {
    const ip = '104.28.12.19'
    const countries = ['CU', 'US', 'NL', 'PH']
    const expected = false

    expect(check(ip, countries)).toBe(expected)
  })

  it('should returns false when the IP is in the list (default list)', () => {
    const ip = '104.28.12.19'
    const expected = false

    expect(check(ip)).toBe(expected)
  })

  it('should returns false when the IP is in the list (default list)', () => {
    const ip = '109.230.221.254'
    const expected = false

    expect(check(ip)).toBe(expected)
  })

  it('should throws an error when ip is invalid', () => {
    const ip = '19216801'
    const countries = ['UK', 'US', 'NL', 'PH']

    try {
      check(ip, countries)
      // Fail test if above expression doesn't throw anything.
      expect('it`s not throwing an error?').toBe(false)
    } catch (e) {
      expect(e).toBe('The IP address is invalid.')
    }
  })
})
