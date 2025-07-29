// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20Votes {
    constructor() ERC20("Governance Token", "GTK") ERC20Permit("Governance Token") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
