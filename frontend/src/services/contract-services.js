// Assuming you have instantiated the contract in your React component
// const identityManagementContract = ...;

export const addUser = async ({userAddress, fullName, emailID, mobileNo, identityManagementContract}) => {
  try {
      await identityManagementContract.AddUser(userAddress, fullName, emailID, mobileNo).send({ from: userAddress });
      console.log("User added successfully");
  } catch (error) {
      console.error("Error adding user:", error.message);
  }
};

export const addUserDL = async ({userAddress, dlNo, dlName, dlDOB, dlHash, dlAddress, identityManagementContract}) => {
  try {
      await identityManagementContract.AddUserDL(userAddress, dlNo, dlName, dlDOB, dlHash, dlAddress).send({ from: userAddress });
      console.log("User DL added successfully");
  } catch (error) {
      console.error("Error adding user DL:", error.message);
  }
};

export const addDLRequest = async ({userAddress, requestedBy, dlNo, dlName, dlDOB, dlHash, dlAddress, dlOverAllStatus, identityManagementContract}) => {
  try {
      await identityManagementContract.AddDLRequest(userAddress, requestedBy, dlNo, dlName, dlDOB, dlHash, dlAddress, dlOverAllStatus).send({ from: userAddress });
      console.log("DL Request added successfully");
  } catch (error) {
      console.error("Error adding DL Request:", error.message);
  }
};

export const viewDLRequestLength = async ({userAddress, identityManagementContract}) => {
  try {
      const length = await identityManagementContract.ViewDLRequestLength(userAddress).call();
      console.log('DL Request Length:', length);
  } catch (error) {
      console.error("Error viewing DL Request length:", error.message);
  }
};

export const viewDLRequestHeader = async ({userAddress, requestIndex, identityManagementContract}) => {
  try {
      const result = await identityManagementContract.ViewDLRequestHeader(userAddress, requestIndex).call();
      console.log('DL Request Header:', result);
  } catch (error) {
      console.error("Error viewing DL Request header:", error.message);
  }
};

export const viewDLRequestDetail = async ({userAddress, requestIndex, identityManagementContract}) => {
  try {
      const result = await identityManagementContract.ViewDLRequestDetail(userAddress, requestIndex).call();
      console.log('DL Request Detail:', result);
  } catch (error) {
      console.error("Error viewing DL Request detail:", error.message);
  }
};

export const updateRequestStatus = async ({userAddress, requestIndex, dlNo, dlName, dlDOB, dlHash, dlAddress, dlOverAllStatus, identityManagementContract}) => {
  try {
      await identityManagementContract.UpdateRequestStatus(userAddress, requestIndex, dlNo, dlName, dlDOB, dlHash, dlAddress, dlOverAllStatus).send({ from: userAddress });
      console.log("Request status updated successfully");
  } catch (error) {
      console.error("Error updating request status:", error.message);
  }
};

export const viewUser = async ({userAddress, userIndex, identityManagementContract}) => {
  try {
      const result = await identityManagementContract.viewUser(userAddress, userIndex).call();
      console.log('User Details:', result);
  } catch (error) {
      console.error("Error viewing user details:", error.message);
  }
};

export const viewUserDL = async ({userAddress, requestIndex, identityManagementContract}) => {
  try {
      const result = await identityManagementContract.viewUserDL(userAddress, requestIndex).call();
      console.log('User DL Details:', result);
  } catch (error) {
      console.error("Error viewing user DL details:", error.message);
  }
};
