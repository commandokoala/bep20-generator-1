## SÅ«rya's Description Report

### Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| dist/MintableBEP20.dist.sol | f9d7e7f3626a2a872d70ba9dba9c896dc9388981 |


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
| **BEP20Capped** | Implementation | BEP20 |||
| â | <Constructor> | Public âï¸ | ð  |NOâï¸ |
| â | cap | Public âï¸ |   |NOâï¸ |
| â | _beforeTokenTransfer | Internal ð | ð  | |
||||||
| **BEP20Mintable** | Implementation | BEP20 |||
| â | mintingFinished | Public âï¸ |   |NOâï¸ |
| â | mint | Public âï¸ | ð  | canMint |
| â | finishMinting | Public âï¸ | ð  | canMint |
| â | _finishMinting | Internal ð | ð  | |
||||||
| **IPayable** | Interface |  |||
| â | pay | External âï¸ |  ðµ |NOâï¸ |
||||||
| **ServicePayer** | Implementation |  |||
| â | <Constructor> | Public âï¸ |  ðµ |NOâï¸ |
||||||
| **MintableBEP20** | Implementation | BEP20Capped, BEP20Mintable, ServicePayer |||
| â | <Constructor> | Public âï¸ |  ðµ | BEP20 BEP20Capped ServicePayer |
| â | _mint | Internal ð | ð  | onlyOwner |
| â | _finishMinting | Internal ð | ð  | onlyOwner |
| â | _beforeTokenTransfer | Internal ð | ð  | |


### Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    ð    | Function can modify state |
|    ðµ    | Function is payable |
