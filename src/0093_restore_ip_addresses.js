/**
 * 93. Restore IP Addresses
 *
 * Difficulty: Medium
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
