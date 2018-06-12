import React, { Component } from 'react'
import { Media, MediaLeft, Image, MediaContent, Level, LevelLeft, Content, LevelRight, Button, Select } from 'bloomer';
import './Game.css'
import GenreList from '../genres/GenreList';
import $ from 'jquery'



class Game extends Component {

    state = {
        userGameId: "",
        progress: "",
        isFavorited: false,
    }
    

    editGame = function (event) {
        const gameId = event.target.id.split("__")[3]
        const editField = $(`#game__change__progress__container__${gameId}`)
        editField.toggle()
    }


    getGameProgress = function () {
        const thisGamesStats = this.props.userGamesStats.find(game => game.gbId === this.props.game.id)
        return <p>Status: {thisGamesStats.progress}</p>
    }.bind(this)

    getGameUserId = function () {
        const thisGamesStats = this.props.userGamesStats.find(game => game.gbId === this.props.game.id)
        return thisGamesStats.id
    }.bind(this)



    gameOwned = function (owned) {
        if (owned) {
            return "owned"
        } else {
            return "not owned"
        }
    }

    removeGameById = function () {
        this.props.removeGame(this.props.game.id)
    }.bind(this)


    render() {
        return (
            <Media>
                <MediaLeft>
                    <Image src={this.props.game.image.icon_url} />
                </MediaLeft>
                <MediaContent>
                    <Content>
                        <p>
                            <strong>{this.props.game.name}</strong>
                            <br />
                            {this.props.game.deck}
                        </p>
                    </Content>

                    <Level>
                        <LevelLeft>
                            <GenreList genres={this.props.game.genres}/>
                        </LevelLeft>
                        <LevelRight>
                            {this.getGameProgress()}
                            <div id={"game__change__progress__container__" + this.getGameUserId()} style={{display: 'none'}}>
                                <Select id={"game__change__progress__"+this.getGameUserId()} className="game__change__progress" isSize="small" isColor="primary" onChange={this.props.changeGameProgress} defaultValue="default">
                                    <option disabled="true" value="default">Select a Status</option>
                                    <option value="Backlog">Backlog</option>
                                    <option value="To Be Played">To Be Played</option>
                                    <option value="Playing">Playing</option>
                                    <option value="Finished">Finished</option>
                                </Select>
                            </div>
                            <i className="material-icons" id={"game__edit__progress__" + this.getGameUserId()} onClick={this.editGame}>edit</i>,
                            <p>Favorite: {this.state.isFavorited}</p>
                            <Button onClick={this.removeGameById}>Remove Game</Button>
                            
                            <Button disabled="true">Favorite Game</Button>
                        </LevelRight>
                    </Level>
                </MediaContent>
            </Media>
        )
    }
}

export default Game
