import React, { Component } from 'react';
import classNames from "classnames";
import _uniqueId from "lodash/uniqueId";
function withClickOutSide(WrappedComponent, crrClass = '') {
    return class DefaultClickOutSide extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isShow: false,
                idClickOutSide: _uniqueId("click-out-side-")
            };
        }
        componentDidUpdate(prevProps, prevState) {
            if (prevState.isShow == false && this.state.isShow == true) {
                this.setState({ isShow: true }, () => {
                    const { idClickOutSide } = this.state;
                    let event = `click.${idClickOutSide}`, $id = `#${idClickOutSide}`, $document = $(document);
                    $document.off(event).on(event, e => {
                        let $target = $(e.target);
                        if (!$target.is($id) && !$target.parents($id).length && $.contains(document, e.target)) {
                            this.setState({ isShow: false });
                            $document.off(event);
                        }
                    });
                })
            }
        }


        render() {
            const { isShow, idClickOutSide } = this.state;
            const classNameClickOutSide = classNames(
                crrClass,
                isShow ? 'show' : ''
            )
            return <div
                id={idClickOutSide}
                className={classNameClickOutSide}>
                <WrappedComponent
                    {...this.props}
                    isShow={isShow}
                    setShow={(isShow) => this.setState({ isShow })} />
            </div>

        }

    }
}

export default withClickOutSide;