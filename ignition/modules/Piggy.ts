// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PiggyFactoryModule = buildModule("PiggyFactoryModule", (m) => {
  
  const piggy = m.contract("PiggyFactory", [], {
  });

  return { piggy };
});

export default PiggyFactoryModule;
