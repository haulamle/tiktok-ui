import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    small = false,
    large = false,
    outline = false,
    disabled = false,
    rounded = false,
    children,
    onClick,
    leftIcon,
    rightIcon,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propType = {
    to: PropType.string,
    href: PropType.string,
    text: PropType.bool,
    primary: PropType.bool,
    small: PropType.bool,
    large: PropType.bool,
    outline: PropType.bool,
    disabled: PropType.bool,
    rounded: PropType.bool,
    children: PropType.node.isRequired,
    onClick: PropType.string,
    leftIcon: PropType.node,
    rightIcon: PropType.node,
    className: PropType.func,
};

export default Button;
