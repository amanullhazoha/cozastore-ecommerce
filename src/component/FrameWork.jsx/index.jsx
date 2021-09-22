/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
export const Container = ({ children, className }) => (
    <div className={`container ${className}`}>{children}</div>
);

export const Row = ({ children, className }) => (
    <div className={`row ${className}`}>{children}</div>
);

export const Col = ({ children, className }) => <div className={`${className}`}>{children}</div>;

export const Button = ({ children, type, ...rest }) => (
    <button type={type} {...rest}>
        {children}
    </button>
);

export const ListMap = ({ items, className }) => (
    <ul className={className}>
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export const ListMapLink = ({ items, className }) => (
    <ul className={className}>
        {items.map(({ value, link }) => (
            <li key={value}>
                <a href={link}>{value}</a>
            </li>
        ))}
    </ul>
);
