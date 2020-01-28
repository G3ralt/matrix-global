import { connect } from 'react-redux';
import { HelloComp as HCUI } from '../ui/HelloComp';

const mapStateToProps = state =>
    ({
        click: state.click
    });

const mapDispatchToProps = dispatch =>
    ({
        
    });

export const HelloComp = connect(mapStateToProps, mapDispatchToProps)(HCUI);