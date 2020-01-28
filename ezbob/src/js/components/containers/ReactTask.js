import { connect } from 'react-redux';
import { ReactTask as RSUI } from '../ui/ReactTask';
import { clickActions } from '../../redux/actions/clickActions';

const mapStateToProps = state =>
    ({

    });

const mapDispatchToProps = dispatch =>
    ({
        click() {
            dispatch(clickActions());
        }
    });

export const ReactTask = connect(mapStateToProps, mapDispatchToProps)(RSUI);