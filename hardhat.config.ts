import * as dotenv from "dotenv";
dotenv.config();
import type { HardhatUserConfig } from "hardhat/types";

import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ignition-viem";
import "@nomicfoundation/hardhat-viem";

import { readFileSync } from "fs";
const secret = `0x${readFileSync("/opt/conflux/genesis_secrets.txt", "utf-8").split(/\r?\n/)[0]}`;

const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY ?? secret;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "confluxESpaceLocal",
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    confluxCoreLocal: {
      url: "http://localhost:12537",
      accounts: [deployerPrivateKey],
      chainId: 2029,
    },
    confluxCoreTestnet: {
      url: "https://test.confluxrpc.com",
      accounts: [deployerPrivateKey],
      chainId: 1,
    },
    confluxCore: {
      url: "https://main.confluxrpc.com",
      accounts: [deployerPrivateKey],
      chainId: 1029,
    },
    confluxESpaceLocal: {
      url: "http://localhost:8545",
      accounts: [deployerPrivateKey],
    },
    confluxESpaceTestnet: {
      url: "https://evmtestnet.confluxrpc.com",
      accounts: [deployerPrivateKey],
    },
    confluxESpace: {
      url: "https://evm.confluxrpc.com",
      accounts: [deployerPrivateKey],
    },
  },
};

export default config;
