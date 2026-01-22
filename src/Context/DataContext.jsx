import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = [
    {
      id: "1",
      user: "Segun",
      xendId: "2291-10B",
      timeAgo: "10s ago",
      progress: 100,
      status: "Completed",
      subStatus: "Completed",
      state: "done", // for coloring
    },
    {
      id: "2",
      user: "Isaac",
      xendId: "2291-10B",
      timeAgo: "15m ago",
      progress: 20,
      status: "Pending",
      subStatus: "Waiting for user to xend",
      state: "pending",
    },
    {
      id: "3",
      user: "Ochuko",
      xendId: "2291-10B",
      timeAgo: "35m ago",
      progress: 20,
      status: "Pending",
      subStatus: "Waiting for user to xend",
      state: "pending",
    },
    {
      id: "4",
      user: "Ochuko",
      xendId: "2291-10B",
      timeAgo: "35m ago",
      progress: 20,
      status: "Pending",
      subStatus: "Waiting for user to xend",
      state: "pending",
    },
    {
      id: "5",
      user: "Ochuko",
      xendId: "2291-10B",
      timeAgo: "35m ago",
      progress: 20,
      status: "Completed",
      subStatus: "Waiting for user to xend",
      state: "pending",
    },
  ];

  const deliveryData = [
    {
      id: "1",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: {
        amount: 600,
        percentage: 10.71,
      },
      profitGained: 600,
    },
    // Repeating the pattern for dummy entries
    {
      id: "2",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "3",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "4",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "5",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "6",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "7",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "8",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "9",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
    {
      id: "10",
      xendId: "2291-10B",
      riderId: "338221191AADE",
      userEmail: "example@email.com",
      deliveryCost: 5600,
      commission: { amount: 600, percentage: 10.71 },
      profitGained: 600,
    },
  ];

  return (
    <DataContext.Provider value={{ data, deliveryData }}>
      {children}
    </DataContext.Provider>
  );
};
