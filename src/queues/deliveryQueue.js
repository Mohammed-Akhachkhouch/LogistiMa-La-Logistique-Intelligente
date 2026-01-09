// Mock queue for development (Redis disabled)
export const deliveryQueue = {
  add: async (name, data) => {
    console.log("Mock queue - would process:", name, data);
  }
};
