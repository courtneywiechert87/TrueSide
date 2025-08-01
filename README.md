# TrueSide

A blockchain-powered sports and fan engagement platform that empowers supporters to influence, participate, and benefit directly from their favorite teams’ success — all on-chain.

---

## Overview

TrueSide consists of ten main smart contracts that together form a decentralized, transparent, and rewarding ecosystem for sports fans and clubs:

1. **Fan Token Contract** – Issues and manages club-specific fan tokens.
2. **NFT Ticketing Contract** – Handles digital ticket sales, transfers, and royalties.
3. **Governance DAO Contract** – Enables fan voting on team-related proposals.
4. **Merch Revenue Split Contract** – Distributes merch revenue between the club and token holders.
5. **Engagement Rewards Contract** – Rewards fans for verified participation and activities.
6. **Prediction Market Contract** – Facilitates fantasy sports pools and match predictions.
7. **Dynamic Athlete NFT Contract** – Creates collectible NFTs that update with player performance data.
8. **Sponsorship Pool Contract** – Crowdfunds sponsorships and distributes returns to backers.
9. **Treasury Router Contract** – Manages and routes funds across the ecosystem.
10. **Oracle Integration Contract** – Connects with off-chain sports data for live updates and verification.

---

## Features

- **Club-branded fan tokens** with staking and voting rights  
- **NFT ticketing** with built-in anti-scalping measures  
- **DAO governance** for fan-driven decision making  
- **Automated merch revenue sharing** with supporters  
- **Engagement rewards** for attending games and community events  
- **Prediction games** for fantasy sports and match outcomes  
- **Dynamic player collectibles** that evolve with stats  
- **Sponsorship crowdfunding** with profit sharing  
- **Transparent treasury routing** for all funds  
- **Live sports data integration** via oracles  

---

## Smart Contracts

### Fan Token Contract
- Mint, burn, and transfer club-specific fan tokens
- Staking for rewards and governance power
- Token supply control mechanisms

### NFT Ticketing Contract
- Mint tickets as NFTs
- Enforce resale royalty rules
- QR/Web3 venue access verification

### Governance DAO Contract
- Fan voting with token-weighted proposals
- On-chain proposal execution
- Quorum and voting period management

### Merch Revenue Split Contract
- Automatic revenue distribution
- Percentage split between club treasury and fan stakers
- Transparent payout history

### Engagement Rewards Contract
- Track fan attendance and activities (via oracle or check-ins)
- Reward distribution in fan tokens
- Anti-cheat verification systems

### Prediction Market Contract
- Token staking for match or fantasy results
- Automatic reward distribution
- Pool creation and joining mechanisms

### Dynamic Athlete NFT Contract
- NFTs that update metadata with live player stats
- Integration with sports data oracles
- Limited edition collectible minting

### Sponsorship Pool Contract
- Crowdfund sponsorships from fans
- Automated return distribution
- Sponsor transparency logs

### Treasury Router Contract
- Routes funds to correct contracts
- Tracks all incoming and outgoing transactions
- Multi-contract payout automation

### Oracle Integration Contract
- Secure connection to sports data providers
- Attendance verification
- Match and player performance updates

---

## Installation

1. Install [Clarinet CLI](https://docs.hiro.so/clarinet/getting-started)
2. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/trueside.git
   ```
3. Run tests:
    ```bash
    npm test
    ```
4. Deploy contracts:
    ```bash
    clarinet deploy
    ```

## Usage

Each smart contract operates independently but integrates with others for a complete fan engagement experience.
Refer to individual contract documentation for function calls, parameters, and usage examples.

## Testing

Tests are written in Clarity testing framework and can be run with:
```bash
npm test
```

## License

MIT License
