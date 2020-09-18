import React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {
  backupLoadingStart,
  closeBackupLoading,
  showUpdateAvailable,
} from '../reducer';

interface BackupWalletNoticeProps {
  backupLoadingStart: () => void;
  closeBackupLoading: () => void;
  showUpdateAvailable: () => void;
}

const BackupWalletNotice: React.FunctionComponent<BackupWalletNoticeProps> = (
  props: BackupWalletNoticeProps
) => {
  const { backupLoadingStart, closeBackupLoading, showUpdateAvailable } = props;
  const closing = () => {
    closeBackupLoading();
    showUpdateAvailable();
  };
  return (
    <>
      <ModalHeader toggle={closing}>
        {I18n.t('alerts.backupWalletNoticeTitle')}
      </ModalHeader>
      <ModalBody>{I18n.t('alerts.backupWalletNotice')}</ModalBody>
      <ModalFooter>
        <Button size='sm' color='primary' onClick={backupLoadingStart}>
          {I18n.t('alerts.yesBackupWalletNotice')}
        </Button>
        <Button size='sm' onClick={closing}>
          {I18n.t('alerts.noBackupWalletNotice')}
        </Button>
      </ModalFooter>
    </>
  );
};
const mapStateToProps = () => {};

const mapDispatchToProps = {
  backupLoadingStart,
  closeBackupLoading,
  showUpdateAvailable,
};

export default connect(mapStateToProps, mapDispatchToProps)(BackupWalletNotice);
