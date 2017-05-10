import * as HealthAPI from './../api/HealthAPI';

export const addPsAccount = (psAccount) => {
  return {
    type: 'ADD_PS_ACCOUNT',
    psAccount
  }
};

export const addPsAccounts = (psAccounts) => {
  return {
    type: 'ADD_PS_ACCOUNTS',
    psAccounts
  }
};

export const deletePsAccount = (id) => {
  return {
    type: 'DELETE_PS_ACCOUNT',
    id
  }
};

export const confirmDeletePsAccount = (id) => {
  return {
    type: 'CONFIRM_DELETE_PS_ACCOUNT',
    id
  }
};

export const cancelDeletePsAccount = (id) => {
  return {
    type: 'CANCEL_DELETE_PS_ACCOUNT',
    id
  }
}

export const editPsAccount = (id) => {
  return {
    type: 'EDIT_PS_ACCOUNT',
    id
  }
}

export const cancelEditPsAccount = (id) => {
  return {
    type: 'CANCEL_EDIT_PS_ACCOUNT',
    id
  }
}

export const startAddPsAccount = (psAccount) => {
  return (dispatch, getState) => {
    return HealthAPI.addPsAccount(psAccount).then((response) => {
      dispatch(addPsAccount(response.data));
    });
  };
};

export const startAddPsAccounts = () => {
  return (dispatch, getState) => {
    return HealthAPI.getPsAccounts().then((response) => {
      console.log('Got some ps accounts', response.data);
      dispatch(addPsAccounts(response.data));
    });
  };
};

export const startDeletePsAccount = (id) => {
  return (dispatch, getState) => {
    return HealthAPI.deletePsAccount(id).then((response) => {
      dispatch(deletePsAccount(id));
    });
  }
};
