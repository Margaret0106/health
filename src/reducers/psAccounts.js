export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PS_ACCOUNT':
      return [
        ...state,
        action.psAccount
      ];

    case 'ADD_PS_ACCOUNTS':
      return [
        ...action.psAccounts
      ];

    case 'DELETE_PS_ACCOUNT':
      return state.filter((psAccount) => psAccount.id !== action.id);

    case 'CONFIRM_DELETE_PS_ACCOUNT':
      return state.map((psAccount) => {
        if (psAccount === action.id) {
          psAccount.deleteConfirm = true;
        }

        return psAccount;
      });

    default:
      return state;
  }
};
