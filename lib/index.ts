import { lookup } from 'geoip-country'
import * as data from './data.json'

const ipV4Regex =
  '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}'

/**
 * Function to check if the address is valid IP address
 * @param {string} ipAddress string
 * @returns boolean
 */
export function isIPAddress(ipAddress: string) {
  return new RegExp(`(?:^${ipV4Regex}$)`).test(ipAddress)
}

/**
 * Function to check if the address is restricted by the OFAC
 * @param {string} ipAddress string
 * @param {string[]} countries string[] -- An array of 2 letter code of restricted countries, ISO-3166-1 country code https://www.iban.com/country-codes
 * @returns boolean
 */
export function check(ipAddress: string, countries: string[] = data.countries) {
  if (!isIPAddress(ipAddress)) {
    throw 'The IP address is invalid.'
  }

  const geo = lookup(ipAddress)

  return geo && countries.indexOf(geo.country) > -1 ? false : true
}

export default check
