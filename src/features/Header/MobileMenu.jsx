import "./Header.css";
import { useSelector, useDispatch } from 'react-redux';
import SubredditItem from '../../components/Subreddits/SubredditItem';
import { menuClick } from '../../store/actions/actions';

export const MobileMenu = (props) => {

    const subreddits = useSelector(state => state.getSubredditTitles)
    const clicked = useSelector(state => state.menuClicked)
    const dispatch = useDispatch();

    return (
        <ul className={props.click ? "nav-menu active" : "nav-menu"}>
            {subreddits.map((sub, index) => {
                        const configSubreddit = {
                            subredditTitle: sub.data.display_name_prefixed,
                            url: sub.data.url
                        };

                        return (
                            <li className="nav-item" onClick={() => dispatch(menuClick(clicked))}>
                                <div className="nav-links" >
                                    <SubredditItem key={index}   {...configSubreddit} />
                                </div>
                            </li>
                            
                        );
                    })
                }
        </ul>
    )
}

