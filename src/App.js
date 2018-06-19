import React, { Component } from 'react';
import NavBar from './nav/NavBar'
import './App.css';
import PlatformManager from './methods/PlatformManager';
import ViewManager from './methods/ViewManager';
import UserManager from './methods/UserManager';
import GameManager from './methods/GameManager';
import { Provider, Context } from './Provider';

/* 
    module to handle top level data management and view displaying of the app
    authors Riley Mathews
*/
class App extends Component {
    // define initial state of application
    state = {
        // information to drive view and functionality of app
        // currentView: "profile",
        // activeUser: sessionStorage.getItem("userId"),
        // userId: null,
        // userFirstName: "",
        // userLastName: "",
        // userGamertag: "",
        // userGamesIds: [],
        // userGamesStats: [],
        // userGames: [],
        // userPlatforms: [],
        // userPlatformsIds: [],
        // allPlatforms: [],
        // userUnownedPlatforms: []
    }

    /* 
        View manager functions
    */
    setView = ViewManager.setView.bind(this)
    showView = ViewManager.showView.bind(this)

    /* 
        user manager functions
    */
    getUserInformation = UserManager.getUserInformation.bind(this)
    setActiveUser = UserManager.setActiveUser.bind(this)
    clearActiveUser = UserManager.clearActiveUser.bind(this)

    /* 
        platform manager functions
    */
    getPlatforms = PlatformManager.getPlatforms.bind(this)
    addPlatform = PlatformManager.addPlatform.bind(this)
    removePlatform = PlatformManager.removePlatform.bind(this)

    /* 
        game manager functions
    */
    changeGameProgress = GameManager.changeGameProgress.bind(this)
    addGameToCollection = GameManager.addGameToCollection.bind(this)
    removeGameFromCollection = GameManager.removeGameFromCollection.bind(this)
    toggleGameFavorite = GameManager.toggleGameFavorite.bind(this)

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Provider>
                    <Context.Consumer>
                        {context => (
                            <div>
                                <NavBar setView={context.setView}
                                    setSearchType={context.setSearchType}
                                    setSearchValue={context.setSearchValue}
                                    searchDisplay={context.state.searchDisplay}
                                    deleteActiveUser={context.deleteActiveUser}
                                    activeUser={context.state.activeUser}
                                    setActiveUser={context.setActiveUser}
                                    gamertag={context.state.userGamertag}
                                    currentView={context.state.currentView}
                                />
                                {context.showView()}
                            </div>
                        )}
                    </Context.Consumer>
                </Provider>
            </div>
        )
    }
}

export default App;