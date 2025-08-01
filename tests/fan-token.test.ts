import { describe, it, expect, beforeEach } from "vitest"

const mockContract = {
  admin: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
  paused: false,
  totalSupply: 0n,
  balances: new Map<string, bigint>(),
  staked: new Map<string, bigint>(),
  MAX_SUPPLY: 100_000_000n,

  isAdmin(caller: string) {
    return caller === this.admin
  },

  setPaused(caller: string, pause: boolean) {
    if (!this.isAdmin(caller)) return { error: 100 }
    this.paused = pause
    return { value: pause }
  },

  mint(caller: string, recipient: string, amount: bigint) {
    if (!this.isAdmin(caller)) return { error: 100 }
    if (this.totalSupply + amount > this.MAX_SUPPLY) return { error: 103 }
    this.balances.set(recipient, (this.balances.get(recipient) || 0n) + amount)
    this.totalSupply += amount
    return { value: true }
  },

  transfer(caller: string, recipient: string, amount: bigint) {
    if (this.paused) return { error: 104 }
    const bal = this.balances.get(caller) || 0n
    if (bal < amount) return { error: 101 }
    this.balances.set(caller, bal - amount)
    this.balances.set(recipient, (this.balances.get(recipient) || 0n) + amount)
    return { value: true }
  },

  stake(caller: string, amount: bigint) {
    if (this.paused) return { error: 104 }
    const bal = this.balances.get(caller) || 0n
    if (bal < amount) return { error: 101 }
    this.balances.set(caller, bal - amount)
    this.staked.set(caller, (this.staked.get(caller) || 0n) + amount)
    return { value: true }
  },

  unstake(caller: string, amount: bigint) {
    if (this.paused) return { error: 104 }
    const stakeBal = this.staked.get(caller) || 0n
    if (stakeBal < amount) return { error: 102 }
    this.staked.set(caller, stakeBal - amount)
    this.balances.set(caller, (this.balances.get(caller) || 0n) + amount)
    return { value: true }
  }
}

describe("TrueSide Fan Token", () => {
  beforeEach(() => {
    mockContract.admin = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
    mockContract.paused = false
    mockContract.totalSupply = 0n
    mockContract.balances = new Map()
    mockContract.staked = new Map()
  })

  it("should mint tokens when called by admin", () => {
    const result = mockContract.mint(mockContract.admin, "ST2CY5...", 1000n)
    expect(result).toEqual({ value: true })
    expect(mockContract.balances.get("ST2CY5...")).toBe(1000n)
  })

  it("should prevent minting over max supply", () => {
    const result = mockContract.mint(mockContract.admin, "ST2CY5...", 200_000_000n)
    expect(result).toEqual({ error: 103 })
  })

  it("should transfer tokens", () => {
    mockContract.mint(mockContract.admin, "ST2CY5...", 500n)
    const result = mockContract.transfer("ST2CY5...", "ST3NB...", 200n)
    expect(result).toEqual({ value: true })
    expect(mockContract.balances.get("ST2CY5...")).toBe(300n)
    expect(mockContract.balances.get("ST3NB...")).toBe(200n)
  })

  it("should stake tokens", () => {
    mockContract.mint(mockContract.admin, "ST2CY5...", 500n)
    const result = mockContract.stake("ST2CY5...", 200n)
    expect(result).toEqual({ value: true })
    expect(mockContract.balances.get("ST2CY5...")).toBe(300n)
    expect(mockContract.staked.get("ST2CY5...")).toBe(200n)
  })

  it("should unstake tokens", () => {
    mockContract.mint(mockContract.admin, "ST2CY5...", 500n)
    mockContract.stake("ST2CY5...", 200n)
    const result = mockContract.unstake("ST2CY5...", 100n)
    expect(result).toEqual({ value: true })
    expect(mockContract.staked.get("ST2CY5...")).toBe(100n)
    expect(mockContract.balances.get("ST2CY5...")).toBe(400n)
  })

  it("should not allow transfers when paused", () => {
    mockContract.setPaused(mockContract.admin, true)
    const result = mockContract.transfer("ST2CY5...", "ST3NB...", 10n)
    expect(result).toEqual({ error: 104 })
  })
})
