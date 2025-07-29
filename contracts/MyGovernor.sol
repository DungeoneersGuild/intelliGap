// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";

contract MyGovernor is Governor, GovernorSettings, GovernorVotes, GovernorCountingSimple {
    constructor(IVotes _token)
        Governor("MyGovernor")
        GovernorSettings(1 /* delay */, 50400 /* voting period */, 0 /* quorum */)
        GovernorVotes(_token)
    {}

    function votingDelay() public view override returns (uint256) {
        return super.votingDelay();
    }

    function votingPeriod() public view override returns (uint256) {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber) public pure override returns (uint256) {
        return 0;
    }
}
