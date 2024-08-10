export const getSender = (loggedUSer, users) => {
  return users[0]._id === loggedUSer._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUSer, users) => {
  return users[0]._id === loggedUSer._id ? users[1] : users[0];
};
