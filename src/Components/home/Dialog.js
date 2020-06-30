import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux'
import { List, ListItem, ListItemText, Divider,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    title:{
        flexGrow:1
    },
  }));
function DialogFun(props) {
    const classes=useStyles()
  return (
    <div  >
      <Dialog
        open={props.dialogStatus}
        onClick={props.handleStatusDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <List>
            <ListItem className={classes.title}>
                <ListItemText>Report Inappropriate</ListItemText>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemText>Unfollow </ListItemText>
            </ListItem>
            <Divider/><ListItem>
                <ListItemText>Go to post</ListItemText>
            </ListItem>
            <Divider/><ListItem>
                <ListItemText>Share</ListItemText>
            </ListItem>
            <Divider/><ListItem>
                <ListItemText>Copy link</ListItemText>
            </ListItem>
            <Divider/>
            <Divider/><ListItem>
                <ListItemText>Embed</ListItemText>
            </ListItem>
            <Divider/>
            <Divider/><ListItem>
                <ListItemText>Cancel</ListItemText>
            </ListItem>
            <Divider/>

        </List>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
    return {
        dialogStatus: state.dialogStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleStatusDialog: () => {
            dispatch({type:'DIALOG'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DialogFun);
