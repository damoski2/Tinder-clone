import React from 'react';
import cx from 'classnames';
import styles from './SwipeButton.module.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

 const SwipeButton = () => {
    return (
        <div className={styles.swipeButton}>
            <IconButton className={cx(styles.swipeButtons_repeat,styles.MuiIconButton_root)} >
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className={cx(styles.swipeButtons_left,styles.MuiIconButton_root)} >
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className={cx(styles.swipeButtons_star,styles.MuiIconButton_root)} >
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className={cx(styles.swipeButtons_right,styles.MuiIconButton_root)} >
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className={cx(styles.swipeButtons_lightning,styles.MuiIconButton_root)} >
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButton