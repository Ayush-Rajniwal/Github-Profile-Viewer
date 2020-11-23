import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function List({ data }) {
    return (
        <div className="list">
            {data.map((item) => {
                return (
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
                );
            })}
        </div>
    );
}

export default List;
