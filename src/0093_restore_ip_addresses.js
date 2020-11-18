/**
 * 93. Restore IP Addresses
 *
 * Difficulty: Medium
 *
 * Given a string s containing only digits, return all possible valid
 * IP addresses that can be obtained from s. You can return them in any
 * order.
 *
 * A valid IP address consists of exactly four integers, each integer
 * is between 0 and 255, separated by single dots and cannot have
 * leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid
 * IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1"
 * are invalid IP addresses.
 *
 * Example 1:
 *  Input: s = "25525511135"
 *  Output: ["255.255.11.135","255.255.111.35"]
 *
 * Example 2:
 *  Input: s = "0000"
 *  Output: ["0.0.0.0"]
 *
 * Example 3:
 *  Input: s = "1111"
 *  Output: ["1.1.1.1"]
 *
 * Example 4:
 *  Input: s = "010010"
 *  Output: ["0.10.0.10","0.100.1.0"]
 *
 * Example 5:
 *  Input: s = "101023"
 *  Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3",
 *          "101.0.2.3"]
 *
 * Constraints:
 *  - 0 <= s.length <= 3000
 *  - s consists of digits only.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const addresses = [];

  // Catch edge cases
  if (s.length < 4 || s.length > 12) {
    return addresses;
  }

  const generate = (idx, prev, address, dots) => {
    if (dots === 0) {
      address += s.slice(idx);

      if (isValidIpAddress(address)) {
        addresses.push(address);
      }
      return;
    } else if (idx >= s.length) {
      return;
    }

    // Insert dot now
    generate(idx + 1, idx, address + s[idx] + ".", dots - 1);

    if (idx - prev < 3) {
      // Do not allow groups of length 4 or greater when skipping
      // dot insert
      generate(idx + 1, prev, address + s[idx], dots);
    }
  };

  generate(0, 0, "", 3);

  return addresses;
};

var isValidIpAddress = function (address) {
  for (let group of address.split(".")) {
    if (group.length === 0 || group.length > 3) {
      return false;
    } else if (group[0] === "0" && group.length > 1) {
      return false;
    } else if (parseInt(group) > 255) {
      return false;
    }
  }

  return true;
};
