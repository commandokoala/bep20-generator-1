## SÅ«rya's Description Report

### Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| dist/AmazingBEP20.dist.sol | ec414fefc288df0fa35f6f13562feb1f7a6d092f |


### Contracts Description Table


|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     â      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
||||||
| **Context** | Implementation |  |||
| â | _msgSender | Internal ð |   | |
| â | _msgData | Internal ð |   | |
||||||
| **Ownable** | Implementation | Context |||
| â | <Constructor> | Internal ð | ð  | |
| â | owner | Public âï¸ |   |NOâï¸ |
| â | renounceOwnership | Public âï¸ | ð  | onlyOwner |
| â | transferOwnership | Public âï¸ | ð  | onlyOwner |
||||||
| **SafeMath** | Library |  |||
| â | tryAdd | Internal ð |   | |
| â | trySub | Internal ð |   | |
| â | tryMul | Internal ð |   | |
| â | tryDiv | Internal ð |   | |
| â | tryMod | Internal ð |   | |
| â | add | Internal ð |   | |
| â | sub | Internal ð |   | |
| â | mul | Internal ð |   | |
| â | div | Internal ð |   | |
| â | mod | Internal ð |   | |
| â | sub | Internal ð |   | |
| â | div | Internal ð |   | |
| â | mod | Internal ð |   | |
||||||
| **IBEP20** | Interface |  |||
| â | name | External âï¸ |   |NOâï¸ |
| â | symbol | External âï¸ |   |NOâï¸ |
| â | decimals | External âï¸ |   |NOâï¸ |
| â | totalSupply | External âï¸ |   |NOâï¸ |
| â | balanceOf | External âï¸ |   |NOâï¸ |
| â | getOwner | External âï¸ |   |NOâï¸ |
| â | transfer | External âï¸ | ð  |NOâï¸ |
| â | transferFrom | External âï¸ | ð  |NOâï¸ |
| â | approve | External âï¸ | ð  |NOâï¸ |
| â | allowance | External âï¸ |   |NOâï¸ |
||||||
| **BEP20** | Implementation | Ownable, IBEP20 |||
| â | <Constructor> | Public âï¸ | ð  |NOâï¸ |
| â | name | Public âï¸ |   |NOâï¸ |
| â | symbol | Public âï¸ |   |NOâï¸ |
| â | decimals | Public âï¸ |   |NOâï¸ |
| â | totalSupply | Public âï¸ |   |NOâï¸ |
| â | balanceOf | Public âï¸ |   |NOâï¸ |
| â | getOwner | Public âï¸ |   |NOâï¸ |
| â | transfer | Public âï¸ | ð  |NOâï¸ |
| â | transferFrom | Public âï¸ | ð  |NOâï¸ |
| â | approve | Public âï¸ | ð  |NOâï¸ |
| â | allowance | Public âï¸ |   |NOâï¸ |
| â | increaseAllowance | Public âï¸ | ð  |NOâï¸ |
| â | decreaseAllowance | Public âï¸ | ð  |NOâï¸ |
| â | _transfer | Internal ð | ð  | |
| â | _mint | Internal ð | ð  | |
| â | _burn | Internal ð | ð  | |
| â | _approve | Internal ð | ð  | |
| â | _setupDecimals | Internal ð | ð  | |
| â | _beforeTokenTransfer | Internal ð | ð  | |
||||||
| **BEP20Mintable** | Implementation | BEP20 |||
| â | mintingFinished | Public âï¸ |   |NOâï¸ |
| â | mint | Public âï¸ | ð  | canMint |
| â | finishMinting | Public âï¸ | ð  | canMint |
| â | _finishMinting | Internal ð | ð  | |
||||||
| **BEP20Burnable** | Implementation | Context, BEP20 |||
| â | burn | Public âï¸ | ð  |NOâï¸ |
| â | burnFrom | Public âï¸ | ð  |NOâï¸ |
||||||
| **IERC165** | Interface |  |||
| â | supportsInterface | External âï¸ |   |NOâï¸ |
||||||
| **IBEP20Operable** | Interface | IBEP20, IERC165 |||
| â | transferAndCall | External âï¸ | ð  |NOâï¸ |
| â | transferAndCall | External âï¸ | ð  |NOâï¸ |
| â | transferFromAndCall | External âï¸ | ð  |NOâï¸ |
| â | transferFromAndCall | External âï¸ | ð  |NOâï¸ |
| â | approveAndCall | External âï¸ | ð  |NOâï¸ |
| â | approveAndCall | External âï¸ | ð  |NOâï¸ |
||||||
| **IBEP20OperableReceiver** | Interface |  |||
| â | onTransferReceived | External âï¸ | ð  |NOâï¸ |
||||||
| **IBEP20OperableSpender** | Interface |  |||
| â | onApprovalReceived | External âï¸ | ð  |NOâï¸ |
||||||
| **Address** | Library |  |||
| â | isContract | Internal ð |   | |
| â | sendValue | Internal ð | ð  | |
| â | functionCall | Internal ð | ð  | |
| â | functionCall | Internal ð | ð  | |
| â | functionCallWithValue | Internal ð | ð  | |
| â | functionCallWithValue | Internal ð | ð  | |
| â | functionStaticCall | Internal ð |   | |
| â | functionStaticCall | Internal ð |   | |
| â | functionDelegateCall | Internal ð | ð  | |
| â | functionDelegateCall | Internal ð | ð  | |
| â | _verifyCallResult | Private ð |   | |
||||||
| **ERC165Checker** | Library |  |||
| â | supportsERC165 | Internal ð |   | |
| â | supportsInterface | Internal ð |   | |
| â | getSupportedInterfaces | Internal ð |   | |
| â | supportsAllInterfaces | Internal ð |   | |
| â | _supportsERC165Interface | Private ð |   | |
| â | _callERC165SupportsInterface | Private ð |   | |
||||||
| **ERC165** | Implementation | IERC165 |||
| â | <Constructor> | Internal ð | ð  | |
| â | supportsInterface | Public âï¸ |   |NOâï¸ |
| â | _registerInterface | Internal ð | ð  | |
||||||
| **BEP20Operable** | Implementation | BEP20, IBEP20Operable, ERC165 |||
| â | <Constructor> | Public âï¸ | ð  | BEP20 |
| â | transferAndCall | Public âï¸ | ð  |NOâï¸ |
| â | transferAndCall | Public âï¸ | ð  |NOâï¸ |
| â | transferFromAndCall | Public âï¸ | ð  |NOâï¸ |
| â | transferFromAndCall | Public âï¸ | ð  |NOâï¸ |
| â | approveAndCall | Public âï¸ | ð  |NOâï¸ |
| â | approveAndCall | Public âï¸ | ð  |NOâï¸ |
| â | _checkAndCallTransfer | Internal ð | ð  | |
| â | _checkAndCallApprove | Internal ð | ð  | |
||||||
| **TokenRecover** | Implementation | Ownable |||
| â | recoverBEP20 | Public âï¸ | ð  | onlyOwner |
||||||
| **IPayable** | Interface |  |||
| â | pay | External âï¸ |  ðµ |NOâï¸ |
||||||
| **ServicePayer** | Implementation |  |||
| â | <Constructor> | Public âï¸ |  ðµ |NOâï¸ |
||||||
| **AmazingBEP20** | Implementation | BEP20Mintable, BEP20Burnable, BEP20Operable, TokenRecover, ServicePayer |||
| â | <Constructor> | Public âï¸ |  ðµ | BEP20Operable ServicePayer |
| â | _mint | Internal ð | ð  | onlyOwner |
| â | _finishMinting | Internal ð | ð  | onlyOwner |


### Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    ð    | Function can modify state |
|    ðµ    | Function is payable |
