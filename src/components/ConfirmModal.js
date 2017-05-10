import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

const ConfirmModal = ({children, title, description, onConfirm, icon='trash'}) => (
  <Modal
    trigger={children}
    content={description}
    basic
    header={<Header icon={icon} content={title} />}
    size='small'
    actions={[
      { key: 'no', content: 'No', color: 'red', triggerClose: true, basic: true, inverted: true },
      { key: 'yes', content: 'Yes', color: 'green', triggerClose: true, inverted: true, onClick: onConfirm },
    ]}
  />
);

export default ConfirmModal;
