import React, {Component} from 'react';
import {connect} from "react-redux";
import {getArtists} from "../../store/actions/actionsArtists";
import {Card, CardImg, CardText, CardTitle} from "reactstrap";
import {NavLink} from "react-router-dom";
import './MainPage.css'
class MainPage extends Component {
    componentDidMount() {
        this.props.getArtists()
    }
    render() {
        return (
            <>
                <h1 style={{margin: '20px'}}>Artist</h1>
                <div className="artist">
                    {this.props.artists && this.props.artists.map(artist => {
                        return <Card key={artist._id}>
                            <CardTitle>{artist.name}</CardTitle>
                            <div style={{width: '200px', height: '200px'}}>
                                {artist.image !== "null"
                                    ? <CardImg
                                        style={{width: "100%", height: "100%"}}
                                        src={'http://localhost:8000/uploads/' + artist.image}
                                        alt="Card image cap"
                                    /> : null}
                            </div>
                            <CardText>
                                <NavLink
                                    className="m-2 sm-3 wrap-img" exact to={'/albums/' + artist._id}>
                                    Read more
                                </NavLink>
                            </CardText>

                        </Card>

                    })}
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        artists: state.artists.artists,
        user: state.users.user,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getArtists: (data) => dispatch(getArtists(data)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);