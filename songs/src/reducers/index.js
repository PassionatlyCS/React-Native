import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {
            title: 'Addat',
            duration: '4.05'
        },
        {
            title: 'Lamha',
            duration: '3.15'
        },
        {
            title: 'Larho Mujhay',
            duration: '6.15'
        },
        {
            title: '4 minutes to save the world',
            duration: '4.00'
        }

    ]

}

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

})