pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

import "./ERC721Full.sol";

contract TreeCoin is ERC721 {

	constructor() ERC721("TreeCoin", "TREECOIN") public {
	}
}
