import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 100px;
  height: 450px;
`
export const ArtistName = styled.h1`
  font-size: 42px;
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
`
export const ArtistInfo = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: white;
  font-family: 'Roboto';
`
export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`
export const PlayListHeading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  font-family: 'Roboto';
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsText = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 32px;
  color: white;
`
