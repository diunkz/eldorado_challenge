import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { Input } from './styles';

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: 50
    },
    '& .MuiDialogActions-root': {
      padding: 5,
    },
  }));

 

  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle  {...other}>
        {children}
        <IconButton
            aria-label="close"
            onClick={onClose}
            style={{ float: 'right' }}
        >
          <CloseIcon />
        </IconButton>
        
      </DialogTitle>
    );
  };

interface ModalFormInterface {
    open: boolean;
    onClose: any;
    isEdit: boolean;
    onSubmit: any;
}

export default function ModalForm({ open, onClose, isEdit, onSubmit }: ModalFormInterface) {

    return(
        <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <form onSubmit={onSubmit}>    
          <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
            {!isEdit ? 'New book': 'Edit book'}
          </BootstrapDialogTitle>
          <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
            <Input type="text" name="book_name" placeholder="Name of book" required />
            <Input type="text" name="author_name" placeholder="Name of author" required />
            <Input type="number" name="number_pages" placeholder="Number of pages" required />
            <Input type="number" name="copies_available" placeholder="Copies available" required />
          </DialogContent>
          <DialogActions>
            <Button type="submit" autoFocus>
              {!isEdit ? 'Create' : 'Edit'}
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    );
}