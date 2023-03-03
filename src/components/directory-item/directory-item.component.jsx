// import { Link } from 'react-router-dom';
import {
    DirectoryItemContainer,
    DirectoryItemBody,
    LinkDiv,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category: { title, imageUrl } }) => {
    return (
        <DirectoryItemContainer>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <DirectoryItemBody>
                <LinkDiv to={`shop/${title}`}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </LinkDiv>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
