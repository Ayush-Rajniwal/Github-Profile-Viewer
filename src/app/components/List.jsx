import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@components/Avatar';

function List({ data }) {
    return (
        <div className="list">
            {data.map((item) => (
                <Link
                    to={`/${item.username}`}
                    key={`${item.username}`}
                    className="list__item"
                >
                    <div className="list__wrapper-avatar">
                        <Avatar img={`${item.avatar}`} />
                    </div>
                    <div className="list__text">{`${item.username}`}</div>
                </Link>
            ))}
        </div>
    );
}

List.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
};

export default List;
